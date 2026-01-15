# File Root
- template --> index.html (Bootstrap demo)
- main.js  --> eje template
- Notes.md --> Root

---

BOOTSTRAP
Template --> index.html

getbootstrap >  Docs  > copy(css,js:link)
             >  Components  > Nav, btn, (copy:paste)

---

main.js > 1.. Basic cmd
          2.. npm install ejs
          3.. Teaches ejs with express [Github](https://github.com/mde/ejs/wiki/Using-EJS-with-Express)
		  4.. app.set('view engine', 'ejs');
	
          ejs is Embeded Javascript, templates, 
            Example: Show 100 students name from server to a Html file.
                M1: see, type manual, change in server = manual html file change
                M2: connect Server to Html (automatic ejs with express)
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