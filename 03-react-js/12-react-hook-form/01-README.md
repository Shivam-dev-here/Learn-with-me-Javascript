description below

---
## Why react hook form

- Creating a form leads towards various conditions, checking, etc
- This becomes a burden for form.
- React hook form resolves that

- Documentation here  [Click me](https://www.react-hook-form.com/get-started)

---
#### Setup

1. `npm install react-hook-form`
2. See and understand example from Documentation.

---
# Simple Error Display

```
<input placeholder='username' type="text" {...register("username", { required:
	 "true", minLength: 6, maxLength: 8 })} />
	 {errors.username && <div>There is error</div>}
```

---

## Standard Error Display

```
<input placeholder='username' type="text" {...register("username", { required:
	{value:true, message:"Required"}, minLength: {value:5, message: "minimum 
	length is 5"}, maxLength: {value:8, message: "maximum length is 8"}})} />

{errors.username && <div>{errors.username.message}</div>}
```


---
