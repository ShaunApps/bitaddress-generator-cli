const program = require('commander');
const {
    generateAddress,
    addAddress,
    findAddress
} = require('./index');

program
  .version('1.0.0')
  .description('Bitcoin Utility System')

program
  .command('add <codename>')
  .alias('g')
  .description('generate and save a basic bitcoin address')
  .action((codename) => {
      const address = generateAddress();
      addAddress({address, codename});
  });

program
  .command('find <codename>')
  .alias('f')
  .description('find an address by codename')
  .action(codename => findAddress(codename));



program
  .command('generate')
  .alias('g')
  .description('generate a basic bitcoin address')
  .action(() => {
      makeAddress();
  })

  program.parse(process.argv);