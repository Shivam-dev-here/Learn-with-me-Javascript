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

###  ==#== Classes: More with Constructor

```
// In constructor
  constructor(name) {
    this.name = name
  }
  
// When Crating
let a = new Animal("Bunny");
```

###  ==#== Classes: Extend class

- Understand

```
class Animal {
  constructor(name) {
	this.name = name
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

class Lion extends Animal{
}
let b = new Lion("MeoChan");
console.log(b);
```

- Better 

```
class Animal {
  constructor(name) {
	this.name = name
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

class Lion extends Animal{
  constructor(name) {
    console.log("object is being created as LION....");
  }
}
let b = new Lion("MeoChan");
console.log(b);

// -> Gives Error, Call super
```

- Final

```
class Animal {
  constructor(name) {
	this.name = name
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

class Lion extends Animal{
  constructor(name) {
	super(name)
    console.log("object is being created as LION....");
  }
}

let a = new Animal("Rabbit")

let b = new Lion("MeoChan");
console.log(b);
```

###  ==#== Classes: Extend class

```
// for above example

in Console ->>
b instanceof Lion            // T
b instanceof Animal          // T
a instance of Animal         // T
a instance of Lion           // F
```

##  ==#== Method Overriding

- Overriding a function of Superclass via Subclass

```
class Animal {
  constructor(name) {
	this.name = name
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

class Lion extends Animal{
  constructor(name) {
	super(name)
    console.log("object is being created as LION....");
  }
  eats() {
  console.log("Roar eats and Roar")
  }
}
let b = new Lion("MeoChan");
console.log(b);
```

##  ==#== Super Keyword

- Using = calling both Superclass and Subclass function of same name

```
class Lion extends Animal{
  constructor(name) {
	super(name)
    console.log("object is being created as LION....");
  }
  eats() {
  super.eats()
  console.log("Roar eats and Roar")
  }
}
```


##  ==#== Getter & Setter

```
class User{
    constructor(name){
        this.name = name    // Setter
    }
    get name(){
        return this._name;
    }
    set name(value){
        if (value.length < 5){
            console.log("Too short name");
            return
        }
        this._name = value;
    }
}

let user = new User("Shivam");
console.log(user.name);

user.name = "Harryii"
console.log(user);
```



# Other
- Read Notes
- Static Method