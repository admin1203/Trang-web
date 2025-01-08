const validUsername = "admin";
const validPassword = "12345";
const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("error-message");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username === validUsername && password === validPassword) {
    alert("Đăng nhập thành công!");
    window.location.href = "dashboard.html";
  } else {
    errorMessage.style.display = "block";
  }
});
