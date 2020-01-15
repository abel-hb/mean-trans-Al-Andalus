const express = require('express');
const PlacesCtrl = require('../controllers/places.controllers');


router.get('/', PlacesCtrl.getPlaces);
router.post('/', PlacesCtrl.createPlace);
router.get('/', PlacesCtrl.getPlace);
router.put('/', PlacesCtrl.editPlace);
router.delete('/', PlacesCtrl.deletePlace);


  module.exports = router;