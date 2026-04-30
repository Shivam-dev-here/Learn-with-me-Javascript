description 

---

# Why useRef?

- ∀ changes in State Variable there happens a Re-render.
- Re-render triggers a reset to other variables.
- Example: `let x = 0` will be update with count and display in log, ∀ renders reset it to 0. 

#### Without useRef

- `App.jsx`

```
import { useState, useEffect} from 'react'

function App() {
	const [count, setCount] = useState(0)
	let x =0; 
	
	useEffect(() => {
		x=x+1
		console.log(`x: ${x}`)
	});
...
```
- Console: 5x repeats x=1
---
#### With useRef

```
import { useState, useEffect, useRef} from 'react'

function App() {
	const [count, setCount] = useState(0)
	const x = useRef(0)
	
	useEffect(() => {
		x.current=x.current+1
		console.log(`x: ${x.current}`)
	});
...
```

---
####Single:  useRef + Dom

- `App.jsx`

```
import { useState, useEffect, useRef} from 'react'

function App() {
  const [count, setCount] = useState(0)
  const ref = useRef()
useEffect(() => {
  console.log(`First Render...`);
  ref.current.style.backgroundColor = "Blue"
}, [])

...

<button
	ref = {ref}
...
```

---
#### Multiple: useRef + Dom

```
import { useState, useEffect, useRef} from 'react'

function App() {
	const [count, setCount] = useState(0)
	const btnRef = useRef()
	
	useEffect(() => {
		console.log(`First Render...`);
		btnRef.current.style.backgroundColor = "Blue"
	}, [])
	
...
	
	<button ref = {btnRef}
	...
	</button>
	
	<button onClick={()=> {btnRef.current.style.display = "none"}}>Display: 
	None</button>
	
...
```

