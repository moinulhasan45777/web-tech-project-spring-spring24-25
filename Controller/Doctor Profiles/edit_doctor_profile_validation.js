const form = document.getElementById("edit-profile-form");
const consultationFee = document.getElementById("consultation-fee");
const stHour = document.getElementById("start-time-hour");
const stMinute = document.getElementById("start-time-minute");
const etHour = document.getElementById("end-time-hour");
const etMinute = document.getElementById("end-time-minute");
// ********************************************
// Real Time Validation
// ********************************************

// Consultation Fee Validation
let previousValueConsultationFee = "";
consultationFee.addEventListener("input", function (e) {
  let lastInputIndex = -1;

  if (previousValueConsultationFee == "") {
    lastInputIndex = 0;
  } else {
    for (let i = 0; i < previousValueConsultationFee.length; i++) {
      if (consultationFee.value[i] != previousValueConsultationFee[i]) {
        lastInputIndex = i;
        break;
      }
    }

    if (lastInputIndex == -1) {
      lastInputIndex = consultationFee.value.length - 1;
    }
  }

  if (
    consultationFee.value[lastInputIndex] < "0" ||
    consultationFee.value[lastInputIndex] > "9"
  ) {
    if (previousValueConsultationFee == "") {
      consultationFee.value = "";
    } else if (lastInputIndex == consultationFee.value.length - 1) {
      consultationFee.value = consultationFee.value.slice(0, -1);
    } else {
      consultationFee.value =
        consultationFee.value.slice(0, lastInputIndex) +
        consultationFee.value.slice(lastInputIndex + 1);
    }
  }

  previousValueConsultationFee = consultationFee.value;
});

// Start Time Hour Validation
let previousValueSTHour = "";
stHour.addEventListener("input", function (e) {
  let lastInputIndex = -1;

  if (previousValueSTHour == "") {
    lastInputIndex = 0;
  } else {
    for (let i = 0; i < previousValueSTHour.length; i++) {
      if (stHour.value[i] != previousValueSTHour[i]) {
        lastInputIndex = i;
        break;
      }
    }

    if (lastInputIndex == -1) {
      lastInputIndex = stHour.value.length - 1;
    }
  }

  if (
    stHour.value[lastInputIndex] < "0" ||
    stHour.value[lastInputIndex] > "9"
  ) {
    if (previousValueSTHour == "") {
      stHour.value = "";
    } else if (lastInputIndex == stHour.value.length - 1) {
      stHour.value = stHour.value.slice(0, -1);
    } else {
      stHour.value =
        stHour.value.slice(0, lastInputIndex) +
        stHour.value.slice(lastInputIndex + 1);
    }
  }

  previousValueSTHour = stHour.value;
});

stHour.addEventListener("change", function () {
  if (Number(stHour.value) > 23) {
    stHour.value = "23";
  }
});

// Start Time Minute Validation
let previousValueSTMinute = "";
stMinute.addEventListener("input", function (e) {
  let lastInputIndex = -1;

  if (previousValueSTMinute == "") {
    lastInputIndex = 0;
  } else {
    for (let i = 0; i < previousValueSTMinute.length; i++) {
      if (stMinute.value[i] != previousValueSTMinute[i]) {
        lastInputIndex = i;
        break;
      }
    }

    if (lastInputIndex == -1) {
      lastInputIndex = stMinute.value.length - 1;
    }
  }

  if (
    stMinute.value[lastInputIndex] < "0" ||
    stMinute.value[lastInputIndex] > "9"
  ) {
    if (previousValueSTMinute == "") {
      stMinute.value = "";
    } else if (lastInputIndex == stMinute.value.length - 1) {
      stMinute.value = stMinute.value.slice(0, -1);
    } else {
      stMinute.value =
        stMinute.value.slice(0, lastInputIndex) +
        stMinute.value.slice(lastInputIndex + 1);
    }
  }

  previousValueSTMinute = stMinute.value;
});

stMinute.addEventListener("change", function () {
  if (Number(stMinute.value) > 59) {
    stMinute.value = "59";
  }
});

// End Time Hour Validation
let previousValueETHour = "";
etHour.addEventListener("input", function (e) {
  let lastInputIndex = -1;

  if (previousValueETHour == "") {
    lastInputIndex = 0;
  } else {
    for (let i = 0; i < previousValueETHour.length; i++) {
      if (etHour.value[i] != previousValueETHour[i]) {
        lastInputIndex = i;
        break;
      }
    }

    if (lastInputIndex == -1) {
      lastInputIndex = etHour.value.length - 1;
    }
  }

  if (
    etHour.value[lastInputIndex] < "0" ||
    etHour.value[lastInputIndex] > "9"
  ) {
    if (previousValueETHour == "") {
      etHour.value = "";
    } else if (lastInputIndex == etHour.value.length - 1) {
      etHour.value = etHour.value.slice(0, -1);
    } else {
      etHour.value =
        etHour.value.slice(0, lastInputIndex) +
        etHour.value.slice(lastInputIndex + 1);
    }
  }

  previousValueETHour = etHour.value;
});

etHour.addEventListener("change", function () {
  if (Number(etHour.value) > 23) {
    etHour.value = "23";
  }
});

// End Time Minute Validation
let previousValueETMinute = "";
etMinute.addEventListener("input", function (e) {
  let lastInputIndex = -1;

  if (previousValueETMinute == "") {
    lastInputIndex = 0;
  } else {
    for (let i = 0; i < previousValueETMinute.length; i++) {
      if (etMinute.value[i] != previousValueETMinute[i]) {
        lastInputIndex = i;
        break;
      }
    }

    if (lastInputIndex == -1) {
      lastInputIndex = etMinute.value.length - 1;
    }
  }

  if (
    etMinute.value[lastInputIndex] < "0" ||
    etMinute.value[lastInputIndex] > "9"
  ) {
    if (previousValueETMinute == "") {
      etMinute.value = "";
    } else if (lastInputIndex == etMinute.value.length - 1) {
      etMinute.value = etMinute.value.slice(0, -1);
    } else {
      etMinute.value =
        etMinute.value.slice(0, lastInputIndex) +
        etMinute.value.slice(lastInputIndex + 1);
    }
  }

  previousValueETMinute = etMinute.value;
});

etMinute.addEventListener("change", function () {
  if (Number(etMinute.value) > 59) {
    etMinute.value = "59";
  }
});
