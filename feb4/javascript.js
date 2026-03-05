const ContainerElementRef = document.getElementById("container");

const images = [
  "./pic-1.jpg",
  "./pic-2.jpg",
  "./pic-3.jpg",
  "./pic-4.jpg",
  "./pic-5.jpg",

  
];
let currentIndex = 0;

function loadImages() {
  setInterval(() => {
    if (currentIndex == images.length) {
      currentIndex = 0;
    }
    // 1. Load image based on the index
    let elem = `<img src="./images/${images[currentIndex]}" alt="" />`;
    ContainerElementRef.innerHTML = elem;
    currentIndex = currentIndex + 1;
  }, 2000);
}

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