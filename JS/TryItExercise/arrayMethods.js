let tasks = ["study", "exercise", "call mom"];

console.log(tasks.length);

tasks.push("read book");
console.log("After adding:", tasks);

tasks.pop();
console.log("After removing:", tasks);

console.log("Have I called mom?", tasks.includes("call mom"));