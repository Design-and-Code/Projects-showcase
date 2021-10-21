let inputTxt = document.querySelector('#input-txt');
let outputTxt = document.querySelector('#output-txt');
let btnTranslate = document.querySelector('#btn-translate');


let serverUrl = "https://api.funtranslations.com/translate/dolan.json";

function getUrl(text) {
    return serverUrl + "?" + "text=" + text;
}

btnTranslate.addEventListener('click', function btnClick() {
  
    if (inputTxt.value === '') {
        alert('Please Enter some Text!');
    } else if (!isNaN(parseFloat(inputTxt.value))) {
        alert('Please Enter Text!');
    } else if (/\d/.test(inputTxt.value)) {
        alert('Please Enter only Text!');
    } else {
        fetch(getUrl(inputTxt.value))
            .then(response => response.json())
            .then(function getContent(json) {
                console.log(json);
                return outputTxt.innerText = json.contents.translated;
            }).catch(function errorHandling(error) {
                if (error.code === 429) {
                    alert("Sorry There are Too Many Requests ! Please try again after some time");
                } else {
                    console.log("Sorry an Error Occured", error);
                    alert("Something went wrong with our server! Try again after some time");
                }
            });
    }
});