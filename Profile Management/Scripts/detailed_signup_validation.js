const form = document.getElementById("user-registration-form");
const bloodGroup = document.getElementById("user-blood-group");
const dob = document.getElementById("user-dob");
const presentAddress = document.getElementById("user-address");
const city = document.getElementById("user-city");
const emName = document.getElementById("user-em-name");
const emRelation = document.getElementById("user-em-relation");
const emPhone = document.getElementById("user-em-phone");
const submitButton = document.getElementById("button-main");

// ---------------------------------------------------------
// ----------------Realtime Input Validation----------------
// ---------------------------------------------------------

// User Emergency Mobile-number Validation
let Mobile = "";
emPhone.addEventListener("input", function (e) {
  let lastInputIndex = 15;

  if (previousValueMobile == "") {
    lastInputIndex = 0;
  } else {
    for (let i = 0; i < previousValueMobile.length - 1; i++) {
      if (emPhone.value[i] != previousValueMobile[i]) {
        lastInputIndex = i;
        break;
      }
    }

    if (lastInputIndex == 15) {
      lastInputIndex = emPhone.value.length - 1;
    }
  }

  if (
    (emPhone.value[lastInputIndex] !== "+" &&
      (emPhone.value[lastInputIndex] < "0" ||
        emPhone.value[lastInputIndex] > "9")) ||
    (emPhone.value[0] == "+" && emPhone.value.length > 14) ||
    (emPhone.value[0] != "+" && emPhone.value.length > 11)
  ) {
    emPhone.value =
      emPhone.value.slice(0, lastInputIndex) +
      emPhone.value.slice(lastInputIndex + 1);
  } else if (lastInputIndex != 0 && emPhone.value[lastInputIndex] == "+") {
    emPhone.value =
      emPhone.value.slice(0, lastInputIndex) +
      emPhone.value.slice(lastInputIndex + 1);
  } else if (
    previousValueMobile != "" &&
    emPhone.value[lastInputIndex] == "+" &&
    emPhone.value[0] == "+" &&
    emPhone.value.slice(1).includes("+")
  ) {
    emPhone.value = emPhone.value.slice(1);
  }

  previousValueMobile = emPhone.value;
});

// Date
const dateInput = document.getElementById("user-dob");

const today = new Date().toISOString().split("T")[0];
dateInput.max = today;

// ---------------------------------------------------------
// ----------------On Submit Input Validation---------------
// ---------------------------------------------------------

submitButton.addEventListener("click", function (e) {
  e.preventDefault();

  if (bloodGroup.value == "") {
    alert("Please select a blood group.");
    bloodGroup.focus();
    return;
  }

  if (dob.value == "") {
    alert("Please select a date of birth.");
    dob.focus();
    return;
  }

  // Formatting Date of Birth
  const dobDate = dob.value.split("-");

  if (presentAddress.value.length < 5) {
    alert("Please enter a valid address.");
    presentAddress.focus();
    return;
  }

  if (city.value.length < 3) {
    alert("Please enter a valid city name.");
    city.focus();
    return;
  }

  if (emName.value.length < 3) {
    alert("Please enter a valid emergency contact name.");
    emName.focus();
    return;
  }

  if (emRelation.value.length < 3) {
    alert("Please enter a valid emergency contact relation.");
    emRelation.focus();
    return;
  }

  if (emPhone.value.length != 11 && emPhone.value.length != 14) {
    alert("Please enter a valid emergency contact number.");
    emPhone.focus();
    return;
  }
  form.submit();
});
