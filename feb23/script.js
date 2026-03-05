// const para = document.querySelectorAll(".content");
// para.forEach(p =>{
//     p.textContent = p.textContent.toUpperCase();
// });




// function printValue() {
//   console.log("Printing Value");
// }
// setInterval(printValue, 1000);

// // setTimeout(printValue, 2000);
// console.log("Value from outside interval");




// const result = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Message from setTimeout");
//         ("Promise resolved successfuly");
//     // reject("Can't resolve the promise. Check the logs.");
//   }, 2000);
// });

// result
//   .then((response) => {
//     console.log("Message from then", response);
//   })
//   .catch((error) => {
//     console.log(`Error while resolving promise with a message => ${error}`);
//   })
//   .finally(() => {
//     console.log("Promise completed.");
//   });

  
//   const result = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Message from setTimeout");
//     resolve("Promise resolved successfuly");
//     reject("Can't resolve the promise. Check the logs.");
//   }, 2000);
// });

// result
//   .then((response) => {
//     console.log("Message from then", response);
//   })
//   .catch((error) => {
//     console.log(`Error while resolving promise with a message => ${error}`);
//   })
//   .finally(() => {
//     console.log("Promise completed.");
//   });

// let checkEven = new Promise((resolve, reject) => {
//     let number = prompt("enter number");
//     if (number % 2 === 0) resolve("The number is even!");
//     else reject("The number is odd!");
// });
// checkEven
//     .then((message) => console.log(message)) // On success
//     .catch((error) => console.error(error)); // On failure


console.log("hello one ");
setInterval(hello=>{
  hello.style.color-blue
console.log("hi what's up two")},2000);
console.log("hello three")
