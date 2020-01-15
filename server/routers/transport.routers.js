const express = require('express');
const router = express.Router();
const transportCtrl = require('../controllers/transport.controllers');


router.get('/', transportCtrl.getTransports);
router.post('/', transportCtrl.getTransport);
router.get('/', transportCtrl.createTransport);
router.put('/', transportCtrl.editTransport);
router.delete('/', transportCtrl.deleteTransport);


  module.exports = router;
