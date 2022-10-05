import { delay, throttle } from "./utile";

const $slider = document.querySelector(".slider-outer");
const $prevBtn = document.querySelector(".slider_nav-left");
const $nextBtn = document.querySelector(".slider_nav-right");

const $totalPage = document.querySelector(".total-page");
const $currentPage = document.querySelector(".current-page");

const NUMBER_OF_SLIDE = $slider.childElementCount;
let SLIDE_COUNT = 1;

const firstSlider = $slider.firstElementChild.cloneNode(true);
const lastSlider = $slider.lastElementChild.cloneNode(true);
$slider.appendChild(firstSlider);
$slider.prepend(lastSlider);

$totalPage.innerText = NUMBER_OF_SLIDE;

console.log($slider.children[3]);

const nextEvent = async () => {
  SLIDE_COUNT++;
  $currentPage.innerText = SLIDE_COUNT > NUMBER_OF_SLIDE ? "1" : SLIDE_COUNT;
  $slider.style.transform = `translateX(-${SLIDE_COUNT}00vw)`;

  if (SLIDE_COUNT > NUMBER_OF_SLIDE) {
    await delay(400);
    $slider.style.transition = "none";
    SLIDE_COUNT = 1;
    $slider.style.transform = `translateX(-${SLIDE_COUNT}00vw)`;
    await delay(100);
    $slider.style.transition = "translateX, 0.4s";
  }
};
const prevEvent = async () => {
  SLIDE_COUNT--;
  $currentPage.innerText = SLIDE_COUNT < 1 ? NUMBER_OF_SLIDE : SLIDE_COUNT;
  $slider.style.transform = `translateX(-${SLIDE_COUNT}00vw)`;

  if (SLIDE_COUNT < 1) {
    await delay(400);
    $slider.style.transition = "none";
    SLIDE_COUNT = NUMBER_OF_SLIDE;
    $slider.style.transform = `translateX(-${SLIDE_COUNT}00vw)`;
    await delay(100);
    $slider.style.transition = "translateX, 0.4s";
  }
};

$nextBtn.addEventListener("click", throttle(nextEvent, 500));
$prevBtn.addEventListener("click", throttle(prevEvent, 500));

// resizing할때 translate으로 움직이지 않도록 고정
$slider.style.transition = "translateX, 0.4s";
const transform = async () => {
  $slider.style.transition = "none";
  await delay(400);
  $slider.style.transition = "translateX, 0.4s";
};
window.addEventListener("resize", throttle(transform, 400));
