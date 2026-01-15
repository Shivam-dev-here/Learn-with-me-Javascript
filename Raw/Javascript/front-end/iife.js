//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// async function called() {
//     // return new Promise((reject,resolve)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(455);
//         },1000)
//     })
// }
// // let a = await called()               //ERROR await is only for async not outside onstead use

// async function main() {
//     let a = await called()
//       console.log(a);
//       return a;
// }
// // let b = await main()
// // console.log(b);
// main()
// console.log('upto 4');

// key = prompt("key");
// switch (key) {
//     case 1:var x,y=[1,2]
//     break;

//     case 2: x,y=78,[1,2];
//     break;
//     case 3: [x,y]=[22,3,4]
//     break;

//     case 4:[x,y,...rest]=[1,2,4,5,4,4,4,]
//             console.log(x,y,rest);
//     break;
//     default: console.log('read first line lazyyyyyyyyy');
//         break;
// }

// let [x,y,...rest]=[1,2,4,5,4,4,4,]
// console.log(x,y,rest);



// // Demonstrating an Immediately Invoked Function Expression (IIFE)
// (function() {
    //     console.log("This is an IIFE running!");
    // })();
    
//     var i =0;   
//     var x,y=[1,2]

    
    
    
//         if (Array.isArray(x)) {
//             for (const i in x) {
//                 if (Object.prototype.hasOwnProperty.call(x, i)) {
//                     const element = x[i];
//                 }
//             }
//         } else {
//         console.log(x,"x are",i);
//     }
// console.log('helllo start');

// if(Array.isArray(y)){
//     for (const i in y) {
//         if (Object.prototype.hasOwnProperty.call(y, i)) {
//             console.log(`Element at index ${i}:`, y[i]);
//         }
//     }
// }else{
//     console.log(y,"y are",i);
    
// }
// console.log('helllo end');


// let obj ={
//     a:1,
//     b:2,
//     c:4
// };
// let {a,b}=obj
// console.log(a,b);

function sum(a,b,c) {
    return a+b+c;
}
console.log(sum(1,2,3));


let arr=[1,2,45]
console.log(sum(...arr));

const obj={...arr}
console.log(obj);

let a='yes';
let b=78;
let c={a,b}
console.log(c);


// Example for hoisting
console.log(hoistedVar); // undefined
var hoistedVar = 10;

hoistedFunction(); // "This function is hoisted!"
function hoistedFunction() {
    console.log("This function is hoisted!");
}