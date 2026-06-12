description

---
# Dynamic Routing

- Example: 50 pages exist for blogposts
- Via a single route we connect all

---
## Slug routing Dynamic Route

- 2nd Commit

1. `Root/app/blog/page.js`
2. `Root/app/blogpost/[slug]/page.js`

- URL: `http://localhost:3000/blogpost/Dynamic-Route`
- Output: `My Post: Dynamic-Route`

- 3rd Commit

1. Condition based slug route

---
## Custom Design 404 Not-Found Page

- `Root/app/not-found.js`

---
## Custom Error

1. `Root/app/blogpost/[slug]/page.js`
	- `throw new Error("Error: Who creates error on error free sitr, Seriously?")`
2. `Root/app/error.js`

---
## Catching all Dynamic Routing 

- URL: `http://localhost:3000/about/cpp/python/about/clear`

- Output:

1. Front-end: Also at Console   `["cpp","python","about","clear"]`
2. Console Client:  
	`Server  (4) ['cpp', 'python', 'about', 'clear']` 
	`Server  (4) ['cpp', 'python', 'about', 'clear']`

---
