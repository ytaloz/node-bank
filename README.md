# no-bank
A Nubank API in NodeJS

### `POST /user/:token`
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

### `GET /bill/:token'`

### `GET /purchases/:token'`

### `GET /me/:token'`

### `GET /account/:token'`

### `GET /events/:token'`
