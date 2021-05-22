const nav = document.querySelector("nav");
const knowmore = document.querySelector(".home-top-btn");

nav.addEventListener("click", (e) => {
  e.preventDefault();
  const element = e.target;
  const targetId = element.getAttribute("href");
  const targetElement = document.querySelector(targetId);
  targetElement.scrollIntoView({ behavior: "smooth" });
});

knowmore.addEventListener("click", (e) => {
  e.preventDefault();
  const targetId = knowmore.getAttribute("href");
  const targetElement = document.querySelector(targetId);
  targetElement.scrollIntoView({ behavior: "smooth" });
});

const topBtn = document.querySelector(".top-btn");
topBtn.addEventListener("click", (e) => {
  e.preventDefault();
  nav.scrollIntoView({ behavior: "smooth" });
});
