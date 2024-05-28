# Optimistic URL Shortener 

## Installation 
This is NodeJS, Express, TypeScript project.

```
$ npm install
```

## Running the application
There are two ways how to run the application. 

1. Development mode
```
$ npm run dev
```

2. Production mode
```
$ npm run build
$ node dist/index.js
```

## API

### GET /

Get request returns status to see if an application is running  
```json
{
    "data": {
        "status": "online"
    }
}
```

### GET /:shortUrl
Get request returns payload given `shortUrl` matches long URL
```json
{
    "data": {
        "url": "http://www.example.com",
        "status": "success"
    }
}
```


### POST /shorten
Post request for generating short URL

Request payload
```json
{
    "data": {
        "url": "http://www.example.com"
    }
}
```

Response payload

```json
{
    "data": {
        "status": "completed",
        "url": $SHORT_URL
    }
}
```