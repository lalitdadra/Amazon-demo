// function myfunc() {

//     const input = document.getElementById("username").value;
//     document.getElementById("result").innerHTML = input;
//     document.getElementById("output").innerHTML = input;

//     fetch("http://127.0.0.1:8000/chat",
//         {
//             method:"POST",
//             headers:{
//                 'Content-Type':"application/json"
//             },
//             body:JSON.stringify({name:username})
//         }
//     ).then(response => response.json())
//     .then(data => {
//         document.getElementById("output").innerHTML = data.message;
//     })
//     .catch(error => {
//         console.error("Error:", error);
//     });
// }
const messages = [];
async function myfunc() {
    const input_field = document.getElementById("username");
    
    const username = input_field.value;
    
    messages.push({ role: 'user', text: username })
    
    input_field.value = "";
    
    try {
        const response = await fetch("http://192.168.1.23:8000/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ content: username })
        });

        const data = await response.json();
        messages.push({ role: 'ai', text: data.content })
       
        console.log(messages);
        renderMessages();
    }

    catch (error) {
        console.log(error);
    }
}
function renderMessages() {
  const message = document.getElementById("message");
  message.innerHTML = ""; 

  messages.forEach(msg => {
            const div = document.createElement("div");
            div.className = msg.role === "user" ? "user-box" : "output";
            div.textContent = msg.text;

            message.appendChild(div);
        });

        
        message.scrollTop = message.scrollHeight;
}

username.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        myfunc()
    }
});



