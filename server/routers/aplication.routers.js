const express = require('express');
const router = express.Router();
const PlacesCtrl = require('../controllers/aplication.controllers');


router.get('/', PlacesCtrl.getAplications);
router.post('/', PlacesCtrl.createAplication);
router.get('/', PlacesCtrl.getAplication);
router.put('/', PlacesCtrl.editAplication);
router.delete('/', PlacesCtrl.deleteAplication);


  module.exports = router;