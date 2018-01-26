const program = require('commander');
const { prompt } = require('inquirer');

const mongoose = require('mongoose');
const db = mongoose.connection;

const {
    findAddress,
    listAddresses,
    dumpDB,
    generateWalletAddresses,
} = require('./index');

const {
  generateAddress,
  generatePrivateKey,
  generateSeedFromMnemonic,
  generateFakeMnemonic
} = require('./bitcoin/address');


// Address questions
const questions = [
  {
    type: 'input',
    name: 'codename',
    message: 'Address code name'
  }
];

const importQuestions = [
  {
    type: 'input',
    name: 'mnemonic',
    message: 'Enter mnemonic phrase'
  }
]

program
  .version('1.0.0')
  .description('Bitcoin Utility System')

// will create a new mnemonic with fake seed
program
  .command('new')
  .alias('n')
  .description('create a new mnemonic wallet')
  .action(() => {
    generateFakeMnemonic();
  })

// enter existing mnemonic phrase
program
  .command('import')
  .alias('i')
  .description('import an existing wallet mnemonic phrase')
  .action(() => {
    prompt(importQuestions).then((answer) => {
      let mnemonic = answer.mnemonic.toString();
      generateWalletAddresses(mnemonic);
    });
  })



// find command
program
  .command('find <codename>')
  .alias('f')
  .description('find an address by codename')
  .action(codename => findAddress(codename));


// List command
program
  .command('list')
  .alias('l')
  .description('List all addresses')
  .action(() => listAddresses());


// deletes entire DB of wallet info
program
  .command('drop')
  .alias('dt')
  .description('delete the entire database')
  .action(() => dumpDB())





  program.parse(process.argv);