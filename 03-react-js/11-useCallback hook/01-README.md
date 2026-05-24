description below

---
## Why use useCallback hook

- Whenever the site is rendered, it also renders function
- Even two same returning function is different in js
- So even props are not changed, it assumes changes

---
### useCallback

- `Navbar.jsx`
- `App.jsx`

```
import { useState, useCallback } from 'react'
	
...
	
	const getAdjective = useCallback(()=>{
	return "Worst" + count
	},[])
	
...
```

1. Button clicks
2. site re-renders
3. See callback hook, keep freezing the function

---
## Unfreeze function if prop is updated

```
	const getAdjective = useCallback(()=>{
	return "Worst" + count
	},[count])
```

- square bracket [ ] is dependent variable

---