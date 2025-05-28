<?php
  session_start();
  if(isset($_SESSION['login_email']) || isset($_COOKIE['login_email'])){
    header('Location: ../Profile Management/view_profile.php');
    exit;
  }
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="../../Assets/general.css" />
    <link
      rel="stylesheet"
      href="../../Assets/User Authentication/user_authentication.css"
    />
    
    <title>HMC - Your most reliable companion</title>
  </head>
  <body>
    <!-------------------------------------------------------------------------------------->
    <!-------------------------------------- GENERAL --------------------------------------->
    <!-------------------------------------------------------------------------------------->
    <header>
      <nav>
        <img src="../../Assets/Logo/nav-logo.png" alt="logo" id="logo" />
        <div id="nav-link-container">
          <ul id="nav-list">
            <li><a href="../Landing Page/index.html">Home</a></li>
            <li><a href="../Doctor Profiles/doctors_list.html">Doctors</a></li>
            <li><a href="#">About</a></li>
            <li>
              <a href="select_specialty.php">Book Appointment</a>
            </li>
          </ul>
          <a href="../Profile Management/view_profile.php"
            ><img id="pro-pic" src="../Images/sample-pro-pic.JPG"
          /></a>
        </div>
      </nav>
    </header>

    <!-------------------------------------------------------------------------------------->
    <!------------------------------------ MAIN SECTION ------------------------------------>
    <!-------------------------------------------------------------------------------------->

    <main id="login-main">
      <img id="login-logo" src="../../Assets/Logo/main-logo-without-text.png" />
      <form
        id="user-auth"
        method="post"
        action="../../Controller/User Authentication/process_forgot_pass.php"
        enctype="multipart/form-data"
        novalidate
      >
        <div class="input-container">
          <label for="user-email">Enter your email</label>
          <input
            type="email"
            id="user-email"
            class="text-field"
            name="user-email"
            placeholder="john@example.com"
          />
        </div>
        <input
          type="submit"
          name="button-main"
          id="button-main"
          value="Proceed"
        />
      </form>
    </main>

    <!-------------------------------------------------------------------------------------->
    <!-------------------------------------- GENERAL --------------------------------------->
    <!-------------------------------------------------------------------------------------->
    <footer>
      <section id="footer-main">
        <div id="general-info">
          <h2 id="general-info-heading" class="footer-heading">
            HERITAGE MEDICAL CENTER
          </h2>
          <div id="general-info-main" class="footer-info-container">
            <svg
              class="footer-icon"
              data-name="location-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14.64 18.35"
            >
              <g>
                <path
                  d="m7.32,0C3.28,0,0,3.28,0,7.32c0,2.95,3.9,7.94,6.01,10.43.69.81,1.94.81,2.63,0,2.11-2.48,6.01-7.48,6.01-10.43C14.64,3.28,11.36,0,7.32,0Zm0,8.72c-.96,0-1.75-.78-1.75-1.75s.78-1.75,1.75-1.75,1.75.78,1.75,1.75-.78,1.75-1.75,1.75Z"
                />
              </g>
            </svg>
            <p class="footer-info-text-nonhover">
              408/1 (Old KA 66/1) <br />
              Kuratoli, Khilkhet <br />
              Dhaka 1229
            </p>
            <svg
              class="footer-icon"
              data-name="phone-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 13.29 19.61"
            >
              <g id="ELEMENTS">
                <path
                  d="m10.9,0H2.4C1.07,0,0,1.07,0,2.4v14.82c0,1.32,1.07,2.4,2.4,2.4h8.5c1.32,0,2.4-1.07,2.4-2.4V2.4c0-1.32-1.07-2.4-2.4-2.4Zm-3.2,17.73h-2.09c-.64,0-1.15-.51-1.15-1.15s.51-1.15,1.15-1.15h2.09c.64,0,1.15.51,1.15,1.15s-.51,1.15-1.15,1.15Z"
                />
              </g>
            </svg>
            <p class="footer-info-text">01744-446-666</p>
            <svg
              class="footer-icon"
              data-name="mail-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 19.39 14.93"
            >
              <g id="ELEMENTS">
                <g>
                  <path
                    d="m19.2,1.38s-.05.07-.08.11l-6.62,7.51c-.71.81-1.73,1.27-2.81,1.27-1.07,0-2.1-.46-2.81-1.27L.18,1.39c-.12.28-.18.58-.18.9v8.61c0,2.22,1.8,4.03,4.03,4.03h11.34c2.22,0,4.03-1.8,4.03-4.03V2.29c0-.32-.07-.63-.19-.91Z"
                  />
                  <path
                    d="m8.39,7.66c.33.38.79.59,1.3.59s.97-.21,1.3-.59L17.61.15s.05-.05.08-.07c-.19-.05-.39-.08-.59-.08H2.28c-.2,0-.39.03-.58.08l6.69,7.59Z"
                  />
                </g>
              </g>
            </svg>
            <p class="footer-info-text">info@heritagemedical.com</p>
          </div>
        </div>
        <div id="location-bashundhara">
          <h2 id="bashundhara-heading" class="footer-heading">BASHUNDHARA</h2>
          <div id="bashundhara-main" class="footer-info-container">
            <svg
              class="footer-icon"
              data-name="location"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14.64 18.35"
            >
              <g>
                <path
                  d="m7.32,0C3.28,0,0,3.28,0,7.32c0,2.95,3.9,7.94,6.01,10.43.69.81,1.94.81,2.63,0,2.11-2.48,6.01-7.48,6.01-10.43C14.64,3.28,11.36,0,7.32,0Zm0,8.72c-.96,0-1.75-.78-1.75-1.75s.78-1.75,1.75-1.75,1.75.78,1.75,1.75-.78,1.75-1.75,1.75Z"
                />
              </g>
            </svg>
            <p class="footer-info-text-nonhover">
              123, Block F <br />
              Plot 23#B <br />
              Bashundhara, Dhaka 1229
            </p>
            <svg
              class="footer-icon"
              data-name="phone-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 13.29 19.61"
            >
              <g id="ELEMENTS">
                <path
                  d="m10.9,0H2.4C1.07,0,0,1.07,0,2.4v14.82c0,1.32,1.07,2.4,2.4,2.4h8.5c1.32,0,2.4-1.07,2.4-2.4V2.4c0-1.32-1.07-2.4-2.4-2.4Zm-3.2,17.73h-2.09c-.64,0-1.15-.51-1.15-1.15s.51-1.15,1.15-1.15h2.09c.64,0,1.15.51,1.15,1.15s-.51,1.15-1.15,1.15Z"
                />
              </g>
            </svg>
            <p class="footer-info-text">01354-777-333</p>
            <svg
              class="footer-icon"
              data-name="phone-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 13.29 19.61"
            >
              <g id="ELEMENTS">
                <path
                  d="m10.9,0H2.4C1.07,0,0,1.07,0,2.4v14.82c0,1.32,1.07,2.4,2.4,2.4h8.5c1.32,0,2.4-1.07,2.4-2.4V2.4c0-1.32-1.07-2.4-2.4-2.4Zm-3.2,17.73h-2.09c-.64,0-1.15-.51-1.15-1.15s.51-1.15,1.15-1.15h2.09c.64,0,1.15.51,1.15,1.15s-.51,1.15-1.15,1.15Z"
                />
              </g>
            </svg>
            <p class="footer-info-text">01533-544-211</p>
            <svg
              class="footer-icon"
              data-name="mail-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 19.39 14.93"
            >
              <g id="ELEMENTS">
                <g>
                  <path
                    d="m19.2,1.38s-.05.07-.08.11l-6.62,7.51c-.71.81-1.73,1.27-2.81,1.27-1.07,0-2.1-.46-2.81-1.27L.18,1.39c-.12.28-.18.58-.18.9v8.61c0,2.22,1.8,4.03,4.03,4.03h11.34c2.22,0,4.03-1.8,4.03-4.03V2.29c0-.32-.07-.63-.19-.91Z"
                  />
                  <path
                    d="m8.39,7.66c.33.38.79.59,1.3.59s.97-.21,1.3-.59L17.61.15s.05-.05.08-.07c-.19-.05-.39-.08-.59-.08H2.28c-.2,0-.39.03-.58.08l6.69,7.59Z"
                  />
                </g>
              </g>
            </svg>
            <p class="footer-info-text">info@heritagemedical.com</p>
          </div>
        </div>
        <div id="location-dhanmondi">
          <h2 id="dhanmondi-heading" class="footer-heading">DHANMONDI</h2>
          <div id="dhanmondi-main" class="footer-info-container">
            <svg
              class="footer-icon"
              data-name="location"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14.64 18.35"
            >
              <g>
                <path
                  d="m7.32,0C3.28,0,0,3.28,0,7.32c0,2.95,3.9,7.94,6.01,10.43.69.81,1.94.81,2.63,0,2.11-2.48,6.01-7.48,6.01-10.43C14.64,3.28,11.36,0,7.32,0Zm0,8.72c-.96,0-1.75-.78-1.75-1.75s.78-1.75,1.75-1.75,1.75.78,1.75,1.75-.78,1.75-1.75,1.75Z"
                />
              </g>
            </svg>
            <p class="footer-info-text-nonhover">
              Suvastu Zenim Plaza <br />
              House 312, Road 16 <br />
              Dhanmondi R/A, Dhaka 1205
            </p>
            <svg
              class="footer-icon"
              data-name="phone-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 13.29 19.61"
            >
              <g id="ELEMENTS">
                <path
                  d="m10.9,0H2.4C1.07,0,0,1.07,0,2.4v14.82c0,1.32,1.07,2.4,2.4,2.4h8.5c1.32,0,2.4-1.07,2.4-2.4V2.4c0-1.32-1.07-2.4-2.4-2.4Zm-3.2,17.73h-2.09c-.64,0-1.15-.51-1.15-1.15s.51-1.15,1.15-1.15h2.09c.64,0,1.15.51,1.15,1.15s-.51,1.15-1.15,1.15Z"
                />
              </g>
            </svg>
            <p class="footer-info-text">01843-390-224</p>
            <svg
              class="footer-icon"
              data-name="phone-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 13.29 19.61"
            >
              <g id="ELEMENTS">
                <path
                  d="m10.9,0H2.4C1.07,0,0,1.07,0,2.4v14.82c0,1.32,1.07,2.4,2.4,2.4h8.5c1.32,0,2.4-1.07,2.4-2.4V2.4c0-1.32-1.07-2.4-2.4-2.4Zm-3.2,17.73h-2.09c-.64,0-1.15-.51-1.15-1.15s.51-1.15,1.15-1.15h2.09c.64,0,1.15.51,1.15,1.15s-.51,1.15-1.15,1.15Z"
                />
              </g>
            </svg>
            <p class="footer-info-text">01624-999-329</p>
            <svg
              class="footer-icon"
              data-name="mail-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 19.39 14.93"
            >
              <g id="ELEMENTS">
                <g>
                  <path
                    d="m19.2,1.38s-.05.07-.08.11l-6.62,7.51c-.71.81-1.73,1.27-2.81,1.27-1.07,0-2.1-.46-2.81-1.27L.18,1.39c-.12.28-.18.58-.18.9v8.61c0,2.22,1.8,4.03,4.03,4.03h11.34c2.22,0,4.03-1.8,4.03-4.03V2.29c0-.32-.07-.63-.19-.91Z"
                  />
                  <path
                    d="m8.39,7.66c.33.38.79.59,1.3.59s.97-.21,1.3-.59L17.61.15s.05-.05.08-.07c-.19-.05-.39-.08-.59-.08H2.28c-.2,0-.39.03-.58.08l6.69,7.59Z"
                  />
                </g>
              </g>
            </svg>
            <p class="footer-info-text">info@heritagemedical.com</p>
          </div>
        </div>
        <div id="location-uttara">
          <h2 id="uttara-heading" class="footer-heading">UTTARA</h2>
          <div id="uttara-main" class="footer-info-container">
            <svg
              class="footer-icon"
              data-name="location"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14.64 18.35"
            >
              <g>
                <path
                  d="m7.32,0C3.28,0,0,3.28,0,7.32c0,2.95,3.9,7.94,6.01,10.43.69.81,1.94.81,2.63,0,2.11-2.48,6.01-7.48,6.01-10.43C14.64,3.28,11.36,0,7.32,0Zm0,8.72c-.96,0-1.75-.78-1.75-1.75s.78-1.75,1.75-1.75,1.75.78,1.75,1.75-.78,1.75-1.75,1.75Z"
                />
              </g>
            </svg>
            <p class="footer-info-text-nonhover">
              Ahmed Plaza, Plot 6, Road 2 <br />
              Sector 3, Uttara Model Town <br />
              Dhaka 1230
            </p>
            <svg
              class="footer-icon"
              data-name="phone-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 13.29 19.61"
            >
              <g id="ELEMENTS">
                <path
                  d="m10.9,0H2.4C1.07,0,0,1.07,0,2.4v14.82c0,1.32,1.07,2.4,2.4,2.4h8.5c1.32,0,2.4-1.07,2.4-2.4V2.4c0-1.32-1.07-2.4-2.4-2.4Zm-3.2,17.73h-2.09c-.64,0-1.15-.51-1.15-1.15s.51-1.15,1.15-1.15h2.09c.64,0,1.15.51,1.15,1.15s-.51,1.15-1.15,1.15Z"
                />
              </g>
            </svg>
            <p class="footer-info-text">01922-334-455</p>
            <svg
              class="footer-icon"
              data-name="phone-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 13.29 19.61"
            >
              <g id="ELEMENTS">
                <path
                  d="m10.9,0H2.4C1.07,0,0,1.07,0,2.4v14.82c0,1.32,1.07,2.4,2.4,2.4h8.5c1.32,0,2.4-1.07,2.4-2.4V2.4c0-1.32-1.07-2.4-2.4-2.4Zm-3.2,17.73h-2.09c-.64,0-1.15-.51-1.15-1.15s.51-1.15,1.15-1.15h2.09c.64,0,1.15.51,1.15,1.15s-.51,1.15-1.15,1.15Z"
                />
              </g>
            </svg>
            <p class="footer-info-text">01999-399-234</p>
            <svg
              class="footer-icon"
              data-name="mail-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 19.39 14.93"
            >
              <g id="ELEMENTS">
                <g>
                  <path
                    d="m19.2,1.38s-.05.07-.08.11l-6.62,7.51c-.71.81-1.73,1.27-2.81,1.27-1.07,0-2.1-.46-2.81-1.27L.18,1.39c-.12.28-.18.58-.18.9v8.61c0,2.22,1.8,4.03,4.03,4.03h11.34c2.22,0,4.03-1.8,4.03-4.03V2.29c0-.32-.07-.63-.19-.91Z"
                  />
                  <path
                    d="m8.39,7.66c.33.38.79.59,1.3.59s.97-.21,1.3-.59L17.61.15s.05-.05.08-.07c-.19-.05-.39-.08-.59-.08H2.28c-.2,0-.39.03-.58.08l6.69,7.59Z"
                  />
                </g>
              </g>
            </svg>
            <p class="footer-info-text">info@heritagemedical.com</p>
          </div>
        </div>
        <div id="location-mirpur">
          <h2 id="mirpur-heading" class="footer-heading">MIRPUR</h2>
          <div id="mirpur-main" class="footer-info-container">
            <svg
              class="footer-icon"
              data-name="location"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14.64 18.35"
            >
              <g>
                <path
                  d="m7.32,0C3.28,0,0,3.28,0,7.32c0,2.95,3.9,7.94,6.01,10.43.69.81,1.94.81,2.63,0,2.11-2.48,6.01-7.48,6.01-10.43C14.64,3.28,11.36,0,7.32,0Zm0,8.72c-.96,0-1.75-.78-1.75-1.75s.78-1.75,1.75-1.75,1.75.78,1.75,1.75-.78,1.75-1.75,1.75Z"
                />
              </g>
            </svg>
            <p class="footer-info-text-nonhover">
              Plot 1, Road 5 <br />
              Block A, Section 10 <br />
              Mirpur, Dhaka 1216
            </p>
            <svg
              class="footer-icon"
              data-name="phone-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 13.29 19.61"
            >
              <g id="ELEMENTS">
                <path
                  d="m10.9,0H2.4C1.07,0,0,1.07,0,2.4v14.82c0,1.32,1.07,2.4,2.4,2.4h8.5c1.32,0,2.4-1.07,2.4-2.4V2.4c0-1.32-1.07-2.4-2.4-2.4Zm-3.2,17.73h-2.09c-.64,0-1.15-.51-1.15-1.15s.51-1.15,1.15-1.15h2.09c.64,0,1.15.51,1.15,1.15s-.51,1.15-1.15,1.15Z"
                />
              </g>
            </svg>
            <p class="footer-info-text">01733-293-191</p>
            <svg
              class="footer-icon"
              data-name="phone-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 13.29 19.61"
            >
              <g id="ELEMENTS">
                <path
                  d="m10.9,0H2.4C1.07,0,0,1.07,0,2.4v14.82c0,1.32,1.07,2.4,2.4,2.4h8.5c1.32,0,2.4-1.07,2.4-2.4V2.4c0-1.32-1.07-2.4-2.4-2.4Zm-3.2,17.73h-2.09c-.64,0-1.15-.51-1.15-1.15s.51-1.15,1.15-1.15h2.09c.64,0,1.15.51,1.15,1.15s-.51,1.15-1.15,1.15Z"
                />
              </g>
            </svg>
            <p class="footer-info-text">01511-291-133</p>
            <svg
              class="footer-icon"
              data-name="mail-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 19.39 14.93"
            >
              <g id="ELEMENTS">
                <g>
                  <path
                    d="m19.2,1.38s-.05.07-.08.11l-6.62,7.51c-.71.81-1.73,1.27-2.81,1.27-1.07,0-2.1-.46-2.81-1.27L.18,1.39c-.12.28-.18.58-.18.9v8.61c0,2.22,1.8,4.03,4.03,4.03h11.34c2.22,0,4.03-1.8,4.03-4.03V2.29c0-.32-.07-.63-.19-.91Z"
                  />
                  <path
                    d="m8.39,7.66c.33.38.79.59,1.3.59s.97-.21,1.3-.59L17.61.15s.05-.05.08-.07c-.19-.05-.39-.08-.59-.08H2.28c-.2,0-.39.03-.58.08l6.69,7.59Z"
                  />
                </g>
              </g>
            </svg>
            <p class="footer-info-text">info@heritagemedical.com</p>
          </div>
        </div>
      </section>
      <section id="footer-copyright">
        <p id="copyright-text">Copyright &copy; 2025 Heritage Medical Center</p>
      </section>
    </footer>

    <script src="../../Controller/User Authentication/forgot_pass_validation.js"></script>
  </body>
</html>
