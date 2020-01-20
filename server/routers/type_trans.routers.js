const express = require('express');
const router = express.Router();
const typeTransCtrl = require('../controllers/type_trans.controllers');


router.get('/', typeTransCtrl.gettypeTrans);
router.post('/', typeTransCtrl.gettypeTran);
router.get('/:id', typeTransCtrl.createtypeTran);
router.put('/:id', typeTransCtrl.edittypeTran);
router.delete('/:id', typeTransCtrl.deletetypeTran);

  module.exports = router;