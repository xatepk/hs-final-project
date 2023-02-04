const express = require('express');
const controlles = require('../controllers/apartments.js');
const router = express.Router();
const authRouter = require('../middlewares/auth');
const { getApartments, saveApartments, deleteApartments, createApartment, getCities, deleteCities, getApartmentsByCity, getApartmentById } = controlles;

router.get('/apartments', getApartments);
router.get('/apartments/:city', getApartmentsByCity);
router.get('/cities', getCities);
router.post('/apartments', createApartment);
router.delete('/apartments', deleteApartments);
router.delete('/cities', deleteCities);
router.patch('/apartments/:apartmentsId/likes', authRouter, saveApartments);
router.get('/apartments/:_id/likes', getApartmentById)


module.exports = router;