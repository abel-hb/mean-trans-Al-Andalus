const mongoose = require('mongoose');
const { Schema } = mongoose;

 // We created the schema
const AplicationSchema = new Schema ({
    name: {type: String, required: true},
    route: {type: String, required: true},
    transport: {type: String, required: true},
    travel_time: {type: String, required: true},
    start_date: {type: String, required: true},
    end_date: {type: String, required: true},
    price: {type: String, required: true}
});

module.exports = mongoose.model('Aplication', AplicationSchema);