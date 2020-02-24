const express = require('express');
const router = express.Router();
const UsersCtrl = require('../controllers/users.controllers');
const md_auth = require('../middleware/authenticated');

router.get('/', UsersCtrl.getUsers);
router.post('/', UsersCtrl.createUser);
router.post('/register', UsersCtrl.saveUser);
router.post('/login', UsersCtrl.loginUser);
router.get('/:id',md_auth.ensureAuth, UsersCtrl.getUser);
router.put('/:id',md_auth.ensureAuth, UsersCtrl.editUser);
router.delete('/:id',md_auth.ensureAuth, UsersCtrl.deleteUser);


  module.exports = router;