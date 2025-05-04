const form = document.getElementById("user-auth");
const submitButton = document.getElementById("button-main");
const password = document.getElementById("user-pass");
const confirmPasswordInput = document.getElementById("user-pass-confirm");

// ---------------------------------------------------------
// ----------------On Submit Input Validation---------------
// ---------------------------------------------------------

submitButton.addEventListener("click", function (e) {
  e.preventDefault();

  // User Password Validation
  if (password.value.length < 8) {
    alert("Password must be at least 8 characters long.");
    password.focus();
    return;
  }

  let specialCharCount = 0;
  let upperCaseCount = 0;
  let lowerCaseCount = 0;
  let digitCount = 0;
  const specialCharacters = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "[",
    "]",
    "{",
    "}",
    "|",
    "<",
    ">",
    "?",
    "/",
    "~",
    "`",
  ];
  for (let i = 0; i < password.value.length; i++) {
    if (
      password.value[i] >= "a" &&
      password.value[i] <= "z" &&
      lowerCaseCount == 0
    ) {
      lowerCaseCount++;
    } else if (
      password.value[i] >= "A" &&
      password.value[i] <= "Z" &&
      upperCaseCount == 0
    ) {
      upperCaseCount++;
    } else if (
      password.value[i] >= "0" &&
      password.value[i] <= "9" &&
      digitCount == 0
    ) {
      digitCount++;
    } else if (specialCharacters.includes(password.value[i])) {
      specialCharCount++;
    }
  }

  if (
    specialCharCount == 0 ||
    upperCaseCount == 0 ||
    lowerCaseCount == 0 ||
    digitCount == 0
  ) {
    alert(
      "Password must contain at least one uppercase letter (A-Z), one lowercase letter (a-z), one digit (0-9), and one special character (!@#$...)."
    );
    password.focus();
    return;
  }

  // Confirm Password Validation
  if (password.value !== confirmPasswordInput.value) {
    alert("Passwords do not match.");
    confirmPasswordInput.focus();
    return;
  }
});
