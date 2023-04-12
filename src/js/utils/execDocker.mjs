/* eslint-disable no-console */
/**
 * Package Modules
 */
import * as cmd from 'child_process';

/**
 * Function Modules
 */
export async function execDocker(param) {
  try {
    const pwizImg = 'proteowizard/pwiz-skyline-i-agree-to-the-vendor-licenses';
    let msConvert = `docker run --rm -v ${param.inputDir}:/inputDir -v ${param.outputDir}:/outputDir ${pwizImg} wine msconvert /inputDir/${param.sampleFile} -o /outputDir`;

    let output = cmd.execSync(`${msConvert}`);
    console.log(output.toString());
  } catch (err) {
    console.log(`${err.toString()}`);
  }
}
