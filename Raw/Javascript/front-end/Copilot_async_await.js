// console.log('before promise 1');
// console.log('Hello 2');
// let prom1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//             console.log('Within promise 1');
//             resolve('Hello 3');
//     }, 1000);
// });
// console.log('after promise 1');


// Using async/await to handle the promise

// function getdata() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Within promise 1');
//             resolve('resolved getdata');
//         }, 2000);
//     });
// }
// console.log('before promise 1');
// let data = getdata()
// data.then((v) => {
//     console.log(v);
//     console.log('after promise 1');
// })
// OROROROROROROOROROROROROOROOOOOOOROROROOROROOROROROROROROOROROROROROOROOOOOOOROROROORORO
// async function getdata() {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log('Within promise 1');
//                 resolve('resolved getdata');
//             }, 2000);
//         });
//     }
//     console.log('before promise 1');
//     let data = getdata()
//     data.then((v) => {
//         console.log(v);
//         console.log('after promise 1');
//     })

// OROROROROROROOROROROROROOROOOOOOOROROROOROROOROROROROROROOROROROROROOROOOOOOOROROROORORO

// async function main() {
//     function getdata() {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log('Within promise 1');
//                 resolve('resolved getdata');
//             }, 2000);
//         });
//     }

//     console.log('before promise 1');
//     let data = await getdata();
//     console.log(data);
//     console.log('after promise 1');
// }
// main();



// FECTCH API
// async function getdata() {
//     let x = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let data = await x.json();
//     console.log('Data fetched:', data);
//     return data;
// }

// async function main() {
//     function getdata() {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log('Within promise 1');
//                 resolve('resolved getdata');
//             }, 2000);
//         });
//     }
    
//     console.log('before promise 1');
//     let data = await getdata();
//     console.log('after promise 1');
// }
// main();