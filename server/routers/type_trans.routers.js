const express = require('express');
const router = express.Router();
const typeTransCtrl = require('../controllers/type_trans.controllers');
const md_auth = require('../middleware/authenticated');


router.get('/', typeTransCtrl.gettypeTrans);
router.post('/',md_auth.ensureAuth, typeTransCtrl.createtypeTran);
router.get('/:id',md_auth.ensureAuth, typeTransCtrl.gettypeTran);
router.put('/:id',md_auth.ensureAuth, typeTransCtrl.edittypeTran);
router.delete('/:id',md_auth.ensureAuth, typeTransCtrl.deletetypeTran);

  module.exports = router;