const Pack = require('../../package.json')

module.exports = [
  require('@hapi/inert'),
  require('@hapi/vision'),
  {
    plugin: require('hapi-swaggered'),
    options: {
      info: {
        title: 'Hapi 项目接口文档',
        version: Pack.version,
        description: `文档介绍...`,
      },
      tags: {
        info: '信息部分',
        auth: '权限控制',
        public: '静态资源',
      },
    },
  },
  {
    plugin: require('hapi-swaggered-ui'),
    options: {
      title: 'Example API',
      path: '/docs',
      authorization: {
        field: 'apiKey',
        scope: 'query', // header works as well
        // valuePrefix: 'bearer '// prefix incase
        defaultValue: 'demoKey',
        placeholder: 'Enter your apiKey here',
      },
      swaggerOptions: {
        validatorUrl: null,
      },
    },
  },
]
