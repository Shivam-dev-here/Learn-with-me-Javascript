description 

---

# Why useRef?

- ∀ changes in State Variable there happens a Re-render.
- Re-render triggers a reset to other variables.
- Example: `let x = 0` will be update with count and display in log, ∀ renders reset it to 0. 

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

---

