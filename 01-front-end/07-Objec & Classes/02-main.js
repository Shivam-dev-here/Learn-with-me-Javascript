// Concept of Getter & Setter

class User{

    constructor(name){
        this.name = name    // Setter
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
