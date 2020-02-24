const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsersSchema = new Schema ({
    name: {type: String, required: true},
    surname: {type: String, required: true},
    dni: {type: String, required: true},
    role: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    tlf: {type: String, required: true},
    transport: {type: String},
    image: {type: String},
    discharge_date: {type: String, required: true}
});

module.exports = mongoose.model('Users', UsersSchema);