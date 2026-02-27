

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


async function myfunc() {
    const input_field = document.getElementById("username");
    const username = input_field.value;
    document.getElementById("result").innerHTML = username;
    // document.getElementById("result").innerHTML = username;
    input_field.value="";

    try {
        const response = await fetch("http://192.168.1.23:8000/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ request: username })
        });

        const data = await response.json();
        document.getElementById("output").innerText = data.message;

    } catch (error) {
        console.log(error);
       }   }