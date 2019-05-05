const INFO_NAME = 'info'
const INFO_TAG = 'Info 信息'

module.exports = [
  {
    method: 'GET',
    path: `/${INFO_NAME}`,
    config: {
      tags: ['api', INFO_TAG],
      description: '信息',
      notes: '这是获取信息的接口',
    },
    handler: (req, reply) => {
      return {
        statusCode: 200,
        message: 'success',
        body: '成功!',
      }
    },
  },
]
