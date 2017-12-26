<p align="center">
  <img src="https://raw.githubusercontent.com/nulldreams/node-bank/master/box.png" alt="Size Limit example"
       width="20%" height="20%">
</p>
<h4 align="center">A simple API for <a href="https://www.nubank.com.br/" target="_blank">Nubank</a></h4>
<p align="center">
  <a href="https://gitter.im/simple-apis/node-bank"><img src="https://img.shields.io/badge/gitter-join%20chat%20%E2%86%92-brightgreen.svg"></a>
  <a href="https://saythanks.io/to/nulldreams">
      <img src="https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg">
  </a>
</p>
<p align="center">
  <a href="#routes">Routes</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#download">Download</a> •
  <a href="#credits">Credits</a> •
  <a href="#related">Related</a> •
  <a href="#license">License</a>
</p>

# node-bank
A Nubank API in NodeJS

## Routes
* `POST /user/:token`
send a json
```json
{
	"cpf": "__cpf",
	"pass": "__pass"
}
```
and get the token in `access_token`
```json
{
    "response": {
        "access_token": "__token",
        "token_type": "bearer",
...        
```

* `GET /bill/:token`
```json
{
    "data": {
        "bills": [
            {
                "state": "future",
                "summary": {
                    "payments": "0",
                    "interest_charge": "0",
                    "total_international": "0",
                    "due_date": "2018-11-11",
                    "precise_minimum_payment": "0",
                    "interest_reversal": "0",
                    "close_date": "2018-11-04",
                    "expenses": "23",
                    "total_credits": "0",
                    "past_balance": 0,
                    "effective_due_date": "2018-11-12",
                    "international_tax": "0",
                    "tax": "0",
                    "adjustments": "0",
                    "precise_total_balance": "23",
                    "total_financed": "0",
                    "total_balance": 9999,
                    "interest_rate": "0.12",
                    "total_national": "9999",
                    "previous_bill_balance": "0",
                    "interest": 0,
                    "total_cumulative": 9999,
                    "paid": 0,
                    "fees": "0",
                    "total_payments": "0",
                    "minimum_payment": 0,
                    "open_date": "2018-10-04",
                    "total_accrued": "0"
                }
            },
```

* `GET /purchases/:token`
```json
{
    "data": {
        "transactions": [
            {
                "category": "serviços",
                "amount": 9999999,
                "tags": [],
                "chargebacks": [],
                "precise_amount": "9999999.99",
                "time": "2017-05-11T20:25:49Z",
                "charges": 1,
                "original_merchant_name": "Amazon web services",
                "postcode": "99999",
                "type": "card_not_present",
                "mcc": "serviços",
                "expires_on": "2017-05-18",
```

* `GET /me/:token`
```json
{
    "data": {
        "account": {
            "payment_method": {
                "account_id": "--xx",
                "kind": "boleto"
            },
            "due_day": 11,
            "product_id": "--xx",
            "limit_range_min": 999999,
            "current_interest_rate": "0.12",
            "precise_credit_limit": "9999",
            "next_due_date": "2018-01-11",
            "status": "active",
            "id": "--xx",
            "cards": [
                {
                    "member_since": "2016-04",
                    "status": "active",
                    "type": "credit_card_physical",
                    "card_number": "",
                    "good_through": "2099-04",
                    "status_detail": "active",
                    "id": "--xx",
                    "product_id": "--xx3"
                }
            ],
            "barcode_id": "--xx",
            "limit_range_max": 999999,
            "request_id": "--xx",
            "customer_id": "--xx",
            "credit_limit": 000000
        }
    }
}
```

* `GET /account/:token`
```json
{
    "data": {
        "account": {
            "payment_method": {
                "account_id": "--xx",
                "kind": "boleto"
            },
            "due_day": 11,
            "product_id": "--xx",
            "available_balance": 999999,
            "temporary_limit_amount": 0,
            "limit_range_min": 30000,
            "future_balance": 999999,
            "current_interest_rate": "0.12",
            "precise_credit_limit": "4600",
            "next_due_date": "2018-01-11",
            "interest_rate": 0.12,
            "status": "active",
            "id": "--xx",
            "balances": {
                "future": 999999,
                "open": 9999,
                "due": 0,
                "prepaid": 0,
                "available": 999999
            },
```

* `GET /events/:token`
```json
{
    "data": {
        "events": [
            {
                "description": "Blizzard Entertainment",
                "category": "transaction",
                "amount": 2731,
                "time": "2017-12-22T08:32:19Z",
                "title": "lazer",
                "details": {
                    "fx": {
                        "currency_origin": "USD",
                        "amount_origin": 750,
                        "amount_usd": 750,
                        "precise_amount_origin": "7.5",
                        "precise_amount_usd": "7.5",
                        "exchange_rate": 3.4226666666666667
                    },
                    "subcategory": "unknown"
                },
                "id": "--xx",
                "_links": {
                    "self": {
                        "href": "--xx"
                    }
                },
                "href": "--xx"
            },
```
