let random = Math.random()
let a = prompt("Enter 1st Num");
let c = prompt("Enter Operation");
let b = prompt("Enter 2nd Num");

let obj ={
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",
}

// (random>0.1)?alter('The result is ${eval('${a} ${c} ${b}')}'):c

if(random>0.1)
    let result =
    {alert('The result is ${eval('${a} ${c} ${b}')}')
}
else{
    c=obj[c];
    alert('The result is ${eval('${a} ${c} ${b}')}')
}