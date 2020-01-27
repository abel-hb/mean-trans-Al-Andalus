const Transport = require('../models/transport');

const transportCtrl = {};

transportCtrl.getTransports = async (req,res) => {
    const transports = await Transport.find();
    res.json(transports);
}

transportCtrl.getTransport =async (req, res) => {
    try {   
        const transport = await Transport.findById(req,params.id);
        res.json(transport);
    }catch (error){
        res.json({status: 'Transport not found'});
    }

}
/*
 
    */
transportCtrl.createTransport = async (req, res) => {
    try {
        const transport = new Transport({
            number: req.body.number,
            brand: req.body.brand,
            model: req.body.model,
            enrollment: req.body.enrollment,
            tlf: req.body.tlf,
            start_date: req.body.start_date,
            end_date: req.body.end_date,
            price: req.body.price
        });
        await transport.save();
        res.json({
            'status': 'Transport saved'
        });
    }  catch (error){
        res.json({status: 'Transport not saved',error:error});
    }  
    

}

transportCtrl.editTransport = async (req, res) =>{
    try {
        const { id } = req.params;
        const transport = {
            number: req.body.number,
            brand: req.body.brand,
            model: req.body.model,
            enrollment: req.body.enrollment,
            tlf: req.body.tlf,
            start_date: req.body.start_date,
            end_date: req.body.end_date,
            price: req.body.price,
        }
        await Transport.findByIdAndUpdate(id, {$set:transport}, {new: true});
        res.json({status:'Transport Update.'})
    }   catch (error){
        res.json({status: 'Transport not Updated.'});
    } 
}

transportCtrl.deleteTransport = async (req, res) =>{
    try {
        await Transport.findByIdAndDelete(req.params.id);
        res.json({status:'Transport Deleted'})
    }catch (error) {
        res.json({status: 'Transport not Deleted'});
    }

}


module.exports = transportCtrl;