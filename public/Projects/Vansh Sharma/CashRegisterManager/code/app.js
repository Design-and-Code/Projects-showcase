const billAmount = document.getElementById("billAmt");
const nextButton = document.getElementById("nextBtn");

const cashGivenInput = document.querySelector(".cashGivenInput");
const cashGiven = document.getElementById("cashGiven");
const submitButton = document.getElementById("submitBtn");

const errorMessage = document.querySelector(".errorMessage");

const changeReturn = document.querySelector(".changeReturn");

const output = document.getElementById("output");
const noOfNotes = document.querySelectorAll(".noOfNotes");

const noteArray = [2000, 500, 100, 20, 10, 5, 1];

// Next Button
nextButton.addEventListener(`click`, () => {
  hideError();

  if (Number(billAmount.value) > 0) {
    nextButton.style.display = "none";
    cashGivenInput.style.display = "block";
  } else {
    showError("Enter Valid bill Amount");
  }
});

// Submit Button
submitButton.addEventListener(`click`, () => {

  hideError();

  let billAmountValue = Number(billAmount.value);
  let cashGivenValue = Number(cashGiven.value);

  if (billAmountValue > 0 && cashGivenValue > 0) {


    // Invalid Inputs
    if (!Number.isInteger(cashGivenValue)) {
      showError("Enter Valid Amount in Cash Given Field");
      return;
    }
    if (billAmountValue > cashGivenValue) {
      showError(`Cash Given value is less than bill, Please Enter right Amount`);
      return;
    }

    // Calculate No  of notes
    calculateNotes(billAmountValue, cashGivenValue);
  } else {
    showError("Enter Valid Bill Amount");
  }

})


// Functions


// To calculate no of Notes
let calculateNotes = (bill, cash) => {
  let returnAmount = cash - bill;

  if (returnAmount < 1) {
    showError("No Amount to Return");
    return;
  }
  changeReturn.style.display = "block";


  for (let i = 0; i < noteArray.length; i++) {
    returnAmount = compare(returnAmount, noteArray[i], i);
  }

}

// How many Notes to return
function compare(remainder, noteAmount, index) {

  if (remainder >= noteAmount) {
    let notes = Math.floor(remainder / noteAmount);
    remainder = remainder - notes * noteAmount;
    noOfNotes[index].innerText = `${notes}`;
  }
  return remainder
}


// Error Message
function showError(text) {
  errorMessage.style.display = "block";
  errorMessage.innerText = text;
  changeReturn.style.display = "none";
}

// Hide Error
function hideError() {
  errorMessage.style.display = "none";
}
