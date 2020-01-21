const User = require('../models/users');

const usersCtrl = {};

usersCtrl.getUsers = async (req, res) => {
   const users = await User.find();
   res.json(users);
}

usersCtrl.getUser = async (req, res) => {
    const user = await User.findById(req,params.id);
    res.json(user);
}

usersCtrl.createUser = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json({
        'status': 'User saved'
    });
};

usersCtrl.editUser = async (req, res) =>{
    const { id } = req.params;
    const user = {
        name = req.body.name,
        surname = req.body.surname,
        dni = req.body.dni,
        email = req.body.email,
        tlf = req.body.tlf,
        transport = req.body.transport,
        discharge_date = req.body.discharge_date,
    }
    await User.findByIdAndUpdate(id, {$set:user}, {new: true});
    res.json({status:'User Update'})
};

usersCtrl.deleteUser = async (req, res) =>{
    await User.findByIdAndDelete(req.params.id);
    res.json({status:'User Deleted'})
};


module.exports = usersCtrl;