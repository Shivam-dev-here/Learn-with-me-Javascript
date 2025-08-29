
// bot1.addEventListener("click",() => {
//     alert("DOM with Event Listener loaded!");
//         alert("Button clicked!");
// });
// console.log("DOM with Event Listener loaded!");

// Corrected code to add an event listener to a button with class "menu"
// let btn = document.getElementsByClassName("menu")[0];

// if (btn) {
//     btn.addEventListener("click", () => {
//         alert("DOM with Event Listener loaded!");
//         alert("Button clicked!");
//     });
// }




// let button = document.getElementById("btn")
// button.addEventListener("click", () => {
//     alert("You clicked me")
// })


// let bot1 = document.getElementsByClassName("btn2");
// let bot1 = document.getElementById("btn2")
// bot1.addEventListener("dblclick", () => {
//     console.log("DOM with Event Listener loaded!");
//     document.querySelector(".but2").innerHTML="you clicked me"
// });
// document.querySelector(".but2").innerHTML="Right click for menu and  dbl Click for alert"
// bot1.addEventListener("contextmenu", () => {
//     document.querySelector(".but2").innerHTML="NO menu LOL"
// });

//EVENT BUBBLING -->No
// let a = document.getElementById("boxa")
// a.addEventListener("click",()=>{
//     document.getElementById("boxa").innerHTML="A";
// })

// let b = document.getElementById("boxb")
// b.addEventListener("click",()=>{
//     document.getElementById("boxb").innerHTML="b";
// })

// let c = document.getElementById("boxc")
// c.addEventListener("click",()=>{
//     document.getElementById("boxc").innerHTML="c";
// })




/*
The code below demonstrates stopping event propagation (bubbling) for three elements: boxa, boxb, and boxc.
When any of these elements are clicked, the event's propagation is stopped using e.stopPropagation().
This prevents the click event from bubbling up to parent elements.
*/



//EVENT BUBBLING   ---->> Propagation
// document.getElementById("boxa").addEventListener("click", (e) => {
//     e.stopPropagation();
//     document.getElementById("boxa").innerHTML = "A";
// });

// document.getElementById("boxb").addEventListener("click", (e) => {
//     e.stopPropagation();
//     document.getElementById("boxb").innerHTML = "b";
// });

// document.getElementById("boxc").addEventListener("click", (e) => {
//     e.stopPropagation();
//     document.getElementById("boxc").innerHTML = "c";
// });


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// ORORORROROROROROROROROROROROROROROROORORORORROROROROROROOROROROROOROORORO
function getRandomColor2() {
    let val1 = Math.ceil(0+Math.random() * 255);
    let val2 = Math.ceil(0+Math.random() * 255);    
    let val3 = Math.ceil(0+Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`;
}


//SET INTERVAL ---------->>
setInterval(() => {
    document.querySelector(".but2").innerHTML = "Right click for menu and  dbl Click for alert";
    // document.querySelector(".but2").style.backgroundColor = "blue";
    let rarndom = Math.random();
    document.querySelector(".but2").style.backgroundColor =rarndom > 0.5 ? "green" : "red";
}, 1000);
// function getrarndom() {
    

setInterval(() => {
    document.querySelector(".but").innerHTML = "Right click";
    // document.querySelector(".but2").style.backgroundColor = "blue";
    let getRar = Math.random();
    document.querySelector(".but").style.backgroundColor =getRandomColor();
}, 1000);
setInterval(() => {
    document.querySelector(".box3").innerHTML = "Right click";
    // document.querySelector(".but2").style.backgroundColor = "blue";
    let getRar = Math.random();
    document.querySelector(".box3").style.backgroundColor =getRandomColor2();
    e.stopPropagation();
}, 1000);
    // document.querySelector(".but2").style
    

