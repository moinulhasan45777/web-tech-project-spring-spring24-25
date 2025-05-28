const form = document.getElementById("insurance-calculator");
const insuranceCode = document.getElementById("insurance-code");
const submitButton = document.getElementById("button-main");

submitButton.addEventListener("click", function (e) {
  e.preventDefault();

  if (insuranceCode.value != "") {
    for (let i = 0; i < insuranceCode.value.length; i++) {
      if (
        (insuranceCode.value[i] < "0" || insuranceCode.value[i] > "9") &&
        (insuranceCode.value[i] < "a" || insuranceCode.value[i] > "z") &&
        (insuranceCode.value[i] < "A" || insuranceCode.value[i] > "Z")
      ) {
        alert("invalid Insurance Code!");
        return;
      }
    }
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
