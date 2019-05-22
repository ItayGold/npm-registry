const program = require('commander');
const colors = require('colors');

program
  .version('1.0.0', '-v, --version')
  .usage('[options] <file ...>')
  .option('-p --package <package>', 'Package Name');

program
  .command('setup [env]')
  .description('run setup commands for all envs')
  .option('-s, --setup_mode [mode]', 'Which setup mode to use')
  .action(function(env, options) {
    var mode = options.setup_mode || 'normal';
    env = env || 'all';
    console.log(`setup for ${env} env(s) with ${mode} mode`);
  });

program.parse(process.argv);

if (typeof program.package === 'undefined') {
  console.error(`Please run the script with the package name`.yellow);
  process.exit(1);
}

console.log(`program.package: ${program.package}`);
