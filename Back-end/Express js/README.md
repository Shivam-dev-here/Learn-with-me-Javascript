---

---
- Includes all backend concept
---
# Server

---
### Node js
- install
- [Node js Doc](https://nodejs.org/docs/latest/api/synopsis.html)
- Node version manager: use multiple different version of node js on same system
1. `npm install 16`
2. `npm use 16`

### Npm project
###### initialize npm project
- npm init -y -> step 2
- npm init    -> step 1
1. answer all 
2. result        => package.json
###### Express js
- Use: to create backend applications
- Terminal: `npm install express --save`
- Documentation: [Express js](https://expressjs.com/)
###### Packages
- install
  npm install slugify => node modules>slugify + package-lock.json
- Delete
  node_modules can be deleted
  Recover: `npm install`
###### Using Slug
- file path JavaScript\Back-end\Express js\01-intro to server\use_slug.js
- Documentation: [Slugify](https://www.npmjs.com/package/slugify)
- npm init -y
- npm i slugify
- run js file
```
var slugify = require('slugify')         // Old: DON'T USE
import slugify from 'slugify';           // NEW
```

###### Using nodemon
- `npm install nodemon`
- `nodemon server.js`
- Use: auto restarts server for any change

---
# Other

---

1. in terminal -> node {file name ex: serve} + s + Tab => node ./server.js



## Server.js

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

- ###### Creating Modules via common js

   1. File name: "module.js"

```
module.exports = {
a:5,
b:6
}

let xy = 69;
module.exports = c;
```

   2. File name: "main.js"

```
const a = require("module.js")
console.log(a)
```

- ### EcmaScript 7

```
import http from "http"
   + 
L5 package.json add "type":"module",
```

- ###### Creating Modules via ES7

   1. File name: "mymodule.js"

```
// Named Export

export const a = 5
export const b = 7

let obj;
const obj = {
   x:6,
   y:7
}

// Default Export

export default obj;
```

   2. File name: "main.js"

```
import {a,b} from "mymodule.js"
console.log(a,b)

import harry from "mymodule.js"
console.log("obj")   
// here harry = ✗ but ∵ export is default, ∀ name it works
```

- ### Using modules on index.html

   1. File name: "mymodule.js"

```
<script type="module" src="mymodule.js"></script>

// We get a console from mymodule.js as console.log(a,b) i.e. obj{5,7}

```

- ### How module, require, etc working??
   1. for any modules in js it wraps the whole code in a function
   2. Function is: 

```
(function(exports, require, modules, __filename, __dirname){
// Module code
});
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