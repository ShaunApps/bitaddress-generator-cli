const bitcoin = require('bitcoinjs-lib')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bitscriptcli');

const db = mongoose.connection;

const Address = require('./models/address');

// create address in db
const addAddress = (address) => {
    Address.create(address).then(address => {
        console.info("New address added");
        db.close();
    });
}

const findAddress = (codename) => {
    const search = new RegExp(codename, 'i');
    Address.find({$or: [{codename: search}]})
      .then(address => {
          console.info(address);
          console.info(`${address.length} matches`);
          db.close();
      });
}


const generateAddress = () => {
    let keyPair = bitcoin.ECPair.makeRandom()
    let address = keyPair.getAddress()
    console.log(address);
    return address;
}

module.exports = {
    generateAddress,
    addAddress,
    findAddress
}
