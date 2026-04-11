- 
---
#### Get Request 

```
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log("It is a get request")
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```
## ==Checking Post Request== : NGP

1. Create a public folder 
2. inside it mypage.html with a function, let file name be x1a
3. 
```
   <script>
       async function testPost(){
            let a = await fetch("/", {method: "POST"})
            let b = await a.text()
            console.log(b);
       }
       testPost()
    </script>
```
4. 
```
app.use(express.static("public"))

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log("It is a get request")
  res.send('Hello World!')
})

app.post('/', (req, res) => {
  console.log("Hello post");
  res.send('Hello, I am post req')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

5.  Run on localhost:3000/mypage.html            file name

#### PUT Request 

1. Repeat Every steps of post request
2. `{method: "PUT"}`
3.  
```
app.put('/', (req, res) => { 
  console.log("Hello PUT");
  res.send('Hello, I am PUT req')
})
```

4. Run on localhost:3000/mypage.html 
---

## Chaining of Request

- adding next to earlier last, works same, different look

```
app.get('/', (req, res) => {
  console.log("It is a get request")
  res.send('Hello World!')
}).post('/', (req, res) => {
  console.log("Hello post");
  res.send('Hello, I am post req')
}).listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```
