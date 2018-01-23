const program = require('commander');
const {
    makeAddress
} = require('./index');

program
  .version('1.0.0')
  .description('Bitcoin Utility System')

program
  .command('generate')
  .alias('g')
  .description('generate a basic bitcoin address')
  .action(() => {
      makeAddress();
  })


  program.parse(process.argv);