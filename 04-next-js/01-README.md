description

---
## Link Component

- Used when switching webpages without reloading websites.
- Anchor tag will be replaced by Link

```
<a href="/contact">Contact</a>
```

```
<Link href="/contact">Contact</Link>
```

- Documentation Link [Click me](https://nextjs.org/docs/app/api-reference/components/link)
- Read: replace, prefetch, scroll.

---
## Change title of webpage as pages changes

- Paste this metadata from "Layout.js" to bottom of page with change.

- Example: Root/app/about/page.js

```
import React from 'react'
const About = () => {
  return (
    <div>
      About
    </div>
  )
} 
export default About

export const metadata = {
  title: "Companies info",
  description: "This page includes the information regrading company",
};
```

---
## Script tag

- Use js depending on pages

- Example: Root/app/about/page.js

```
import Script from 'next/script'

return (
	<>
		<Script>
			{` alert("Careful, Script tag on About Page")`}
		</Script>
	</>
)

```

- Documentation Script Tag [Click me](https://nextjs.org/docs/app/api-reference/components/script)
- Read: src, onLoad, onError, onReady, Strategy is important

---
## Image Component

- Reduces the size of image while maintaining quality

- Size is Original ==750kb==
`<img src="/Shivam-dev-here-new.gif">` :  **750kb in size**

- Size is ==0.2kb==

```
import Image from "next/image";
<Image src="/Shivam-dev-here-new.gif" width={500} height={500} alt="Shivam-dev-here"></ Image>
```

- Also add at: `Root/next.config.mjs`
- hostname: 'www.menucool.com' the website whose image is used in Image tag.

```
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'example.com',
				port: '',
				search: '',
			},
		],
		},
	reactCompiler: true,
};
```

- Documentation [Image in Next.js](https://nextjs.org/docs/app/api-reference/components/image)
1. Quality
2. Priority

---
