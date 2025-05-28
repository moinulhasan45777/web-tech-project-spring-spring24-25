const form = document.getElementById("user-registration-form");
const fullName = document.getElementById("user-name");
const phone = document.getElementById("user-phone");
const bloodGroup = document.getElementById("user-blood-group");
const dob = document.getElementById("user-dob");
const presentAddress = document.getElementById("user-address");
const city = document.getElementById("user-city");
const emName = document.getElementById("user-em-name");
const emRelation = document.getElementById("user-em-relation");
const emPhone = document.getElementById("user-em-phone");
const submitButton = document.getElementById("button-main");
const proPicture = document.getElementById("profile-picture");

const changeAvatarButton = document.getElementById("change-avatar");
const changeAvatarInput = document.getElementById("change-avatar-input");

const allowedPictureExtensions = [".png", ".jpg", "jpeg"];
// ---------------------------------------------------------
// ----------------Realtime Input Validation----------------
// ---------------------------------------------------------
let previousValueUserName = "";

// User Full Name Validation
fullName.addEventListener("input", function (e) {
  let lastInputIndex = -1;

  if (previousValueName == "") {
    lastInputIndex = 0;
  } else {
    for (let i = 0; i < previousValueUserName.length; i++) {
      if (fullName.value[i] != previousValueUserName[i]) {
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
    if (previousValueUserName == "") {
      fullName.value = "";
    } else if (lastInputIndex == fullName.value.length - 1) {
      fullName.value = fullName.value.slice(0, -1);
    } else {
      fullName.value =
        fullName.value.slice(0, lastInputIndex) +
        fullName.value.slice(lastInputIndex + 1);
    }
  }

  previousValueUserName = fullName.value;
});

// User Mobile-number Validation
let previousValueUserMobile = "";
phone.addEventListener("input", function (e) {
  let lastInputIndex = -1;

  if (previousValueUserMobile == "") {
    lastInputIndex = 0;
  } else {
    for (let i = 0; i < previousValueUserMobile.length; i++) {
      if (phone.value[i] != previousValueUserMobile[i]) {
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
    if (previousValueUserMobile == "") {
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
    previousValueUserMobile != "" &&
    phone.value[lastInputIndex] == "+" &&
    phone.value[0] == "+" &&
    phone.value.slice(1).includes("+")
  ) {
    phone.value = phone.value.slice(1);
  }

  previousValueUserMobile = phone.value;
});

// User Emergency Mobile-number Validation
let previousValueMobile = "";
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

// // ---------------------------------------------------------
// // ----------------On Submit Input Validation---------------
// // ---------------------------------------------------------

submitButton.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    !allowedPictureExtensions.includes(
      changeAvatarInput.files[0].name.slice(-4)
    )
  ) {
    alert("Please upload a valid Profile Picture");
    changeAvatarButton.focus();
    return;
  }

  // TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO TODO

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
