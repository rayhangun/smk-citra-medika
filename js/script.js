// Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");

// ketika haburger-menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik diluar sidebar untuk menghilangkan nav

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Berita Sekolah
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slider-slide");
  const slideWidth = slides[0].offsetWidth;
  const numSlides = slides.length;
  let currentIndex = 0;
  let direction = 1; // 1 for right, -1 for left;
  let interval; // Variable to store the interval

  function updateSlide() {
    const translateX = -currentIndex * slideWidth;
    slider.style.transform = `translateX(${translateX}px)`;
  }

  function slideNext() {
    currentIndex += direction;
    if (currentIndex === numSlides - 2) {
      // Pause the sliding when reaching two slides before the last slide
      clearInterval(interval);
      setTimeout(() => {
        // Resume sliding after a delay (e.g., 2 seconds)
        direction *= -1; // Change direction to reverse
        interval = setInterval(slideNext, 5000);
      }, 2000); // Delay in milliseconds before resuming
    } else if (currentIndex === 0) {
      // Change direction to right when reaching the first slide
      direction = 1;
    }
    updateSlide();
  }

  // Start automatic slideshow (change slide every 5 seconds)
  interval = setInterval(slideNext, 5000);
});