/**
 * Package Modules
 */
import os from 'os';
import path from 'path';

/**
 * Function Modules
 */
// Set default values to CMD Argument Parameters if not defined
export async function checkCmdArgs(inputDir, outputDir, sampleFile) {
  let batchName = path.basename(inputDir);

  // Check if output directory is defined by user
  if (!(outputDir !== true && outputDir !== undefined)) {
    outputDir = path.join(os.homedir(), '/Data/mzML/', batchName, '/');
  }

  // Check if sample file is defined by user
  if (!(sampleFile !== true && sampleFile !== undefined)) {
    sampleFile = '*.*';
  }

  return { inputDir, outputDir, sampleFile };
}
