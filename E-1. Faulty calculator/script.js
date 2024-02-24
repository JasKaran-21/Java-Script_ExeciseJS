/* Create a faulty calculator using JavaScript.

This faulty calculator does following:-
1. It takes two numbers as input from the user
2. It performs wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operations 10% of the times.
----------------------------------------------------------------  */


console.log("Faulty Calculator  Video - 59, 61");


let random = Math.random()                   //It is a function, that's result show between 0-1 . The result is 10% of time wrong.
let a = prompt("Enter First number.")
let c = prompt("Enter operation.")
let b = prompt("Enter second number.")

let obj = {                                        // Store the Key values in Objects.
    '+' : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}


if (random > 0.1) {                                 // If random is greater then 0.1 so, performe correct calculation.
    // Perform perfect calculation:
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is : ${eval(`${a} ${c} ${b}`)}`)
}

else {
    // Performe wrong calculation
    c = obj[c]                           // If we perform's wrong calculation so, we will change the  
    alert(`The result is : ${eval(`${a} ${c} ${b}`)}`)     // (Operation) according to (Object).
}


