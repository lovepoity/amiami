function validateLogin() {
  var email = document.getElementById("emailInput").value;
  var password = document.getElementById("passwordInput").value;
  var emailErrorMessage = document.querySelector(".email-error");
  var passwordErrorMessage = document.querySelector(".password-error");

  // Kiểm tra email
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    emailErrorMessage.innerText = "Please enter a valid email address.";
    passwordErrorMessage.innerText = "";
    return;
  } else {
    emailErrorMessage.innerText = "";
  }

  // Kiểm tra mật khẩu
  if (password.length < 8) {
    passwordErrorMessage.innerText =
      "Password must be at least 8 characters long.";
    emailErrorMessage.innerText = "";
    return;
  } else {
    passwordErrorMessage.innerText = "";
  }
}
