const express = require('express');
const router = express.Router();
const transportCtrl = require('../controllers/transport.controllers');


router.get('/', transportCtrl.getTransports);
router.post('/', transportCtrl.getTransport);
router.get('/:id', transportCtrl.createTransport);
router.put('/:id', transportCtrl.editTransport);
router.delete('/:id', transportCtrl.deleteTransport);


  module.exports = router;
