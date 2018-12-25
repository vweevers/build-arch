# build-arch

> **Wraps [`os.arch()`](https://nodejs.org/api/os.html#os_os_arch) to distinguish ARM versions. Meant for selecting an appropriate prebuilt binary.**

[![npm status](http://img.shields.io/npm/v/build-arch.svg)](https://www.npmjs.org/package/build-arch)
[![node](https://img.shields.io/node/v/build-arch.svg)](https://www.npmjs.org/package/build-arch)
[![Travis build status](https://img.shields.io/travis/vweevers/build-arch.svg)](http://travis-ci.org/vweevers/build-arch)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Usage

```js
const arch = require('build-arch')

console(arch())
```

The current possible values are: `'armv8'`, `'armv7'`, `'armv6'`, `'ia32'`, `'mips'`, `'mipsel'`, `'ppc'`, `'ppc64'`, `'s390'`, `'s390x'`, `'x32'` and `'x64'`.

## Install

With [npm](https://npmjs.org) do:

```
npm install build-arch
```

## License

[MIT](LICENSE) © 2018-present Vincent Weevers. Thanks to [`zeromq`](https://github.com/zeromq/zeromq.js/blob/09b22070d5b1929a2191bb91d5c4621bf36fe9bf/scripts/prebuild-install.js#L12-L18).
