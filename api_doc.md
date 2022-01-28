# Documentation

## Endpoints :

List of available endpoints:

- 'GET /datas'

- 'POST /login'
- 'POST /register'

&nbsp;

&nbsp;

## 1. GET /datas

Description check all data from database to be used later

_Response (200 - OK)_

```json
[
    {
        "genre_ids": [
            35,
            18,
            10749
        ],
        "original_language": "en",
        "original_title": "Moonrise Kingdom",
        "poster_path": "/y4SXcbNl6CEF2t36icuzuBioj7K.jpg",
        "video": false,
        "vote_average": 7.7,
        "id": 83666,
        "overview": "Set on an island off the coast of New England in the summer of 1965, Moonrise Kingdom tells the story of two twelve-year-olds who fall in love, make a secret pact, and run away together into the wilderness. As various authorities try to hunt them down, a violent storm is brewing off-shore – and the peaceful island community is turned upside down in more ways than anyone can handle.",
        "release_date": "2012-05-16",
        "title": "Moonrise Kingdom",
        "adult": false,
        "backdrop_path": "/bsYv9IFIGfpAV0oUbe7YTiyxhox.jpg",
        "vote_count": 4721,
        "popularity": 18.937
    },
    {
        "adult": false,
        "backdrop_path": "/uslmOwQpdRRUwr6AmBP6JdzeHjS.jpg",
        "genre_ids": [
            18,
            53,
            80
        ],
        "vote_count": 10033,
        "original_language": "en",
        "original_title": "Drive",
        "poster_path": "/602vevIURmpDfzbnv5Ubi6wIkQm.jpg",
        "title": "Drive",
        "video": false,
        "vote_average": 7.6,
        "id": 64690,
        "overview": "Driver is a skilled Hollywood stuntman who moonlights as a getaway driver for criminals. Though he projects an icy exterior, lately he's been warming up to a pretty neighbor named Irene and her young son, Benicio. When Irene's husband gets out of jail, he enlists Driver's help in a million-dollar heist. The job goes horribly wrong, and Driver must risk his life to protect Irene and Benicio from the vengeful masterminds behind the robbery.",
        "release_date": "2011-08-06",
        "popularity": 66.605
    }
]

## 2. POST /login

Request:

- body

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "access_token": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Password is required"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email/password"
}
```

&nbsp;

## 3. POST /register

Request:

- body

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (201 - Created)_

```json
{
  "id": 19,
  "email": "user10002@mail.com"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email cannot be empty"
}
OR
{
  "message": "Email format is wrong"
}
OR
{
  "message": "Password cannot be empty"
}

```

&nbsp;

## Global Error

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```
