const fullName = document.getElementById("search-bar");
const doctorList = document.getElementById("doctor-list");

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

// ************************************************************
// Window Onload
// ************************************************************
window.onload = function () {
  let xhttp = new XMLHttpRequest();
  xhttp.open(
    "post",
    "../../Controller/Doctor Profiles/set_doctor_list.php",
    true
  );
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      console.log("HIHIHIH");
      doctorList.innerHTML = "";
      let doctors = JSON.parse(this.responseText);

      if (doctors.length != 0) {
        for (let i = 0; i < doctors.length; i++) {
          doctorList.innerHTML += `
          <a href="doctor_details.html">
            <li class="main-doctor-container">
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
    } else {
      console.log("NONONONO");
    }
  };
};

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM is ready!");
  // Your JavaScript code here
});
