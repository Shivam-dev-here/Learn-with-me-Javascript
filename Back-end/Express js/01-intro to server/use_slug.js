var slugify = require('slugify')

let a = slugify('some string')
console.log(a);

let b =slugify('some-_$$%^&^#%$%$^%^&()^*^)&()&7pstring', '_')
console.log(b);
