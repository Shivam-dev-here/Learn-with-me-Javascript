

---
# Hook

```
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <div>The count is {count}</div>
    <button onClick={()=>{setCount(count + 1)}}>update count </button>
    </>
  )
}
```

- `const [count, setCount] = useState(0)`: 
	1. here count is a variable = 0
	2. setCount is  a fucntion who updates count.
	3. `<div>The count is {count}</div>`: Display count
	4. `<... onClick={()=>{setCount(count + 1)}} ...>`: Function updates count

---
