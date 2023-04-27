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
// Retrieve command line arguments (input parameters) with flags defined: -i (inputDir), -o (outputDir), and -s (sampleFile)
let cmdArgs = minimist(process.argv.slice(2));

// Check input parameter: -i (inputDir)
if (cmdArgs.i !== true && cmdArgs.i !== undefined) {
  // Check and set default values for input parameters
  console.log('\nChecking parameters for conversion');
  let param = await setDefaults(cmdArgs.i, cmdArgs.o, cmdArgs.s);

  // Check for input and output directories
  let dirCheck = await checkDir(param);
  if (dirCheck === true) {
    console.log('\nConversion parameters\n---');
    console.log(`Input directory: ${param.inputDir}`);
    console.log(`Sample file: ${param.sampleFile}`);
    console.log(`Output directory: ${param.outputDir}`);
    console.log('---');

    // Execute Docker
    console.log('\nInitiating data file(s) conversion');
    await execDocker(param);
    console.log('Data file(s) conversion complete');
  } else {
    console.log(`\nInput directory: ${param.inputDir} does not exist`);
    console.log(
      'Please ensure input directory is defined correctly, and try again',
    );
  }
} else {
  console.log(
    'Please ensure the input directory is defined using the following flag: -i, and try again',
  );
}
