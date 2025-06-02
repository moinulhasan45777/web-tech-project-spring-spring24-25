const viewProfile = document.getElementById("view-profile-main");

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

  let xhttp3 = new XMLHttpRequest();
  xhttp3.open(
    "post",
    "../../Controller/Profile Management/process_view_profile.php",
    true
  );
  xhttp3.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp3.send();
  xhttp3.onreadystatechange = function () {
    if (xhttp3.readyState == 4 && xhttp3.status == 200) {
      let user = JSON.parse(this.responseText);
      if (user.role == "patient") {
        let date = user.dob.split("-");
        let convertedDate = date[2] + "/" + date[1] + "/" + date[0];
        viewProfile.innerHTML = `
      <h1 id="heading">Profile</h1>
      <div id="info-container-view">
        <div class="input-container pro-pic-container">
          <label class="info-label">Profile Picture</label>
          <img
            id="profile-picture"
            src="../../Assets/Uploads/Profile Pictures/${user.profile_picture}"
            alt="Profile Picture"
          />
        </div>
        <div class="input-container-view">
          <label class="info-label" for="user-name">Name: </label>
          <p class="info-field" id="user-name" name="user-name">${user.name}</p>
        </div>
        <div class="input-container-view">
          <label class="info-label" for="user-phone">Mobile: </label>
          <p class="info-field" id="user-phone" name="user-phone">
            ${user.phone}
          </p>
        </div>
        <div class="input-container-view">
          <label class="info-label" for="user-email">Email: </label>
          <p class="info-field" id="user-email" name="user-email">
            ${user.email}
          </p>
        </div>
        <div class="input-container-view">
          <label class="info-label" for="user-pass">Password: </label>
          <p class="info-field" id="user-pass" name="user-pass">
            **************
          </p>
          <a class="small-button update-button" href="update_pass.php"
            >Update</a
          >
        </div>
        <div class="input-container pro-pic-container">
          <label class="info-label">Digital Signature:</label>
          <img
            id="digital-signature"
            src="../../Assets/Uploads/Digital Signatures/${user.digital_signature}"
            alt="Digital Signature"
          />
        </div>
        <div class="input-container-view">
          <label class="info-label" for="user-blood-group">Blood Group: </label>
          <p class="info-field" id="user-blood-group" name="user-blood-group">
            ${user.blood_group}
          </p>
        </div>
        <div class="input-container-view">
          <label class="info-label" for="user-dob">Date of Birth:</label>
          <p class="info-field" id="user-dob" name="user-dob">${convertedDate}</p>
        </div>
        <div class="input-container-view">
          <label class="info-label" for="user-address">Present Address:</label>
          <p id="user-address" class="info-field" name="user-address">
            ${user.address}
          </p>
        </div>
        <div class="input-container-view">
          <label class="info-label" for="user-city">City:</label>
          <p class="info-field" id="user-city" name="user-city">${user.city}</p>
        </div>
        <div class="input-container-view">
          <label class="info-label" for="user-em-name"
            >Emergency Contact Name:</label
          >
          <p class="info-field" id="user-em-name" name="user-em-name">
            ${user.em_name}
          </p>
        </div>
        <div class="input-container-view">
          <label class="info-label" for="user-em-relation"
            >Emergency Contact Relation:</label
          >
          <p class="info-field" id="user-em-relation" name="user-em-relation">
            ${user.em_relation}
          </p>
        </div>
        <div class="input-container-view">
          <label class="info-label" for="user-em-phone"
            >Emergency Contact Number:</label
          >
          <p class="info-field" id="user-em-phone" name="user-em-phone">
            ${user.em_phone}
          </p>
        </div>
        <a href="../Basic Billing/charge_capture.php" class="link-button">Pay Bill</a>
        <a href="edit_profile.php" class="link-button">Edit</a>
        <a href="../../Controller/Profile Management/logout.php" class="link-button">Logout</a>
      </div>`;
      }
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
