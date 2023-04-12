# pwizConvert

<!-- [![NPM version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url] -->

To convert proprietary formatted MS data files into .mzML open file format using msConvert by ProteoWizard (Docker).

## Supported Formats

**Input**

D (Bruker)

**Output**

mzML

## Pre-requisites

**Docker**

Docker is an easy-to-install application for your Mac, Linux, or Windows environment that enables you to build and share containerized applications and microservices. [Install](https://docs.docker.com/engine/install/)

**Node JS**

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. [Install](https://nodejs.org/en/download)

## Usage

Clone the GitHub repository to a desired path on your machine.

Navigate to the repository on your machine

```bash
cd pwizConvert
```

**Execution Examples:**

via Bash Script

```bash
sh ./src/bash/pwizConvert.sh -i /path/to/input/data/directory/
# Convert all data files from the user specified input data directory path to .mzML format and output the converted filed to a default output directory path on your machine.

sh ./src/bash/pwizConvert.sh -i /path/to/input/data/directory/ -o /path/to/output/data/directory/
# Convert all data files from the user specified input data directory path to .mzML format and output the converted filed to the user specified output directory path.

sh ./src/bash/pwizConvert.sh -i /path/to/input/data/directory/ -s testData.d
# Convert a specific data file from the user specified input data directory path to .mzML format and output the converted filed to the user specified output directory path.

sh ./src/bash/pwizConvert.sh -i /path/to/input/data/directory/ -s fileName.ext -o /path/to/output/data/directory/
# Convert a specific data file from the user specified input data directory path to .mzML format and output the converted filed to the user specified output directory path.
```

<!-- ## Installation

`$ npm i pwizConvert`

## Usage

```js
import library from 'pwizConvert';

const result = library(args);
// result is ...
```

## [API Documentation](https://vimalnathnambiar.github.io/pwizConvert/) -->

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/pwizConvert.svg
[npm-url]: https://www.npmjs.com/package/pwizConvert
[ci-image]: https://github.com/vimalnathnambiar/pwizConvert/workflows/Node.js%20CI/badge.svg?branch=main
[ci-url]: https://github.com/vimalnathnambiar/pwizConvert/actions?query=workflow%3A%22Node.js+CI%22
[codecov-image]: https://img.shields.io/codecov/c/github/vimalnathnambiar/pwizConvert.svg
[codecov-url]: https://codecov.io/gh/vimalnathnambiar/pwizConvert
[download-image]: https://img.shields.io/npm/dm/pwizConvert.svg
[download-url]: https://www.npmjs.com/package/pwizConvert
