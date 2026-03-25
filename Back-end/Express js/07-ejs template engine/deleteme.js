const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs'); 

app.get('/', (req, res) => {

    const links = [
        {
          href: '/',
          icon: '<svg>...</svg>',
          text: 'Home'
        },
        {
          href: 'collection',
          icon: '<svg>...</svg>',
          text: 'Collection'
        },
        {
          href: 'live',
          icon: '<svg>...</svg>',
          text: 'Live'
        }
      ];

  res.render( "deleteme", {links})
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log("First comment");
  
})
