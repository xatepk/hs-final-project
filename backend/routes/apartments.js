const express = require('express');
const controlles = require('../controllers/apartments.js');
const router = express.Router();
const authRouter = require('../middlewares/auth');
const { getApartments, saveApartments, deleteApartments, createApartment, getCities, deleteCities, getApartmentsByCity, getApartmentById, getSavedApartments, getRooms, deleteRooms } = controlles;

router.get('/apartments', getApartments);
router.get('/apartments/:city', getApartmentsByCity);
router.get('/cities', getCities);
router.get('/rooms', getRooms);
router.post('/apartments', createApartment);
router.delete('/apartments', deleteApartments);
router.delete('/cities', deleteCities);
router.delete('/rooms', deleteRooms);
router.patch('/apartments/:apartmentsId/likes', authRouter, saveApartments);
router.get('/saved', authRouter, getSavedApartments)
router.get('/apartments/:_id/likes', getApartmentById)


module.exports = router;