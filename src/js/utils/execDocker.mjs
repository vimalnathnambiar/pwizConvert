/* eslint-disable no-console */
/**
 * Package Modules
 */
import * as cmd from 'child_process';

/**
 * Function Module
 */
// Execute Docker
export async function execDocker(param) {
  try {
    // Set Docker image and command
    const pwizImg = 'proteowizard/pwiz-skyline-i-agree-to-the-vendor-licenses';
    let msConvert = `docker run --rm -v ${param.inputDir}:/inputDir -v ${param.outputDir}:/outputDir ${pwizImg} wine msconvert /inputDir/${param.sampleFile} -o /outputDir`;

    // Execute Docker command and retrieve output
    let output = cmd.execSync(`${msConvert}`);
    console.log(`${output.toString()}`);
  } catch (err) {
    console.log(
      `Error: File(s) may have experienced error (i.e., ReaderFailure) during file conversion`,
    );
  }
}
