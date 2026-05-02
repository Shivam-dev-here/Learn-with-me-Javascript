description

---
## Basic JS Events in JSX

```
...
	
	const handleClick = () =>{
		alert("Got YOu!!!")
	}
	
	return (
	<>
		<div className="btn1">
			<button onClick={handleClick} >Click mE</button>
		</div>
...
```

---

## Input box problem

- Doesn't let change input box therefore pass it to a handler

```
  const [name, setName] = useState("Shivam-dev-here")
  
  <input type="text" value={name} />
```

- Alter

```

```