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
    STATUS_MSG.START === status ? STYLE_MSG.MAGENTA : STYLE_MSG.YELLOW;
  const message = isUpperCase ? msg.toUpperCase() : msg;
  return console.log(colors[color || COLOR](`${message}`));
}

program.version(pkgJson.version, '-v, --version').usage('[command][options]');

program
  .command('publish')
  .alias('pub')
  .description(
    'Pack and publish your required package. Sure the package name is correct.'
      .yellow
  )
  .option('-p --package <package>', 'Package Name')
  .option('-s --semver [semver]', 'Semantic version')
  .action(({ package, semver } = { ...options }) => {
    if (typeof package === 'undefined') {
      execSync(`click pub -h`, { stdio: 'inherit' });
      process.exit(1);
    }

    log(`Start click publish (set of 5 processes)`, {
      status: 'start',
      isUpperCase: false,
      color: 'blue',
    });

    execSync(`rm -rf dist/${package}`, { stdio: 'inherit' });

    log(`1/5: The dist ${package}'s been removed in the distrubution folder.`, {
      status: 'end',
      isUpperCase: false,
    });

    execSync(`cd projects/${package} && npm version ${semver || 'patch'}`, {
      stdio: 'inherit',
    });

    log(`2/5: The new version of ${package}'s been patched.`, {
      status: 'end',
      isUpperCase: false,
    });

    execSync(`ng build ${package}`, { stdio: 'inherit' });

    log(`3/5: The build of ${package}'s been completed.`, {
      status: 'end',
      isUpperCase: false,
    });

    execSync(`cd dist/${package} && npm pack`, { stdio: 'inherit' });

    log(`4/5: The ${package}'s been packed.`, {
      status: 'end',
      isUpperCase: false,
    });

    execSync(`cd dist/${package} && npm publish`, {
      stdio: 'inherit',
    });

    log(
      `5/5: The ${package}'s been published to The Click Private NPM Registry at: \n http://npm.clicksoftware.com:4873.`,
      {
        status: 'end',
        isUpperCase: false,
      }
    );
  });

program.parse(process.argv);
if (program.args.length === 0) program.help();
