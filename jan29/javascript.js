let images = [
  "pic-1.jpg",
  "pic-2.jpg",
  "pic-3.jpg",
];
 
let i = 0;
let slider = document.getElementById("slider");
 
setInterval(() => {
  slider.src = images[i];
  i++;
 
  if (i === images.length) {
    i = 0;
  }
}, 1000);