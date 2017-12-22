const nubank = require('../nubank')

exports.auth = (req, reply) => {
  if (!req.body) {
    reply.code(500).send({
      response: 'null data'
    })
  }

  let dados = req.body
  nubank.auth(dados.cpf, dados.pass, (err, data) => {
    if (err) {
      return reply.code(500).send({
        response: err
      })
    }

    reply.code(200).send({
      response: data
    })
  })
}

exports.user = (req, reply) => {
  if (!req.params) {
    reply.code(500).send({
      response: 'null data'
    })
  }

  let dados = req.params
  nubank.user(dados.token, (err, data) => {
    if (err) {
      return reply.code(500).send({
        response: err
      })
    }

    reply.code(200).send({
      data: JSON.parse(data)
    })
  })
}

exports.bill = (req, reply) => {
  if (!req.params) {
    reply.code(500).send({
      response: 'null data'
    })
  }

  let dados = req.params
  nubank.bill(dados.token, (err, data) => {
    if (err) {
      return reply.code(500).send({
        response: err
      })
    }

    reply.code(200).send({
      data: JSON.parse(data)
    })
  })
}

exports.purchases = (req, reply) => {
  if (!req.params) {
    reply.code(500).send({
      response: 'null data'
    })
  }

  let dados = req.params
  nubank.purchases(dados.token, (err, data) => {
    if (err) {
      return reply.code(500).send({
        response: err
      })
    }

    reply.code(200).send({
      data: JSON.parse(data)
    })
  })
}

exports.accountSimple = (req, reply) => {
  if (!req.params) {
    reply.code(500).send({
      response: 'null data'
    })
  }

  let dados = req.params
  nubank.accountSimple(dados.token, (err, data) => {
    if (err) {
      return reply.code(500).send({
        response: err
      })
    }

    reply.code(200).send({
      data: JSON.parse(data)
    })
  })
}

exports.accountFull = (req, reply) => {
  if (!req.params) {
    reply.code(500).send({
      response: 'null data'
    })
  }

  let dados = req.params
  nubank.accountFull(dados.token, (err, data) => {
    if (err) {
      return reply.code(500).send({
        response: err
      })
    }

    reply.code(200).send({
      data: JSON.parse(data)
    })
  })
}

exports.events = (req, reply) => {
  if (!req.params) {
    reply.code(500).send({
      response: 'null data'
    })
  }

  let dados = req.params
  nubank.events(dados.token, (err, data) => {
    if (err) {
      return reply.code(500).send({
        response: err
      })
    }

    reply.code(200).send({
      data: JSON.parse(data)
    })
  })
}
