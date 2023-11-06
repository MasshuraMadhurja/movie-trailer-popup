const btnEl=document.querySelector(".btn");
const videoEl = document.querySelector("video");
const trailerContainerEl = document.querySelector(".trailer-container");
const closeIconEl = document.querySelector(".close-icon");

btnEl.addEventListener("click", () => {
  trailerContainerEl.classList.remove("active");
});

closeIconEl.addEventListener("click", () => {
  trailerContainerEl.classList.add("active");
  videoEl.pause();
  videoEl.currentTime = 0;
});
