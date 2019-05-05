/*
 * @Author: yanxiaodi 929213769@qq.com
 * @LastEditors: yanxiaodi 929213769@qq.com
 * @Description: global routes
 * @Date: 2019-05-02 14:53:05
 * @LastEditTime: 2019-05-05 20:17:05
 */
const auth = require('./auth')
const info = require('./info')
const public = require('./public')

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (req, reply) => {
      return 'Hello Hapi'
    },
  },
  ...auth,
  ...info,
  ...public,
]
