const ContainerElementRef = document.getElementById("container");

const images = [
  "/Amazon-demo/jan29/pic-1.jpg",
  "/Amazon-demo/jan29/pic-2.jpg",
  "/Amazon-demo/jan29/pic-3.jpg",
  "/Amazon-demo/jan29/pic-4.jpg",
  "/Amazon-demo/jan29/pic-5.jpg",

  
];
let currentIndex = 0;

// function loadImages() {
//   setInterval(() => {
//     if (currentIndex == images.length) {
//       currentIndex = 0;
//     }
//     // 1. Load image based on the index
//     let elem = `<img src="./images/${images[currentIndex]}" alt="" />`;
//     ContainerElementRef.innerHTML = elem;
//     currentIndex = currentIndex + 1;
//   }, 2000);
// }

function loadImages() {
  const imagesRef = document.getElementsByTagName("img");

  setInterval(() => {
    if (currentIndex !== 0 || currentIndex === images.length)
      imagesRef[currentIndex - 1].classList.remove("scale-in");

    if (currentIndex == images.length) {
      currentIndex = 0;
    }

    // 1. Load image based on the index
    imagesRef[currentIndex].classList.add("scale-in");
    currentIndex = currentIndex + 1;
  }, 2000);
}

loadImages();