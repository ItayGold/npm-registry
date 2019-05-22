#! /usr/bin/env node --harmony

const program = require('commander');
const colors = require('colors');
const version = require('./package.json').version;

program
  .version(version, '-v, --version')
  .usage('[options] <file ...>')
  .command('pack')
  .description('run pack command for required package')
  .option('-p --package <package>', 'Package Name')
  .action(({ package } = { ...options }) => {
    if (typeof package === 'undefined') {
      console.error(`Please run the script with the package name`.yellow.bold);
      process.exit(1);
    }

    console.log(
      colors.green.underline('The selected package is:'),
      `${package}`
    );
  });

program.on('command:*', function() {
  console.log(
    '\nInvalid command: '.red.bold,
    program.args.join(' ').bold,
    '\n\nSee a list of available commands below.\n'.magenta.underline.bold
  );

  program.help();
});

program.parse(process.argv);
if (program.args.length === 0) program.help();
