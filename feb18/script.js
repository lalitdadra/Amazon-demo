function changeColor() {
    const myDiv = document.getElementById("myDiv");
    const hlo = document.getElementById("h1id");
    const btn = document.getElementById("btn");

    myDiv.style.backgroundColor = myDiv.style.backgroundColor === "white" ? "black" : "white";
    hlo.style.color = hlo.style.color === "black" ? "white" : "black";
    
}










const count = document.getElementById("count");
const firstBox = document.getElementById("firstBox");
const secondBox = document.getElementById("secondBox");
const myDiv = document.getElementById("myDivClass");

function changeValueMax() {
    let currentValue = parseInt(count.textContent);  // get value
    count.textContent = currentValue + 1; 
}
function changeValueMin() {
    let currentValue = parseInt(count.textContent);  // get value
    count.textContent = currentValue - 1; 
}








// 1. Array of quotes
const quotes = [
    { quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "It always seems impossible until it's done.", author: "Nelson Mandela" }
];

// 2. Select elements
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const buttonElement = document.getElementById('new-quote');

const colorQuote = document.getElementById('cont');


colorQuote.style.backgroundColor = colorQuote.style.backgroundColor === "blue" ? "orange" : "blue";


// 3. Function to generate random quote
function generateQuote() {
    // Math.random() gives a decimal 0-1, multiply by length to get range
    // Math.floor() rounds down to get valid index
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];

    // 4. Update DOM
    quoteElement.textContent = `"${selectedQuote.quote}"`;
    authorElement.textContent = `- ${selectedQuote.author}`;
}

// 5. Event Listener
buttonElement.addEventListener('click', generateQuote);

