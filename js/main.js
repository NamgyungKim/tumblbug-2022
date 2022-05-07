import "../scss/main.scss";

// project슬라이트 페이지
let projectSlidePage = Array.from({ length: 5 }, () => 0);
const articleLength = 8;

const $project = document.querySelectorAll(".project-wrap");
const $projectOuterWrap = document.querySelector(".standard-card-size");
const $projectButtonWrap = document.querySelectorAll(".project-button-wrap");

// resizing시 reset
const resizing = () => {
  // btn reset
  projectSlidePage = Array.from({ length: 5 }, () => 0);
  $project.forEach((item) => {
    const $cardWrap = item.querySelector(".project-card-wrap");
    const $prevBtn = item.querySelector(".prev-btn");
    const $nextBtn = item.querySelector(".next-btn");
    $cardWrap.style = "transform: translateX(0px)";
    $prevBtn.style = "visibility: hidden;";
    $nextBtn.style = "visibility: visible;";
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
    $prevBtn.style = "visibility: hidden;";
  } else if (id == maxPage()) {
    $nextBtn.style = "visibility: hidden;";
  } else {
    $nextBtn.style = "visibility: visible;";
    $prevBtn.style = "visibility: visible;";
  }
};

// project-articleLength-page
const maxPage = () => {
  const windowInnerWidth = window.innerWidth;
  if (windowInnerWidth > 768) {
    return articleLength - 5;
  } else {
    return articleLength - 3;
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
