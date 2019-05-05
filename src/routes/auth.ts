const Joi = require('@hapi/joi')

const AUTH_NAME = 'auth'
const AUTH_TAG = 'Auth 权限'

module.exports = [
  {
    method: 'GET',
    path: `/${AUTH_NAME}/login`,
    // options: {
    //   auth: 'simple'
    // },
    config: {
      validate: {
        // params
        // payload
        headers: Joi.object({
          authorization: Joi.string().required(),
        }).unknown(),
        query: {
          username: Joi.string().required()
            .description('如 john, 获取权限与路由表'),
        },
      },
      handler: (req, reply) => {
        console.log('req ===> ', req)
        console.log('h ===> ', reply)
        return 'Welcome!'
      },
      plugins: {
        'hapi-swagger': {
          responses: {
            '400': {
              'description': 'BadRequest'
            }
          },
          payloadType: 'form'
        }
      },
      tags: ['api', AUTH_TAG],
      description: '登录',
      notes: '这是登录',
    },
  },
  {
    method: 'GET',
    path: `/${AUTH_NAME}/logout`,
    config: {
      handler: (req, reply) => {
        console.log('req ===> ', req)
        console.log('h ===> ', reply)
        return 'Bye Bye!'
      },
      plugins: {
        'hapi-swagger': {
          responses: {
            '400': {
              'description': 'BadRequest'
            }
          },
          payloadType: 'form'
        }
      },
      tags: ['api', AUTH_TAG],
      description: '登出',
    },
  },
]
