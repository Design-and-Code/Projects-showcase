const paragraph = document.getElementById("keyCode");
const keyName = document.getElementById("keyNameValue")
const keyCodeName = document.getElementById("keyCodeNameValue");
const keyLocation = document.getElementById("keyLocationValue");

window.addEventListener("keydown", function(e){
    paragraph.innerHTML = e.keyCode;
    keyName.innerHTML = e.key;
    keyCodeName.innerHTML = e.code;
    keyLocation.innerHTML = e.location;
})
