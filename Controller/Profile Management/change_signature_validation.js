const form = document.getElementById("change-signature-form");
const submitButton = document.getElementById("button-main");

// ---------------------------------------------------------
// ----------------Realtime Input Validation----------------
// ---------------------------------------------------------

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

  if (isCanvasBlank(canvas)) {
    alert("Please provide a digital signature.");
    canvas.style.outline = "2px solid #1c7340";
    canvas.focus();
    return;
  }

  form.requestSubmit(submitButton);
});

const header = document.getElementsByTagName("header");

window.onload = function () {
  let xhttp = new XMLHttpRequest();
  xhttp.open(
    "post",
    "../../Controller/Profile Management/get_nav_info.php",
    true
  );
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      header[0].innerHTML = "";
      let proPic = JSON.parse(this.responseText);

      if (proPic.url == "url") {
        header[0].innerHTML = `
        <nav>
        <img src="../../Assets/Logo/nav-logo.png" alt="logo" id="logo" />
        <div id="nav-link-container">
          <ul id="nav-list">
            <li><a href="../Landing Page/index.html">Home</a></li>
            <li><a href="../Doctor Profiles/doctors_list.html">Doctors</a></li>
            <li><a href="#">About</a></li>
            <li>
              <a href="../Appointment Scheduling/select_specialty.php"
                >Book Appointment</a
              >
            </li>
            <li id="login">
              <a href="../User Authentication/login.php">Sign in</a>
            </li>
          </ul>
        </div>
      </nav>`;
      } else {
        header[0].innerHTML = `
        <nav>
        <img src="../../Assets/Logo/nav-logo.png" alt="logo" id="logo" />
        <div id="nav-link-container">
          <ul id="nav-list">
            <li><a href="../Landing Page/index.html">Home</a></li>
            <li><a href="../Doctor Profiles/doctors_list.html">Doctors</a></li>
            <li><a href="#">About</a></li>
            <li>
              <a href="../Appointment Scheduling/select_specialty.php"
                >Book Appointment</a
              >
            </li>
          </ul>
          <a href="../Profile Management/view_profile.php"
            ><img id="pro-pic" src="${proPic.url}"
          /></a>
        </div>
      </nav>`;
      }
    }
  };
};
