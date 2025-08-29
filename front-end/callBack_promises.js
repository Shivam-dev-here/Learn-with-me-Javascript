console.log("CallBack Promises loaded!");
// console.log("its another way to handle async code in JS");

// setTimeout(() => {
//     console.log("This is a setInterval function");
// }, 100000);

// setInterval(() => {
//     console.log("This is a setInterval function");
//     clearInterval();
// }, 100000);
// console.log("This is a console.log statement after setInterval");


// const promise = new Promise((resolve, reject) => {

// const fn = (name) => {
//     console.log(`Hello ${name}`);
// }
// const callback = (name, fn) => {
//     console.log("This is a callback function");
//     fn(name);
// }


// const loadScript = (src,callback)=>{
//     let sc=document.createElement("script");
//     sc.src=src;
//     sc.onLoad=callback("Harry",fn);
//     document.cont.append(sc)
// }




let prom1 = new Promise((resolve, reject) => {
    if(0.5>Math.random()) {
        setTimeout(() => {
            console.log("This is the first promise");
            resolve("Promise 1 resolved");
        }, 1000);
    } else {
        reject("Promise 1 rejected");
    }
});

// prom1.then((value) => {
//     console.log(value);
// }).catch((error) => {
//     console.log(error);
// });

    let prom2 = new Promise((resolve, reject) => {
        if(0.5>Math.random()) {
            setTimeout(() => {
                console.log("This is the first promise 2");
                resolve("Promise 2 resolved ");
            }, 1000);
        } else {
            reject("Promise 2 rejected");
        }
    });

// let prom3 = Promise.allSettled([prom1, prom2]);
// let prom3 = Promise.race([prom1, prom2]);
// let prom3 = Promise.all([prom1, prom2]);
// prom3.then((a) => {
//     // console.log("All promises resolved");
//     console.log(a);
// })
// .catch((error) => {
//     // console.log("One or more promises rejected");
//     console.log(error);
// });


    let prom3 = new Promise((resolve, reject) => {
        if(0.5>Math.random()) {
            setTimeout(() => {
                console.log("This is the first promise 3");
                resolve("Promise 3 resolved ");
            }, 1000);
        } else {
            reject("Promise 3 rejected");
        }
    });

    let prom4 = new Promise((resolve, reject) => {
        if(0.5>Math.random()) {
            setTimeout(() => {
                console.log("This is the first promise 4");
                resolve("Promise 4 resolved ");
            }, 1000);
        } else {
            reject("Promise 4 rejected");
        }
    });

    let prom5 = new Promise((resolve, reject) => {
        if(0.5>Math.random()) {
            setTimeout(() => {
                console.log("This is the first promise 5");
                resolve("Promise 5 resolved ");
            }, 1000);
        } else {
            reject("Promise 5 rejected");
        }
    });
let promx = Promise.any([prom1, prom2,prom3,prom4,prom5]);
    // Promise1 must resolve -------> for any
promx.then((a) => {
    // console.log("All promises resolved");
    console.log(a);
})
.catch((error) => {
    // console.log("One or more promises rejected");
    console.log(error);
});