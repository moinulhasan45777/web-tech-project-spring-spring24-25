const form = document.getElementById("insurance-calculator");
const insuranceCode = document.getElementById("insurance-code");
const submitButton = document.getElementById("button-main");

submitButton.addEventListener("click", function (e) {
  e.preventDefault();

  if (insuranceCode.value != "") {
    for (let i = 0; i < insuranceCode.value.length; i++) {
      if (
        (insuranceCode.value[i] < "0" || insuranceCode.value[i] > "9") &&
        (insuranceCode.value[i] < "a" || insuranceCode.value[i] > "z") &&
        (insuranceCode.value[i] < "A" || insuranceCode.value[i] > "Z")
      ) {
        alert("invalid Insurance Code!");
        return;
      }
    }
  }

  form.requestSubmit(submitButton);
});
