const switchButton = document.getElementById("switchButton");

function changeTheme() {
  let elements = document.querySelectorAll("body, body *");
  elements.forEach((element) => element.classList.toggle("dark-theme"));
}

switchButton.addEventListener("click", changeTheme);
