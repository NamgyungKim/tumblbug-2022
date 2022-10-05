const NUMBER_OF_PROJECT_SLIDE = 5;
const MAX_NUMBER_OF_IMAGE_WITH_PC = 5;
const MAX_NUMBER_OF_IMAGE_WITH_MOBILE = 3;
const ARTICLE_LENGTH = 8;

// project슬라이드 페이지
let projectSlidePage = Array.from({ length: NUMBER_OF_PROJECT_SLIDE }, () => 0);

const $project = document.querySelectorAll(".project-wrap");
const $projectOuterWrap = document.querySelector(".standard-card-size");
const $projectButtonWrap = document.querySelectorAll(".project-button-wrap");

// resizing시 reset
const resizing = () => {
  // btn reset
  projectSlidePage = Array.from({ length: NUMBER_OF_PROJECT_SLIDE }, () => 0);
  $project.forEach((item) => {
    const $cardWrap = item.querySelector(".project-card-wrap");
    const $prevBtn = item.querySelector(".prev-btn");
    const $nextBtn = item.querySelector(".next-btn");
    $cardWrap.style = "transform: translateX(0px)";
    $prevBtn.className += " hidden";
    $nextBtn.classList.remove("hidden");
  });
};

const projectSlideTransform = ($project, page) => {
  const windowInnerWidth = window.innerWidth;
  const $projectInnerWrap = $project.querySelector(".project-card-wrap");

  if (windowInnerWidth > 768) {
    const projectCardWidth = ($projectOuterWrap.offsetWidth - 56) / 5;
    const translateX = page * (projectCardWidth + 14);
    $projectInnerWrap.style = `transform: translateX(-${translateX}px);`;
  } else {
    let projectCardWidth = ($projectOuterWrap.offsetWidth - 28) / 2.5;
    let translateX = page * (projectCardWidth + 14);
    if (page == maxPage()) {
      projectCardWidth = ($projectOuterWrap.offsetWidth - 28) / 2.5;
      translateX = page * (projectCardWidth + 14) - projectCardWidth / 2;
    }
    $projectInnerWrap.style = `transform: translateX(-${translateX}px);`;
  }
};

// btn
const btnVisibility = ($project, id) => {
  const $prevBtn = $project.querySelector(".prev-btn");
  const $nextBtn = $project.querySelector(".next-btn");
  if (id == 0) {
    $prevBtn.className += " hidden";
  } else if (id == maxPage()) {
    $nextBtn.className += " hidden";
  } else {
    $prevBtn.classList.remove("hidden");
    $nextBtn.classList.remove("hidden");
  }
};

// project-ARTICLE_LENGTH-page
const maxPage = () => {
  const windowInnerWidth = window.innerWidth;
  if (windowInnerWidth > 768) {
    return ARTICLE_LENGTH - MAX_NUMBER_OF_IMAGE_WITH_PC;
  } else {
    return ARTICLE_LENGTH - MAX_NUMBER_OF_IMAGE_WITH_MOBILE;
  }
};

// resize event
let timer;
window.addEventListener("resize", () => {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(function () {
    resizing();
  }, 500);
  resizing();
});
resizing();

// project-slider
$projectButtonWrap.forEach(($button) => {
  $button.addEventListener("click", (e) => {
    const $project = e.target.closest(".project-wrap");
    const $prevBtn = e.target.closest(".prev-btn");
    const $nextBtn = e.target.closest(".next-btn");
    const { id } = e.target.closest(".project-wrap").dataset;

    if ($prevBtn) {
      if (projectSlidePage[id] <= 0) return;
      projectSlidePage[id]--;
    } else if ($nextBtn) {
      if (projectSlidePage[id] >= maxPage()) return;
      projectSlidePage[id]++;
    }

    projectSlideTransform($project, projectSlidePage[id]);
    btnVisibility($project, projectSlidePage[id]);
  });
});
