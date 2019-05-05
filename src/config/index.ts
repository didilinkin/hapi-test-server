const Path = require('path')

require('env2')('./env/common.env')
require('env2')(`./env/${process.env.NODE_ENV}.env`)

module.exports = {
  host: process.env.HOST,
  port: process.env.PORT,
  routes: {
    files: {
      relativeTo: Path.join(__dirname, 'public'),
    },
  },
}
