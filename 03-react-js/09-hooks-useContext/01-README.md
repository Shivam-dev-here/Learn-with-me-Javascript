description

---
# Why useContext

- When passing a parameter from one component say `x1` to `x2`
- We must pass it through parent of `x2`. It's a problem for a larger hierarchy.

#### Example without useContext

- Example: fun() which display count exist on "App.jsx".
-  External File Hierarchy: 

```
Root
├── components
|	 ├── Navbar.jsx
|	 |── Button.jsx
│    └── Component1.jsx
└── App.jsx
```

-  Internal File Hierarchy:

```
Root
└── App.jsx
	 └── Navbar.jsx
		  └── Button.jsx
		  		└── Component.jsx
```

#### Solution 1:
- Prop dealing: Count function must deliver the value from "App.jsx" to "Navbar.jsx" to
	"Button.jsx" to "Component1.jsx"
	
---

