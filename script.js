function () {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  const nav = document.getElementById("site-nav");
  const navToggle = document.querySelector(".nav-toggle");
  const themeToggle = document.querySelector(".theme-toggle");
  const sectionIds = ["about", "skills", "projects"];
  const navLinks = Array.from(document.querySelectorAll(".site-nav a"));

  function setNavOpen(isOpen) {
    if (!nav || !navToggle) return;
    nav.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  }

  if (navToggle) {
    navToggle.addEventListener("click", function () {
      const isOpen = navToggle.getAttribute("aria-expanded") === "true";
      setNavOpen(!isOpen);
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      setNavOpen(false);
    });
  });

  function applyTheme(isDark) {
    document.body.classList.toggle("theme-dark", isDark);
    if (!themeToggle) return;
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
  }

  const savedTheme = window.localStorage.getItem("profile-theme");
  applyTheme(savedTheme === "dark");

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const nextDark = !document.body.classList.contains("theme-dark");
      applyTheme(nextDark);
      window.localStorage.setItem("profile-theme", nextDark ? "dark" : "light");
    });
  }

  function updateActiveNav() {
    const scrollPos = window.scrollY + 120;
    let currentId = sectionIds[0];

    sectionIds.forEach(function (id) {
      const section = document.getElementById(id);
      if (section && section.offsetTop <= scrollPos) {
        currentId = id;
      }
    });

    navLinks.forEach(function (link) {
      const isActive = link.getAttribute("href") === "#" + currentId;
      link.classList.toggle("is-active", isActive);
    });
  }

  window.addEventListener("scroll", updateActiveNav, { passive: true });
  updateActiveNav();
})();
