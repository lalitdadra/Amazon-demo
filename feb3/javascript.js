const btn = document.querySelector(".toggle");
const dropdown = document.querySelector(".dropdown");
const content = document.querySelector(".content");

let open = false;
btn.addEventListener("click", () => {
  if (!open) {
    dropdown.style.height = content.scrollHeight + "px";
    btn.textContent = "Close";
  } else {
    dropdown.style.height = "0px";
    btn.textContent = "Open";
  } open = !open;
});