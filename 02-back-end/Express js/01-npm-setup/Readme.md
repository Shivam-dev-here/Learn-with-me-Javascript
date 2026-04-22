- Slugify is used as a example for this npm project
- to run
1. npm i 
2. slugify.js
---
### Node js
- install
- [Node js Doc](https://nodejs.org/docs/latest/api/synopsis.html)
- Node version manager: use multiple different version of node js on same system
1. `npm install 16`
2. `npm use 16`

---
### Npm project
###### initialize npm project
- npm init -y -> step 2
- npm init    -> step 1
1. answer all 
2. result        => package.json

---
### Packages 
###### Express js
- Use: to create backend applications
- Terminal: `npm install express --save`
- Documentation: [Express js](https://expressjs.com/)
###### Using Slug
- file path JavaScript\Back-end\Express js\01-intro to server\use_slug.js
- Documentation: [Slugify](https://www.npmjs.com/package/slugify)
- npm init -y
- npm i slugify
- run js file

```
var slugify = require('slugify')         // Old: DON'T USE
import slugify from 'slugify';           // NEW
```
###### Using nodemon
- `npm install nodemon`
- `nodemon server.js`
- Use: auto restarts server for any change

---

#### More about packages

- install
  npm install slugify => node modules>slugify + package-lock.json

- Delete
  node_modules can be deleted
  Recover: `npm install`