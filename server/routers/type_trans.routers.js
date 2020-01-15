const express = require('express');
const router = express.Router();
const typeTransCtrl = require('../controllers/type_trans.controllers');


router.get('/', typeTransCtrl.gettypeTrans);
router.post('/', typeTransCtrl.gettypeTran);
router.get('/', typeTransCtrl.createtypeTran);
router.put('/', typeTransCtrl.edittypeTran);
router.delete('/', typeTransCtrl.deletetypeTran);

  module.exports = router;