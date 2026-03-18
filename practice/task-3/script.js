const inputd = document.getElementById("inputdisplay");
const add = document.getElementById("add");
const allclear = document.getElementById("allclear");

function loadfunc(ele) {
    inputd.value += ele.innerHTML;
    ele.classList.add("scale-95");
    setTimeout(() => {
        ele.classList.remove("scale-95");
    }, 150);
}
function calculate() {
    inputd.value = eval(inputd.value);
}
function del() {
    inputd.value = inputd.value.slice(0, -1);
}
function alldel() {
    inputd.value = inputd.value.slice(0, 0);
}
