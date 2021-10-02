let fact = document.querySelector("#fact");
let factText = document.querySelector("#factText");

let numberInput = document.querySelector("#numberInput");
numberInput.addEventListener("input", getFactAjax);

function getFactAjax() {
  let number = numberInput.value;
  if (number != "") {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://numbersapi.com/" + number);

    xhr.onload = function () {
      if (this.status == 200) {
        fact.style.display = "block";
        factText.innerText = this.responseText;
      }
    };
    xhr.send();
  }
}

function getFactFetch() {
  let number = numberInput.value;

  if (number != "") {
    fetch("http://numbersapi.com/" + number)
      .then((response) => response.text())
      .then((data) => {
        fact.style.display = "block";
        factText.innerText = data;
      })
      .catch((err) => console.log(err));
  }
}

document.getElementById("add").addEventListener("click", remind);

function remind() {
  let minutes = parseInt(document.getElementById("num").value);
  //minutes = minutes*600000;

  if (isNaN(minutes)) {
    console.log("It's not a number");
  } else if (minutes === 0) {
    document.getElementById("demo").innerHTML =
      "Hey👋! Time cannot be zero dear!😃";
  } else {
    //console.log(minutes);
    chrome.runtime.sendMessage({ minutes }, function (response) {
      console.log(response);
    });
  }
}
