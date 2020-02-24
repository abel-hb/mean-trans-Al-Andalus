const mongoose = require('mongoose');
const { Schema } = mongoose;

// We created the schema
const PlacesSchema = new Schema ({
    name: {type: String, required: true},
    type: {type: String, required: true},
    stop: {type: String, required: true},
    number: {type: Number, required: true},
    distance: {type: String, required: true}
});

module.exports = mongoose.model('Places', PlacesSchema);