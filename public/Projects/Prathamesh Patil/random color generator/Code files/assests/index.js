let color  = document.querySelector(".color");
let body_color = document.querySelector("body");
let button = document.querySelector(".Button");

body_color.style.backgroundColor = color.innerText;

button.addEventListener("click", ()=>{
    let Random = "";
    let chars_using = "0123456789abcdef";
    for(let i=0; i<6; i++){
        Random += chars_using[Math.floor(Math.random() * 16)];
    }

    color.innerText = "#" + Random;
    body_color.style.backgroundColor = "#" + Random;
})