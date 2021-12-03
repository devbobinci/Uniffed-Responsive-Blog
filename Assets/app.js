const burger = document.querySelector(".burger");
const menuList = document.querySelector(".menu__list");
const menuOpen = document.querySelector(".menu-open");

burger.addEventListener("click", () => {
  menuOpen.classList.toggle("on");
  menuList.classList.toggle("on");
  burger.classList.toggle("position");
});
