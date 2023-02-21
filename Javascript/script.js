const form = document.querySelector("#contactFormm");
const yourName = document.querySelector("#yourName");
const yourNameError = document.querySelector("#yourNameError");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const message = document.querySelector("#message");

function validateForm(event) {
  event.preventDefault();

  if (checkLength(yourName.value, 4) === true) {
    yourNameError.style.display = "none";
  } else {
    yourNameError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(address.value, 10) === true) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }

  console.log("hello");
}

form.addEventListener("submit", validateForm);

function submitForm(event) {
  if (
    checkLength(yourName.value, 4) &&
    checkLength(address.value, 10) &&
    validateEmail(email.value)
  ) {
    event.preventDefault();

    message.innerHTML =
      '<div class="message">Success! Your message has been sent :-)</div>';

    form.reset();
  }
}

form.addEventListener("submit", submitForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
