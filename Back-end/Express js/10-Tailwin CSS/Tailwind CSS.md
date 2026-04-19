==10-tailwind-CSS== is a combination of `tailwindcss@4` , new update (big change), later

-  [Play Tailwind](https://play.tailwindcss.com/) : Create small parts for project, `ctrl + {space} => Suggestions `
- [TailwinBlockCC](https://tailblocks.cc/) : Get premade components
- Extension of VS Code: `Tailwind CSS IntelliSense`

---

```
Root
├── Moduls/
│   └── Todo.js
├── main.js
└── Install & Apply.md
```

---
## Why Tailwind CSS

- Instead of manually creating class from scratch we get prepared.

---
# Example: CDN

-  CDN = Content Delivery Network

1. Docs [Copy first code](https://tailwindcss.com/docs/installation/play-cdn)
2. Paste on `index.html`
3. Run & Analyze Classes Used inside `index.html`

---
# Install

- Method 1: as a project
- Method 2: on root, simple
## Method 2: Tailwind CLI

```
npm init -y
npm install tailwindcss @tailwindcss/cli

Root
├── input.css >>  "@import "tailwindcss";"
└──index.html >>  "Given Below"

npx tailwindcss -i ./input.css -o ./output.css --watch
```

- index.html

```
<!DOCTYPE html>
<html>
<head>
  <link href="output.css" rel="stylesheet">
</head>
<body>
  <div class="bg-red-500 text-white p-4">Hello</div>
</body>
</html>
```

---















## Break Point

![[Pasted image 20260127213146.png]]

---
# Other
---

? install, bcoz m:1 link everything = lag, crash, time+++ |  m:2 = only needed things

---