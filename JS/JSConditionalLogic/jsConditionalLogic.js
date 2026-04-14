//Trying Exercise to create my own access using conditional logic.
let age = 21;
let hasID = false;
let accessListContainer = document.getElementById("accessGranted");

if (age >= 21) {
    if (hasID) {
        console.log("Access granted. Welcome to the club!");

        //setting the string inside the element by using innerHTML
        accessListContainer.innerHTML = `Access granted. Welcome to the club!`;
    } else {
        console.log("Access denied. Please present your ID.");

        //setting the string inside the element by using innerHTML
        accessListContainer.innerHTML = `Access denied. Please present your ID.`;
    }
} else {
    console.log("Access denied. You must be 21 or older.");

    //setting the string inside the element by using innerHTML
    accessListContainer.innerHTML = `Access denied. You must be 21 or older.`;
}

//Ternary Exercise
//Traditional Approach
age = 21;
let message;

if (age >= 18) {
    message = "Access granted";
    console.log(message);

    traditionalListContainer = document.getElementById("traditionalAccess");
    traditionalListContainer.innerHTML = message;
} else {    
    message = "Access denied";
    console.log(message);

    traditionalListContainer = document.getElementById("traditionalAccess");
    traditionalListContainer.innerHTML = message;
}

//Ternary Approach (short method)
age = 21;
message = age >= 18 ? "Access granted" : "Access denied";
console.log(message);

ternaryListContainer = document.getElementById("ternaryAccess");
ternaryListContainer.innerHTML = message;

//Logical Operators Exercise
//AND Operator
let isAdult = true;
let hasTicket = false;

if (isAdult && hasTicket) {
    console.log("You can enter");

    andListContainer = document.getElementById("andAccess");
    andListContainer.innerHTML = "You can enter";
} else {
    console.log("You cannot enter");

    andListContainer = document.getElementById("andAccess");
    andListContainer.innerHTML = "You cannot enter";
}

//OR Operator
let isMember = false;
let hasCoupon = false;

if (isMember || hasCoupon) {
    console.log("You get a discount"); 

    orListContainer = document.getElementById("orAccess");
    orListContainer.innerHTML = "You get a discount";
} else {
    console.log("No discount for you");

    orListContainer = document.getElementById("orAccess");
    orListContainer.innerHTML = "No discount for you";
}

//NOT Operator
let isRaining = true;

if (!isRaining) {
    console.log("You can go outside");

    notListContainer = document.getElementById("notAccess");
    notListContainer.innerHTML = "You can go outside";

} else {
    console.log("Better stay indoors");

    notListContainer = document.getElementById("notAccess");
    notListContainer.innerHTML = "Better stay indoors";
}

//Try it yourself Exercise
//traditional approach
let userAge = 16;
let msg;

if (userAge >= 18) {
    msg = "Access granted.";
    console.log("Age:", userAge);
    console.log(msg);

    tryitAgeListContainer = document.getElementById("tryItAge");
    tryitAgeListContainer.innerHTML = `User Age: ${userAge}`;

    tryitListContainer = document.getElementById("tryItTraditional");
    tryitListContainer.innerHTML = msg;
} else {
    msg = "Access denied.";
    console.log("Age:", userAge);
    console.log(msg);

    tryitAgeListContainer = document.getElementById("tryItAge");
    tryitAgeListContainer.innerHTML = `User Age: ${userAge}`;

    tryitListContainer = document.getElementById("tryItTraditional");
    tryitListContainer.innerHTML = msg;
}

//ternary approach
userAge = 18;
msg = userAge >= 18 ? "Access granted." : "Access denied.";
console.log("Age:", userAge);
console.log(msg);

tryitTernaryAgeListContainer = document.getElementById("tryItTernaryAge");
tryitTernaryAgeListContainer.innerHTML = `User Age: ${userAge}`;

tryitTerrnaryListContainer = document.getElementById("tryItTernary");
tryitTerrnaryListContainer.innerHTML = msg;