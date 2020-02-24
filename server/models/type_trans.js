const mongoose = require('mongoose');
const { Schema } = mongoose;

// We created the schema
const Type_TransSchema = new Schema ({
    number: {type: Number, required: true},
    name: {type: String, required: true},
    route: {type: String, required: true},
    price: {type: String, required: true}
});

module.exports = mongoose.model('Type_Trans', Type_TransSchema);