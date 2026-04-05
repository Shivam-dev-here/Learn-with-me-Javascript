- Includes all taught concept related to Express js
---
### Why

 - Http module have limited boundaries, beyond them custom code starts.
 - Express js is a web frame work, prewritten functions like modules.
 - Security in server starts from initial state, Express js helps there a lot.
 - Documentation [Express Js](https://expressjs.com/en/guide/routing.html)

### Install

```
npm i express@4
```

# Server

```
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {          //(path, handler)
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

- ###### Functions
   app.get   app.post    app.push    app.delete

- Path & handler
   1. path means, at that webpage what the site should show
   2. Example: 
	- let server hosting at port 3000
	- URL parameters: /bog & /about 
	- output from URL http://127.0.0.1:3000/blog => "blog hu mai"
	- output from URL http://127.0.0.1:3000/about => "about hu mai na"
	- output from URL http://127.0.0.1:3000/cookie => "Cannot get /cookie"

```
app.get('/about', (req, res) => {                           
   res.send('about hu mai na') 
})

app.get('/bog', (req, res) => {                             
   res.send('blog hu mai') 
})
```


### Problem

- Do we have to create functions ∀ webpage will E in our website?
### Solution

- NO, use express js (slug)
- Example:
	1. output from URL http://127.0.0.1:3000/about => "Hello about"
	2. output from URL http://127.0.0.1:3000/about/contact => "Hello about and contact"

```
// Single Variable

app.get('/:slug', (req, res) => {
   res.send(`Hello ${req.params.slug}`)
})

  
// Multiple Variable

app.get('/:slug/:sec', (req, res) => {                                             
   res.send(`Hello ${req.params.slug} and ${req.params.sec}`)
})
```

### Params & Query

- URL: http://127.0.0.1:3000/about?mode=dark&region=in

   1. `console.log(req.params)`   =>   { slug: 'about' }
   2.  `console.log(req.query);`  =>   { mode: 'dark', region: 'in' }

### Static Files

- Express Js have good security, does not allow direct access.
- Want to share a message.txt file E in root folder to everyone
- add `app.use(express.static('public'))`

```
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

- ##### Problem

- URL: http://localhost:3000/message.txt
   1. if user is able to get "BLUNDER" ? ∵ Now he have access to package.json, etc.
   2. if not, "Safe"

- ##### Solution

   1. Create a Folder with "Public"
   2. add message.txt in Public
   3. Run: http://localhost:3000/message.txt
   4. That file will be served as Static File