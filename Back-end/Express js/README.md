---

---
- Includes all backend concept
---
# Server

---
### Node js
- install
- [Node js Doc](https://nodejs.org/docs/latest/api/synopsis.html)

### Npm project
###### initialize npm project
- npm init -y -> step 2
- npm init    -> step 1
1. answer all 
2. result        => package.json
###### Packages
- install
  npm install slugify => node modules>slugify + package-lock.json
- Delete
  node_modules can be deleted
  Recover: `npm install`
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




---
# Other

---

1. in terminal -> node {file name ex: serve} + s + Tab => node ./server.js