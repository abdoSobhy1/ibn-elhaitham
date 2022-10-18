const body = document.querySelector("body"),
  sidebar = document.querySelector(".sidebar"),
  toggle = document.querySelector(".toggle"),
  modeSwitch = document.querySelector(".toggle-switch"),
  overlay = document.querySelector(".overlay");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  overlay.classList.toggle("activated");
});

overlay.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  overlay.classList.toggle("activated");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
});
