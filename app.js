const nav = document.querySelector("nav ul");
const knowmore = document.querySelector(".home-top-btn");
const topBtn = document.querySelector(".top-btn");
const songsChange = document.querySelectorAll(".song-link");
const iframe = document.querySelector(".songs-right iframe");
const songText = document.querySelector(".song-name");
const songLinks = [
  "https://www.youtube.com/embed/wG9f8D2GYo0",
  "https://www.youtube.com/embed/UorUj8LNru8",
  "https://www.youtube.com/embed/cRGXkP4dZCU",
  "https://www.youtube.com/embed/Dajcwrykmf8",
  "https://www.youtube.com/embed/ew-izutC5hU",
  "https://www.youtube.com/embed/AOk3QT8N74g",
  "https://www.youtube.com/embed/5L3y9s7WXIk",
  "https://www.youtube.com/embed/WZy2YA2asQA",
  "https://www.youtube.com/embed/PjYRNaAucg8",
  "https://www.youtube.com/embed/dm5JtRCxnLM",
];
nav.addEventListener("click", (e) => {
  e.preventDefault();
  const element = e.target;
  const targetId = element.getAttribute("href");
  const targetElement = document.querySelector(targetId);
  targetElement?.scrollIntoView({ behavior: "smooth" });
});

knowmore.addEventListener("click", (e) => {
  e.preventDefault();
  const targetId = knowmore.getAttribute("href");
  const targetElement = document.querySelector(targetId);
  targetElement.scrollIntoView({ behavior: "smooth" });
});

topBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

songsChange.forEach((ele, i) => {
  ele.onclick = (e) => {
    e.preventDefault();
    songText.innerHTML = e.target.closest("a").innerHTML;
    iframe.src = songLinks[i];
  };
});
