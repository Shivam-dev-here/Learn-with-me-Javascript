- Title: Insert / delete element via dom
- Why: 01-what's dom
- dependent on file: yes
- Other: Video no: 71
```
04-index.html
04-insert delete element
```

---
### Get Contents

- Get inner html
```
document.querySelector(".box").innerHtml
document.querySelector(".container").innerHtml
```

- Get Outer html
```
document.querySelector(".container").outerHtml
```

- Get tagName and nodeName
```
document.querySelector(".container").tagName             // only returns element
document.querySelector(".container").NodeName            // also comment, text
```

- Get only textContent
```
document.querySelector(".container").textContent       // returns all text, minus
```

- Get all Attributes
```
document.querySelector(".container").attributes
```

- Get classname & classlist ==+ many more opr on list==
```
document.querySelector(".container").classList
document.querySelector(".container").className


document.querySelector(".container").classList.add("added")
document.querySelector(".container").classList.remove("added")
document.querySelector(".container").classList.toggle("added")   //on>off | off>on
```
### Manipulate Content

- Inner Html
```
document.querySelector(".box").innerHtml = "You'r changing me"
```

- remove Attributes
```
document.querySelector(".box").removeAttribute("Style")
```

- ###### Append ==+ Many more read all==, 
  when want to insert the data without reloading site
```
let newSpan = document.createElement("span")
newSpan.innerHTML = "Hey i am inner"
newSpan.setAttribute("class", "created")
document.querySelector(".container").append(newSpan)
newSpan.style.color("pink")

// prepend, before, after, replacewith
```

- ##### insertAdjacentHTML ==+ mANY MORE ==
```
let cont = document.querySelector(".container")
cont.insertAdjacentHTML("afterend", "hwy bro, <b> I ahave been deketed yeeee</b>")
```

### Other 
- hidden
```
document.querySelector(".container").hidden ="True"            // Applies
```

- has, get, & set attribute
```
// has Attributes = TF
 document.querySelector(".box").hasAttribute("style")
 
// get Attrubutes =   Returns Asked
 document.querySelector(".box").getAttribute("style")    
 
// set Attributes = Manipulates it   
 document.querySelector(".box").setAttribute("style", "display:inline")
```

- DesignMode
  on any browser's console writing this enables us to edit it in bit
```
document.designMode = "on"
```

- Data set
  a way to store info
```
document.body.childNodes[1].lastElementChild.dataset
```