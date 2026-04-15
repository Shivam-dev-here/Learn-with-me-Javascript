
Description later

---
## ==PART: 1== Using Bootstrap

- Create

```
Root
├── template/
│   └── index.html
├── main.js
└── README.md
```

- From Documentation [bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/) add to `/templates/index.html`
- It is: links to use js and CSS from it via connecting to it's site 

```
<head><link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous"></head>
<body><h1>Hello, world!</h1><script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script></body>
```

---
#### ==Nav bar via bootstrap==

1. Go to [nav ](https://getbootstrap.com/docs/5.3/components/navbar/)
2. Copy nav bar
3. Paste at `templates/index.html`
4. Run `index.js`
### Passing the above file `index.html` to `main.js`

```
app.get('/', (req, res) => {
	res.sendFile('template/index.html', {root: __dirname})          
})
```

1. Add to `main.js`
2. Run `main.js`
3. Output at : `http://localhost:3000/`

---
## ==PART: 2== Embedded JavaScript

### Why Ejs

 - Example: Show 100 students name from server to a Html file.

   1. Manual, type manually, if change in server = manual html file change
   2. Ejs : connect server to Html (automatic changes Ejs with express)
### Initialize Ejs

- `npm install ejs`
- Learn Ejs with Express Js [Github](https://github.com/mde/ejs/wiki/Using-EJS-with-Express) (bcoz site docs = confusion)

- Add `app.set('view engine', 'ejs');` to `root/main.js`

 -  Basic cmd	 

```
	 npm init -y
	 npm install ejs nodemon
```

### Use Ejs
```
Root
├── views/
│   └── index.ejs
├── main.js
└── README.md
```

- `res.sendFile`  sends file but not data and variable
- `res.render` Use: render a new file

1. `main.js`

```
const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    let title = "Ejs with express blog"
    let value = 34
    let arr = [2,3,4,"Hello bro"]
    // console.log(req.params.slug);
    res.render("index", {title:title, value:value, arr})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

2. `views/index.ejs`
	- `<%= foo %>` : way to pass a variable via Ejs.

```
// Change the title via <%= foo %>

<a class="navbar-brand" href="#"><%= title %></a>
```


3. Output
	- Earlier
		![[Pasted image 20260415215805.png]]
	- Now
		![[Pasted image 20260415215646.png]]



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