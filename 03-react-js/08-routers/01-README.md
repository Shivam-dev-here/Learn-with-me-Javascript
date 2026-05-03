descri0ption 

---
## Why Router

- Generally using anchor tag leads towards new page via reloading.
- Via router we are changing webpage but skipping reloading.

#### Install: 

- Terminal Offline: `npm i react-router-dom`
- App.jsx: `import { createBrowserRouter } from 'react-router-dom'`

---
# Without Router

```
Root
└── src
	├── components
    |    └── Navbar.jsx
	└── App.jsx
```

- `Navbar.jsx`

```
import React from 'react'

const Navbar = () => {
	return (
		<div>
			<nav>
				<a href="/"><li>Home</li></a>
				<a href="/"><li>About</li></a>
				<a href="/"><li>Contact</li></a>
			</nav>
		</div>
	)
}

export default Navbar
```

- `App.jsx`

```
import Navbar from './components/Navbar'
	
...
	
<> <Navbar /> </>
	
...
```

---

---
# Other

- Documentation: [click me](https://reactrouter.com/tutorials/quickstart)