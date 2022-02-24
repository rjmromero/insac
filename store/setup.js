const { version } = require('../package.json')
global.VERSION = version

export const state = () => ({
  version
})
