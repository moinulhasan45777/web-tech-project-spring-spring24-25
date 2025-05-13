const form = document.getElementById("select-payment-method");
const radioButton = document.getElementsByName("payment-method");
const totalPaid = document.getElementById("total-paid");
const submitButton = document.getElementById("button-main");

// *****************************************
// On Submit Validation
// *****************************************
submitButton.addEventListener("click", function () {
  let isChecked = false;
  for (let i = 0; i < radioButton.length; i++) {
    if (radioButton[i].checked) {
      isChecked = true;
    }
  }

  if (isChecked == false) {
    alert("Please Select a Payment Method");
    return;
  }

  for (let i = 0; i < totalPaid.value.length; i++) {
    if (totalPaid.value[i] < "0" || totalPaid.value[i] > "9") {
      alert("Incorrect Paid Amount");
      return;
    }
  }
});
