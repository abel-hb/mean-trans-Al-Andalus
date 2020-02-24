const express = require('express');
const router = express.Router();
const AplicationCtrl = require('../controllers/aplication.controllers');
const md_auth = require('../middleware/authenticated');


router.get('/',md_auth.ensureAuth, AplicationCtrl.getAplications);
router.post('/',md_auth.ensureAuth, AplicationCtrl.createAplication);
router.get('/:id',md_auth.ensureAuth, AplicationCtrl.getAplication);
router.put('/:id',md_auth.ensureAuth, AplicationCtrl.editAplication);
router.delete('/:id',md_auth.ensureAuth, AplicationCtrl.deleteAplication);


  module.exports = router;