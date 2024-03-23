const switchButton = document.getElementById("switchButton");

function changeTheme() {
  let elements = document.querySelectorAll("body, body *");
  elements.forEach((element) => element.classList.toggle("dark-theme"));

  //   if (switchButton.classList.contains("dark-theme")) {
  //     switchButton.style.marginLeft = "auto";
  //   } else {
  //     switchButton.style.justifyContent = "start";
  //   }
}

switchButton.addEventListener("click", changeTheme);
