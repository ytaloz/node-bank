const nubank = require('./controllers')

module.exports = (fastify) => {
  fastify.addContentTypeParser('*', (req, done) => {
    let data = ''
    req.on('data', chunk => { data += chunk })
    req.on('end', () => {
      done(data)
    })
  })

  fastify.post('/auth', nubank.auth)

  fastify.get('/user/:token', nubank.user)
  fastify.get('/bill/:token', nubank.bill)
  fastify.get('/purchases/:token', nubank.purchases)
  fastify.get('/me/:token', nubank.accountSimple)
  fastify.get('/account/:token', nubank.accountFull)
  fastify.get('/events/:token', nubank.events)
}
