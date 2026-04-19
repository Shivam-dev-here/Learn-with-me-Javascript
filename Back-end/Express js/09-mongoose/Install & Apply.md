
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
## Creating a Schema


```
Root
├── Moduls/
│   └── Todo.js
├── main.js
└── Install & Apply.md
```

- Todo.js

```
import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  title: String,
  task: String,
  isDone: Boolean,
  days:Number
});

export const  Todo = mongoose.model('Todo', TodoSchema);
```

- main.js

```
import {Todo} from "./Models/Todo.js"
	app.get('/', (req, res) => {
	
	const todo = new Todo({title:"Water tank", task:"Research, buy req, implement, 
	show result", isDone:"false"})
	todo.save()                                             // saved in db
	res.send('Hello World!')
})
```

- After a Run: creates Documents inside "Todo Connection" per reload 
- ∀ wring insertion `E.g. number -> inserting string` generates error.

---

## Using Object as Schema with default value

- Todo.js

```
const TodoSchema = new mongoose.Schema({
	newtitle: {type: String, required = true, default:"Don't miss"},
});
```

- main.js

```
app.get('/', (req, res) => {
	const todo = new Todo({task:"Research,implement, show result", isDone:"false"})
	todo.save()
	console.log(Todo)
	res.send('Hello World!')
})
```

- In Documents: we get a doc with default given title.

---
# Other to read

- [ ] Schema types
- [ ] type key
- [ ] schema opr
- [ ] 