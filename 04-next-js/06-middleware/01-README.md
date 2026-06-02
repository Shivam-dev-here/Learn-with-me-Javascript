description

---
# What Middleware does

- Ability to modify request before it reaches destination.
- Middleware functions have access to: 
	1. Request-object (request).
	2. Response Function.
	3. Next function

- For below examples: Req before reaches "Root/app/about/page.js", it modifies the request. 

---
# Ways to Create Middleware Functions

1. By Matching URL
2. By If-else way

---
## Example: redirect-Middleware

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
## Example: return message

- stops after execution of first return
- will see this message at /about

```
export function middleware(request){
	return NextResponse.json({message: "A message from About page."})
	return NextResponse.redirect(new URL('/', request.url))
}
```

---
## Redirect VS Rewrite

- Redirect: Sending a user from one URL to another automatically 

- Rewrite: Showing content of another page at searched URL.

---
