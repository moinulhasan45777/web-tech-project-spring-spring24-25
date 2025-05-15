const form = document.getElementById("user-registration-form");
const submitButton = document.getElementById("button-main");
const patientHistoryCheckboxes = [
  document.getElementById("patient-medical-history-1"),
  document.getElementById("patient-medical-history-2"),
  document.getElementById("patient-medical-history-3"),
  document.getElementById("patient-medical-history-4"),
  document.getElementById("patient-medical-history-5"),
  document.getElementById("patient-medical-history-6"),
  document.getElementById("patient-medical-history-7"),
  document.getElementById("patient-medical-history-8"),
  document.getElementById("patient-medical-history-9"),
  document.getElementById("patient-medical-history-10"),
  document.getElementById("patient-medical-history-11"),
  document.getElementById("patient-medical-history-12"),
  document.getElementById("patient-medical-history-13"),
  document.getElementById("patient-medical-history-14"),
  document.getElementById("patient-medical-history-15"),
  document.getElementById("patient-medical-history-16"),
];

const patientHistoryText = document.getElementById(
  "patient-medical-history-others"
);

const familyHistoryCheckboxes = [
  document.getElementById("family-medical-history-1"),
  document.getElementById("family-medical-history-2"),
  document.getElementById("family-medical-history-3"),
  document.getElementById("family-medical-history-4"),
  document.getElementById("family-medical-history-5"),
  document.getElementById("family-medical-history-6"),
  document.getElementById("family-medical-history-7"),
  document.getElementById("family-medical-history-8"),
  document.getElementById("family-medical-history-9"),
  document.getElementById("family-medical-history-10"),
  document.getElementById("family-medical-history-11"),
  document.getElementById("family-medical-history-12"),
  document.getElementById("family-medical-history-13"),
  document.getElementById("family-medical-history-14"),
  document.getElementById("family-medical-history-15"),
  document.getElementById("family-medical-history-16"),
];

const familyHistoryText = document.getElementById(
  "family-medical-history-others"
);

const currentAddictions = document.getElementById("user-current-drug");
const previousAddictions = document.getElementById("user-previous-drug");
const activityLevel = document.getElementsByName("weekly-activity-level");

// ****************************************************
// On Submit Validation
// ****************************************************
submitButton.addEventListenerI("click", function (e) {
  e.preventDefault();

  let patientHistoryChecked = false;
  let familyHistoryChecked = false;
  for (let i = 0; i < 16; i++) {
    if (patientHistory[i].checked) {
      patientHistoryChecked = true;
    }
    if (familyHistory[i].checked) {
      familyHistoryChecked = true;
    }
  }

  if (!patientHistoryChecked && patientHistoryText.value == "") {
    alert("Please select any patient medical history!");
    return;
  }
  if (!familyHistoryChecked && familyHistoryText.value == "") {
    alert("Please select any family medical history!");
    return;
  }

  for (let i = 0; i < activityLevel.length; i++) {
    if (activityLevel[i].checked) {
      break;
    }
    alert("Please select daily activity level");
    return;
  }

  form.requestSubmit(submitButton);
});
