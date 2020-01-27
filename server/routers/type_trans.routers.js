const express = require('express');
const router = express.Router();
const typeTransCtrl = require('../controllers/type_trans.controllers');


router.get('/', typeTransCtrl.gettypeTrans);
router.post('/', typeTransCtrl.createtypeTran);
router.get('/:id', typeTransCtrl.gettypeTran);
router.put('/:id', typeTransCtrl.edittypeTran);
router.delete('/:id', typeTransCtrl.deletetypeTran);

  module.exports = router;