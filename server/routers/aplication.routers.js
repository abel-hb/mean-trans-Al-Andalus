const express = require('express');
const router2 = express.Router();
const PlacesCtrl = require('../controllers/aplication.controllers');


router2.get('/', PlacesCtrl.getAplications);
router2.post('/', PlacesCtrl.createAplication);
router2.get('/:id', PlacesCtrl.getAplication);
router2.put('/:id', PlacesCtrl.editAplication);
router2.delete('/:id', PlacesCtrl.deleteAplication);


  module.exports = router2;