// const checkResult = new Promise ((resolve, reject) => {
//     let studentName = "Summit";
//     if (studentName === "Lalit") {
//         resolve("promise run successfully");
//     }else(reject("promise not completed"))
// })
// checkResult.then(console.log).catch(console.log);


// async function hello() {
//   return "Hello Lalit";
// }

// hello().then(console.log);

const cap = document.querySelectorAll(".hello");

cap.forEach(p => {
    p.textContent = p.textContent.toUpperCase();
});