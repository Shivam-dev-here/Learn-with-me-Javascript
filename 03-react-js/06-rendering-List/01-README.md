description

---
# Rendering

- Update = refresh whole function
#### ==Conditional Rendering==

- App.jsx
	
	1. useStateSnippet
	2. button
	
	### Method 1: Ternary operator
	#### Method 2: Use && 
	
	`{showbtn && <button >Show you a button</button>}`
	only if showbtn is T then proceed.

---

### ==List Rendering== : NGP

- `App.jsx`

```
	
...
	
	const [todo, setTodo] = useState([
		{ title: "M", desc: "Mango is here in box" },
		{ title: "H", desc: "Honey is here in box" },
		{ title: "C", desc: "Choco is here in box" },
	])
	const Todo = ({ todo }) => {
		return (
			<>
				<div className="todo">{todo.title}</div>
				<div className="todo">{todo.desc}</div>
			</>
		)
	}
	
...
	
	{todo.map((t, i) => {
		return <Todo key={i} todo={t} />
	})}
	
...
	
```

---

### Above + Tailwind CSS : GP

1. Documentation: [Click me](https://tailwindcss.com/docs/installation/using-vite)
2. Add class

```
<div className="m-4 border border-1 border-purple-600">
	<div className="todo">{todo.title}</div>
	<div className="todo">{todo.desc}</div>
</div>
```

### ==Good Practice Way==

```
...

const [todo, setTodo] = useState([
	{ title: "M", desc: "Mango is here in box" },
	{ title: "H", desc: "Honey is here in box" },
	{ title: "C", desc: "Choco is here in box" },
])

return (
	<>
		<section id="center">
	
...
	
	{todo.map((todo, i) => {
		return <div key={i} className="m-4 border border-1 border-purple-600">
			<div className="todo">{todo.title}</div>
			<div className="todo">{todo.desc}</div>
		</div>
	})}
	
...
```