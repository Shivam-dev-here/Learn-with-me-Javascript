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
function App() {
	 const onSubmit = data => console.log(data);	
...
	
<input placeholder='username' type="text" {...register("username", { required:
	 "true", minLength: 6, maxLength: 8 })} />
	 {errors.username && <div>There is error</div>}
```

---

## Standard Error Display

```
function App() {
	 const onSubmit = data => console.log(data);	
...
	
<input placeholder='username' type="text" {...register("username", { required:
	{value:true, message:"Required"}, minLength: {value:5, message: "minimum 
	length is 5"}, maxLength: {value:8, message: "maximum length is 8"}})} />

{errors.username && <div>{errors.username.message}</div>}
```


---

## Submission problem

- User often spam on submit button. creates multiple copies of same data.
- Also conditions are required to deal with network delay.

- Solution: Disable Submission button temporarily & add timeout.

```
function App() {
	  const { 
		  register, 
		  handleSubmit, 
		  watch, 
		  formState: { errors, isSubmitting } 
	} = useForm();
	
	const delay = (d) =>{
		return new Promise((resolve, reject)=>{
			setTimeout(() => {
				  resolve()
			}, d * 1000);
		})
	}
	
	const onSubmit = async (data) =>{
		await delay(2)
		console.log(data);
	}
	
<>
		
	...
		
	{isSubmitting && <div>Loading...</div>}
	<input disabled={isSubmitting} type="submit" value="Submit" />	
		
	...
		
</>
```

---

## Throw Custom Server Error

```
function App(){ 
	setError
	
const onSubmit = async (data) =>{
	if(data.username !=="shivam"){
		setError("myform", {message: "Credential Error"})
	}
	if(data.username === "hacker"){
		setError("blocked", {message: "Invalid User"})
	}
}

	{errors.myform && <div>{errors.myform.message}</div>}
	{errors.blocked && <div>{errors.blocked.message}</div>}
</form>
```