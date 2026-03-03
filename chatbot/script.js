

const messages = [[]];
let id = 0;

const message = document.getElementById("message");


const input_field = document.getElementById("username");


function createNewChat(id) {
    const history_container = document.getElementById("history-container");
    const chatItem = document.createElement("div");
    chatItem.className = "history-bar";
    chatItem.innerText = `Chat ${id}`;
    chatItem.onclick = function (){switchChat(id);};
    history_container.appendChild(chatItem);
}

createNewChat(id);


function switchChat(chatId) {
    id=chatId;
    renderMessages();
}




async function myfunc() {
    // let mainBox = [];
    const username = input_field.value;

    messages[id].push({ role: 'user', text: username })

    input_field.value = "";


    try {
        const response = await fetch("http://192.168.29.119:8000/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ content: username })

        });
        console.log('here')

        console.log('here also')
        const data = await response.json();
        messages[id].push({ role: 'ai', text: data.content })

        console.log(messages);
        renderMessages();
        // messages[id].push(ma);
    }

    catch (error) {
        console.log(error);
    }
}
function renderMessages() {
    const message = document.getElementById("message");
    message.innerHTML = "";

    messages[id].forEach(msg => {
        const div = document.createElement("div");
        div.className = msg.role === "user" ? "user-box" : "output";
        div.textContent = msg.text;

        message.appendChild(div);
    });


    message.scrollTop = message.scrollHeight;
}

input_field.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        myfunc()
    }
});

function newChat() {
    id++;
    message.innerHTML = "";
    messages[id] = [];
    createNewChat(id);
    renderMessages();

}



