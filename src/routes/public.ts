const PUBLIC_NAME = 'public'
const PUBLIC_TAG = 'Public 静态资源'

module.exports = [
  {
    method: 'GET',
    path: '/{param*}',
    config: {
      handler: {
        directory: {
          path: '.',
          redirectToSlash: true
        }
      },
      tags: ['api', PUBLIC_TAG],
      description: '资源',
      notes: '这是资源接口',
    },
  },
]
