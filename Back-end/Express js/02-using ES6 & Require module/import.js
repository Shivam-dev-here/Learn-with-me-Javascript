// //ES6 IMPORT
// import {a,b,c} from "./ES6_&_Require_export.js"
// console.log(a,b+c);

// import obj from"./ES6_&_Require_export.js"
// console.log(obj);

// import harry from"./ES6_&_Require_export.js"  // diff name works due to default
// console.log(harry);

// REQUIRE IMPORT
const a = require("./ES6_&_Require_export")
console.log(a, __dirname,__filename);       //dirname  >> directory name
