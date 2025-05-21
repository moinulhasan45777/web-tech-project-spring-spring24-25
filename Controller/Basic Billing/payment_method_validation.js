const form = document.getElementById("select-payment-method");
const radioButton = document.getElementsByName("payment-method");
const totalPaid = document.getElementById("total-paid");
const submitButton = document.getElementById("button-main");
const installmentRadio = document.getElementById("installment");
const installmentDiv = document.getElementById("installment-div");
const installmentLabel = document.getElementById("installment-label");
const installmentDuration = document.getElementById("installment-duration");
const cardRadio = document.getElementById("card");
const cashRadio = document.getElementById("cash");

installmentRadio.addEventListener("change", function () {
  if (installmentRadio.checked) {
    installmentDiv.classList.remove("remove");
    installmentLabel.classList.remove("remove");
    installmentDuration.classList.remove("remove");
  } else {
    installmentDiv.classList.add("remove");
    installmentLabel.classList.add("remove");
    installmentDuration.classList.add("remove");
  }
});
cashRadio.addEventListener("change", function () {
  if (cashRadio.checked) {
    installmentDiv.classList.add("remove");
    installmentLabel.classList.add("remove");
    installmentDuration.classList.add("remove");
  }
});

cardRadio.addEventListener("change", function () {
  if (cardRadio.checked) {
    installmentDiv.classList.add("remove");
    installmentLabel.classList.add("remove");
    installmentDuration.classList.add("remove");
  }
});

// *****************************************
// On Submit Validation
// *****************************************
submitButton.addEventListener("click", function (e) {
  e.preventDefault();

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

  if (totalPaid.value == "") {
    alert("Incorrect Paid Amount");
    return;
  }

  if (installmentRadio.checked && installmentDuration.value == "select") {
    alert("Please select installment duration!");
    return;
  }

  form.requestSubmit(submitButton);
});
