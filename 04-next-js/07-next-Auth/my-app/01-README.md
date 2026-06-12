description 

---
## Auth.js

- Used for authentication, makes easy

-  Documentation: Nextauth.js [Click me](https://next-auth.js.org/)
---
## Installation

1. `npm install next-auth@beta`: `Terminal`
2. `Root/app/api/auth/[...nextauth]/route.js`: `Server from Documentation`
3. `Root/app/layout/js`: `Client(App) from Docs + wrap`

```
import SessionWrapper from "./Components/SessionWrapper";
	
...
	
<html>
	<SessionWrapper>
		<body>
			
		</body>
	</SessionWrapper>
</html>
```

5. `Root/app/page.js`: `Client(Page) from docs` + "use client"
6. `Root/.env.local`
	`Github/settings/Developer settings/Auth apps/`
	1. Name
	2. URL-> localhost:3000
	3. Description
	4. callback URL -> `localhost:3000/api/auth/callback/github`
	5. Register Application + Copy ID & SECRET.
	6. Paste at `.env.local`
	7. NEXTAUTH_URL=http://localhost:3000
	8. NEXTAUTH_SECRET=any-long-random-string

7. `components/sessionWrapper.js`

---

