const fullName = document.getElementById("search-bar");
const doctorList = document.getElementById("doctor-list");

let previousValueName = "";

// Doctor Search BOX Validation
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

// ************************************************************
// Window Onload
// ************************************************************

const header = document.getElementsByTagName("header");
window.onload = function () {
  let xhttp2 = new XMLHttpRequest();
  xhttp2.open(
    "post",
    "../../Controller/Doctor Profiles/set_doctor_list.php",
    true
  );
  xhttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp2.send();
  xhttp2.onreadystatechange = function () {
    if (xhttp2.readyState == 4 && xhttp2.status == 200) {
      doctorList.innerHTML = "";
      let doctors = JSON.parse(this.responseText);

      if (doctors.length != 0) {
        for (let i = 0; i < doctors.length; i++) {
          doctorList.innerHTML += `
          <a href="doctor_details.html">
            <li class="main-doctor-container click-${doctors[i].user_id}">
              <div class="overlay"></div>
              <img src="../../Assets/Images/Doctors/${doctors[i].user_id}.jpg"
                   alt = "Doctor ${i + 1}";
                   class = "doctor-picture" />
              <div class="doctor-info-container">
                <h2 class="doctor-name">${doctors[i].name}</h2>
                <p class="doctor-specialty">${doctors[i].specialty}</p>
                <p class="doctor-schedule">Appointment: ${
                  doctors[i].start_time
                }</p>
                <p class="doctor-degree">${doctors[i].qualifications}</p>
              </div>
            </li>
          </a>
        `;
        }
      }
    }
  };

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

fullName.addEventListener("input", function () {
  let json = {
    name: fullName.value,
  };

  let data = JSON.stringify(json);

  let xhttp = new XMLHttpRequest();
  xhttp.open(
    "post",
    "../../Controller/Doctor Profiles/set_doctor_list.php",
    true
  );
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("json=" + data);
  xhttp.onreadystatechange = function () {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      doctorList.innerHTML = "";
      let doctors = JSON.parse(this.responseText);

      if (doctors != null) {
        for (let i = 0; i < doctors.length; i++) {
          doctorList.innerHTML += `
          <a href="doctor_details.html">
            <li class="main-doctor-container click-${doctors[i].user_id}">
              <div class="overlay"></div>
              <img src="../../Assets/Images/Doctors/${doctors[i].user_id}.jpg"
                   alt = "Doctor ${i + 1}";
                   class = "doctor-picture" />
              <div class="doctor-info-container">
                <h2 class="doctor-name">${doctors[i].name}</h2>
                <p class="doctor-specialty">${doctors[i].specialty}</p>
                <p class="doctor-schedule">Appointment: ${
                  doctors[i].start_time
                }</p>
                <p class="doctor-degree">${doctors[i].qualifications}</p>
              </div>
            </li>
          </a>
        `;
        }
      }
    }
  };
});
