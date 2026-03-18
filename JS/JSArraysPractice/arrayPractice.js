//Lvl 1 Array Practice
let fruits = ["apple", "banana", "cherry"];

console.log("Lvl 1 Array Practice");
console.log("Original List: ", fruits);
document.getElementById("ogArray").innerHTML = fruits;

console.log("Array Position[2]: ", fruits[1]);
document.getElementById("pos2").innerHTML = fruits[1];

fruits[1] = "blueberry";
console.log("Changing banana to blueberry...");
console.log("Changed List:", fruits);
document.getElementById("changedArray").innerHTML = fruits;

//Lvl 2 Array Practice
console.log("Lvl 2 Array Practice");
fruits.push("orange");

console.log("Added to end: ", fruits);
document.getElementById("addedFruit").innerHTML = fruits;

fruits.pop();
console.log("Removing Fruit: ", fruits);
document.getElementById("removeFruit").innerHTML = fruits;

fruits.unshift("grape");
console.log("Adding to start of array: ", fruits);
document.getElementById("addToStart").innerHTML = fruits;

fruits.shift();
console.log("Removing from start of array: ", fruits);
document.getElementById("removeStart").innerHTML = fruits;

//Lvl 3 Array Practice
console.log("Lvl 3 Array Practice");
let numbers = [3, 6, 9, 12];

console.log("Numbers Array: ", numbers);
document.getElementById("numArray").innerHTML = numbers;

let firstNum = numbers.at(0);
let lastNum = numbers.at(-1);

let sum = firstNum + lastNum;

console.log("Sum of first + last numbers in array: ", sum);
document.getElementById("sum").innerHTML = sum;

let totalNum = numbers.length;
console.log("How many numbers are in the array? ", totalNum);
document.getElementById("totalNum").innerHTML = totalNum;

for (totalNum = 4;totalNum < 6;totalNum++) {
    lastNum = numbers.at(-1);
    numbers.push(lastNum + 3);
}

console.log("Adding 2 Numbers: 15, 18", numbers);
document.getElementById("addingMore").innerHTML = numbers;

//Lvl 4 Array Practice
numbers[1] = null;
console.log("Changing 2nd element of Numbers Array: ", numbers);
document.getElementById("changeElement").innerHTML = numbers;
