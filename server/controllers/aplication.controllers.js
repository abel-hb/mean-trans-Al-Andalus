const Aplication = require('../models/aplication');

const aplicationCtrl = {};

// Methods of the controllers
aplicationCtrl.getAplications = async (req,res) => {
    const aplication = await Aplication.find();
    res.json(aplication);
}

aplicationCtrl.getAplication = async (req, res) => {
    try {   
        const aplication = await Aplication.findById(req,params.id);
        res.json(aplication);
    }catch (error){
        res.json({status: 'Aplications not found'});
    }

}

aplicationCtrl.createAplication = async (req, res) => {
    try {
        const aplication = new Aplication({
            name: req.body.name,
            route: req.body.route,
            transport: req.body.transport,
            travel_time: req.body.travel_time,
            start_date: req.body.start_date,
            end_date: req.body.end_date,
            price: req.body.price,
        });
        await aplication.save();
        res.json({
            'status': 'Aplication saved'
        });
    }  catch (error){
        res.json({status: 'Aplication not saved'});
    }

}

aplicationCtrl.editAplication = async (req, res) =>{
    try {
        const { id } = req.params;
        const aplication = {
            name: req.body.name,
            route: req.body.route,
            transport: req.body.transport,
            travel_time: req.body.travel_time,
            start_date: req.body.start_date,
            end_date: req.body.end_date,
            price: req.body.price,
        }
        await Aplication.findByIdAndUpdate(id, {$set:aplication}, {new: true});
        res.json({status:'Aplication Update.'})
    }   catch (error){
        res.json({status: 'Aplication not Updated.'});
    } 

}

aplicationCtrl.deleteAplication = async (req, res) =>{
    try {
        await Aplication.findByIdAndDelete(req.params.id);
        res.json({status:'Aplication Deleted'})
    }catch (error) {
        res.json({status: 'Aplication not Deleted'});
    }

}


module.exports = aplicationCtrl;
