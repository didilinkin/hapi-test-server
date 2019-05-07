const Joi = require('@hapi/joi')
const AUTH_NAME = 'auth'

module.exports = [
  {
    method: 'GET',
    path: `/${AUTH_NAME}/login`,
    // options: {
    //   auth: 'simple'
    // },
    options: {
      tags: ['api', AUTH_NAME],
      description: '登录',
      notes: '登录 描述',
      validate: {
        // params
        // payload
        headers: Joi.object({
          authorization: Joi.string().required(),
        }).unknown(),
        query: {
          username: Joi.string()
            .required()
            .description('如 john, 获取权限与路由表'),
        },
      },
      plugins: {
        'hapi-swaggered': {
          responses: {
            default: {
              description: 'Bad Request',
              schema: Joi.object({
                msg: Joi.string()
                  .description('Welcome!')
                  .required(),
              }),
            },
            500: { description: 'Internal Server Error' },
          },
        },
      },
      handler: (req, reply) => {
        console.log('req ===> ', req)
        console.log('h ===> ', reply)
        return 'Welcome!'
      },
    },
  },
  {
    method: 'GET',
    path: `/${AUTH_NAME}/logout`,
    options: {
      plugins: {
        'hapi-swaggered': {
          responses: {
            default: {
              description: 'Bad Request',
            },
            500: { description: 'Internal Server Error' },
          },
        },
      },
      tags: ['api', AUTH_NAME],
      description: '登出',
      handler: (req, reply) => {
        console.log('req ===> ', req)
        console.log('h ===> ', reply)
        return 'Bye Bye!'
      },
    },
  },
]
