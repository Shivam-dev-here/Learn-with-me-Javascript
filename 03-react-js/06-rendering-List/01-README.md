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

### ==List Rendering==

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