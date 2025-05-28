const logout = document.getElementById("logout-button");

logout.addEventListener("click", function () {
  window.location.href = "../../Controller/Profile Management/logout.php";
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
  };
  xhttp2 = new XMLHttpRequest();
  const manageStaff = document.getElementById("manage-staff");
  // Getting Role and Vanishing Edit Profile if Necessary
  xhttp2.open(
    "post",
    "../../Controller/Profile Management/check_role.php",
    true
  );
  xhttp2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp2.send();
  xhttp2.onreadystatechange = function () {
    if (xhttp2.readyState == 4 && xhttp2.status == 200) {
      let data = JSON.parse(this.responseText);

      if (data.role != "admin") {
        manageStaff.classList.add("remove");
      }
    }
  };
};
