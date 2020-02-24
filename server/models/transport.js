const mongoose = require('mongoose');
const { Schema } = mongoose;

// We created the schema
const TransportSchema = new Schema ({
    number: {type: Number, required: true},
    brand: {type: String, required: true},
    model: {type: String, required: true},
    enrollment: {type: String, required: true},
    start_date: {type: String, required: true},
    end_date: {type: String, required: true},
    price: {type: String, required: true}
});

module.exports = mongoose.model('Transport', TransportSchema);