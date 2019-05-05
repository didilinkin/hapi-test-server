module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (req, reply) => {
      return 'Hello Hapi'
    },
  },
  {
    method: 'POST',
    path: '/login',
    options: {
      auth: 'simple'
    },
    handler: (req, reply) => {
      console.log('req ===> ', req)
      console.log('h ===> ', reply)
      return 'Welcome!'
    }
  },
]
