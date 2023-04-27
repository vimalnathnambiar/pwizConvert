/**
 * Package Modules
 */
import os from 'os';
import path from 'path';

/**
 * Function Modules
 */
// Check and set default values for input parameters
export async function setDefaults(inputDir, outputDir, sampleFile) {
  let batchName = path.basename(inputDir);

  // Check input parameter: -o (outputDir)
  if (!(outputDir !== true && outputDir !== undefined)) {
    outputDir = path.join(os.homedir(), `/Data/mzML/${batchName}/`);
  }

  // Check input parameter: -s (sampleFile)
  if (sampleFile === true) {
    sampleFile = undefined;
  }

  return { inputDir, outputDir, sampleFile };
}
