const name = "Kalle";
const password = "qwe123";

const loginForm = document.getElementById("login-form");
const errorMessage = document.getElementById("errorMessage");
const loginContainer = document.getElementById("login-container");
const welcomeContainer = document.getElementById("welcome-container");
const welcomeText = document.getElementById("welcome-text");
const logoutBtn = document.getElementById("logout-btn");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputName = document.getElementById("name").value;
  const inputPassword = document.getElementById("password").value;

  if (inputName === name && inputPassword === password) {
    welcomeText.textContent = "Välkommen " + inputName + ", du är nu inloggad";
    loginContainer.style.display = "none";
    welcomeContainer.style.display = "block";
    errorMessage.textContent = "";
  } else {
    errorMessage.textContent = "Felaktiga inloggningsuppgifter";
  }
});

logoutBtn.addEventListener("click", () => {
  welcomeContainer.style.display = "none";
  loginContainer.style.display = "block";
  loginForm.reset();
});