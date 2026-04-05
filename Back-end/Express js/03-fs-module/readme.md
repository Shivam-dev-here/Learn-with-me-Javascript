- Includes all taught concept related to file and folders
---

# Fs File module via Common js

- #### Import

```
  const fs = require("fs")
  console.log(fs)`
```
  
- #### Write File

   1. Synchronous Way

```
console.log("starting");                                                     
fs.writeFileSync("created.txt", "this is going to be inside that file")         
console.log("Ending");

//Nature: Synchronous = Starting => Created.txt => write opr => Ending 
```

   2.  Asynchronous Way

```
console.log("starting");                                                           
fs.writeFile("created 2.txt", "this is going to be inside that file",()=>{         
    console.log("completed");
    })
})
console.log("Ending");
```

---

- #### Reading File

```    
fs.readFile("created.txt",(error,data)=>{
console.log(error, data);                                                       data.tostring()
```

- ### Append Content in file

```
fs.appendFile("created.txt", " appended", (error,data)=>{
	data.tostring()
    console.log(error, data);
})
```

---
# Fs File module via EcmaScript 7

- #### Import

```
 import fs from "fs/promises";
   + 
L5 in package.json add "type":"module",
```

- #### Write File

```
let b = await fs.writeFile("created.txt", "\n\n\n three line gap");
```

- #### Reading File

```
let a = await fs.readFile("created.txt");
```

- #### Append File

```
let b = await fs.appendFile("created.txt", "\n\n\n three line gap");
```

---
# Other Information

### Path Module
- Use
- Documentation: [File System](https://nodejs.org/api/fs.html)
```
 import path from "path"
 
 let my_path ="D:\$ Repo\Javascript\Back-end\Express js\03-fs-module\created.txt";
 
 console.log(path.extname(my_path));
 console.log(path.dirname(my_path));
 console.log(basename(my_path));
 
 console.log(path.join("c:/", "programs\\created.txt"));
```

