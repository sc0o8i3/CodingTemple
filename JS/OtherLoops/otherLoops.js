//WHILE LOOPS
let i = 1;
//creating empty array so that we can store variables in it
let whileNumArray = [];

while (i <= 3) {
    //output to console
    console.log("While loop iteration: ", i);

    //filling in array with each #
    whileNumArray.push(`Number: ${i}`);

    //building HTML list elements using map
    let whileListHTML = whileNumArray.map(whileNumArray => `<li>${whileNumArray}</li>`);

    //placing entire HTML list into a string with join
    let fullWhileListHTML = whileListHTML.join('');

    //finding element by ID
    let whileListContainer = document.getElementById("whileLoop");

    //setting the string inside the element by using innerHTML
    whileListContainer.innerHTML = fullWhileListHTML;

    i++;
} //end WHILE LOOP

//NESTED LOOPS
//creating empty array so we can store variables in it
let nestArray = [];

for (let x = 1; x <= 2; x++) {
    for (let y = 1; y <= 2; y++) {
        //output to console
        console.log(`x = ${x}, y = ${y}`);

        //filling Array
        nestArray.push(`x = ${x}, y = ${y}`);

        //building HTML list elements using map
        let nestListHTML = nestArray.map(nestArray => `<li>${nestArray}</li>`);

        //placing entire HTML list into a string with join
        let fullNestListHTML = nestListHTML.join('');

        //finding element by ID
        let nestLoopContainer = document.getElementById("nestLoop");

        //setting the string inside the element by using innerHTML
        nestLoopContainer.innerHTML = fullNestListHTML;
    }
} // end NESTED LOOP

//BREAK and CONTINUE
//creating empty array to set variables for HTML output
let brkContinueArray = [];

for (let i = 1; i <= 5; i++) {
    if (i == 3) {
        continue;
    }

    if (i == 5) {
        break;
    }

    //output to console
    console.log("Loop with break/continue: ", i);

    //filling Array
    brkContinueArray.push(`Loop with break/continue ${i}`);

    //building HTML list elements using map
    let brkContListHTML = brkContinueArray.map(brkContinueArray => `<li>${brkContinueArray}</li>`);

    //placing entire HTML list into a string with join
    let fullBrkContListHTML = brkContListHTML.join('');

    //finding element by ID
    let brkContContainer = document.getElementById("brkCont");

    //setting the string inside the element by using innerHTML
    brkContContainer.innerHTML = fullBrkContListHTML;
}

