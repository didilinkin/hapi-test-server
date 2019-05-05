const Hapi = require('@hapi/hapi')
const Bcrypt = require('bcrypt') // 跨平台的文件加密工具

// 本地配置
const routes = require('./routes')
const config = require('./config')
const plugins = require('./plugins')

// 目录指向的是根目录
require('env2')('./env/common.env')
require('env2')(`./env/${process.env.NODE_ENV}.env`)

// 定义一个 用户信息表
// const users = {
//   john: {
//     username: 'john',
//     password: '$2a$10$iqJSHD.BGr0E2IxQwYgJmeP3NvhPrXAeLSaGCj6IR/XU5QtjVu5Tm',   // 'secret'
//     name: 'John Doe',
//     id: '2133d32a'
//   }
// }

const start = async () => {
  const server = Hapi.server(config)

  await server.register(plugins) // 插件
  server.route([...routes]) // 路由

  await server.start()
  console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

start()
