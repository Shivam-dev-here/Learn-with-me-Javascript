---

---

Description on ejs and its prop

---
## Root Folder
- views
	1. index.ejs             (Bootstrap demo)
	2. deleteme.ejs      (for loop links)
- main.js                         (ejs template example)
- deleteme.js                 (Shorthand concept)
- Note
---
#### Old Root Folder
- template 
	1. index.html          (Bootstrap demo)
- main.js                         (ejs template example)
- Notes.md 

---

#### BOOTSTRAP
 - index.html : includes css js links
- Path : getbootstrap -->  Docs  --> copy(css,js:link)
                 -->  Components  > Nav, btn, (copy:paste)
 
---
```
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log("second comment");
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log("First comment");
})
```

---
## Initializing main.js with Ejs 
 - Embeded Javascript
    Example: Show 100 students name from server to a Html file.
	1. Manual, type manually, if change in server = manual html file change
    2. Ejs : connect server to Html (automatic ejs with express)
    Teaches ejs with express [Github](https://github.com/mde/ejs/wiki/Using-EJS-with-Express)
	3. 
 -  Basic cmd
	 ```
	 npm init -y
	 npm install ejs nodemon
	 app.set('view engine', 'ejs');
	 ```
- `res.sendFile`  sends file not data, variable
- `res.render` does
# CHANGES

templates --> view (ejs uses view as folder)
template  --> removed from res.sendFile,rander
index.html --> index.ejs

used in index.ejs <%= foo %>  L:14, L:43
used arr too L:24

Excluding Nav bar, using ejs
create a another file with navbar.ejs wthin views
put <%- include('navbar');  %> in index to link with overwrite

# Object Property Shorthand Concept

👉 **EJS runs BEFORE the browser loads the page**  
👉 `<script>` runs **AFTER the page is sent to the browser**

- Task : 
	- using shorthand prop to serve many links via for loop in ejs
- Working:
	1. pass links as obj via js
	2. create `foo` in ejs
	3. Run