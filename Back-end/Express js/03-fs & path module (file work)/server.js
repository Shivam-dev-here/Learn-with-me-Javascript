// # Using without module

console.log("hello");
// const fs = require('fs')
// console.log(fs);                    //PRINTS FUNCTIONS THAT CAN BE USED

// # ASYNCHRONOUS 

// console.log("starting");                                                                // #1
// fs.writeFileSync("created.txt", "this is going to be inside that file")                 // #2
// console.log("Ending");                                                                  // #3  waiting 2 to complete

// # ASYNCHRONOUS TO SYNCHRONOUS CALL BACK HELL

// console.log("starting");                                                                // #1
// fs.writeFile("created 2.txt", "this is going to be inside that file",()=>{              // #3 
//     console.log("completed");
//     fs.readFile("created.txt",(error,data)=>{
//         console.log(error, data);                                                       //data.tostring()
//     })
// })            
// console.log("Ending");                                                                  // #2 won't wait for writefile

// fs.appendFile("created.txt", " appended", (e,d)=>{
//     console.log(d);
// })



// # Using with module
// to use => L5 in json {  "type":"module",  }

import fs from "fs/promises"
let a = await fs.readFile("created.txt")

let b = await fs.appendFile("created.txt", "\n\n\n three line gap")

console.log(a.toString(), b);


import path, { basename } from "path"
console.log(path);

let my_path = "C:\\Users\\myper\\Desktop\\Github\\Javascript\\Back-end\\new\\fs & path module (file work)\\created.txt"
console.log(path.extname(my_path), path.dirname(my_path), basename(my_path));
console.log(path.join("c:/", "programs\\created.txt"));

