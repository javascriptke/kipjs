/* eslint-disable import/no-extraneous-dependencies */
import chalk from 'chalk';
import * as commander from 'commander';
import { CONSTANTS } from './constants';

const handleSigTerm = () => {
  process.exit(0);
};

process.on('SIGTERM', handleSigTerm);
process.on('SIGINT', handleSigTerm);


const program = new commander.Command(CONSTANTS.PACKAGE_NAME)
  .version(CONSTANTS.PACKAGE_VERSION)
  .description(CONSTANTS.PACKAGE_DESCRIPTION)
  .usage('[options]')
  .option('-v, --version', 'output the version number')
  .option(chalk('green -h, --help'), 'output usage information');

const options = program.opts();
if (options.version) {
  console.log(CONSTANTS.PACKAGE_VERSION);
  process.exit(0);
}
if (options.help) {
  program.help();
  process.exit(0);
}

program.parse(process.argv);
