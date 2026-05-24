
---
# Why useMemo

- For a highly expensive computation in react, every render reset the task.
- Using useMemo hook it saves the task once it is processed.

---
Note: Both for unchanged array
#### Without useMemo

`const magical = numbers.find(item => item.isMagical === true)`

#### With useMemo

`const magical = useMemo(() => numbers.find(item => item.isMagical === true), [])`

---
