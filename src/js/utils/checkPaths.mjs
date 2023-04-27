/**
 * Package Modules
 */
import fs from 'fs';

/**
 * Function Modules
 */
// Check path to input and output directories (and sample file if defined)
export async function checkPath(param) {
  let inputDir = true;
  let sampleFile = true;

  // If inputDir does not exist
  if (!fs.existsSync(param.inputDir)) {
    inputDir = false;
  }

  // If outputDir does not exist
  if (!fs.existsSync(param.outputDir)) {
    fs.mkdirSync(param.outputDir, { recursive: true });
  }

  // If sample file is defined
  if (param.sampleFile !== undefined) {
    // If file path does not exist
    if (!fs.existsSync(`${param.inputDir}${param.sampleFile}`)) {
      sampleFile = false;
    }
  }
  return { inputDir, sampleFile };
}
