/*
 * @Author: yanxiaodi 929213769@qq.com
 * @LastEditors: yanxiaodi 929213769@qq.com
 * @Description: global plugins
 * @Date: 2019-05-05 16:16:22
 * @LastEditTime: 2019-05-06 23:41:30
 */
// const HapiSwaggerConfig = require('./hapi-swagger')
const HapiSwaggeredConfig = require('./hapi-swaggered')
const HapiAuthBasicConfig = require('./hapi-auth-basic')

module.exports = [
  // ...HapiSwaggerConfig,
  ...HapiSwaggeredConfig,
  ...HapiAuthBasicConfig,
]
