const form = document.getElementById("user-auth");
const otp = document.getElementById("otp");
const submitButton = document.getElementById("button-main");

// ---------------------------------------------------------
// ----------------Realtime Input Validation----------------
// ---------------------------------------------------------

// OTP Input Validation
let previousValue = "";
otp.addEventListener("input", function (e) {
  let lastInputIndex = -1;

  if (previousValue == "") {
    lastInputIndex = 0;
  } else {
    for (let i = 0; i < previousValue.length; i++) {
      if (otp.value[i] != previousValue[i]) {
        lastInputIndex = i;
        break;
      }
    }

    if (lastInputIndex == -1) {
      lastInputIndex = otp.value.length - 1;
    }
  }
  console.log(`Last Input Index ${lastInputIndex}`);
  if (
    otp.value[lastInputIndex] < "0" ||
    otp.value[lastInputIndex] > "9" ||
    otp.value.length > 6
  ) {
    if (previousValue == "") {
      otp.value = "";
    } else if (lastInputIndex == otp.value.length - 1) {
      otp.value = otp.value.slice(0, -1);
    } else {
      otp.value =
        otp.value.slice(0, lastInputIndex) +
        otp.value.slice(lastInputIndex + 1);
    }
  }

  previousValue = otp.value;
});

// ---------------------------------------------------------
// ----------------On Submit Input Validation---------------
// ---------------------------------------------------------

submitButton.addEventListener("click", function (e) {
  e.preventDefault();

  if (otp.value.length !== 6) {
    alert("OTP must be exactly 6 digits long.");
    otp.focus();
    return;
  }
  form.submit();
});
