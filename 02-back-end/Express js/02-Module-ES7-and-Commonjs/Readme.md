- Includes all Module concept from ES7 and Coommonjs
---

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