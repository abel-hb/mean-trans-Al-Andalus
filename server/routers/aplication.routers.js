const express = require('express');
const router = express.Router();
const AplicationCtrl = require('../controllers/aplication.controllers');


router.get('/', AplicationCtrl.getAplications);
router.post('/', AplicationCtrl.createAplication);
router.get('/:id', AplicationCtrl.getAplication);
router.put('/:id', AplicationCtrl.editAplication);
router.delete('/:id', AplicationCtrl.deleteAplication);


  module.exports = router;