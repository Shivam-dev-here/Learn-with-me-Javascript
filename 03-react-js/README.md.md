

---
# Hook

### Method 1: JSX way

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

### Method 2: Js doesn't support hook

```
function App() {
  const [count, setCount] = useState(0)
  let a = 5;
  return (
    <>
    <div>The count is {a}</div>
    <button onClick={()=>{a=a+1}}>update count </button>
    </>
  )
}
```

- Js works on flow, once above line executed can't move up.
- `a=a+1` will not work
- Other ways ∃ but complexity ++
---
