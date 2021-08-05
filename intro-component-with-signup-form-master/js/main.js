document.addEventListener("DOMContentLoaded", initPage);

function initPage() {
  //FIND NODES
  let form = document.querySelector("#form-signup");

  let inputFirstName = document.querySelector("#input-first-name");
  let iconFirstName = document.querySelector("#icon-first-name");
  let errorFirstName = document.querySelector("#error-first-name");

  let inputLastName = document.querySelector("#input-last-name");
  let iconLastName = document.querySelector("#icon-last-name");
  let errorLastName = document.querySelector("#error-last-name");

  let inputEmail = document.querySelector("#input-email");
  let iconEmail = document.querySelector("#icon-email");
  let errorEmail = document.querySelector("#error-email");

  let inputPassword = document.querySelector("#input-password");
  let iconPassword = document.querySelector("#icon-password");
  let errorPassword = document.querySelector("#error-password");

  form.addEventListener("submit", submitForm);

  //FUNCTIONS
  function submitForm(event) {
    let firstName = checkFirstName();
    let lastName = checkLastName();
    let email = checkEmail();
    let password = checkPassword();
    if (!firstName || !lastName || !email || !password) event.preventDefault();
  }

  function checkFirstName() {
    if (inputFirstName.value.length > 0) {
      inputFirstName.classList.remove("form__input--error");
      iconFirstName.classList.remove("show");
      errorFirstName.classList.remove("show");
      return true;
    } else {
      inputFirstName.classList.add("form__input--error");
      iconFirstName.classList.add("show");
      errorFirstName.classList.add("show");
      return false;
    }
  }

  function checkLastName() {
    if (inputLastName.value.length > 0) {
      inputLastName.classList.remove("form__input--error");
      iconLastName.classList.remove("show");
      errorLastName.classList.remove("show");
      return true;
    } else {
      inputLastName.classList.add("form__input--error");
      iconLastName.classList.add("show");
      errorLastName.classList.add("show");
      return false;
    }
  }

  function checkEmail() {
    if (inputEmail.value.length > 0 && inputEmail.value.includes("@")) {
      inputEmail.classList.remove("form__input--error");
      iconEmail.classList.remove("show");
      errorEmail.classList.remove("show");
      return true;
    } else {
      inputEmail.classList.add("form__input--error");
      iconEmail.classList.add("show");
      errorEmail.classList.add("show");
      return false;
    }
  }

  function checkPassword() {
    if (inputPassword.value.length > 0) {
      inputPassword.classList.remove("form__input--error");
      iconPassword.classList.remove("show");
      errorPassword.classList.remove("show");
      return true;
    } else {
      inputPassword.classList.add("form__input--error");
      iconPassword.classList.add("show");
      errorPassword.classList.add("show");
      return false;
    }
  }
}
