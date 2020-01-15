const express = require('express');
const router = express.Router();
const UsersCtrl = require('../controllers/users.controllers');


router.get('/', UsersCtrl.getUsers);
router.post('/', UsersCtrl.createUser);
router.get('/', UsersCtrl.getUser);
router.put('/', UsersCtrl.editUser);
router.delete('/', UsersCtrl.deleteUser);


  module.exports = router;