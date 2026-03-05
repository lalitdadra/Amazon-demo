const loadingImages = [
    "./images/pic-1.jpg",
    "./images/pic-2.jpg",
    "./images/pic-3.jpg",
    "./images/pic-4.jpg",
    "./images/pic-5.jpg",
    "./images/pic-6.jpg",
];
let index = 0;

const images = document.getElementById("loading-images");
// function helo() {
//     setInterval(() => {
        
//         images.innerHTML =`<img src="${loadingImages[index++]}" alt="loading..." />`;
//         console.log(index)
//         index %= loadingImages.length;
        
//     }, 1000)
// }   

function helo(){
setInterval(()=>{
    if(index==loadingImages.length){
        index=0;
    }
   console.log("Function started");
        let empty = `<img src =${loadingImages[index]} alt='loading...'/>`;
        images.innerHTML = empty;
        index++ ;

},2000)
}





let user = {
  name: "Lalit",
  age: 22
};
localStorage.setItem("userData", JSON.stringify(user));
localStorage.setItem("theme", "dark");
localStorage.setItem("language", "hindi");
let storedUser = JSON.parse(localStorage.getItem("userData"));
console.log(storedUser.name); 
console.log(localStorage.getItem("theme")); 
console.log(localStorage.getItem("language")); 