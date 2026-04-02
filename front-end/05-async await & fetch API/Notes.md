- Title: Re Promise with async await
- dependent on file: yes
- Other: Video no: 76
```
index.html
async_await.js
```

---
## Why using Async & Await 
- To deal with asynchronous nature

Asynchronous nature = Let task 'A: fast',  'B: slow'
code is like: A1 B1 A2 A3
want: A1 B1 A2 A3
but executes like: A1 A2 A3 B1
- Problem: if A2 is dependent on B1 (error)
### Example
- A1 returns a "pending promise" and js shows asynchronous nature.
- A2 must not executes untill data is obtained.
```
console.log('Initializing');                          //A1
function GetData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Dowloading Data');
        },3500)
    })
}
let data=GetData();                                  //B1
console.log(data);                                   //A2
console.log("using data")                            //A3
```

### ? Await 
without await we get a unfinished promise error (may)
with await we get a resolved promise's Data (want)
#### Solution 1 (Not good)
- Using .then function   `L41 async_await.js`

#### Solution 2 (Good)
- Using Async & Await          L62  `without await L87 executes immediately `

#### Solution 3 (Same as 2 + dummy API)
- Using Async & Await          L101  `without await L102 & L108 executes in immediately`



### Other 
 - [Json Placeholder](https://jsonplaceholder.typicode.com/) Free dummy rest API
 - Use: need two then ? ∵    1> gives data 2> parse data in json (takes some time) 
 - json = JavaScript Object
- Settled = Promise is either Resolved or Rejected
- Resolve = only success
- Resolve = only fail
- Get Req : accessing a website
- Post Req : Submitting a form
- Put : Update
- Delete : remove