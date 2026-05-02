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
const [name, setName] = useState("Shivam-dev-here")

const handleChange = (e) => {
	setName(e.target.value)
}

	<div className="box">
		<input type="text" value={name} onChange={handleChange}  />
	</div>
```

---
## Form problem

- With above input solution: Current updating input box lags behind a tick may cause trouble
- Therefore: Different Solution for multiple input box

```
const [form, setForm] = useState({email:'',password:''})

const handleChange = (e) => {
	setForm({...form, [e.target.name]:e.target.value})
}

<div className="box">
	<input type="text" name='email' value={form.email} onChange={handleChange}  />
	<input type="text" name='password' value={form.password} onChange=
	{handleChange}  />
</div>
```

---

## Remove warning for empty `useState`

`form.password`
- If form.email exist appears else nothing

```
...
	
const [form, setForm] = useState({})
	
...
	
	<input type="text" name='email' value={form.email?form.email:""} onChange=
	{handleChange}  />
	
	<input type="text" name='password' value={form.password?form.password:""} 
	onChange={handleChange}  />
	
...
```

---