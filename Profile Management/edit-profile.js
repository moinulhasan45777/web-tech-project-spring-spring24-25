const form = document.getElementById("edit-profile");

const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("mobile");
const bloodGroup = document.getElementById("blood-group");
const dob = document.getElementById("dob");
const city = document.getElementById("city");
const presentAddress = document.getElementById("present-address");
const emContactName = document.getElementById("em-contact-name");
const emContactRelation = document.getElementById("em-contact-rel");
const emContactNumber = document.getElementById("em-contact-mobile");
const eSignature = document.getElementById("e-sign");
const submitButton = document.getElementById("submit-button");

const validateForm = function () {
  if (
    fullName.value.trim() === "" ||
    email.value.trim() === "" ||
    phoneNumber.value === "" ||
    bloodGroup.value.trim() === "" ||
    dob.value === "" ||
    city.value.trim() === "" ||
    presentAddress.value.trim() === "" ||
    emContactName.value.trim() === "" ||
    emContactRelation.value.trim() === "" ||
    emContactNumber.value === "" ||
    eSignature.files.length === 0
  ) {
    alert("Please fill-up all the fields!");
    return false;
  }

  return true;
};

submitButton.addEventListener("click", function () {
  if (validateForm()) {
    form.submit();
  }
});
