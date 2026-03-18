let numbers = [];

for (let i = 1; i <= 5; i++) {
    console.log("Number: ", i);
    
    numbers.push(`Number: ${i}`); 
    let listHTML = numbers.map (numbers => `<li>${numbers}</li>`);
    let fullListHTML = listHTML.join('');

    let listContainer = document.getElementById("list");
    listContainer.innerHTML = fullListHTML;
}

