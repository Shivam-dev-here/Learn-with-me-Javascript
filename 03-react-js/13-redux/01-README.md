description

---
# Why Redux

- An state exist only for it's component, not for child until passed as prop or by prop dealing.
- Redux, let the state to be used, without prop dealing to all components or deep hierarchy.

---
# Working

- We update all to "Redux file".
- All components communicate with redux.

---
# Setup

#### Terminal:

1. npm install react-redux
2. npm install @reduxjs/toolkit
3. npm run dev

---

## Use Redux

#### Main.js

```
import store from './app/store'
import { Provider } from 'react-redux'
	
...
	
<Provider store={store}>
	<App />
</Provider>
	
...
```
#### Store.js

```
import counterReducer from "./counter/counterSlice"
	
...
	
reducer: {
	counter: counterReducer
}
```

#### App.jsx

```
import { useSelector, useDispatch } from 'react-redux'
	
...
	
const count = useSelector(state => state.counter.value) //Transport count val
	
...
	
<>
	<div>
		{count}
	</div>
</>
	
```