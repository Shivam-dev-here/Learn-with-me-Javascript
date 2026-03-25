- Title: object oriented programming
- Why: Classify things into common, reduces complexity
- dependent on file: yes
- Other: Video no: 80
```
01-index.html
01-object & classes.md
01-main.js
```

---

##  ==#== Object :
- definition: A real world entity.
- imp: in js, objects gets some prototype (properties) by default. 
- Custom Prototype:
``` 
let animal ={
    eats: true
}
let rabbit ={
    jumps: true
}

rabbit.__proto__ = animal
console.log(rabbit);
```

##  ==#== Classes:
- Definition: A blueprint for instance
- Constructor: A bot classify objects its function when object are created, more after this
```
class Animal {
  constructor() {
    console.log("object is being created....");
  }
  eats() {
    console.log("khane do");
  }
  runs() {
    console.log("Sab milke bhago");
  }
  dance() {
    console.log("No Dance");
  }
}

let a = new Animal();

// in console try -> a.runs()
```

##  ==#== Classes: More with Constructor

```
// In constructor
  constructor(name) {
    this.name = name
  }
  
// When Crating
let a = new Animal("Bunny");
```