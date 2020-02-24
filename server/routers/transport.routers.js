const express = require('express');
const router = express.Router();
const transportCtrl = require('../controllers/transport.controllers');
const md_auth = require('../middleware/authenticated');


router.get('/',md_auth.ensureAuth, transportCtrl.getTransports);
router.post('/',md_auth.ensureAuth, transportCtrl.createTransport);
router.get('/:id',md_auth.ensureAuth, transportCtrl.getTransport);
router.put('/:id',md_auth.ensureAuth, transportCtrl.editTransport);
router.delete('/:id',md_auth.ensureAuth, transportCtrl.deleteTransport);


  module.exports = router;
