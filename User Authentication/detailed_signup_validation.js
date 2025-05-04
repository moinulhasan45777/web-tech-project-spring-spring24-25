const form = document.getElementById("user-registration-form");

// User Emergency Mobile-number Validation
const emPhone = document.getElementById("user-em-phone");

emPhone.addEventListener("input", function (e) {
  if (
    emPhone.value.substring(1).includes("+") ||
    (emPhone.value[0] == "+" && emPhone.value.length > 14) ||
    (emPhone.value[0] != "+" && emPhone.value.length > 11)
  ) {
    emPhone.value = emPhone.value.slice(0, -1);
  } else if (
    (emPhone.value[emPhone.value.length - 1] < "0" ||
      emPhone.value[emPhone.value.length - 1] > "9") &&
    emPhone.value[emPhone.value.length - 1] != "+"
  ) {
    emPhone.value = emPhone.value.slice(0, -1);
  }
});

// Date
const dateInput = document.getElementById("user-dob");

const today = new Date().toISOString().split("T")[0];
dateInput.max = today;
