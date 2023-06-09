# pwizConvert

<!-- [![NPM version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url] -->

Raw data are generated in different formats by analytical instruments (i.e., LC-QTOF-MS, MRMS) depending on the manufacturer of the instrument (i.e., Bruker, Sciex). Special/proprietary software is often required to read these data.

The purpose of this repository:

- To convert proprietary formatted MS data files into .mzML open file format using msConvert by ProteoWizard (Docker).

There are two different versions of the script provided in the repository to aid in the conversion: [Bash](./src/bash/pwizConvert.sh) and [JavaScript](./src/js/pwizConvert.mjs).

## Table of Contents

- [Supported Formats](#supported-formats)
  - [Input](#input)
  - [Output](#output)
- [Platform Compattibility](#platform-compatibility)
- [Pre-requisites](#pre-requisites)
  - [Docker](#docker)
  - [Node JS](#node-js)
- [Installation](#installation)
- [Script Execution](#script-execution)
  - [Additional Features](#additional-features)
  - [Default Values](#default-values)
- [Flowchart](#flowchart)
- [Limitations](#limitations)
- [License](#license)

## Supported Formats

### Input

- D (Bruker)

### Output

- mzML

## Platform Compatibility

- Linux

## Pre-requisites

### Docker

- Docker is an easy-to-install application for your Mac, Linux, or Windows environment that enables you to build and share containerized applications and microservices. [Install](https://docs.docker.com/engine/install/)

### Node JS

- Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. [Install](https://nodejs.org/en/download)

## Installation

Clone the GitHub repository to a desired path on your machine.

Navigate to the repository on your machine

```bash
cd pwizConvert
```

Install NPM dependencies _(Require Node JS installed)_

```bash
# Automatically install all dependencies listed in the package.json file for JavaScript execution.
npm install
```

Ensure that the Docker Daemon is running in the background.

- For Linux-based OS

```bash
# To start manually
sudo systemctl start docker

# To configure docker to start on boot with systemd
sudo groupadd docker
sudo usermod -aG docker $USER

sudo systemctl enable docker.service
sudo systemctl enable containerd.service
# Log out and log back in for membership re-evaluation. Restart may be required.
```

- For Windows/Mac OS

  - Open the Docker Client application on the machine. This should automatically start the Docker Daemon in the background.

## Script Execution

Open terminal

Execute command

```bash
# Convert all data files from the user specified input data directory path to mzML format and output the converted files to the default output directory path on your machine.

# Bash script
sh ./src/bash/pwizConvert.sh -i /path/to/input/data/directory/

# JavaScript
node ./src/js/pwizConvert.js -i /path/to/input/data/directory/
```

### Additional Features

```bash
# Add the following input parameters to the script execution command:

# To convert a specific raw data file to mzML
-s fileName.d

# To define a specific output directory
-o /path/to/output/data/directory/
```

### Default Values

```bash
# Values used if input parameters are defined incorrectly or not defined
o (output directory) = /home/$USER/Data/mzML/$batchName/
s (sample file) = *.*
```

## Flowchart

![pwizConvert-flowchart](./flowchart/pwizConvert.png)

## Limitations

- Information of file(s) that has an error occur during conversion (i.e., ReaderFail) is not captured.
- Program remains untested on Windows- and Mac OS-based systems

## License

[Apache-2.0](./LICENSE)

<!-- ## Installation

`$ npm i pwizConvert`

## Usage

```js
import library from 'pwizConvert';

const result = library(args);
// result is ...
```

## [API Documentation](https://vimalnathnambiar.github.io/pwizConvert/) -->

<!-- [npm-image]: https://img.shields.io/npm/v/pwizConvert.svg
[npm-url]: https://www.npmjs.com/package/pwizConvert
[ci-image]: https://github.com/vimalnathnambiar/pwizConvert/workflows/Node.js%20CI/badge.svg?branch=main
[ci-url]: https://github.com/vimalnathnambiar/pwizConvert/actions?query=workflow%3A%22Node.js+CI%22
[codecov-image]: https://img.shields.io/codecov/c/github/vimalnathnambiar/pwizConvert.svg
[codecov-url]: https://codecov.io/gh/vimalnathnambiar/pwizConvert
[download-image]: https://img.shields.io/npm/dm/pwizConvert.svg
[download-url]: https://www.npmjs.com/package/pwizConvert -->
