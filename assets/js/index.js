// JavaScript Dropdown menu
const hamburger = document.querySelector(".hamburger");
const dropdownMenu = document.querySelector(".dropdown-menu");

hamburger.addEventListener("click", () => {
  dropdownMenu.classList.toggle("show");
});

// Auto sliders
var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);
