const mongoose = require('mongoose');
const URI = "mongodb://localhost/mean-crud-trans-Al-Andalus";


mongoose.connect(URI)
    .then(db => console.log('DB is connect'))
    .catch(err => console.log(err));

module.exports = mongoose;