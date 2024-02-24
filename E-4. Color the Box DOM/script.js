console.log("Color Box   Video - 70, 72");


// const i = document.querySelectorAll(".box")

// i[0].style.backgroundColor="blue"
// i[1].style.backgroundColor="orange"
// i[2].style.backgroundColor="red"
// i[3].style.backgroundColor="purple"
// i[4].style.backgroundColor="green"


// let boxes = document.getElementsByClassName("box")         // 1st technique.
let boxes = document.querySelector(".container").children     // 2nd technique, 
// console.log(boxes);

// Create F*n to get Random Color.
function getRandomColor() {     // random color function in JS.
    // let val = 80;
    // let val = Math.random;
    let val1 = Math.ceil(0 + Math.random()* 255);
    let val2 = Math.ceil(0 + Math.random()* 255);
    let val3 = Math.ceil(0 + Math.random()* 255);
    return `rgb(${val1}, ${val2}, ${val3})`      // template litrale  
}

// Iterate all Elements.
Array.from(boxes).forEach(e => {       // In HTML colln, doesn't forEach Method work. That's why we create an Array.
    console.log(e);
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
});

