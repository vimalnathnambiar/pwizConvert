/* eslint-disable no-console */
/* eslint-disable no-undef */
/**
 * Package Modules
 */
import minimist from 'minimist';

import { checkDir } from './utils/checkDir.mjs';
import { execDocker } from './utils/execDocker.mjs';
import { setDefaults } from './utils/setDefaults.mjs';

/**
 * Script Execution
 */
// Retrieve command line arguments
let cmdArgs = minimist(process.argv.slice(2));

// Check if -i (inputDir) flag is defined by the user
if (cmdArgs.i !== true && cmdArgs.i !== undefined) {
  // Set default variables for -o (outputDir) and -s (sampleFile) if not defined by user
  let param = await setDefaults(cmdArgs.i, cmdArgs.o, cmdArgs.s);

  // Check for input and output directories
  let dirCheck = await checkDir(param);
  if (dirCheck === true) {
    console.log(`Input directory: ${param.inputDir}`);
    console.log(`Output directory: ${param.outputDir}`);

    // Execute ProteoWizard - msConvert Docker
    console.log('Initiating data file(s) conversion');
    await execDocker(param);
    console.log('Data file(s) conversion complete');
  } else {
    console.log(`Input directory: ${param.inputDir} does not exist`);
  }
} else {
  console.log('Please define the Input Directory using the following flag: -i');
}
