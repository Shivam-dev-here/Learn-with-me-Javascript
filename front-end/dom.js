//SELECTING elements using JavaScript
// Using JavaScript to manipulate the DOM

// document.title = "JavaScript DOM Manipulation";
// document.body.style.backgroundColor = "black";   


// let aba = document.getElementsByClassName("box");
// console.log(aba);

// aba[3].style.backgroundColor = "red";

// let vvh = document.getElementsByClassName("box");
// vvh[1].style.backgroundColor="white";

// console.log(aba);

// document.querySelectorAll(".box").forEach(e=>{
//     e.style.backgroundColor = "blue";
//     // No need to use e[3] here; 'e' is already a single element
//     e.matches(".box")? console.log("This is a box") : console.log("This is not a box");
// })



// document.querySelector(".box").hasAttribute("class")
// let div = document.createElement("div");
// div.setAttribute("class", "box");
// document.querySelector(".container").append(div);

// // document.querySelectorAll(".box").forEach(e=>{
// //         e.innerHTML="hello"
// // })
document.querySelectorAll(".box").forEach(e=>{
    e.setAttribute("style","margin-top:20px")
})
// document.querySelector(".container").removeChild(document.querySelector(".box"));
// document.querySelector(".container").remove();

// document.querySelector(".container").classList.add("yellow");

// document.querySelector(".yellow").setAttribute("style", "border: 2px solid white; padding:10px");


// document.querySelector(".box").classList.add("blue");

// document.querySelector(".blue").setAttribute("style", "border: 4px solid green; padding:10px");
// document.querySelectorAll(".box").forEach(e => {
//     e.classList.toggle("blue");
// })

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>













