
---
## ==UseEffect==

- Definition: Triggers every time array's variable updates
#### Terminal: Offline

```
npm create vite@latest
.
{ENTER}
react
js
yes
```

#### `Root/src/App.jsx`
	
	1. `useeffect snippet:` basic syntax
	2. Example: Empty array
	
```
import { useState, useEffect } from 'react'

useEffect(() => {
	alert("You will see me each time App.jsx renders");
}, [])
```
	
	3. Example: Varaible array

```
import { useState, useEffect } from 'react'

useEffect(() => {
	alert("Alter count = I comes");
}, [count])
```

---
#### `Root/src/main.jsx`
- Cause:  run useEffect two times
- Reason: In Development project is tested and then run
- Remove:  both `</StrictMode>,`

```
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

---
## `useStateSnippet`

- ==Spelling is important==

- Run for every render

```
  useEffect(() => {
    alert("You will see me each time App.jsx renders");
  }
```

- Run for first render

```
  useEffect(() => {
    alert("count");
  }, [])
```

- Run when mentioned variable changes

```
  useEffect(() => {
    alert("count");
  }, [count])
```

---
# Example 1: When App.jsx renders  

```
import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [first, setFirst] = useState(0)

  useEffect(() => {
    alert("You will see me each time App.jsx renders");
  }, [])  

  useEffect(() => {
    alert("count");
  }, [count])

  useEffect(() => {
    alert("first");
  }, [first])
```

---
