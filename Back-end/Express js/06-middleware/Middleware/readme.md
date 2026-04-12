- 
---
## Simple Middleware Example

- Middleware = runs between request and response in a server

```
Root
│
├── public/
│   └── note.html
|
├── main.js
└── README.md
```

```
//npm init -y
//npm i express@4
//nodemon main.js

const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))      //middleware

app.get('/', (req, res) => {
  res.send('Hello World!')
}).get('/about', (req, res) => {
  res.send('Hello World! about')
}).get('/contact', (req, res) => {
  res.send('Hello World! contact')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

---
## Syntax

```
// Middleware 1
app.use((req, res, next) => {
	console.log('m1')
	next()
})

// Middleware 2
app.use((req, res, next) => {
	console.log('m2')
	next()
})

// after running localhost:3000
// cl = m1
// cl = m2
```

- if `next()` of m1 ∄, server freezes. can't pass to next request.

- if `res.send("midleware 1")` ∃ in m1, endpoint

---

## Why middleware?

- modifies request, response, pass or stop

- ##### Using file system

```
const express = require('express')
const app = express()
const port = 3000

const fs = require("fs")

app.use((req, res, next) => {
	fs.appendFileSync("log.txt",` ${Date.now()} is a ${req.method} \n`) 
	console.log("LOGGED");
	req.harry = " i am being added in request"
	next()                              
})

app.get('/', (req, res) => {
	res.send('Hello World!')
}).get('/about', (req, res) => {
	res.send('Hello about')    
	console.log(req.harry);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

---

- ##### Getting all headers

	1.   `console.log(req.headers);`

```
const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
  console.log(req.headers);                      // cl -> all headers
  req.harry = " i am being added in request"     //  /about  logs it
  next()               
})

app.use((req, res, next) => {
  console.log("next midleware");
  req.harry =" now i  am changed req"
  next()                              
})

app.get('/', (req, res) => {
  res.send('Hello World!')
}).get('/about', (req, res) => {
  res.send('Hello about')    
  console.log(req.harry);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

---
- ##### Modification in headers

```
app.use((req, res, next) => {
  req.harry = " i am being added in request"
  next()               
})
```

---

- ##### Passing header to different request

```
app.use((req, res, next) => {
  req.harry = " i am being added in request"
  next()               
})

app.use((req, res, next) => {
  req.harry ="now i  am changed req"
  next()                              
})
```

---
