#! /usr/bin/env node --harmony

const program = require('commander');
const colors = require('colors');
const pkgJson = require('./package.json');
const { execSync } = require('child_process');

const STATUS_MSG = {
  START: 'start',
  END: 'end',
};

const STYLE_MSG = {
  MAGENTA: 'magenta',
  GREEN: 'green',
  YELLOW: 'yellow',
};

function log(msg, { status, isUpperCase, color }) {
  const COLOR =
    STATUS_MSG.START === status ? STYLE_MSG.MAGENTA : STYLE_MSG.GREEN;
  const message = isUpperCase ? msg.toUpperCase() : msg;
  return console.log(colors[color || COLOR](`${message}`));
}

program.version(pkgJson.version, '-v, --version').usage('[command][options]');

program
  .command('publish')
  .alias('pub')
  .description(
    'Pack and publish your required package. Sure the package name is correct.'
  )
  .option('-p --package <package>', 'Package Name')
  .action(({ package } = { ...options }) => {
    if (typeof package === 'undefined') {
      log(`Please run the script with the package name`, {
        status: null,
        isUpperCase: false,
        color: 'yellow',
      });
      process.exit(1);
    }

    log(`Start click publish process...`, {
      status: 'start',
      isUpperCase: true,
      color: 'blue',
    });

    execSync(`rm -rf dist/${package}`, { stdio: 'inherit' });

    log(`The dist ${package} has been removed in the distrubution folder.`, {
      status: 'end',
      isUpperCase: true,
    });

    execSync(`ng build ${package}`, { stdio: 'inherit' });

    log(`The build of ${package} has been completed.`, {
      status: 'end',
      isUpperCase: true,
    });

    execSync(`cd projects/${package} && npm version patch`, {
      stdio: 'inherit',
    });

    execSync(`cd dist/${package} && npm pack`, { stdio: 'inherit' });

    execSync(`cd dist/${package} && npm publish`, {
      stdio: 'inherit',
    });
  });

program.parse(process.argv);
if (program.args.length === 0) program.help();
