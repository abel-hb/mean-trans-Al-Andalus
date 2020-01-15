const User = require('../models/users');

const usersCtrl = {};

usersCtrl.getUsers = async (req,res) => {
   const users = await User.find();
   res.json(users);
}

usersCtrl.getUser = function (){

}

usersCtrl.createUser = async (req,res) => {
    const user = new User(req.body);
    await user.save();
    res.json({
        'status': 'User saved'
    });
};

usersCtrl.editUser = function (){

}

usersCtrl.deleteUser = function (){

}


module.exports = usersCtrl;