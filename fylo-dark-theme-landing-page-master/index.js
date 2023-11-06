const hamBurger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const body = document.body;
const otherSections = document.querySelectorAll(".section-to-move");

hamBurger.addEventListener("click", () => {
  hamBurger.classList.toggle("active");
  navMenu.classList.toggle("active");
});



