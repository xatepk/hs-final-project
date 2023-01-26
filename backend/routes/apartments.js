const express = require('express');
const controlles = require('../controllers/apartments.js');
const router = express.Router();
const { getApartments, likeApartments, dislikeApartments, deleteApartments, createApartment, getCities, deleteCities } = controlles;

router.get('/apartments', getApartments);
router.get('/cities', getCities);
router.post('/apartments', createApartment);
router.delete('/apartments', deleteApartments);
router.delete('/cities', deleteCities);
router.put('/apartments/:apartmentsId/likes', likeApartments);
router.delete('/apartments/:apartmentsId/likes', dislikeApartments);


module.exports = router;