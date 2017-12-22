const request = require('request')

const URLS = {
  auth: 'https://prod-auth.nubank.com.br/api/token',
  userInfo: 'https://prod-global-auth.nubank.com.br/api/userinfo',
  billSummary: 'https://prod-s0-billing.nubank.com.br/api/accounts/570e2741-7657-4b6a-86e8-2574330afc76/bills/summary',
  purchases: 'https://prod-s0-feed.nubank.com.br/api/accounts/570e2741-7657-4b6a-86e8-2574330afc76/transactions',
  accountSimple: 'https://prod-s0-credit-card-accounts.nubank.com.br/api/accounts/570e2741-7657-4b6a-86e8-2574330afc76/simple',
  accountFull: 'https://prod-s0-credit-card-accounts.nubank.com.br/api/accounts/570e2741-7657-4b6a-86e8-2574330afc76',
  events: 'https://prod-s0-facade.nubank.com.br/api/customers/570cd3e0-26e2-4977-8ca3-1188f1e23921/feed'
}
const HEADERS = {
  'Content-Type': 'application/json',
  'X-Correlation-Id': 'WEB-APP.jO4x1',
  'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36',
  'Origin': 'https://conta.nubank.com.br',
  'Referer': 'https://conta.nubank.com.br/'
}

const auth = (cpf, pass, cb) => {
  let options = {
    url: URLS.auth,
    method: 'POST',
    'Content-Type': 'application/json',
    body: {
      password: pass,
      login: cpf,
      grant_type: 'password',
      client_id: 'other.conta',
      client_secret: 'yQPeLzoHuJzlMMSAjC-LgNUJdUecx8XO'
    },
    json: true,
    headers: HEADERS
  }

  request(options, (error, response, body) => {
    if (error) return cb(error)

    cb(null, body)
  })
}

const user = (token, cb) => {
  HEADERS.Authorization = `Bearer ${token.trim()}`
  let options = {
    url: URLS.userInfo,
    method: 'GET',
    headers: HEADERS
  }

  request(options, (error, response, body) => {
    if (error) return cb(error)

    cb(null, body)
  })
}

const bill = (token, cb) => {
  HEADERS.Authorization = `Bearer ${token.trim()}`
  let options = {
    url: URLS.billSummary,
    method: 'GET',
    headers: HEADERS
  }

  request(options, (error, response, body) => {
    if (error) return cb(error)

    cb(null, body)
  })
}

const purchases = (token, cb) => {
  HEADERS.Authorization = `Bearer ${token.trim()}`
  let options = {
    url: URLS.purchases,
    method: 'GET',
    headers: HEADERS
  }

  request(options, (error, response, body) => {
    if (error) return cb(error)

    cb(null, body)
  })
}

const accountSimple = (token, cb) => {
  HEADERS.Authorization = `Bearer ${token.trim()}`
  let options = {
    url: URLS.accountSimple,
    method: 'GET',
    headers: HEADERS
  }

  request(options, (error, response, body) => {
    if (error) return cb(error)

    cb(null, body)
  })
}

const accountFull = (token, cb) => {
  HEADERS.Authorization = `Bearer ${token.trim()}`
  let options = {
    url: URLS.accountFull,
    method: 'GET',
    headers: HEADERS
  }

  request(options, (error, response, body) => {
    if (error) return cb(error)

    cb(null, body)
  })
}

const events = (token, cb) => {
  HEADERS.Authorization = `Bearer ${token.trim()}`
  let options = {
    url: URLS.events,
    method: 'GET',
    headers: HEADERS
  }

  request(options, (error, response, body) => {
    if (error) return cb(error)

    cb(null, body)
  })
}

module.exports = {
  auth,
  user,
  bill,
  purchases,
  accountSimple,
  accountFull,
  events
}
