/**
 * Package Modules
 */
import os from 'os';
import path from 'path';

/**
 * Function Modules
 */
// Set default values (If parameters are not defined)
export async function setDefaults(inputDir, outputDir, sampleFile) {
  // Extract folder name from inputDir
  let batchName = path.basename(inputDir);

  // If output directory is undefined
  if (!(outputDir !== true && outputDir !== undefined)) {
    outputDir = path.join(os.homedir(), `/Data/mzML/${batchName}/`);
  }

  // If sample file is undefined
  if (!(sampleFile !== true && sampleFile !== undefined)) {
    sampleFile = '*.*';
  }

  return { inputDir, outputDir, sampleFile };
}
