- Title: Selecting parents, sibling, child passing via DOM
- Why: 01-what's dom
- dependent on file: yes
- Other: Video no: 67
```
02-index.html
02-select via dom
```

---
### Console
1. Targeting Elements
```
document.body
document.body.childNodes
document.body.childNodes[0]
document.body.childNodes[1].childNodes
```

2. Why txt is first child?
 - text is space between
```
document.body.childNodes[1].childNodes
gives text why? 

<div class="container">   <<here>>
       <div class="box">box 1</div>
```

 - Remove space
```
<div class="container"><div class="box">box 1</div>
```
 
 - best ways is to ask
```
 document.body.childNodes[1].firstElementChild
```

3. Now selecting with variable
```
let cont = document.body.childNodes[1]

cont.firstChild
cont.lastChild
```

4. More examples

```
let cont = document.body.childNodes[1]
cont.lastElementChild.style.color = "red";
cont.lastElementChild.style.backgroundColor = "green";
```

5. Get parent Element
```
let cont = document.body.childNodes[1]
cont.lastElementChild.parentElement
```

6. Get sibling child
```
document.body.firstElement.Child.childNodes
document.body.firstElement.Child.children            gives only element

document.body.firstElement.Child.children[3].previousElementsibling    
```

---
### before NEXT

Read DOM section of Harry's Notes + Try  Table Selection Dom