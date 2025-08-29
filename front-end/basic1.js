// Function array string var let prompt confirm alert console.log loop object


// alert("I am alert");

// ---------------------------------------------------------------------------------------------------------------------------------
// console.log("it is console");

// ---------------------------------------------------------------------------------------------------------------------------------
// var a= prompt("I am prompt");

// ---------------------------------------------------------------------------------------------------------------------------------
// var isTrue=confirm("Blast")
//     if (isTrue)
//         console.log("blasting")
//     else
//         console.log("cancled")

// ---------------------------------------------------------------------------------------------------------------------------------
let obj={
    name:'Krishna', class:'2nd'
}

// ---------------------------------------------------------------------------------------------------------------------------------
// FOR LOOP
// for(let i=0;i<5;i++)
// {
//     console.log(i+1)
// }

// FOR IN
// for(const key in obj){
//     console.log(key,element)
// }

// FOR Off
// for(const c of "herry"){
//     console.log(c)
// }

// DO-WHILE
// do{
//     let x = 2;
//     x++;
// }while(x<55)

// ---------------------------------------------------------------------------------------------------------------------------------
// FUNCTION
// function go(your_name){
//     console.log("Hey "+your_name+", How are you feeling today?");
// }
// go("harry");

// function sum(a,b){
//     console.log(a+b);
// }
// sum(2.8,44);

// function sum(a,b){
//     return a+b;
// }
// console.log("sum is ", sum(2.8,44));

// const fun=(x)=>{
//     console.log("arrow fuction",x)
// }
// fun(44)

// ---------------------------------------------------------------------------------------------------------------------------------
// EXERCISE 59
// console.log(Math.random())

// ---------------------------------------------------------------------------------------------------------------------------------
// STRING

// ---------------------------------------------------------------------------------------------------------------------------------
// ARRAY
// let a=[1,2,34,45,5,7,8]
// a.forEach((value,index,arr) => {
//     console.log(value,index,arr)
// });

// ---------------------------------------------------------------------------------------------------------------------------------
// LOOP WITH OBJECT
// let obj2={a:1,b:2};
// for (const key in obj2) {
//     if (Object.prototype.hasOwnProperty.call(obj2, key)) {
//         var element = obj2[key];
//     }
//     console.log(element,key)
// }

// a=[1,2,8,4]
// for (const i of a) {
//     console.log(i)
// }

// let arr=[1,22,33,44,55]
// let arr2=[];
// for (let i = 0; i < arr.length; i++) {
//     var element = arr[i];
//     arr2.push(element**2)
// }
// console.log(arr2)
// OROROROROOROROROROOROROROROROORORROOROROROROROROROROROROROROROROROROROROOROROROROROROOROOROROROOR
// let arr=[1,22,33,44,55]
// let arr3= arr.map((e,index,arr)=>{
//     return e**2;
// })
// OROROROROOROROROROOROROROROROORORROOROROROROROROROROROROROROROROROROROROOROROROROROROOROOROROROOR
// console.log(arr3)
// var arr4=arr.map((e)=>{
//     return e**2;
// })
// console.log(arr4)

// FILTER
// let arr=[1,22,33,44,55]
// var greater_then_sever=((e)=>{
//     return e>7
// })
// console.log(arr.filter(greater_then_sever))

// REDUCE
// let arr=[1,22,33,44,55]
// const red=(a,b)=>{
//     return a*b;
// }
// console.log(arr.reduce(red))