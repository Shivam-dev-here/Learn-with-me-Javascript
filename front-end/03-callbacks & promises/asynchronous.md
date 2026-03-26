- Title: Asynchronous nature of js
- Why: below
- dependent on file: no
- Other: Video no: 75

### Definition
- Task A, B executed, Task C takes 2sec from now, js will check Task D if it does not cause wait will be executed.
```
console.log("Task A")
console.log("Task B")

setTimeout(() => {
     console.log("Task C");
}, 2000);

console.log("Task D")
```

- A -> B -> D-> C (asynchronous nature)


### Other
- Extension: ES7 React | rodrigovallades
- Extention: ES7 + React | dsznajder
creates anonymous arrow function `anfn + ENTER`

### Snippets (VS Code)
1. setting > snippets > {language, ex: js} > snippets.
- It's a snippet of console.log()
```
"Console Log": {
        "prefix": "cl",
        "body": [
            "console.log($1);",
            "$2"
        ],
        "description": "Log output to console"
    },
```

- [prismjs cdn](https://cdnjs.com/libraries/prism)
- Read Notes

Methods of Promise API