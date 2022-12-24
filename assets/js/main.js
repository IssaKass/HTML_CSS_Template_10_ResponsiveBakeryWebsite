// ===== SHOW MENU ===== //
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggleId && navId) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show-menu");
    });
  }
};

// ===== REMOVE MENU MOBILE ===== //
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("navMenu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach((l) => l.addEventListener("click", linkAction));

// ===== SCROLL SECTIONS ACTIVE LINK ===== //
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    scrollY > sectionTop && scrollY <= sectionTop + sectionHeight
      ? document
          .querySelector(".nav-menu a[href*=" + sectionId + "]")
          .classList.add("active-link")
      : document
          .querySelector(".nav-menu a[href*=" + sectionId + "]")
          .classList.remove("active-link");
  });
}

showMenu("menuToggle", "navMenu");

// ===== DARK LIGHT THEME ===== //
const themeButton = document.getElementById("themeButton");
const darkTheme = "dark-theme";
const iconLightTheme = "fa-moon";
const iconDarkTheme = "fa-sun";

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);

  themeButton.classList.contains(iconDarkTheme)
    ? themeButton.classList.replace(iconDarkTheme, iconLightTheme)
    : themeButton.classList.replace(iconLightTheme, iconDarkTheme);
});

// ===== HEADER SHADOW ON SCROLL ===== //
function scrollHeader() {
  const nav = document.getElementById("header");
  this.scrollY >= 10
    ? nav.classList.add("scroll-header")
    : nav.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

window.addEventListener("scroll", scrollActive);

// ===== SHOW SCROLL TOP ===== //
function scrollTop() {
  const scrollTop = document.getElementById("scrollTop");
  this.scrollY >= 560
    ? scrollTop.classList.add("show-scroll-top")
    : scrollTop.classList.remove("show-scroll-top");
}

window.addEventListener("scroll", scrollTop);

// ===== SCROLL REVEAL ANIMATION ===== //
const sr = ScrollReveal({
  origin: "top",
  distance: "2rem",
  duration: 1200,
  reset: false,
});

sr.reveal(
  `.home .home-data, .services .service, .about .about-data, 
  .about .about-img, .menu .menu-item, .contact .container`,
  {
    interval: 200,
  }
);
