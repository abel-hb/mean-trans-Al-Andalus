// Import the resources
const express = require('express');
const router = express.Router();
const PlacesCtrl = require('../controllers/places.controllers');
const md_auth = require('../middleware/authenticated');

// Router
router.get('/',md_auth.ensureAuth, PlacesCtrl.getPlaces);
router.post('/',md_auth.ensureAuth, PlacesCtrl.createPlace);
router.get('/:id',md_auth.ensureAuth, PlacesCtrl.getPlace);
router.put('/:id',md_auth.ensureAuth, PlacesCtrl.editPlace);
router.delete('/:id',md_auth.ensureAuth, PlacesCtrl.deletePlace);


  module.exports = router;