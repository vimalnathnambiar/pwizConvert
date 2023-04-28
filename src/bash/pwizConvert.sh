# ! /bin/bash

# Retrieve command-Line arguments (input parameters) with flags defined: -i (inputDir), -o (outputDir) and -s (sampleFile)
# ---
while getopts i:s:o: flag
do
    case "${flag}" in
        i) inputDir=${OPTARG};;
        s) sampleFile=${OPTARG};;
        o) outputDir=${OPTARG};;
    esac
done

# Check and set default values for input parameters
# ---
echo -e "\nChecking and setting parameters for conversion"
if [[ $inputDir ]]
then
    batchName=$(basename $inputDir)
fi

if [[ ! $outputDir ]]
then
    outputDir="$HOME/Data/mzML/$batchName/"
fi

# Check path to input and output directories (and sample file if defined)
# ---
echo -e "\nChecking path to input and output directories (and sample file if defined)"
 inputDirStat=true
 sampleFileStat=true

 if [[ ! -d $inputDir ]]
 then
    inputDirStat=false
 fi

 if [[ "$inputDirStat" = true ]]
 then
     if [[ ! -d $outputDir ]]
    then
        mkdir -p $outputDir
    fi
 fi

 if [[ $sampleFile ]]
 then
    sampleFilePath="$inputDir$sampleFile"

    if [[ ! -d $sampleFilePath ]]
    then
        sampleFileStat=false
    fi
fi

# Docker execution
# ---
if [[ $inputDir ]]
then
    if [[ "$inputDirStat" = true && "$sampleFileStat" = true ]]
    then
        if [[ ! $sampleFile ]]
        then
            sampleFile="*.*"
        fi

        # Display conversion parameters
        echo -e "\nConversion parameters"
        echo "---"
        echo "Input directory: $inputDir"
        echo "Output directory: $outputDir"
        echo "Sample file: $sampleFile"

        # Set Docker image and command
        # ---
        pwizImg="proteowizard/pwiz-skyline-i-agree-to-the-vendor-licenses"
        msConvert="docker run -it --rm -v $inputDir:/inputDir -v $outputDir:/outputDir $pwizImg wine msconvert /inputDir/$sampleFile -o /outputDir"

        # Execute Docker
        echo  -e "\nInitiating data file(s) conversion\n"
        $msConvert
        echo "Data file(s) conversion complete"

    elif [[ "$inputDirStat" = false ]]
    then
        echo "Input directory: $inputDir does not exist"
        echo "Please try again. Ensure input directory is defined correctly"
    elif [[ "$sampleFileStat" = false ]]
    then
        echo "Sample file: $sampleFile does not exist"
        echo "Please try again. Ensure sample file is defined correctly and is placed within the input directory"
    fi      
else
    echo "Please try again. Ensure the input directory is defined using the following flag: -i"
fi
