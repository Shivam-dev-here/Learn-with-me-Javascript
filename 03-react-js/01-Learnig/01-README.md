description later

---
# Why React js

- Property: Instead of defining property ∀ object we use state variable like things and use it
- States: giving objects a state like a class and updating state will update box
- Unity: During a project we use CSS, Js & Html even for a chunk part, via React same chuck via only html can be accomplished.
- Components: Projects in parts and Integrate when done & Reuse.
- Virtual Dom: React version of DOM (better).
- Debugging & Maintenance is easy
- Example: `without-reactjs` & `with-reactjs`

---
# Install

#### Terminal: Offline

- `npx create-react-app with-reactjs`
- open `with-reactjs` folder as vs code
- VS Code Extension:  `ES7+ React/Redux/React-Native snippets`
- VS Code Extension:  `ES7 React/Redux/GraphQL/React-Native snippets`

---
# File Structure

```
Root
├── node_module/
├──	public/
├──	src/
└── Install & Apply.md
```

#### `public/`     

 - Used to give a file directly to use
 - Example: let it includes `Shivam-dev-here.txt`
 - URL: `localhost:3000/Shivam-dev-here.txt` provides that file

#### `public/index.html`

- Shown to use when he visits site
#### `src/App.js`

- Is delivered to `public/index.html`
- `ClassName`: is `Class="box"` of CSS, Class is reserved hence `ClassName` for Reactjs

---
# Run: Start a project

- `npm start` 



---
# Task: Create a click counter app  with & without reactjs.

---
## ==Part 1: == Without Reactjs

- File Structure

```
Root
└── without-reactjs.html
```

- `without-reactjs.html`: Includes high complexity with all Html, CSS, Js.
- 
---
## ==Part 2: Alter: `src/App.js`==

- Shivam-dev-here

```
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      Shivam-dev-here
    </div>
  );
}

export default App;
```

- Click Counter 

```
function App() {
  const [value, setValue] = useState(0)
  
  return (
    <div className="App">
      <div className='value'>{value}</div>
      <button onClick={()=>{setValue(value +1)}}>Shivam-dev-here</button>
    </div>
  );
}
```

---
# Component

- Small parts that are created to be used again  with dynamic reaction

```
01-Learning
├── 01-README.md
├── without-reactjs
└── with-reactjs/
	├── node_module/
	├──	public/
	└── src/
		└── component
			├──	Navbar.js
			└── Footer.js
```
#### Example: Creating a Navbar and Footer as a component

- `Navbar.js`: Code from file
- `Footer.js`: Code from file
- `App.js`: 
	- `import Navbar from './components/Navbar';`
	- `<Navbar />`
	- Similarly for Footer

---
# Props: Data pass in components

- `Navbar.js`:  Add `<div className="logo"></div>`
- `App.js`: Alter `<Navbar/>` to:  `<Navbar logoText = "Shivam-dev-here"/>`
- `Navbar.js`:  Alter

```
...
const Navbar = (props) => {
  return (
    <div>
      <div className="logo">{props.logoText}</div>
...

```

---
# Other

https://create-react-app.dev/docs/getting-started/

#### VS Code: 

`rafce`: A react arrow function component

---