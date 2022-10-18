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

document.querySelectorAll(".menu-links li a").forEach((item) => {
  item.addEventListener("click", (event) => {
    document.querySelectorAll(".menu-links li a").forEach((i) => {
      i.classList.remove("active");
    });
    item.classList.add("active");
  });
});
