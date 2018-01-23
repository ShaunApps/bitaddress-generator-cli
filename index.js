const bitcoin = require('bitcoinjs-lib')

const makeAddress = () => {
    let keyPair = bitcoin.ECPair.makeRandom()
    let address = keyPair.getAddress()
    console.log(address)
    return address;
}

module.exports = {
    makeAddress
}