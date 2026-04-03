let aa1 = 3;

// > 1 > Async/Await + Promise misunderstanding
// > 2 > Sollution 1
// > 3 > Sollution 2
// > 4 > IIFE
// > 5 > Sollution 3
// > 6 > Destructuring of arr
// > 7 > Destructuring of obj
// > 8 > Hoisting
// > 9 > Other


// > 1 > Async/Await + Promise misunderstanding

// async function called() {
//     // return new Promise((reject,resolve)=>{   // name doesnt affects, ∵ Position fixed
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(455);
//         },1000)
//     })
// }
// let a = called() // Fuction ends before setTimeout runs
// console.log(a);


// > 2 > Sollution 1

// async function called() {
//     // return new Promise((reject,resolve)=>{   // name doesnt affects, ∵ Position fixed
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(455);
//         },1000)
//     })
// }

// async function main() {
//     let a = await called()
//       console.log(a);
//       return a;
// }
// main()


// > 3 > Sollution 2

// async function called() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(455);
//         },1000)
//     })
// }
// called().then(console.log);

// > 4 > IIFE = Immediately Invoked Function Expression
// Creates function that runs immediately after definition
// (function() {
//     console.log("This is an IIFE running!, last braces of defination cause it to run");
// })();

// > 5 > Sollution 3

// async function called() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(455);
//         },1000)
//     })
// }
// (async function main(){
//     let a = await called()
//     console.log(a);
// })()                                    //() runs it, else before part is defination



// > 6 > Destructuring of arr

// key = Number(prompt("key"));
// switch (key) {
//     case 1:var x,y=[1,2]
//     console.log(x,y);           // comma is seperating variables = intialize to y. so x is undefined
//     break;
//     case 2: [x,y]=[22,3,4]
//     console.log(x,y);
//     break;
//     case 3: x,y=78,[1,2];
//     console.log(x,y);            // comma is seperating variables = intialize to y. so x is undefined
//     break;
//     case 4:[x,y,...rest]=[1,2,4,5,4,4,4,]
//             console.log(x,y,rest);
//     break;
//     case 5:let dibba = [1,2,3,4]
//               khula = {...dibba} 
//             console.log(khula);
//     break;
//     default: console.log('Number do');
// }


// > 7 > Destructuring of obj

// let box = {
//     background:'blue',
//     height:23,
//     width:45
// }
// let {background,height} = box


// > 8 > Spread Syntax

// function sum(a,b,c=0){
//     return a+b+c
// }
// let arr = [1,2,3];
// console.log(arr[0]+arr[1]+arr[2]);
// console.log(sum(arr[0],arr[1],arr[2]));
// console.log(sum(...arr));


// > 8 > Hoisting 
    // a > define 
    // b > function Example
    // c > function with variable exmaple

// // Example for hoisting
// console.log(hoistedVar); // undefined ∵  declared later but in function
// var hoistedVar = 10;

// hoistedFunction(); // "This function is hoisted!"
// function hoistedFunction() {
//     console.log("This function is hoisted!");
// }

// function hoisting(){
//     console.log(b);
//     var a                      // Hoisted = declaration moves to L1 of function automatic
//     var b = 66                 // Value remains at its pos 
// }
// hoisting()


// > 9 > Other
// read notes
// Uunknow concept


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