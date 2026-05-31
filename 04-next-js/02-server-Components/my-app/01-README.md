description

---
# Why useState & useEffect not works properly in Next.js

- useState works only on Client Component
- By default Next.js serves all everything as a Server Components

#### Server Component:
- The page will first load on server then compute as html and transfer to client

---
### Solution

1. Use "use client" at top

```
"use client"
import { useState, useEFfect } from "react"

export default function Home() {
  const [Count, setCount] = useState(0)
  return (
    <>
      <div>
        Hey, I show Count: {Count}
      </div>
      <button onClick={() => setCount(Count + 1)} >Click to increase</button>
    </>
  );
}
```

---
