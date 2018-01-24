const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
    address: { type: String },
    codename: { type: String }
});

module.exports = mongoose.model('Address', addressSchema);