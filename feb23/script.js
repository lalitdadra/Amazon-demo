const para = document.querySelectorAll(".content");
para.forEach(p =>{
    p.textContent = p.textContent.toUpperCase();
});




// function printValue() {
//   console.log("Printing Value");
// }
// setInterval(printValue, 1000);

// // setTimeout(printValue, 2000);
// console.log("Value from outside interval");




const result = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Message from setTimeout");
        ("Promise resolved successfuly");
    // reject("Can't resolve the promise. Check the logs.");
  }, 2000);
});

result
  .then((response) => {
    console.log("Message from then", response);
  })
  .catch((error) => {
    console.log(`Error while resolving promise with a message => ${error}`);
  })
  .finally(() => {
    console.log("Promise completed.");
  });