# ! /bin/bash

# Command-Line Argument Parameters
# ---
while getopts i:s:o: flag
do
    case "${flag}" in
        i) inputDir=${OPTARG};;
        s) sampleFile=${OPTARG};;
        o) outputDir=${OPTARG};;
    esac
done

# Default Variables
# ---
if [ $inputDir ]
then
    batchName=$(basename $inputDir)
fi

if [ ! $outputDir ]
then
    outputDir="$HOME/Data/mzML/$batchName/"
fi

if [ ! $sampleFile ]
then
    sampleFile="*.*"
fi

# Docker Variables
# ---
pwizImg="proteowizard/pwiz-skyline-i-agree-to-the-vendor-licenses"
msConvert="docker run -it --rm -v $inputDir:/inputDir -v $outputDir:/outputDir $pwizImg wine msconvert /inputDir/$sampleFile -o /outputDir"

# Script
# ---
# Check if input directory is defined
if [ $inputDir ]
then
    # Check for input directory
    if [ -d $inputDir ]
    then
        echo "Input directory: $inputDir"

        # Check for output directory
        if [ ! -d $outputDir ]
        then
            mkdir -p $outputDir
        fi
        echo "Output directory: $outputDir"

        # Execute Docker
        echo "Initiating data file conversion"
        $msConvert
        echo "Data file conversion complete"
    else
        echo "Input directory: $inputDir does not exist"
        echo "Please ensure path to input directory is valid"
    fi
else
    echo "Please define the Input Directory using the following flag: -i"
fi
