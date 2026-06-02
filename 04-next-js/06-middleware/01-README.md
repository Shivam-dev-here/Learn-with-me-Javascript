description

---
# What Middleware does

- Ability to modify request before it reaches destination.
- Middleware functions have access to: 
	1. Request-object (request).
	2. Response Function.
	3. Next function

---
## Example: 

1. from /home we proceed to /about.
2. But via redirect-Middleware we redirected back to /home

```
import { NextResponse } from "next/server";
export function middleware(request){
	return NextResponse.redirect(new URL('/', request.url))
}
export const config ={
	matcher: '/about/:path*',
}
```

---
