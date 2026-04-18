// Problem 1: Determine if a number is positive, negative, or zero

function checkNumber() {
    let num = document.querySelector("#problem1").value;
    let msg = "Enter a number first.";

    if (num > 0) {
        msg = "The number is positive.";
    } else if (num < 0) {
        msg = "The number is negative.";
    } else {
        msg = "The number is zero.";
    }

    console.log(msg);

    let problem1Output = document.getElementById("problem1Output");
    problem1Output.innerHTML = msg;
}

//Problem 2: Determine if a person is old enough to vote

function checkVotingAge() {
    let age = document.querySelector("#problem2").value;
    let msg = "Enter your age first.";

    if (age >= 18) {
        msg = "You are old enough to vote.";
    } else {
        msg = "You are not old enough to vote.";
    }

    console.log(msg);

    let problem2Output = document.getElementById("problem2Output");
    problem2Output.innerHTML = msg;
}

//Problem 3: What grade did you get?

function checkGrade() {
    let grade = document.querySelector("#problem3").value;
    let msg = "Enter the score you received.";

    if (grade >= 90) {
        msg = "You got an A!";
    } else if (grade >= 80) {
        msg = "You got a B!";
    } else if (grade >= 70) {
        msg = "You got a C!";
    } else if (grade >= 60) {
        msg = "You got a D!";
    } else {
        msg = "You got an F!";
    }

    console.log(msg);

    let problem3Output = document.getElementById("problem3Output");
    problem3Output.innerHTML = msg;
}

//Problem 4: Can you enter the club?

function checkClubEntry() {
    let age = document.querySelector("#problem4").value;
    let msg = "Enter your age first.";
    let hasID = document.querySelector("#hasID").checked;

    if (age >= 21 && hasID) {
        msg = "You can enter the club.";
    } else if (age >= 21 && !hasID) {
        msg = "You need an ID to enter the club.";
    } else {
        msg = "You cannot enter the club.";
    }

    console.log(msg);

    let problem4Output = document.getElementById("problem4Output");
    problem4Output.innerHTML = msg;
}

//Problem 5: Perfect square checker (nested if statements)
function checkPerfectSquare() {
    let num = document.querySelector("#problem5").value;
    let msg = "Enter a number first.";

    if (num >= 0) {
        let sqrt = Math.sqrt(num);
        if (sqrt === Math.floor(sqrt)) {
            msg = "The number is a perfect square.";
        } else {
            msg = "The number is not a perfect square.";
        }
    }

    console.log(msg);

    let problem5Output = document.getElementById("problem5Output");
    problem5Output.innerHTML = msg;
}
