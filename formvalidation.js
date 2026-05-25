document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");
  const password = document.getElementById("first-password");
  const confirmPassword = document.getElementById("second-password");
  const message = document.getElementById("passwordMessage");

  function checkPasswords() {
    // Clear message if confirm password is empty
    if (confirmPassword.value === "") {
      message.textContent = "";
      return false;
    }

    // Passwords match
    if (password.value === confirmPassword.value) {
      return true;
    }

    // Passwords do not match
    message.textContent = "Passwords do not match";
    message.style.color = "red";
    return false;
  }


  // Prevent form submission if passwords don't match
  form.addEventListener("submit", (event) => {
    if (!checkPasswords()) {
      event.preventDefault();
    }
  });
});