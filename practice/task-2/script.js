const entertask = document.getElementById("entertask");
const addtask = document.getElementById("addtask");
const tasklist = document.getElementById("tasklist");
const deleted = document.getElementById("deleted");

function loadtask() {
    if (entertask.value.trim() === "") {
        alert("Enter any task")
    } else {
        const li = document.createElement("li");
        li.innerText = entertask.value;
        tasklist.appendChild(li);
        console.log(entertask.value);
        entertask.value = "";
    }
}

function delalltask() {
    if (tasklist.value === "") {
        alert("not have any task")
    }
    else {
        tasklist.innerHTML="";
        // console.log("heloo") 
    }
}

// let max = 4;
// let randomInt = Math.floor(Math.random() * max); 
// console.log(randomInt)

// Generates integers from 0 to 9 inclusive

// function getRandomIntInclusive(min, max) {
//   const minCeiled = Math.ceil(min);
//   const maxFloored = Math.floor(max);
//   return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
//   // The maximum and the minimum are inclusive
// }

// // Example: get a number between 1 and 6 (inclusive)
// let dieRoll = getRandomIntInclusive(1, 6);
// console.log(dieRoll);

