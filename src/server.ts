const Hapi = require('hapi')
const Bcrypt = require('bcrypt') // 跨平台的文件加密工具
const routes = require('./routes')

// 目录指向的是根目录
require('env2')('./env/common.env')
require('env2')(`./env/${process.env.NODE_ENV}.env`)

// 定义一个 用户信息表
const users = {
  john: {
    username: 'john',
    password: '$2a$10$iqJSHD.BGr0E2IxQwYgJmeP3NvhPrXAeLSaGCj6IR/XU5QtjVu5Tm',   // '密文'
    name: 'John Doe',
    id: '2133d32a'
  }
}

// 验证 用户信息
const validate = async (request, username, password) => {
  const user = users[username]
  if (!user) {
    return { credentials: null, isValid: false }
  }
  const isValid = await Bcrypt.compare(password, user.password)
  const credentials = { id: user.id, name: user.name } // 发放证书
  return { isValid, credentials }
}

const start = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
  })

  await server.register(require('hapi-auth-basic'))
  // '战略' 验证
  server.auth.strategy('simple', 'basic', { validate })

  server.route([...routes])
  console.log('env.NODE_ENV ===> ', process.env.NODE_ENV)
  console.log('env.NAME ===> ', process.env.NAME)
  console.log('env.ENV_NAME ===> ', process.env.ENV_NAME)
  console.log('env.HOST ===> ', process.env.ENV_NAME)

  await server.start()
  console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

start()
