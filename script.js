const toggle = document.getElementById('themeToggle');
const html = document.documentElement;

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    html.setAttribute('data-bs-theme', 'light');
  } else {
    html.setAttribute('data-bs-theme', 'dark');
  }
});
