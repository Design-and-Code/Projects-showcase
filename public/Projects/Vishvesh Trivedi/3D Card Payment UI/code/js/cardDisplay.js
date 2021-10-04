const card = document.querySelector(".card");
const nameField = document.querySelector("#username");
const nameDisplay = document.querySelector("#card-holder-name");
const cvvField = document.querySelector("#cvv");
const cvvDisplay = document.querySelector("#cvv-display");
const expiresField = document.querySelector("#expiry");
const expiresDisplay = document.querySelector("#expires-display");
const cardNumField = document.querySelector("#cardnumber");
const cardNumDisplay = document.querySelector(".card-num");
const visaLogos = document.querySelectorAll('.visa-logo');
const mastercardLogos = document.querySelectorAll('.master-card-logo');
const rupayLogos = document.querySelectorAll('.rupay-logo');
let isCardBack = false;

function cardFlipBack() {
  card.classList.add("flip");
  isCardBack = true;
}
function cardFlipFront() {
  if (isCardBack) {
    card.classList.remove("flip");
  }
}

function displayOnCard() {
  nameDisplay.innerText = nameField.value;
  if (nameField.value.length == 0) {
    nameDisplay.innerText = "________________";
  }
  cvvDisplay.innerText = cvvField.value;
  if (cvvField.value.length == 0) {
    cvvDisplay.innerText = "____";
  }
  expiresDisplay.innerText = expiresField.value;
  if (expiresField.value.length == 0) {
    expiresDisplay.innerText = "__ / __";
  }
}

function displayCardNum() {

  if(cardNumField.value.length == 0){
      cardNumDisplay.innerText = " ____ \u00a0 \u00a0____ \u00a0 \u00a0____  \u00a0\u00a0 ____";
  }else if(cardNumField.value.length == 4){
  cardNumDisplay.innerText = cardNumField.value[0] + cardNumField.value[1] + cardNumField.value[2] + cardNumField.value[3] + "\u00a0 \u00a0";
  }else if(cardNumField.value.length == 8){
      cardNumDisplay.innerText += cardNumField.value[4] + cardNumField.value[5] + cardNumField.value[6] + cardNumField.value[7] + "\u00a0 \u00a0";
  }else if(cardNumField.value.length == 12){
      cardNumDisplay.innerText += cardNumField.value[8] + cardNumField.value[9] + cardNumField.value[10] + cardNumField.value[11] + "\u00a0 \u00a0";
  }else if(cardNumField.value.length == 16){
      cardNumDisplay.innerText += cardNumField.value[12] + cardNumField.value[13] + cardNumField.value[14] + cardNumField.value[15];
  }

  if(cardNumField.value[0]==4){
      visaLogos.forEach(visaLogo =>{
          visaLogo.style.display = "block";
      })
      rupayLogos.forEach(rupayLogo =>{
        rupayLogo.style.display = "none";
    })
      mastercardLogos.forEach(mastercardLogo =>{
        mastercardLogo.style.display = "none";
    })
  }else if(cardNumField.value[0]==5 && (cardNumField.value[1]==1 || cardNumField.value[1]==5)){
    visaLogos.forEach(visaLogo =>{
        visaLogo.style.display = "none";
    })
    rupayLogos.forEach(rupayLogo =>{
        rupayLogo.style.display = "none";
    })
    mastercardLogos.forEach(mastercardLogo =>{
      mastercardLogo.style.display = "block";
  })
}else if(cardNumField.value[0]==6 && (cardNumField.value[1]==0 || cardNumField.value[1]==5)){
    visaLogos.forEach(visaLogo =>{
        visaLogo.style.display = "none";
    })
    rupayLogos.forEach(rupayLogo =>{
        rupayLogo.style.display = "block";
    })
    mastercardLogos.forEach(mastercardLogo =>{
      mastercardLogo.style.display = "none";
  })
}else{
    visaLogos.forEach(visaLogo =>{
        visaLogo.style.display = "none";
    })
    rupayLogos.forEach(rupayLogo =>{
        rupayLogo.style.display = "none";
    })
    mastercardLogos.forEach(mastercardLogo =>{
      mastercardLogo.style.display = "none";
  })
}
}

