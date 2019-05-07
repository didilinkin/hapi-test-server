const PUBLIC_NAME = 'public'

module.exports = [
  {
    method: 'GET',
    path: '/public/{param*}',
    options: {
      tags: ['api', PUBLIC_NAME],
      description: '资源',
      notes: '这是资源接口',
      handler: {
        directory: {
          path: '.',
          redirectToSlash: true,
        },
      },
    },
  },
]
