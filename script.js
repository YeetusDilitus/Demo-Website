function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const navBar = this.document.querySelector(".hamburger-nav");

  navBar.classList.toggle("colorChange");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
};

window.addEventListener("scroll", function() {
  const navBar = this.document.querySelector(".navBar");
  navBar.classList.toggle("sticky", this.window.scrollY > 0);
});

window.addEventListener("scroll", function() {
const navBar = this.document.querySelector(".hamburger-nav");
  navBar.classList.toggle("sticky", this.window.scrollY > 0);
});