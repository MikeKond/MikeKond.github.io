const menu = document.querySelector(".nav-section .main-nav"),
      hamburger = document.getElementById("hamburger"),
      links = menu.querySelectorAll("a");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

links.forEach((el) => {
  el.addEventListener("click", () => {
    menu.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
});