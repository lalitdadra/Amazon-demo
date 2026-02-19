let images = [
  "/Amazon-demo/jan29/pic-4.jpg",
  "/Amazon-demo/jan29/pic-5.jpg",
  "/Amazon-demo/jan29/pic-1.jpg",
  "/Amazon-demo/jan29/pic-2.jpg",
  "/Amazon-demo/jan29/pic-3.jpg",
];

let i = 0;
const slider = document.getElementById("slider");

// create img dynamically
const img = document.createElement("img");
img.style.width = "100%";
img.style.height = "100%";
img.style.transition = "opacity 0.5s ease";
slider.appendChild(img);

// change images
setInterval(() => {
  img.style.opacity = 0;

  setTimeout(() => {
    img.src = images[i];
    img.style.opacity = 1;
    i = (i + 1) % images.length;
  },100);
}, 1000);

// <div id="slider">
//             <script src="supa.js"></script>
//         </div> 