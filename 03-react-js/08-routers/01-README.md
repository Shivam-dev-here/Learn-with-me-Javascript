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
# ==With Router==

```
Root
└── src
	├── components
    |    ├── Navbar.jsx
	|	 ├── Home.jsx
	|	 ├── About.jsx
	|	 ├── Contact.jsx
	|	 └── Login.jsx 
	└── App.jsx
```

#### Navbar.jsx

```
import React from 'react'

import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div>
			<nav>
				<Link to="/"><li>Home</li></Link>
				<Link to="/About"><li>About</li></Link>
				<Link to="/Contact"><li>Contact</li></Link>
				<Link to="/Login"><li>Login</li></Link>
			</nav>
			</div>
	)
}

export default Navbar
```
#### App.jsx

- ∵ This is done in `main.jsx` so that it works for all
- But ∵ we Learning and done on `app.jsx` We do

```
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Contact from './components/Contact'
import About from './components/About'

function App() {
	const router = createBrowserRouter([
		{
			path:"/",
			element: <><Navbar /><Home/></>
		},
		{
			path:"/Login",
			element: <><Navbar /><Login/></>
		},
		{
			path:"/About",
			element: <><Navbar /><About/></>
		},
		{
			path:"/Contact",
			element: <><Navbar /><Contact/></>
		}
	])
	
	return (
		<>
			<Navbar />
			<RouterProvider router={router}/>
		</>
	)
}

export default App
```
#### Home.jsx

```
import React from 'react'

const Home = () => {
	return (
		<div>
			  Home says
		</div>
	)
}

export default Home
```
#### Similarly for About, Login & Contact

---
# ==ALTER== 

- IF IN MAIN.jsx
- Not checked yet

```
	const router = createBrowserRouter([
		{
			path:"/",
			element: <Home/>
		},
		{
			path:"/Login",
			element: <Login/>
		},
		{
			path:"/About",
			element: <About/>
		},
		{
			path:"/Contact",
			element: <Contact/>
		}
		])
```

---
# Other

- Documentation: [click me](https://reactrouter.com/tutorials/quickstart)