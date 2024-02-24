console.log("Calculate The Factorial   Video = 65, 69");

// The fcatorial of a number is the multiplication of all the numbers b/w ONE and the number ITSELF.
// Example = 5!
//  5! = 5*4*3*2*1 = 120 Ans.

// Write a program to calculate factorial if a number using reduce() & For loops.


// =============================================================================>
// Reduce Method :-

let arr = [1, 2, 3, 4, 5]

let red = (a, b) => {
    return a * b;
}
console.log(arr.reduce(red));



// =================================================================================>
// With help of function.

// Factorial Using Reduce() method.

let a = 6

function Factorial(number) {                          // Create a Factorial calculating function. Factorial calculate from number f*n.
    let Arr = Array.from(Array(number + 1).keys())    // Create an Array from number (Arr.from()). It perform 1 to n numbers.  Adding 1 in number to print n number value.
    console.log(Arr.slice(1,));                       // Print new Array.  Arr.slice(1,) = delete the starting element of an array.
    let c = Arr.slice(1,).reduce((a, b) => a * b)         // Reduce() method performe the multiplication (a*b).    
    // return c;
    console.log(c);
}

Factorial(a)                                          // Run Factorial.



// ===================================================================================>

// Factorial Using For-loop

function facfor(number) {
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac * index ;
    }
    return fac;
}

Factorial(a);
// facfor(a);


// Practice --------------------------------------------------------------------->
let i = 5;

function factfor(num) {
    fact = 1;
    for (let index = 1; index < num; index++) {
        factfor = fact * index 
    }
    return fact
}
Factorial(i)


//                |----------------------------------------------------|