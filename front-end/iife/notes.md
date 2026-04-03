- Title: Re Promise with async await
- dependent on file: yes
- Other: Video no: 76
```
index.html
async_await.js
```

---
## Faster Async Await Procedure

- Error
```
async function called() {
    // return new Promise((reject,resolve)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(455);
        },1000)
    })
}
let a = await called()
```