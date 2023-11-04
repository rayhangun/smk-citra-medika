// Toggle Class Active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

// ketika haburger-menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk search-form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (event) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  event.preventDefault();
};

// Klik diluar element untuk menghilangkan sidebar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Klik diluar element untuk menghilangkan search-button
const searchButton = document.querySelector("#search-button");

document.addEventListener("click", function (e) {
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

// Mengaktifkan Searh form
document.addEventListener("DOMContentLoaded", function () {
  const searchBox = document.getElementById("search-box");
  const searchResults = document.getElementById("search-results");

  searchBox.addEventListener("input", function () {
    const query = searchBox.value.trim().toLowerCase();

    // Perform a search based on the query
    // You can customize this part to match your specific search logic
    // For this example, we'll filter the dummy data based on title, keyword, and additional content
    const dummyData = [
      {
        title: "Profil Sekolah",
        id: "about",
        keyword: "sekolah",
        content: "Program Keahlian",
      },
      {
        title: "Berita Sekolah",
        id: "news",
        keyword: "berita",
        content: "pengumuman",
      },
      {
        title: "Kontak dan Info PPDB",
        id: "contact",
        keyword: "kontak",
        content: "alamat",
      },
    ];

    const filteredResults = dummyData.filter((item) => {
      const titleMatch = item.title.toLowerCase().includes(query);
      const keywordMatch = item.keyword.toLowerCase().includes(query);
      const contentMatch = item.content.toLowerCase().includes(query);
      return titleMatch || keywordMatch || contentMatch;
    });

    // Display the search results
    displayResults(filteredResults);
  });

  function displayResults(results) {
    if (results.length > 0) {
      searchResults.innerHTML = results
        .map(
          (result) =>
            `<a href="#${result.id}" target="_blank" class="result-item">${result.title}</a>`
        )
        .join("");
      searchResults.classList.add("active"); // Show search results

      // Add event listeners to result items
      const resultItems = document.querySelectorAll(".result-item");
      resultItems.forEach((item) => {
        item.addEventListener("click", function () {
          searchResults.classList.remove("active"); // Hide search results
        });
      });
    } else {
      searchResults.innerHTML = "<p>No results found</p>";
      searchResults.classList.remove("active"); // Hide search results
    }
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
