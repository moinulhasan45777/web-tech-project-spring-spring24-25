const fullName = document.getElementById("search-bar");

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
