const bitcoin = require('bitcoinjs-lib')
const mongoose = require('mongoose');

const bip39 = require('bip39');

mongoose.connect('mongodb://localhost:27017/bitscriptcli');

const db = mongoose.connection;

const { Address, Seed } = require('./models/address');
const {
    generatePrivateKey,
    generateSeedFromMnemonic
  } = require('./bitcoin/address');



const generateWalletAddresses = (mnemonic) => {
    const seed = bip39.mnemonicToSeed(mnemonic);
    const root = bitcoin.HDNode.fromSeedBuffer(seed);
    const parentReceive = root.deriveHardened(0).derive(0);
    const parentChange = root.deriveHardened(0).derive(1);

    const savedSeed = new Seed({
        _id: new mongoose.Types.ObjectId(),
        seed: seed
    });

    savedSeed.save((err) => {
        if (err) console.log(err);

        for (let i = 0; i < 50; i++) {
            let address = parentReceive.derive(i).getAddress();
            let saveAddress = new Address({
                address: address,
                parentSeed: savedSeed._id
            });
            saveAddress.save((err) => {
                if (err) console.log(err);
                console.log(`Saved Address: ${saveAddress.address}`)
            })
        };
    })
    
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

const listAddresses = () => {
  Address.find()
    .then(addresses => {
        console.info(addresses);
        console.info(`${addresses.length} addresses`);
        db.close();
    })
}


const dumpDB = () => {
    db.dropDatabase();
    db.close();
}

module.exports = {
    findAddress,
    listAddresses,
    dumpDB,
    generateWalletAddresses
}
