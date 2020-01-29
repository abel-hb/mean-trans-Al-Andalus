const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsersSchema = new Schema ({
    name: {type: String, required: true},
    surname: {type: String, required: true},
    dni: {type: String, required: true},
    email: {type: String, required: true},
    tlf: {type: Number, required: true},
    transport: {type: String, required: true},
    discharge_date: {type: String, required: true}
});

module.exports = mongoose.model('Users', UsersSchema);