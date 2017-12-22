const request = require('request')

const REQUEST_HEADERS_SAUCE = {
  'Content-Type': 'application/json',
  'X-Correlation-Id': 'WEB-APP.jO4x1',
  'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36',
  'Origin': 'https://conta.nubank.com.br',
  'Referer': 'https://conta.nubank.com.br/'
}

let options = {
  url: 'https://prod-auth.nubank.com.br/api/token',
  method: 'POST',
  'Content-Type': 'application/json',
  body: {
    password: '88021963',
    login: '10454395922',
    grant_type: 'password',
    client_id: 'other.conta',
    client_secret: 'yQPeLzoHuJzlMMSAjC-LgNUJdUecx8XO'
  },
  json: true,
  headers: REQUEST_HEADERS_SAUCE
}

request(options, (error, response, body) => {
  console.log(error)
//   console.log(response)
  console.log(body)
})
