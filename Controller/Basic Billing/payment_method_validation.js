const form = document.getElementById("select-payment-method");
const radioButton = document.getElementsByName("payment-method");
const totalPaid = document.getElementById("total-paid");
const submitButton = document.getElementById("button-main");
const installmentRadio = document.getElementById("installment");
const installmentDiv = document.getElementById("installment-div");
const installmentLabel = document.getElementById("installment-label");
const installmentDuration = document.getElementById("installment-duration");
const cardRadio = document.getElementById("card");
const cashRadio = document.getElementById("cash");

installmentRadio.addEventListener("change", function () {
  if (installmentRadio.checked) {
    installmentDiv.classList.remove("remove");
    installmentLabel.classList.remove("remove");
    installmentDuration.classList.remove("remove");
  } else {
    installmentDiv.classList.add("remove");
    installmentLabel.classList.add("remove");
    installmentDuration.classList.add("remove");
  }
});
cashRadio.addEventListener("change", function () {
  if (cashRadio.checked) {
    installmentDiv.classList.add("remove");
    installmentLabel.classList.add("remove");
    installmentDuration.classList.add("remove");
  }
});

cardRadio.addEventListener("change", function () {
  if (cardRadio.checked) {
    installmentDiv.classList.add("remove");
    installmentLabel.classList.add("remove");
    installmentDuration.classList.add("remove");
  }
});

// *****************************************
// On Submit Validation
// *****************************************
submitButton.addEventListener("click", function (e) {
  e.preventDefault();

  let isChecked = false;
  for (let i = 0; i < radioButton.length; i++) {
    if (radioButton[i].checked) {
      isChecked = true;
    }
  }

  if (isChecked == false) {
    alert("Please Select a Payment Method");
    return;
  }

  for (let i = 0; i < totalPaid.value.length; i++) {
    if (totalPaid.value[i] < "0" || totalPaid.value[i] > "9") {
      alert("Incorrect Paid Amount");
      return;
    }
  }

  if (totalPaid.value == "") {
    alert("Incorrect Paid Amount");
    return;
  }

  if (installmentRadio.checked && installmentDuration.value == "select") {
    alert("Please select installment duration!");
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
