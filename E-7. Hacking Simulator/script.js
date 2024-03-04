console.log("Async & Await");
// Hacking Simulator : Using Async & Await function.
// Create a hacking simulator which has green background & it shows there messages with random delay of 1 to 7 seconds.

// Initalizing hacking...
// Reading your Files...
// Password files Detected...
// Sending all passwords & personal files to server...
// Cleanig up...

// The three dots must blink so that it looks like a real terminal.

const delay = (miliSec) => new Promise(resolve => setTimeout(resolve, miliSec))

async function typeMessage(message) {
    const outputElement = document.getElementById('output');
    for (let i = 0; i < message.length; i++) {
        outputElement.innerHTML += message.charAt(i);
        await delay(Math.random() * 100 );  // Random delay between 0 and 99 milliseconds.
    }
}

async function simulateHacking() {
    await typeMessage("=>Your system is hack...\n");
    await typeMessage("\n\u00B7 Initalizing hacking...");
    await typeMessage("\n\u00B7 Reading your Files...");
    await typeMessage("\n\u00B7 Password files Detected...");
    await typeMessage("\n\u00B7 Sending all passwords & personal files to server...");
    await typeMessage("\n\u00B7 Cleaning up...");
    await typeMessage("\n\u00B7 Hacking complete. Exiting...");
}

simulateHacking();


// const delay = (miliSec) => new Promise(resolve => setTimeout(resolve, miliSec)):
//   *  This line defines a delay function that returns a Promise. It uses setTimeout to introduce a delay in the code execution. The delay duration is specified by the miliSec parameter (in milliseconds).
