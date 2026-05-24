
---
# Why useMemo

- For a highly expensive computation in react, every render reset the task.
- Using useMemo hook it saves the task once it is processed.

---
Note: Both for unchanged array
#### Without useMemo  for unchangeable array

	`const magical = numbers.find(item => item.isMagical === true)`

#### With useMemo  for unchangeable array

	`const magical = useMemo(() => numbers.find(item => item.isMagical === true), 
	[])`

#### With useMemo for changeable array

```
const magical = useMemo(() => numbers.find(item => item.isMagical === true),[numbers])
	
...

``` 

---
