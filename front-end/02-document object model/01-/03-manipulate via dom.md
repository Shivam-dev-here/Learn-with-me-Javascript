- Title: Manipulating elements via class, id, etc
- Why: 01-what's dom
- dependent on file: yes
- Other: Video no: 68
```
03-index.html
03-manipulate via dom
```

---
### Main.js
- Using variable
```
let aba = document.getElementsByClassName("box");
console.log(aba);

aba[3].style.backgroundColor = "red";
```

- Targeting via ID
```
document.getElementById("idbox").style.backgroundColor="pink";
```

- Targeting via query Selector
 
```
// applies only to first target it founds
document.querySelector(".box").style.backgroundColor="red"

// returns a NodeList, direct can't use
console.log(document.querySelectorAll)            

// to apply to each 
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "blue";
})
```

- Targeting element via TagName
```
//gives an HtmlCollection
names = document.getElementByTagName("div")
```

- Matches, Closests, Contains
```
// Matches: Finds at current position 
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "blue";
    e.matches(".box")? console.log("I am box") : console.log("This is not a box");
})

// Closests: Finds nearest matches untill root
e.closests(".container")                    //returns True

// Contains
document.querySelector(".container").contains(e[0])
document.querySelector(".container").contains(document.qyuerySelector("body"))
// Both True, contains itself + Childs
```
