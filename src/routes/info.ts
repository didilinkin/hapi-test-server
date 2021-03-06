const INFO_NAME = 'info'

module.exports = [
  {
    method: 'GET',
    path: `/${INFO_NAME}`,
    options: {
      tags: ['api', INFO_NAME],
      description: '信息',
      notes: '这是获取信息的接口',
      handler: (req, reply) => {
        return {
          statusCode: 200,
          message: 'success',
          body: '成功!',
        }
      },
    },
  },
]
