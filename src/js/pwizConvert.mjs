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
  console.log(
    '\nChecking path to input and output directories (and sample file if defined)',
  );
  let pathCheck = await checkPath(param);
  if (pathCheck.inputDir === true && pathCheck.sampleFile === true) {
    if (param.sampleFile === undefined) {
      param.sampleFile = '*.*';
    }
    // Display conversion parameters
    console.log('\nConversion parameters');
    console.log(param);

    // Execute Docker
    console.log('\nInitiating data file(s) conversion');
    await execDocker(param);
    console.log('Data file(s) conversion complete');
  } else if (pathCheck.inputDir === false) {
    console.log(`\nInput directory: ${param.inputDir} does not exist`);
    console.log(
      'Please try again. Ensure input directory is defined correctly',
    );
  } else if (pathCheck.sampleFile === false) {
    console.log(`\nSample file: ${param.sampleFile} does not exist`);
    console.log(
      'Please try again. Ensure sample file is defined correctly and is placed within the input directory',
    );
  }
} else {
  console.log(
    'Please try again. Ensure the input directory is defined using the following flag: -i',
  );
}
