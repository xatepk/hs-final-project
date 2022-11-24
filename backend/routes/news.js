const express = require('express');
const controlles = require('../controllers/news.js');
const router = express.Router();
const { getNews, postNews, deleteNews, getNewsById } = controlles;

router.get('/news', getNews);
router.post('/news', postNews);
router.delete('/news', deleteNews);
router.get('/news/:_id', getNewsById);


module.exports = router;