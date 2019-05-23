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
};

function log(msg, { status, isUpperCase, color }) {
  const COLOR =
    STATUS_MSG[status] === status ? STYLE_MSG.MAGENTA : STYLE_MSG.GREEN;
  const message = isUpperCase ? msg.toUpperCase() : msg;

  console.log(colors[color || COLOR]`${message}`);
}

program.version(pkgJson.version, '-v, --version').usage('[command][options]');

program
  .command('pack')
  .description(
    'Pack and publish your required package. Sure the package name is correct.'
  )
  .option('-p --package <package>', 'Package Name')
  .action(({ package } = { ...options }) => {
    if (typeof package === 'undefined') {
      console.error(`Please run the script with the package name`.yellow.bold);
      process.exit(1);
    }

    log(`Start click pack process...`, {
      status: 'start',
      isUpperCase: true,
      color: 'blue',
    });

    log(`Removing the ${package} package in the distrubution folder...`, {
      status: 'start',
      isUpperCase: true,
    });

    console.log(
      `Removing the ${package} package in the distrubution folder...`.toUpperCase()
        .magenta
    );

    execSync(`rm -rf dist/${package}`, { stdio: 'inherit' });
    console.log(
      `The dist package has been removed in the distrubution folder.`.toUpperCase()
        .green
    );

    execSync(`npm run build ${package} --verbose`, { stdio: 'inherit' });
    execSync(`cd projects/${package} && npm version patch`, {
      stdio: 'inherit',
    });
    execSync(`ng build ${package} --verbose`, { stdio: 'inherit' });
    execSync(`cd dist/${package} && npm pack --verbose`, { stdio: 'inherit' });
    execSync(`cd dist/${package} && npm publish --verbose`, {
      stdio: 'inherit',
    });
  });

program.parse(process.argv);
if (program.args.length === 0) program.help();
