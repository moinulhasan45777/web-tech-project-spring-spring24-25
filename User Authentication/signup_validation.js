const form = document.getElementById("user-registration-form");
const fullName = document.getElementById("user-name");
const phone = document.getElementById("user-phone");
const email = document.getElementById("user-email");
const password = document.getElementById("user-pass");
const agreeTerms = document.getElementsByName("terms")[0];
const submitButton = document.getElementById("button-main");

// ---------------------------------------------------------
// ----------------Realtime Input Validation----------------
// ---------------------------------------------------------

// User Full Name Validation
fullName.addEventListener("input", function (e) {
  let lastIndex = fullName.value.length - 1;

  if (
    (fullName.value[lastIndex] < "a" || fullName.value[lastIndex] > "z") &&
    (fullName.value[lastIndex] < "A" || fullName.value[lastIndex] > "Z") &&
    fullName.value[lastIndex] != " " &&
    fullName.value[lastIndex] != "." &&
    fullName.value[lastIndex] != "-"
  ) {
    fullName.value = fullName.value.slice(0, -1);
  }
});

// User Mobile-number Validation
phone.addEventListener("input", function (e) {
  if (
    phone.value.substring(1).includes("+") ||
    (phone.value[0] == "+" && phone.value.length > 14) ||
    (phone.value[0] != "+" && phone.value.length > 11)
  ) {
    phone.value = phone.value.slice(0, -1);
  } else if (
    (phone.value[phone.value.length - 1] < "0" ||
      phone.value[phone.value.length - 1] > "9") &&
    phone.value[phone.value.length - 1] != "+"
  ) {
    phone.value = phone.value.slice(0, -1);
  }
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

// Function to draw on the canvas
function draw(x, y) {
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

  // User Full Name Validation
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

  let count = 0;
  for (let i = 0; i < email.value.length; i++) {
    if (email.value[i] == "@") {
      count++;
    }
  }

  const atIndex = email.value.indexOf("@");
  const dotIndex = email.value.lastIndexOf(".");
  // User Email Validation
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
  form.submit();
});

agreeTerms.addEventListener("click", function () {
  agreeTerms.style.outline = "none";
});
