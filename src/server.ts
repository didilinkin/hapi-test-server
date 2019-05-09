const Sentry = require('@sentry/node')
const Hapi = require('@hapi/hapi')
const Bcrypt = require('bcrypt') // 跨平台的文件加密工具

// 本地配置
const routes = require('./routes')
const config = require('./config')
const plugins = require('./plugins')
const db = require('./db').client
const knex = require('./knex')

// 目录指向的是根目录
require('env2')('./.env/common.env')
require('env2')(`./.env/${process.env.NODE_ENV}.env`)

Sentry.init({
  dsn: 'https://2fa773ec6e454a84bbb18c21b99966fa@localhost:9000/2', // 怀疑存在错误
})

const start = async () => {
  const server = Hapi.server(config)

  await server.register(plugins) // 插件
  server.route([...routes]) // 路由

  // 查询 全量数据
  // knex('users')
  //   // .column('users')
  //   // .select({
  //   //   id: 0,
  //   // })
  //   // .from('users')
  //   .where({
  //     id: 0,
  //     name: 'admin',
  //   })
  //   .then(users => {
  //     console.log('users ===> ', users)
  //   })

  // 增加
  // knex('users')
  //   .insert({
  //     name: 'admin',
  //     type: 'admin',
  //     routes: {
  //       table: [{}],
  //     },
  //   })
  //   .then(users => {
  //     console.log('users 检查操作 ===> ', users)
  //   })

  // 更新
  // knex('users')
  //   .where({ name: 'admin' })
  //   .update({
  //     name: 'admin-1',
  //   })
  //   .then(res => {
  //     console.log('res => ', res)
  //   })

  // 删除
  // knex('users')
  //   .where({ name: 'xxx' })
  //   .del()
  //   .then(res => {
  //     console.log('res => ', res)
  //   })

  // 检查 新增的结果
  // knex('users')
  //   .where({
  //     name: 'admin-1',
  //   })
  //   .then(response => {
  //     console.log('response ===> ', response)
  //   })

  await server.start()
  console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', err => {
  console.log(err)
  process.exit(1)
})

start()
