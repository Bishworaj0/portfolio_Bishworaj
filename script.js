// ===== Navigation toggle for mobile =====
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ===== Dark/Light mode toggle =====
const themeToggleBtn = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

const currentTheme = localStorage.getItem('theme');
if (
  (currentTheme === 'dark') ||
  (!currentTheme && prefersDarkScheme.matches)
) {
  document.documentElement.setAttribute('data-theme', 'dark');
  themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
} else {
  document.documentElement.setAttribute('data-theme', 'light');
  themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
}

themeToggleBtn.addEventListener('click', () => {
  let theme = document.documentElement.getAttribute('data-theme');
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
  }
});

// ===== Smooth scroll active link highlighting (optional) =====
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

function activateNavLink() {
  let scrollY = window.scrollY;
  sections.forEach((sec) => {
    const sectionHeight = sec.offsetHeight;
    const sectionTop = sec.offsetTop - 70;
    const sectionId = sec.getAttribute('id');
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navItems.forEach((link) => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active-link');
        }
      });
    }
  });
}
window.addEventListener('scroll', activateNavLink);