const typeTrans = require('../models/type_trans');

const typeTransCtrl = {};

// Methods of the controllers
typeTransCtrl.gettypeTrans = async (req,res) => {
    const type = await typeTrans.find();
    res.json(type);
}

typeTransCtrl.gettypeTran = async (req, res) => {
    try {   
        const type = await typeTrans.findById(req,params.id);
        res.json(type);
    }catch (error){
        res.json({status: 'Type Trans not found'});
    }

}

typeTransCtrl.createtypeTran = async (req, res) => {
    try {
        const type = new typeTrans({
            number: req.body.number,
            name: req.body.name,
            route: req.body.route,
            price: req.body.price
        });
        await type.save();
        res.json({
            'status': 'Type saved'
        });
    }  catch (error){
        res.json({status: 'Type not saved'});
    } 

}

typeTransCtrl.edittypeTran = async (req, res) =>{
    try {
        const { id } = req.params;
        const type = {
            number: req.body.number,
            name: req.body.name,
            route: req.body.route,
            price: req.body.price,
        }
        await typeTrans.findByIdAndUpdate(id, {$set:type}, {new: true});
        res.json({status:'Type Update.'})
    }   catch (error){
        res.json({status: 'Type not Updated.'});
    } 
        

}

typeTransCtrl.deletetypeTran = async (req, res) =>{
    try {
        await typeTrans.findByIdAndDelete(req.params.id);
        res.json({status:'Type Deleted'})
    }catch (error) {
        res.json({status: 'Type not Deleted'});
    }

}


module.exports = typeTransCtrl;