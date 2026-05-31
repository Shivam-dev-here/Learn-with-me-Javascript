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