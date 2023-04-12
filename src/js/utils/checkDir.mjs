/**
 * Package Modules
 */
import fs from 'fs';

/**
 * Function Modules
 */
export async function checkDir(param) {
  // Check for input directory
  if (!fs.existsSync(param.inputDir)) {
    return false;
  }

  // Check for output directory
  if (!fs.existsSync(param.outputDir)) {
    fs.mkdirSync(param.outputDir, { recursive: true });
  }

  return true;
}
