const menu = document.querySelector(".hamburger");
const bar1 = document.querySelector("#bar1");
const bar2 = document.querySelector("#bar2");
const bar3 = document.querySelector("#bar3");
const rightMenu = document.querySelector(".menu");
const backgroundBlack = document.querySelector(".background-black");
const body = document.querySelector("body");
const arrowDown = document.querySelector(".down");
const leftContent = document.querySelectorAll(".inner-left-content");
menu.addEventListener("click", function () {
  bar1.classList.toggle("rotate-down");
  bar2.classList.toggle("bar-hide");
  bar3.classList.toggle("rotate-up");
  rightMenu.classList.toggle("menu-hide");
  backgroundBlack.classList.toggle("menu-close");
  body.classList.toggle("stop");
  //   if (backgroundBlack.classList.contains("menu-close")) {
  //     backgroundBlack.style.z - index;
  //     20;
  //   }
});
const observer = new IntersectionObserver(
  (entries) => {
    // console.log(entries);
    entries.forEach((entry) => {
      // console.log(entry);
      if (entry.isIntersecting === true) {
        entry.target.classList.remove("left-page");
      }
    });
  },
  {
    threshold: 0.1,
  }
);
// console.log(observer);
leftContent.forEach((content) => {
  observer.observe(content);
});
