const balloons = document.querySelectorAll(".balloon");
const res = document.getElementById("btn");

function pop() {
    balloons.forEach(balloon => {
        balloon.addEventListener(`mouseover`, () => {
            balloon.style.backgroundColor = "white";
        })
    });
}

res.addEventListener(`click`, () => {
    console.log("clicked")
    window.location.reload();
})


pop();



