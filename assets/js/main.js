const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const links = Array.from(document.querySelectorAll(".nav-links a"));
const sections = links
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    navLinks.classList.toggle("is-open");
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = `#${entry.target.id}`;
      links.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === id);
      });
    });
  },
  {
    rootMargin: "-35% 0px -45% 0px",
    threshold: 0.01,
  }
);

sections.forEach((section) => observer.observe(section));
