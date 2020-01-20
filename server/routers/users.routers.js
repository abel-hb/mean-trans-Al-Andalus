const express = require('express');
const router = express.Router();
const UsersCtrl = require('../controllers/users.controllers');


router.get('/', UsersCtrl.getUsers);
router.post('/', UsersCtrl.createUser);
router.get('/:id', UsersCtrl.getUser);
router.put('/:id', UsersCtrl.editUser);
router.delete('/:id', UsersCtrl.deleteUser);


  module.exports = router;