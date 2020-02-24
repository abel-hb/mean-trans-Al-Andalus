const Places = require('../models/places');

const PlacesCtrl = {};

// Methods of the controllers
PlacesCtrl.getPlaces = async (req,res) => {
    const places = await Places.find();
    res.json(places);
}

PlacesCtrl.getPlace = async (req, res) => {
    try {   
        const place = await Places.findById(req,params.id);
        res.json(place);
    }catch (error){
        res.json({status: 'Places not found'});
    }

}

PlacesCtrl.createPlace = async (req, res) => {
    try {
        const place = new Places({
            name: req.body.name,
            type: req.body.type,
            stop: req.body.stop,
            number: req.body.number,
            distance: req.body.distance,
        });
        await place.save();
        res.json({
            'status': 'Place saved'
        });
    }  catch (error){
        res.json({status: 'Place not saved'});
    }  

}

PlacesCtrl.editPlace =  async (req, res) =>{
    try {
        const { id } = req.params;
        const place = {
            name: req.body.name,
            type: req.body.type,
            stop: req.body.stop,
            number: req.body.number,
            distance: req.body.distance,
        }
        await Places.findByIdAndUpdate(id, {$set:place}, {new: true});
        res.json({status:'Place Update.'})
    }   catch (error){
        res.json({status: 'Place not Updated.'});
    } 

}

PlacesCtrl.deletePlace = async (req, res) =>{
    try {
        await Places.findByIdAndDelete(req.params.id);
        res.json({status:'Places Deleted'})
    }catch (error) {
        res.json({status: 'Places not Deleted'});
    }

}


module.exports = PlacesCtrl;