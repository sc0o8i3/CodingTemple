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