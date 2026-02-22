// ===============================
// MENU HAMBURGER
// ===============================
const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  sideMenu.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

overlay.addEventListener("click", closeMenu);

function closeMenu() {
  menuBtn.classList.remove("active");
  sideMenu.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("no-scroll");
}

// ===============================
// SCROLL REVEAL
// ===============================
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ===============================
// Kegiatan Horizontal Scroll
// ===============================
const kegiatanScroll = document.getElementById("kegiatanScroll");
const kegiatanPrev = document.getElementById("kegiatanPrev");
const kegiatanNext = document.getElementById("kegiatanNext");

if (kegiatanScroll && kegiatanNext && kegiatanPrev) {
  kegiatanNext.addEventListener("click", () => {
    kegiatanScroll.scrollBy({ left: 300, behavior: "smooth" });
  });

  kegiatanPrev.addEventListener("click", () => {
    kegiatanScroll.scrollBy({ left: -300, behavior: "smooth" });
  });
}

// ===============================
// PROGRAM FILTER (DENGAN SECTION)
// ===============================
const filterBtns = document.querySelectorAll(".filter-btn");
const programCards = document.querySelectorAll(".program-card");
const programSections = document.querySelectorAll(".program-section");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    // FILTER KARTU
    programCards.forEach(card => {
      const categories = card.dataset.category;

      if (filter === "semua" || categories.includes(filter)) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });

    // CEK SETIAP SECTION
    programSections.forEach(section => {
      const visibleCards = section.querySelectorAll(".program-card:not(.hide)");

      if (visibleCards.length === 0) {
        section.classList.add("hide");
      } else {
        section.classList.remove("hide");
      }
    });
  });
});

// ===============================
// CLOUD PARALLAX EFFECT
// ===============================
const clouds = document.querySelectorAll(".cloud");

let lastScrollY = window.scrollY;

function cloudParallax() {
  if (window.innerWidth < 768) return;
  const scrollY = window.scrollY;

  clouds.forEach(cloud => {
    const speed = cloud.dataset.speed || 0.2;
    const translateY = Math.min(scrollY * speed, 120);

    cloud.style.transform = `translateY(${translateY}px)`;
  });

  lastScrollY = scrollY;
  requestAnimationFrame(cloudParallax);
}

requestAnimationFrame(cloudParallax);

// ===============================
// MODE WAKTU OTOMATIS
// ===============================
const hero = document.getElementById("heroSection");
const toggle = document.getElementById("themeToggle");

function setAutoTimeMode() {
  const hour = new Date().getHours();
  hero.classList.remove("day", "night");

  if (hour >= 6 && hour < 18) {
    hero.classList.add("day");
  } else {
    hero.classList.add("night");
  }
}

setAutoTimeMode();

toggle.addEventListener("click", () => {
  hero.classList.toggle("night");
});