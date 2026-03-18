  
function validateForm() {
    const mail = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let emailvalid = document.getElementById("emailvalid");
    let fname = document.getElementById("firstname").value;
    let lname = document.getElementById("lastname").value;
    let firstError = document.getElementById("firstError");
    let lastError = document.getElementById("lastError");



    emailError.innerText = "";
    passwordError.innerText = "";
    emailvalid.innerText = "";

    if(!fname.trim().length){
        firstError.innerHTML = "Enter firstname";
    }
    if(!lname.trim().length){
        lastError.innerHTML = "Enter lastname";
    }

    if (!mail.length) {
        emailError.innerText = "Email is required";}
        else if (mail.includes("@") == false || mail.includes(".") == false) {
            emailError.innerText = "Mail invalid "
        } 
    if (!password.length) {
        passwordError.innerText = "Password is required";
    }
    else if (password.length <= 8 ) {
        passwordError.innerText = "Password must be at least 8 characters";
    }
    if(fname.length && lname.length && mail.length && password.length){
        alert("Form Submitted Successfully");
    }

    let storage =  JSON.parse(localStorage.getItem("storage"))|| [];
    
    let local = {
        email : mail,   
        password : password,
        firstname : fname,
        lastname : lname
    }
    if(mail.length && fname.length && lname.length && password.length){
        storage.push(local);            
        // console.log(storage)
        localStorage.setItem("storage",JSON.stringify(storage));
        
    }
    storage.forEach((fruit) => {
        console.log(fruit.email);
});
}



function printError(input) {
    if (input.value === '') {
        input.parentElement.nextElementSibling.innerHTML = 'this box is not be empty!'
    }
    else {
        input.parentElement.nextElementSibling.innerHTML = ''
 
    }
}

