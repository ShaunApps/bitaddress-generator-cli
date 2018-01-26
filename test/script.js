// this is just a script playground for me to try stuff

const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');

// const mnemonic = bip39.generateMnemonic();
const mnemonic = 'praise you muffin lion enable neck grocery crumble super myself license ghost';
const seed = bip39.mnemonicToSeed(mnemonic);


const generateAddressesFromMnemonic = (mnemonic) => {
    const seed = bip39.mnemonicToSeed(mnemonic);
    const root = bitcoin.HDNode.fromSeedBuffer(seed);
    const parentReceive = root.deriveHardened(0).derive(0);
    const parentChange = root.deriveHardened(0).derive(1);

    // generate addresses for Recieve addresses

    // generate addresses for Change addresses

}


const createNewMnemonicWallet = () => {
    const mnemonic = 'praise you muffin lion enable neck grocery crumble super myself license ghost';
    console.log("Below is a pre-generated mnemonic phrase for testing/demonstration purposes");
    console.log("DO NOT use for actual funds under any circumstance");
    console.log("Write down mnemonic phrase: praise you muffin lion enable neck grocery crumble super myself license ghost");
    const seed = bip39.mnemonicToSeed(mnemonic);
    const root = bitcoin.HDNode.fromSeedBuffer(seed);
    console.log(typeof root);
}

const root = bitcoin.HDNode.fromSeedBuffer(seed)

const address1 = root.derivePath("m/0'/0/0").getAddress();

const child = root.deriveHardened(0).derive(0);

const genGreatGChildrenAddresses = (parent) => {
    for (let i = 0; i < 50; i++) {
        let address = parent.derive(i);
        addresses.push(address.getAddress());
    }
    return addresses;
}

// console.log(genGreatGChildrenAddresses(child, 50));
createNewMnemonicWallet();
