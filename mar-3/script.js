let user = "lalit";
// document.getElementById("user"); 
localStorage.setItem("name",user);
let username = localStorage.getItem("name");
console.log(username);