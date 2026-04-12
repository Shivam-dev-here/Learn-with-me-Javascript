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
})

// Middleware 2
app.use((req, res, next) => {
	console.log('m2')
})
```