// Better Book Club — small progressive enhancements.
function setFooterYear() {
  const yearElement = document.getElementById("footer-year");
  if (yearElement) yearElement.textContent = new Date().getFullYear();
}

function markCurrentNavLink() {
  const currentFile = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-header .nav-link").forEach((link) => {
    const linkFile = link.getAttribute("href").split("/").pop();
    if (linkFile === currentFile) link.setAttribute("aria-current", "page");
  });
}

function revealOnScroll() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
  items.forEach((item) => observer.observe(item));
}

setFooterYear();
markCurrentNavLink();
revealOnScroll();
