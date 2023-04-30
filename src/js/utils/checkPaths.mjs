/**
 * Package Modules
 */
import fs from 'fs';

/**
 * Function Module
 */
// Check path to input and output directories (and sample file if defined)
export async function checkPaths(param) {
  let inputDirStat = true;
  let sampleFileStat = true;

  // If inputDir does not exist
  if (!fs.existsSync(param.inputDir)) {
    inputDirStat = false;
  }

  // If input directory exist
  if (inputDirStat !== false) {
    // If outputDir does not exist
    if (!fs.existsSync(param.outputDir)) {
      fs.mkdirSync(param.outputDir, { recursive: true });
    }
  }

  // If sample file is defined
  if (param.sampleFile !== undefined) {
    // If file path does not exist
    if (!fs.existsSync(`${param.inputDir}${param.sampleFile}`)) {
      sampleFileStat = false;
    }
  }
  return { inputDirStat, sampleFileStat };
}
