/**
 * Package Modules
 */
import fs from 'fs';

/**
 * Function Modules
 */
// Check for input and output directories
export async function checkDir(param) {
  // If inputDir does not exist
  if (!fs.existsSync(param.inputDir)) {
    return false;
  }

  // If outputDir does not exist
  if (!fs.existsSync(param.outputDir)) {
    fs.mkdirSync(param.outputDir, { recursive: true });
  }

  return true;
}
