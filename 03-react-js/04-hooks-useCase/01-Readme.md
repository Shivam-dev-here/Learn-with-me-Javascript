
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

---
