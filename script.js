const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const slider = document.getElementById("slider");
const formBox = document.querySelector(".form-box");

loginBtn.addEventListener("click", () => {
  slider.style.left = "0";
  formBox.style.transform = "translateX(0%)";
});

signupBtn.addEventListener("click", () => {
  slider.style.left = "50%";
  formBox.style.transform = "translateX(-50%)";
});
