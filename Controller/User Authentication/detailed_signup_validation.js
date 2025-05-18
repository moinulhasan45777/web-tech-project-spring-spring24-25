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
let previousValueMobile = "";
emPhone.addEventListener("input", function (e) {
  let lastInputIndex = 15;

  if (previousValueMobile == "") {
    lastInputIndex = 0;
  } else {
    for (let i = 0; i < previousValueMobile.length; i++) {
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

// City
let previousValueCity = "";

city.addEventListener("input", function (e) {
  let lastInputIndex = -1;

  if (previousValueCity == "") {
    lastInputIndex = 0;
  } else {
    for (let i = 0; i < previousValueCity.length; i++) {
      if (city.value[i] != previousValueCity[i]) {
        lastInputIndex = i;
        break;
      }
    }

    if (lastInputIndex == -1) {
      lastInputIndex = city.value.length - 1;
    }
  }

  if (
    (city.value[lastInputIndex] < "a" || city.value[lastInputIndex] > "z") &&
    (city.value[lastInputIndex] < "A" || city.value[lastInputIndex] > "Z") &&
    city.value[lastInputIndex] != " " &&
    city.value[lastInputIndex] != "." &&
    city.value[lastInputIndex] != "-"
  ) {
    if (previousValueCity == "") {
      city.value = "";
    } else if (lastInputIndex == city.value.length - 1) {
      city.value = city.value.slice(0, -1);
    } else {
      city.value =
        city.value.slice(0, lastInputIndex) +
        city.value.slice(lastInputIndex + 1);
    }
  }

  previousValueCity = city.value;
});

// Emergency Name
let previousValueName = "";

emName.addEventListener("input", function (e) {
  let lastInputIndex = -1;

  if (previousValueName == "") {
    lastInputIndex = 0;
  } else {
    for (let i = 0; i < previousValueName.length; i++) {
      if (emName.value[i] != previousValueName[i]) {
        lastInputIndex = i;
        break;
      }
    }

    if (lastInputIndex == -1) {
      lastInputIndex = emName.value.length - 1;
    }
  }

  if (
    (emName.value[lastInputIndex] < "a" ||
      emName.value[lastInputIndex] > "z") &&
    (emName.value[lastInputIndex] < "A" ||
      emName.value[lastInputIndex] > "Z") &&
    emName.value[lastInputIndex] != " " &&
    emName.value[lastInputIndex] != "." &&
    emName.value[lastInputIndex] != "-"
  ) {
    if (previousValueName == "") {
      emName.value = "";
    } else if (lastInputIndex == emName.value.length - 1) {
      emName.value = emName.value.slice(0, -1);
    } else {
      emName.value =
        emName.value.slice(0, lastInputIndex) +
        emName.value.slice(lastInputIndex + 1);
    }
  }

  previousValueName = emName.value;
});

// Emergency Relation
let previousValueRelation = "";

emRelation.addEventListener("input", function (e) {
  let lastInputIndex = -1;

  if (previousValueRelation == "") {
    lastInputIndex = 0;
  } else {
    for (let i = 0; i < previousValueRelation.length; i++) {
      if (emRelation.value[i] != previousValueRelation[i]) {
        lastInputIndex = i;
        break;
      }
    }

    if (lastInputIndex == -1) {
      lastInputIndex = emRelation.value.length - 1;
    }
  }

  if (
    (emRelation.value[lastInputIndex] < "a" ||
      emRelation.value[lastInputIndex] > "z") &&
    (emRelation.value[lastInputIndex] < "A" ||
      emRelation.value[lastInputIndex] > "Z") &&
    emRelation.value[lastInputIndex] != " " &&
    emRelation.value[lastInputIndex] != "." &&
    emRelation.value[lastInputIndex] != "-"
  ) {
    if (previousValueRelation == "") {
      emRelation.value = "";
    } else if (lastInputIndex == emRelation.value.length - 1) {
      emRelation.value = emRelation.value.slice(0, -1);
    } else {
      emRelation.value =
        emRelation.value.slice(0, lastInputIndex) +
        emRelation.value.slice(lastInputIndex + 1);
    }
  }
  previousValueRelation = emRelation.value;
});

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
  form.requestSubmit(submitButton);
});
