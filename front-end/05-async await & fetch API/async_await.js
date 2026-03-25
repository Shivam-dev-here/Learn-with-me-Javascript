// Using Data even before Dowloading results> painding Promise

// console.log('Initializing');
// console.log('Loading the data source');

// function GetData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('Dowloading Data');
//         },3500)
//     }) 
// }

// let data=GetData();
// console.log('above');

// console.log(data);
// console.log('below');

// console.log('Above promise is pending> the data will load after 3.5 seconds but the process who need that daat is already intiated');

// console.log('Processing Data');

// Using .then functionto wait untill Data loads to use

// console.log('Initializing');
// console.log('Loading the data source');

// function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Dowloading data');

//             resolve(333);     //RESOLVE IS MOST IMPORTANT
//         }, 3500)
//     })
// }

// let data = getData();
// console.log('above');

// data.then((V) => {
//     console.log(data);
//     console.log('Using .then fuction')
//     console.log('below');

//     console.log('Processing Data');
// })           

// Using Async await to wait untill Data loads to use > ----asynch fuction start working from begining of execution

// console.log('Initializing');
// console.log('Loading the data source');

// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Dowloading data');

//             resolve(333);     //RESOLVE IS MOST IMPORTANT
//         }, 3500)
//     })
// }
// async function main() {
//     let data = await getData();          //Await is used to stop below untill data is dowloading
//     console.log('above');
//     console.log(data);
//     console.log('Using await fuction')
//     console.log('below');
//     console.log('Processing Data');          
// }

// main()

//Using fetch API

// console.log('Initializing');
// console.log('Loading the data source');

// async function getData() {
//     await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))
//     return 666;
// }
// async function main() {
//     let data = await getData();          //Await is used to stop below untill data is dowloading
//     console.log('above');
//     console.log(data);
//     console.log('Using await fuction')
//     console.log('below');
//     console.log('Processing Data');          
// }

// main()

//Using fetch API  only change in async function

console.log('Initializing');
console.log('Loading the data source');

async function getData() {
    let x =await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(x);
    // let data =await x.text()   //get data as a string

    return 666;
}
async function main() {
    let data = await getData();          //Await is used to stop below untill data is dowloading
    console.log('above');
    console.log(data);
    console.log('Using await fuction')
    console.log('below');
    console.log('Processing Data');          
}

main()
