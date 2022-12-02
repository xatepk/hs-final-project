const { NotFound } = require('../errors');
const Apartments = require('../models/apartments');

module.exports.getApartments = (req, res, next) => {
  Apartments.find({})
    .orFail(() => {
      throw new NotFound('Квартиры не найдены');
    })
    .then((apartments) => res.status(200).send(apartments))
    .catch(next);
};

module.exports.likeApartments = (req, res, next) => Apartments.findByIdAndUpdate(
  req.params.apartmentsId,
  { $addToSet: { likes: req.user._id } },
  { new: true },
)
  .orFail(new NotFound('Нет карточки с таким id'))
  .then((apartment) => {
    res.status(200).send(apartment);
  })
  .catch(next);

module.exports.dislikeApartments = (req, res, next) => Apartments.findByIdAndUpdate(
  req.params.apartmentsId,
  { $pull: { likes: req.user._id } },
  { new: true },
)
  .orFail(new NotFound('Нет карточки с таким id'))
  .then((apartment) => {
    res.status(200).send(apartment);
  })
  .catch(next);

module.exports.deleteApartments = (req, res, next) => Apartments.deleteMany({})
.orFail(new NotFound('Карточки не найдены'))
.then(() => res.status(200).send({ message: 'Карточки удалены!' })
)
.catch((next));

module.exports.createApartment = (req, res, next) => {
  const { imageUrls, underground, area, location, price, likes, rooms, description } = req.body;
  Apartments.create({ imageUrls, underground, area, location, price, likes, rooms, description })
    .then((apartment) => {
      if (!apartment) {
        throw new NotFound('Карточки не найдены');
      }
      res.status(200).send(apartment);
    })
    .catch(next);
};
