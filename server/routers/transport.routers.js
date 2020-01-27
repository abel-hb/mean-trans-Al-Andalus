const express = require('express');
const router = express.Router();
const transportCtrl = require('../controllers/transport.controllers');


router.get('/', transportCtrl.getTransports);
router.post('/', transportCtrl.createTransport);
router.get('/:id', transportCtrl.getTransport);
router.put('/:id', transportCtrl.editTransport);
router.delete('/:id', transportCtrl.deleteTransport);


  module.exports = router;
