// let animal ={
//     eats: true
// }
// let rabbit ={
//     jumps: true
// }

// rabbit.__proto__ = animal
// console.log(rabbit);

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

let a = new Animal("Bunny");
console.log(a);

class Lion extends Animal{
}
let b = new Lion("Meo");
