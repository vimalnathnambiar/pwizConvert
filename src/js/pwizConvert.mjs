/* eslint-disable no-console */
/* eslint-disable no-undef */
/**
 * Package Modules
 */
import minimist from 'minimist';

import { checkPath } from './utils/checkPaths.mjs';
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
  console.log('\nChecking and setting parameters for conversion');
  let param = await setDefaults(cmdArgs.i, cmdArgs.o, cmdArgs.s);

  // Check path to input and output directories (and sample file if defined)
  console.log('\nChecking path to input and output directories');
  let pathCheck = await checkPath(param);
  if (pathCheck.inputDir === true && pathCheck.sampleFile === true) {
    if (param.sampleFile === undefined) {
      param.sampleFile = '*.*';
    }
    console.log('\nConversion parameters');
    console.log(param);

    // Execute Docker
    console.log('\nInitiating data file(s) conversion');
    await execDocker(param);
    console.log('Data file(s) conversion complete');
  } else if (pathCheck.inputDir === false) {
    console.log(`\nInput directory: ${param.inputDir} does not exist`);
    console.log(
      'Please ensure input directory is defined correctly. Try again',
    );
  } else if (pathCheck.sampleFile === false) {
    console.log(`\nSample file: ${param.sampleFile} does not exist`);
    console.log(
      'Please ensure sample file is defined correctly and is placed within the defined input directory. Try again',
    );
  }
} else {
  console.log(
    'Please ensure the input directory is defined using the following flag: -i, and try again',
  );
}
