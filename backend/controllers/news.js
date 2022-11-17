const News = require('../models/news');
const { NotFound } = require('../errors/index');

const getNews = (req, res, next) => {
  News.find({})
    .then((news) => {
      if (!news.length) {
        throw new NotFound('Новости не найдены');
      }
      res.status(200).send(news)})
    .catch(next);
};

const postNews = (req, res, next) => {
  const { title, description, image, subtitle } = req.body;
  News.create({ title, description, image, subtitle})
    .then((news) => {
      if (!news) {
        throw new NotFound('Новости не найдены');
      }
      res.status(200).send(news);
    })
    .catch(next);
};

const deleteNews = (req, res, next) => News.deleteMany({})
.orFail(new NotFound('Новости не найдены'))
.then(() => res.status(200).send({ message: 'Новости удалены!' })
)
.catch((next));

module.exports = {getNews, postNews, deleteNews};