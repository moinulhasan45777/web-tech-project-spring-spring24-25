const form = document.getElementById("user-registration-form");
const submitButton = document.getElementById("button-main");
const patientHistoryText = document.getElementById(
  "patient-medical-history-others"
);
const familyHistoryText = document.getElementById(
  "family-medical-history-others"
);
const currentAddictions = document.getElementById("user-current-drug");
const previousAddictions = document.getElementById("user-previous-drug");
const activityLevel = document.getElementsByName("weekly-activity-level");

// ****************************************************
// Realtime Validation
// ****************************************************

// Patient History Others
let previousValueOthers = "";

patientHistoryText.addEventListener("input", function (e) {
  let lastInputIndex = -1;

  if (previousValueOthers == "") {
    lastInputIndex = 0;
  } else {
    for (let i = 0; i < previousValueOthers.length; i++) {
      if (patientHistoryText.value[i] != previousValueOthers[i]) {
        lastInputIndex = i;
        break;
      }
    }

    if (lastInputIndex == -1) {
      lastInputIndex = patientHistoryText.value.length - 1;
    }
  }

  if (
    (patientHistoryText.value[lastInputIndex] < "a" ||
      patientHistoryText.value[lastInputIndex] > "z") &&
    (patientHistoryText.value[lastInputIndex] < "A" ||
      patientHistoryText.value[lastInputIndex] > "Z") &&
    patientHistoryText.value[lastInputIndex] != " " &&
    patientHistoryText.value[lastInputIndex] != "." &&
    patientHistoryText.value[lastInputIndex] != "-"
  ) {
    if (previousValueOthers == "") {
      patientHistoryText.value = "";
    } else if (lastInputIndex == patientHistoryText.value.length - 1) {
      patientHistoryText.value = patientHistoryText.value.slice(0, -1);
    } else {
      patientHistoryText.value =
        patientHistoryText.value.slice(0, lastInputIndex) +
        patientHistoryText.value.slice(lastInputIndex + 1);
    }
  }

  previousValueOthers = patientHistoryText.value;
});

// Emergency Name
let previousValueFamily = "";

familyHistoryText.addEventListener("input", function (e) {
  let lastInputIndex = -1;

  if (previousValueFamily == "") {
    lastInputIndex = 0;
  } else {
    for (let i = 0; i < previousValueFamily.length; i++) {
      if (familyHistoryText.value[i] != previousValueFamily[i]) {
        lastInputIndex = i;
        break;
      }
    }

    if (lastInputIndex == -1) {
      lastInputIndex = familyHistoryText.value.length - 1;
    }
  }

  if (
    (familyHistoryText.value[lastInputIndex] < "a" ||
      familyHistoryText.value[lastInputIndex] > "z") &&
    (familyHistoryText.value[lastInputIndex] < "A" ||
      familyHistoryText.value[lastInputIndex] > "Z") &&
    familyHistoryText.value[lastInputIndex] != " " &&
    familyHistoryText.value[lastInputIndex] != "." &&
    familyHistoryText.value[lastInputIndex] != "-"
  ) {
    if (previousValueFamily == "") {
      familyHistoryText.value = "";
    } else if (lastInputIndex == familyHistoryText.value.length - 1) {
      familyHistoryText.value = familyHistoryText.value.slice(0, -1);
    } else {
      familyHistoryText.value =
        familyHistoryText.value.slice(0, lastInputIndex) +
        familyHistoryText.value.slice(lastInputIndex + 1);
    }
  }

  previousValueFamily = familyHistoryText.value;
});

// Current Drug Addiction
let previousValueCurrent = "";

currentAddictions.addEventListener("input", function (e) {
  let lastInputIndex = -1;

  if (previousValueCurrent == "") {
    lastInputIndex = 0;
  } else {
    for (let i = 0; i < previousValueCurrent.length; i++) {
      if (currentAddictions.value[i] != previousValueCurrent[i]) {
        lastInputIndex = i;
        break;
      }
    }

    if (lastInputIndex == -1) {
      lastInputIndex = currentAddictions.value.length - 1;
    }
  }

  if (
    (currentAddictions.value[lastInputIndex] < "a" ||
      currentAddictions.value[lastInputIndex] > "z") &&
    (currentAddictions.value[lastInputIndex] < "A" ||
      currentAddictions.value[lastInputIndex] > "Z") &&
    currentAddictions.value[lastInputIndex] != " " &&
    currentAddictions.value[lastInputIndex] != "." &&
    currentAddictions.value[lastInputIndex] != "-"
  ) {
    if (previousValueCurrent == "") {
      currentAddictions.value = "";
    } else if (lastInputIndex == currentAddictions.value.length - 1) {
      currentAddictions.value = currentAddictions.value.slice(0, -1);
    } else {
      currentAddictions.value =
        currentAddictions.value.slice(0, lastInputIndex) +
        currentAddictions.value.slice(lastInputIndex + 1);
    }
  }

  previousValueCurrent = currentAddictions.value;
});

// Previous Drug Addictions
let previousValuePrevious = "";

previousAddictions.addEventListener("input", function (e) {
  let lastInputIndex = -1;

  if (previousValuePrevious == "") {
    lastInputIndex = 0;
  } else {
    for (let i = 0; i < previousValuePrevious.length; i++) {
      if (previousAddictions.value[i] != previousValuePrevious[i]) {
        lastInputIndex = i;
        break;
      }
    }

    if (lastInputIndex == -1) {
      lastInputIndex = previousAddictions.value.length - 1;
    }
  }

  if (
    (previousAddictions.value[lastInputIndex] < "a" ||
      previousAddictions.value[lastInputIndex] > "z") &&
    (previousAddictions.value[lastInputIndex] < "A" ||
      previousAddictions.value[lastInputIndex] > "Z") &&
    previousAddictions.value[lastInputIndex] != " " &&
    previousAddictions.value[lastInputIndex] != "." &&
    previousAddictions.value[lastInputIndex] != "-"
  ) {
    if (previousValuePrevious == "") {
      previousAddictions.value = "";
    } else if (lastInputIndex == previousAddictions.value.length - 1) {
      previousAddictions.value = previousAddictions.value.slice(0, -1);
    } else {
      previousAddictions.value =
        previousAddictions.value.slice(0, lastInputIndex) +
        previousAddictions.value.slice(lastInputIndex + 1);
    }
  }

  previousValuePrevious = previousAddictions.value;
});

// ****************************************************
// On Submit Validation
// ****************************************************
submitButton.addEventListener("click", function (e) {
  e.preventDefault();

  let activitySelected = false;
  for (let i = 0; i < activityLevel.length; i++) {
    if (activityLevel[i].checked) {
      activitySelected = true;
    }
  }

  if (activitySelected) {
    form.requestSubmit(submitButton);
  } else {
    alert("Please select weekly activity level");
  }
});
