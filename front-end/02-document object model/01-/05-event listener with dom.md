- Title: Event Bubbling Set intervals & set timeout
- Why: 01-what's dom
- dependent on file: yes
- Other: Video no: 74
```
05-index.html
05-event with dom.md
```

---
##  ==#== Event Listener

- #### Use case + Mouse Event
```
btnintro.addEventListener("click",() => {
    alert("DOM with Event Listener loaded!");
    alert("Button clicked!");
});
```

```
btnintro.addEventListener("click", () =>{
    document.querySelector(".box").innerHTML= "Click chnaged you"
});
```

- Other are: dblclick, mouseDown, mouseenter, mouseleave, contextmenu
- Read more from mdn [Mouse Event](https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events)

- ### Keyboard Event
```
//Pressing any key consoles it
document.addEventListener("keydown", (e)=>{
  //console.log(e);
    console.log(e.key, e.keyCode);
})
```
- Read more on mdn [Keyboard Events](https://developer.mozilla.org/en-US/docs/Web/API/Element#keyboard_events)


- ##  ==#== Event Bubbling
	- **File: 06-index.html**
	- definition: adding a event listener to child and it's parent and firring event from child propagates through parents listener. 
	- Example:
		1. Containers are:  Me, Room,  Building, India, Asia, etc.
		2. Events exist for every container.
		3. Event fired on Me.
	- Result = Event Propagates, Moves from: Me - > Room - >building -> India - > Asia
	- Stop Propagation: added a condition passing 'e' as a argument
	- To see: Remove argument and function -> event bubbling (revert)
```
e.stopPrpagation()
```

##  ==#== Set Intervals
- File: 06-index.html
- Use: want to repeat a event after a set interval of time.
- Example: a random color to a box
```
let x = setInterval(()=>{
	document.querySelector("#btn").style.background = randomColorGenerator()
},1000)
console.log(x)
```
- To stop it: use function clearInterval(x). x is obtained in console.log

##  ==#== Set timeout
- File: 06-index.html
- Use: want to happen a event after a time.
- Example: b random color to a box
```
let y = setInterval(()=>{
	document.querySelector("#btn2").style.background = randomColorGenerator()
},1000)
console.log(y)
```
- To stop it: use function cleartimout(y). y is obtained in console.log


## Other

```

```