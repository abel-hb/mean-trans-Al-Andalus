const User = require('../models/users');

const usersCtrl = {};

usersCtrl.getUsers = async (req, res) => {
   const users = await User.find();
   res.json(users);
}

usersCtrl.getUser = async (req, res) => {
    try {   
        const user = await User.findById(req,params.id);
        res.json(user);
    }catch (error){
        res.json({status: 'User not found'});
    }
}

usersCtrl.createUser = async (req, res) => {
try {
    const user = new User({
        name: req.body.name,
        surname: req.body.surname,
        dni: req.body.dni,
        email: req.body.email,
        tlf: req.body.tlf,
        transport: req.body.transport,
        discharge_date: req.body.discharge_date,
    });
    await user.save();
    res.json({
        'status': 'User saved'
    });
}  catch (error){
    res.json({status: 'User not saved'});
}  

};

usersCtrl.editUser = async (req, res) =>{
try {
    const { id } = req.params;
    const user = {
        name: req.body.name,
        surname: req.body.surname,
        dni: req.body.dni,
        email: req.body.email,
        tlf: req.body.tlf,
        transport: req.body.transport,
        discharge_date: req.body.discharge_date,
    }
    await User.findByIdAndUpdate(id, {$set:user}, {new: true});
    res.json({status:'User Update.'})
}   catch (error){
    res.json({status: 'User not Updated.'});
} 
    
};

usersCtrl.deleteUser = async (req, res) =>{
try {
    await User.findByIdAndDelete(req.params.id);
    res.json({status:'User Deleted'})
}catch (error) {
    res.json({status: 'User not Deleted'});
}
    
};


module.exports = usersCtrl;