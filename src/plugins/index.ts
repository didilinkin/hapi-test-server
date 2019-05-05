/*
 * @Author: yanxiaodi 929213769@qq.com
 * @LastEditors: yanxiaodi 929213769@qq.com
 * @Description: global plugins
 * @Date: 2019-05-05 16:16:22
 * @LastEditTime: 2019-05-05 16:24:09
 */
const HapiSwaggerConfig = require('./hapi-swagger')
const HapiAuthBasicConfig = require('./hapi-auth-basic')

module.exports = [
  ...HapiSwaggerConfig,
  ...HapiAuthBasicConfig,
]
