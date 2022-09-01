let button = document.getElementById("form-button");
let form = document.getElementById("contact-us");
let thanks = document.getElementById("change-after");
let temp = document.querySelector(".form-ui")

button.onclick = function (e) {
  e.preventDefault();
  form.style.visibility = "hidden";
  thanks.innerHTML = "Thank you for contacting us";
};
