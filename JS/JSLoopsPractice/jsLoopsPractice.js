//LVL 1 LOOPING LANDS
console.log("LVL 1: Looping Lands");
console.log("");
//Print Parade
console.log("1. Print Parade");

let i = 1;
//creating empty array so that we can store variables in it
let whileNumArray = [];
let evenNumArray = [];

while (i <= 10) {
    //output to console
    console.log("Number: ", i);

    //filling in array with each #
    whileNumArray.push(i);

    //Sneaking in #2 Even Enforcer
    //checking if numbers are even
    if (i % 2 === 0) {

        //filling in even numbers array
        evenNumArray.push(i);
    }

    //building HTML list elements using map
    let whileListHTML = whileNumArray.map(whileNumArray => `<li>Number: ${whileNumArray}</li>`);

    //placing entire HTML list into a string with join
    let fullWhileListHTML = whileListHTML.join('');

    //finding element by ID
    let whileListContainer = document.getElementById("printParade");

    //setting the string inside the element by using innerHTML
    whileListContainer.innerHTML = fullWhileListHTML;


    i++;
} //end WHILE LOOP

//Continuing with 2. Even Enforcer output
console.log("");
console.log("2. Even Enforcer");

for (let x = 0; x <= evenNumArray.length -1; x++) {
    //output to console
    console.log("Even Number: ", evenNumArray[x]); 
    
    //building HTML list elements using map
    let evenListHTML = evenNumArray.map(evenNumArray => `<li>Even Number: ${evenNumArray}</li>`);

    //placing entire HTML list into a string with join
    let fullEvenListHTML = evenListHTML.join('');

    //finding element by ID
    let evenListContainer = document.getElementById("evenEnforcer");

    //setting the string inside the element by using innerHTML
    evenListContainer.innerHTML = fullEvenListHTML;
    
}

//3. Countdown 10 to 1
console.log("");
console.log("3. Countdown 10 to 1");

let reverseNumArray = [];

for (let x = 10; x >= 1; x--) {
    //output to console
    console.log("Countdown: ", x);

    reverseNumArray.push(x);

    //building HTML list elements using map
    let reverseListHTML = reverseNumArray.map(reverseNumArray => `<li>Number: ${reverseNumArray}</li>`);

    //placing entire HTML list into a string with join
    let fullReverseListHTML = reverseListHTML.join('');

    //finding element by ID
    let reverseListContainer = document.getElementById("countdown");

    //setting the string inside the element by using innerHTML
    reverseListContainer.innerHTML = fullReverseListHTML;

}

//4. Summmoner's Circle
console.log("");
console.log("4. Summoner's Circle");

let sum = 0;

for (let j = 0; j <5; j++) {
    
    if (j < whileNumArray.length) {
        sum += whileNumArray[j];
    }

    let sumListContainer = document.getElementById("summonersCircle");
    //setting the string inside the element by using innerHTML
    sumListContainer.innerHTML = sum;
}

console.log("Total sum of first 5 numbers in array: ", sum);
//5. Square Sorcery
console.log("");
console.log("5. Square Sorcery");

for (let k = 0; k < 5; k++) {
    whileNumArray[k] = whileNumArray[k] ** 2;
    console.log("Squared Number: ", whileNumArray[k]);
    let squareListContainer = document.getElementById("squareSorcery");
    //setting the string inside the element by using innerHTML
    squareListContainer.innerHTML += `<li>Squared Number: ${whileNumArray[k]}</li>`;

}

//LVL 2 ARRAY ARENA
console.log("");
console.log("LVL 2: Array Arena");
console.log("");
//6. Animal Echo
console.log("6. Animal Echo");

let animal = ["cat", "dog", "rabbit", "parrot"];

for (let l = 0; l < animal.length; l++) {
    //output to console
    console.log("Animal: ", animal[l]);

    let animalListContainer = document.getElementById("animalEcho");
    //setting the string inside the element by using innerHTML
    animalListContainer.innerHTML += `<li>Animal: ${animal[l]}</li>`;
}


//7. Greeting Generator
console.log("");
console.log("7. Greeting Generator");

let names = ["Ali", "Sarah", "John"];

for (let m = 0; m < names.length; m++) {
    //output to console
    console.log(`Hello, ${names[m]}!`);

    let greetingListContainer = document.getElementById("greetingGenerator");
    //setting the string inside the element by using innerHTML
    greetingListContainer.innerHTML += `<li>Hello, ${names[m]}!</li>`;
}

//8. Value Multiplier
console.log("");
console.log("8. Value Multiplier");

let original = [1, 2, 3, 4];
let double = [];

for (let n = 0; n < original.length; n++) {
    //output to console original array
    console.log("Original Array Value: ", original[n]);
    double.push(original[n] * 2);

    let originalListContainer = document.getElementById("originalValues");
    //setting the string inside the element by using innerHTML
    originalListContainer.innerHTML += `<li>Original Array Value: ${original[n]}</li>`;
}

for (let o = 0; o < double.length; o++) {
    //output to console doubled array
    console.log("Double Array Value: ", double[o]);

    let doubleListContainer = document.getElementById("doubleValues");
    //setting the string inside the element by using innerHTML
    doubleListContainer.innerHTML += `<li>Double Array Value: ${double[o]}</li>`;

}

//LVL 3. The Login Labyrinth
console.log("");
console.log("LVL 3: The Login Labyrinth");
console.log("");

//9. Divisibility Drill
console.log("9. Divisibility Drill");
let g = 1;

while (g < 21) {
    if (g % 3 === 0) {
        //output to console
        console.log("Divisible by 3: ", g);

        let div3ListContainer = document.getElementById("divisibleBy3");
        //setting the string inside the element by using innerHTML
        div3ListContainer.innerHTML += `<li>Divisible by 3: ${g}</li>`;
    }

    g++;
}

//10. Odd Counter Challenge
console.log("");
console.log("10. Odd Counter Challenge");

for (let h = 1; h < 10; h++) {
    if (h % 2 !== 0) {
        //output to console
        console.log("Odd Number: ", h);

        let oddListContainer = document.getElementById("oddCounter");
        //setting the string inside the element by using innerHTML
        oddListContainer.innerHTML += `<li>Odd Number: ${h}</li>`;
    }
}

//BONUS. Master Techniques
console.log("");
console.log("BONUS: Master Techniques");

//Skip Spell
console.log("");
console.log("Skip Spell");
for (let p = 1; p <= 10; p++) {
    if (p === 5) {
        continue;
    }
    console.log("Number: ", p);

    let skipListContainer = document.getElementById("skipSpell");
    //setting the string inside the element by using innerHTML
    skipListContainer.innerHTML += `<li>Number: ${p}</li>`;
}

//Early Exit
console.log("");
console.log("Early Exit");
for (let q = 1; q <= 10; q++) {
    if (q === 7) {
        break;
    }
    console.log("Number: ", q);

    let breakListContainer = document.getElementById("earlyExit");
    //setting the string inside the element by using innerHTML
    breakListContainer.innerHTML += `<li>Number: ${q}</li>`;
}

