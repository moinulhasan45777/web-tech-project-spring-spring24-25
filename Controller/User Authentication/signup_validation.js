const form = document.getElementById("user-registration-form");
const fullName = document.getElementById("user-name");
const phone = document.getElementById("user-phone");
const email = document.getElementById("user-email");
const password = document.getElementById("user-pass");
const agreeTerms = document.getElementsByName("terms")[0];
const submitButton = document.getElementById("button-main");
const changeAvatarButton = document.getElementById("change-avatar");
const changeAvatarInput = document.getElementById("change-avatar-input");
const proPicture = document.getElementById("profile-picture");

const allowedPictureExtensions = [".png", ".jpg", "jpeg"];

// Upload Profile Picture
changeAvatarButton.addEventListener("click", function () {
  changeAvatarInput.click();
});

changeAvatarInput.addEventListener("change", function () {
  const file = changeAvatarInput.files[0];
  const reader = new FileReader();
  reader.onload = function (e) {
    proPicture.src = e.target.result;
  };
  reader.readAsDataURL(file);
});

// ---------------------------------------------------------
// ----------------Realtime Input Validation----------------
// ---------------------------------------------------------

let previousValueName = "";

// User Full Name Validation
fullName.addEventListener("input", function (e) {
  let lastInputIndex = -1;

  if (previousValueName == "") {
    lastInputIndex = 0;
  } else {
    for (let i = 0; i < previousValueName.length; i++) {
      if (fullName.value[i] != previousValueName[i]) {
        lastInputIndex = i;
        break;
      }
    }

    if (lastInputIndex == -1) {
      lastInputIndex = fullName.value.length - 1;
    }
  }

  if (
    (fullName.value[lastInputIndex] < "a" ||
      fullName.value[lastInputIndex] > "z") &&
    (fullName.value[lastInputIndex] < "A" ||
      fullName.value[lastInputIndex] > "Z") &&
    fullName.value[lastInputIndex] != " " &&
    fullName.value[lastInputIndex] != "." &&
    fullName.value[lastInputIndex] != "-"
  ) {
    if (previousValueName == "") {
      fullName.value = "";
    } else if (lastInputIndex == fullName.value.length - 1) {
      fullName.value = fullName.value.slice(0, -1);
    } else {
      fullName.value =
        fullName.value.slice(0, lastInputIndex) +
        fullName.value.slice(lastInputIndex + 1);
    }
  }

  previousValueName = fullName.value;
});

// User Mobile-number Validation
let previousValueMobile = "";
phone.addEventListener("input", function (e) {
  let lastInputIndex = -1;

  if (previousValueMobile == "") {
    lastInputIndex = 0;
  } else {
    for (let i = 0; i < previousValueMobile.length; i++) {
      if (phone.value[i] != previousValueMobile[i]) {
        lastInputIndex = i;
        break;
      }
    }

    if (lastInputIndex == -1) {
      lastInputIndex = phone.value.length - 1;
    }
  }

  if (
    (phone.value[lastInputIndex] !== "+" &&
      (phone.value[lastInputIndex] < "0" ||
        phone.value[lastInputIndex] > "9")) ||
    (phone.value[0] == "+" && phone.value.length > 14) ||
    (phone.value[0] != "+" && phone.value.length > 11)
  ) {
    if (previousValueMobile == "") {
      phone.value = "";
    } else if (lastInputIndex == phone.value.length - 1) {
      phone.value = phone.value.slice(0, -1);
    } else {
      phone.value =
        phone.value.slice(0, lastInputIndex) +
        phone.value.slice(lastInputIndex + 1);
    }
  } else if (lastInputIndex != 0 && phone.value[lastInputIndex] == "+") {
    if (lastInputIndex == phone.value.length - 1) {
      phone.value = phone.value.slice(0, -1);
    } else {
      phone.value =
        phone.value.slice(0, lastInputIndex) +
        phone.value.slice(lastInputIndex + 1);
    }
  } else if (
    previousValueMobile != "" &&
    phone.value[lastInputIndex] == "+" &&
    phone.value[0] == "+" &&
    phone.value.slice(1).includes("+")
  ) {
    phone.value = phone.value.slice(1);
  }

  previousValueMobile = phone.value;
});

// Digital Signature
const clearButton = document.getElementById("clear-canvas");
const canvas = document.getElementById("signature-canvas");
const context = canvas.getContext("2d");
const digitalSignatureInput = document.getElementById("digital-signature");
function resizeCanvasToDisplaySize() {
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;
}

let drawing = false;
let prevX = 0;
let prevY = 0;

resizeCanvasToDisplaySize();

// Event listeners for drawing
canvas.addEventListener("mousedown", (e) => {
  canvas.style.outline = "2px solid #1c7340";
  drawing = true;
  prevX = e.clientX - canvas.getBoundingClientRect().left;
  prevY = e.clientY - canvas.getBoundingClientRect().top;
});

canvas.addEventListener("mousemove", (e) => {
  if (!drawing) return;
  canvas.style.outline = "2px solid #1c7340";
  draw(
    e.clientX - canvas.getBoundingClientRect().left,
    e.clientY - canvas.getBoundingClientRect().top
  );
});

canvas.addEventListener("mouseup", () => {
  drawing = false;
});

canvas.addEventListener("mouseleave", () => {
  canvas.style.outline = "none";
  drawing = false;
});

let count = 0;
// Function to draw on the canvas
function draw(x, y) {
  if (count < 1) {
    resizeCanvasToDisplaySize();
    count++;
  }
  context.beginPath();
  context.strokeStyle = "#000";
  context.lineWidth = 2;
  context.lineJoin = "round";
  context.moveTo(prevX, prevY);
  context.lineTo(x, y);
  context.closePath();
  context.stroke();
  prevX = x;
  prevY = y;

  console.log("Canvas size:", canvas.width, canvas.height);
}

function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  digitalSignatureInput.value = "";
}

form.addEventListener("submit", function (e) {
  digitalSignatureInput.value = canvas.toDataURL("image/png");
});

clearButton.addEventListener("click", clearCanvas);

// ---------------------------------------------------------
// ----------------On Submit Input Validation---------------
// ---------------------------------------------------------

// Function to check if the canvas is blank
function isCanvasBlank(canvas) {
  const context = canvas.getContext("2d");
  const pixelBuffer = new Uint32Array(
    context.getImageData(0, 0, canvas.width, canvas.height).data.buffer
  );

  return !pixelBuffer.some((color) => color !== 0);
}

submitButton.addEventListener("click", function (e) {
  e.preventDefault();

  // Profile Picture Validation
  if (!changeAvatarInput.files.length > 0) {
    alert("Please upload a Profile Picture");
    changeAvatarButton.focus();
    return;
  }
  console.log(changeAvatarInput.files[0].name.slice(-4));
  if (
    !allowedPictureExtensions.includes(
      changeAvatarInput.files[0].name.slice(-4)
    )
  ) {
    alert("Please upload a valid Profile Picture");
    changeAvatarButton.focus();
    return;
  }
  // User Full Name Validation
  fullName.value = fullName.value.trim();
  if (fullName.value.length < 3) {
    alert("Please enter a valid name.");
    fullName.focus();
    return;
  }

  // User Mobile-number Validation
  if (
    (phone.value[0] == "+" && phone.value.length < 14) ||
    (phone.value[0] != "+" && phone.value.length < 11)
  ) {
    alert("Please enter a valid phone number.");
    phone.focus();
    return;
  }

  // User Email Validation
  email.value = email.value.trim();
  let count = 0;
  for (let i = 0; i < email.value.length; i++) {
    if (email.value[i] == "@") {
      count++;
    }
  }

  const atIndex = email.value.indexOf("@");
  const dotIndex = email.value.lastIndexOf(".");

  if (
    atIndex < 1 ||
    dotIndex <= atIndex + 1 ||
    dotIndex === email.length - 1 ||
    count > 1
  ) {
    alert("Please enter a valid email address.");
    email.focus();
    return;
  }

  for (let i = atIndex + 1; i < dotIndex; i++) {
    if (email.value[i] == ".") {
      alert("Please enter a valid email address.");
      email.focus();
      return;
    }
  }

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

  if (isCanvasBlank(canvas)) {
    alert("Please provide a digital signature.");
    canvas.style.outline = "2px solid #1c7340";
    canvas.focus();
    return;
  }

  // Terms and Conditions Validation
  if (!agreeTerms.checked) {
    alert("You must agree to the terms and conditions.");
    agreeTerms.focus();
    return;
  }
  form.requestSubmit(submitButton);
});

agreeTerms.addEventListener("click", function () {
  agreeTerms.style.outline = "none";
});
