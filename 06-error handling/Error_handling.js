// > checks input is int or not
// > Catch error for adding int or string
// > Outputs error as console
// > 4 > Using error and catch with error
// > 5 > Use of ParseInt


// > checks input is int or not

// let a = prompt("Enter a number");   //string
// if (isNaN(a)) {
//     console.log('yes, not an int');
// }
// else {
//     console.log('no, its int');
// }

// > Catch error for adding int or string

// let choice = prompt("SUM(Choose 1: Int, anything else for String)")
// a = prompt("Enter a");   //string
// b = prompt("Enter b");
// if (choice == 1) {
//         sum2 = parseInt(a) + parseInt(b);
//         if (isNaN(sum2)) {
//         console.log('Only Int please');
//     }
//     else {
//         console.log(sum2);
//     }
// }
// else {
//         sum = a + b;
//         console.log(sum);
//     }

// > Outputs error as console

// a = prompt("Enter a");   //string
// b = prompt("Enter b");
// sum2 = parseInt(a) + parseInt(b);
// try{
//     console.log(sum2);
// }
// catch(error){
//     console.log(error);
// }
// finally{
//     console.log("Sooner or later")
// }


// > 4 > Using error and catch with error

// a = 77;
// b = -88;
// async function sum2(a, b) {
//   await console.log(sum());

//   function sum(a, b) {
//     sum = a + b;
//     try {
//       c = 1;
//       return sum;
//     } 
//     catch (error) {
//     } 
//     finally {
//       if (c == 1) {
//         console.log("Error to nhi aaya na bro");
//       } else {
//         console.log("Error aagaya bro");
//       }
//     }
//   }
// }
// sum2(a, b);

// > 5 > Use of ParseInt

// other are 
// parseFloat() → for decimal input
// +a + +b → shorthand number conversion
// Number() → safest and clear (recommended)

// a = prompt("Enter a");   //string
// b = prompt("Enter b");

// let sum2 = parseInt(a) + parseInt(b);
// let sum=a+b;
// console.log("with parse int", sum2*44);
// console.log("without parse int", sum*44);


var a = 77;
var b = -88;
function sum(a,b) {
    let sum2 = parseInt(a) + parseInt(b);
    // sum=a+b;
    try{
        c=1;
        console.log(sum2*56);
        return sum2;
    }
    catch(error){
    }
    finally{
        if(c==1){
            console.log("Error to nhi aaya na bro");
        }
        else{
            console.log('Error aagaya bro');
        }
    }
}
console.log(sum(a,b));
console.log(c);
