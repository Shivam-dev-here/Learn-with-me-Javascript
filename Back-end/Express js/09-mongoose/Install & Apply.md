
---
### Why Mongoose

- Raw beginner friendly package  [nmp mongodb](https://www.npmjs.com/package/mongodb) 

- Disadvantage of MongoDB  (follows no Schema, in name submits numbers)
- Advance is Mongoose
---
### Install
1. npm init -y
2. npm i mongoose
3. .json  ``` "type":module,   ```
4. .js  import mongoose from "mongoose";`

---

---

# Initialize a Server

- Connection String: `mongodb://localhost:27017/` get via right click on connected connection

```
import mongoose from "mongoose";
import express from "express";

let a = await mongoose.connect("mongodb://localhost:27017/")

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

---











## Heading

```
Root
├── Moduls/
│   └── Todo.js
├── main.js
└── README.md
```

---











### Todo.js
- [Mongoose](https://mongoosejs.com/docs/index.html)
1. Copy kitten code (Schema function)
2. const Kitten = mongoose.model('Kitten', kittySchema);  (export)
---
### main.js
1. import
2. db connect
3. express server + Todo entry
4. save

- [ ] Schema types
- [ ] type key
- [ ] schema opr
- [ ] 