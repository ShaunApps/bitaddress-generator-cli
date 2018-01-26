const mongoose = require('mongoose');




// TODO
// two Models: one for storage of seed, 
// second part of first and belongsTo seed.

const Schema = mongoose.Schema;

const seedSchema = mongoose.Schema({
    _id: Schema.Types.ObjectId,
    seed: { type: Buffer },
    addresses: [{ type: Schema.Types.ObjectId, ref: 'Address' }]
});

const addressSchema = mongoose.Schema({
    parentSeed: { type: Schema.Types.ObjectId, ref: 'Seed' },
    address: { type: String },
    use: { type: String }
});

const Address = mongoose.model('Address', addressSchema);
const Seed = mongoose.model('Seed', seedSchema);

module.exports = {
    Seed,
    Address
}