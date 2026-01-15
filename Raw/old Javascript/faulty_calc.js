console.log("Hello World");
console.log("You are Using advance Calc");

let a=20;
let b=30;
    console.log("\n Input 1: Add, 2: Subtract, 3:Multi, 4: divide, 5: exit \n");

    // case value --Choice

    switch(x)
        {
            case 1: if(Math.random()<0.1)
                console.log("Sum is" + a + b);
                else
                    console.log("Sum is" + a - b);
            break;

            case 2: if(Math.random()<0.1)
                console.log("Sub is" + a - b);
                else
                    console.log("Sub is" + a / b);
            break;

            case 3: if(Math.random()<0.1)
                console.log("Mult is" + a * b);
                else
                    console.log("Mult is" + a + b);
            break;

            case 4: if(Math.random()<0.1)
                console.log("Divide is" + a + b);
            else
            console.log("Sum is" + a * b);
        break;
        
        case 4: exit(0);    
        break;

        default : console.log("Invalid key");
}








    // object Node. 6---write javascript to valid the following field in the registration form

    // name, (name should contain alpfabet and lenght should not be more then 6 char)
    // password(lenght not more then 6 char)