// Import the resources
const User = require('../models/users');
const bcrypt = require('bcrypt-nodejs');
const jwtServices = require('../services/jwt.services');
const usersCtrl = {};

// Methods of the controllers
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

usersCtrl.saveUser = (req, res) =>{
    const user  =new User();
    var params = req.body;

    user.name = params.name;
    user.surname = params.surname;
    user.dni = params.dni;
    user.email = params.email;
    user.tlf = params.tlf;
    user.transport = params.transport;
    user.discharge_date = params.discharge_date;
    user.role = 'ROLE_USER';
    user.image = 'null';
    if (params.password){
        bcrypt.hash(params.password,null,null,(err,hash) => {
            user.password = hash;
            if (user.name != null && user.surname != null && user.email != null){
                //Save new user
                user.save()
                    .then(user => {
                        res.status(200).send({user:user});
                    })
                    .catch(err => {
                        res.status(500).send({error:err});
                    });
            }else{
                res.status(200).send({message: 'Fill out form.'});
            }
        });
    }else{
        res.status(200).send({message: 'Enter the pass'});
    }
};


usersCtrl.loginUser = (req, res) => {
    var params = req.body;
    var email = params.email;
    var password = params.password;

    User.findOne({email:email.toLowerCase()}, (err, user) => {
        if(err){
            res.status(500).send({message: 'Error to server'});
        }else{
            if(!user){
                res.status(404).send({message: 'User not found.'});
            }else{
                bcrypt.compare(password,user.password, (err, check) => {
                    if(check){
                        if(params.gethash){
                            // Here return user token crypt
                            res.status(200).send({token: jwtServices.createToken(user)});
                        }else{
                            res.status(200).send({user});
                        }
                    }else{
                        res.status(404).send({message: 'User not login.'});
                    }
                });
            }
        }
    });
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