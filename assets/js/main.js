// Better Book Club - small page helpers.
// The mobile menu toggle is handled by Bootstrap's JavaScript, not this file.

// Show the current year in the footer.
function setFooterYear() {
  const yearElement = document.getElementById('footer-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// Mark the navigation link for the current page (used by screen readers and CSS).
function markCurrentNavLink() {
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-header .nav-link').forEach((link) => {
    const linkFile = link.getAttribute('href').split('/').pop();
    if (linkFile === currentFile) {
      link.setAttribute('aria-current', 'page');
    }
  });
}

setFooterYear();
markCurrentNavLink();
