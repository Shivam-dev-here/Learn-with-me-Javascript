description later

---
#### What is JXS

- JSX = Js in html
- Rules: Strict syntax, Always wrap 

---
# Why Vite
#### 01-Learning
- Created a react app using `create react app` but still in progress

#### 02-components-props-jsx
- Using `VITE` [Guide](https://vite.dev/guide/)

#### Terminal: Offline 

```
npm create vite@latest
y
"react-first-app"
react
Javascript
```

open with VS Code

```
npm i
npm run dev
```

---
## JSX

- General Syntax

```
function App() {

  return (
    <>
    Shivam-dev-here
    </>
  )
}

export default App
```

---
# Creating an App

```
Root
├── src/
    └── components/
		├── Navbar.jsx
		|── Navbar.css
		├── Footer.jsx
		|── Footer.css
		├── Card.jsx
		└── Card.css
```

- `Navbar.jsx`
- `Navbar.css`
- `Footer.jsx`
- `Footer.css`
- `Card.jsx`
- `Card.css`

- Integrated all in `App.jsx`

---

## ==Component Inside App.jsx==

- `App.jsx`

```
...

const Todo = () => {return (
	<>
		<div>I am a tiny component inside 'App.jsx'</div>
	</>
)}
  
...

<Todo/>

...
```

