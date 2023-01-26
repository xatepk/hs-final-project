const { NotFound } = require('../errors');
const Apartments = require('../models/apartments');
const City = require('../models/city');

module.exports.getApartments = (req, res, next) => {
  Apartments.find({})
    .orFail(() => {
      throw new NotFound('Квартиры не найдены');
    })
    .then((apartments) => res.status(200).send(apartments))
    .catch(next);
};

module.exports.getCities = (req, res, next) => {
  City.find({})
    .orFail(() => {
      throw new NotFound('Города не найдены');
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

module.exports.deleteCities = (req, res, next) => City.deleteMany({})
  .orFail(new NotFound('Города не найдены'))
  .then(() => res.status(200).send({ message: 'Города удалены!' })
  )
  .catch((next));

module.exports.createApartment = (req, res, next) => {
  const { imageUrls, underground, area, location, city, price, likes, rooms, description } = req.body;
  Apartments.create({ imageUrls, underground, area, location, city, price, likes, rooms, description })
    .then((apartment) => {
      if (!apartment) {
        throw new NotFound('Карточки не найдены');
      }
      res.status(200).send(apartment);
    })
    .catch(next);

  City.findOneOrCreate({ city: city }, (err, page) => {
    // ... code
    console.log(page)
  })
};
