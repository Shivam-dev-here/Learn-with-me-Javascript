// var slugify = require('slugify')         // Old: dont use

import slugify from 'slugify';              // New: use

let a = slugify('some string')
console.log(a);

let b =slugify('some-_$$%^&^#%$%$^%^&()^*^)&()&7pstring', '_')
console.log(b);
