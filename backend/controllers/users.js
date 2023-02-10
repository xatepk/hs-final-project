const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_TTL } = require('../config/index');
const User = require('../models/user');
const { NotFound, Conflict, Unautorized } = require('../errors/index');

module.exports.getUsers = (req, res, next) => {
  User.find({})
    .orFail(() => {
      throw new NotFound('Нет пользователей в базе');
    })
    .then((users) => res.status(200).send(users))
    .catch(next);
};

module.exports.login = (req, res, next) => {
  const { username, password } = req.body;

  User.findOne({ username }).select('+password')
    .then((user) => {
      if (!user) {
        throw new Unautorized('Неправильные логин или пароль');
      }

      return bcrypt.compare(password, user.password)
        .then((isValid) => {
          if (isValid) {
            return user;
          }
          throw new Unautorized('Неправильные логин или пароль');
        });
    })
    .then((user) => {
      const { _id } = user;
      const token = jwt.sign(
        { _id },
        JWT_SECRET,
        { expiresIn: JWT_TTL },
      );
      res.send({ token, _id });
    })
    .catch(next);
};

module.exports.createUser = (req, res, next) => {
  const { email, password, username } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (user) {
        throw new Conflict('Данный email уже используется');
      }

      return bcrypt.hash(password, 10);
    })
    .then((hash) => User.create({ email, password: hash, username }))
    .then((user) => {
      const { _id } = user;
      const token = jwt.sign(
        { _id },
        JWT_SECRET,
        { expiresIn: JWT_TTL },
      );
      res.send({ token, _id, message: `Пользователь создан` });
      })
    .catch(next);
};

