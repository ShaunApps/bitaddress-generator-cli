const bitcoin = require('bitcoinjs-lib')
const bip39 = require('bip39');


const generateAddress = () => {
    let keyPair = bitcoin.ECPair.makeRandom()
    let address = keyPair.getAddress()
    console.log(`keyPair: ${keyPair}`);
    console.log(`Address: ${address}`);
    const addressPair = { keyPair, address };
    return addressPair;
}

const generatePrivateKey = () => {
  return bitcoin.ECPair.makeRandom().toWIF();
}

const generateSeedFromMnemonic = (mnemonic) => {
  const seed = bip39.mnemonicToSeed(mnemonic);
  return seed;
}

const generateFakeMnemonic = () => {
    console.log("Fake mnemonic: praise you muffin lion enable neck grocery crumble super myself license ghost")
    return;
}


module.exports ={
    generateAddress,
    generatePrivateKey,
    generateSeedFromMnemonic,
    generateFakeMnemonic
}