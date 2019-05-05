const Inert = require('@hapi/inert')
const Vision = require('vision')
const HapiSwagger = require('hapi-swagger')

const Pack = require('../../package.json')

const swaggerOptions = {
  info: {
    title: 'Hapi 项目接口文档',
    version: Pack.version,
  },
  // 定义接口以 tags 属性定义为分组
  grouping: 'tags',
}

module.exports = [
  Inert,
  Vision,
  {
    plugin: HapiSwagger,
    options: swaggerOptions
  },
]
