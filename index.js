'use strict'

const os = require('os')

module.exports = function () {
  const arch = os.arch()

  if (arch === 'arm64' || arch === 'arm') {
    const armv = arch === 'arm64' ? '8' : process.config.variables.arm_version

    if (!armv) {
      throw new Error('Could not detect ARM version')
    }

    return 'armv' + armv
  }

  return arch
}
