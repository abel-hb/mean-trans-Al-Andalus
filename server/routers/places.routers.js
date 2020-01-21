const express = require('express');
const router = express.Router();
const PlacesCtrl = require('../controllers/places.controllers');


router.get('/', PlacesCtrl.getPlaces);
router.post('/', PlacesCtrl.createPlace);
router.get('/:id', PlacesCtrl.getPlace);
router.put('/:id', PlacesCtrl.editPlace);
router.delete('/:id', PlacesCtrl.deletePlace);


  module.exports = router;