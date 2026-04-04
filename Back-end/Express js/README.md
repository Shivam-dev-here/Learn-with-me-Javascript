---

---
- Includes all backend concept
---
# Other

1. in terminal -> node {file name ex: serve} + s + Tab => node ./server.js

---
# Server

- #### Server Format

```
const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

- ### Common js

```
const { createServer } = require('node:http');
```

- ### EcmaScript 7

```
import http from "http"
   + 
L5 package.json add "type":"module",
```

- #### Text / Html

```
//Plain text
res.writeHead(200, { 'Content-Type': 'text/plain' });
res.end('Hello World!\n');

//Html text
res.writeHead(200, { 'Content-Type': 'text/html' });
res.end('<h1>Hello World!</h1>\n');
```

---
