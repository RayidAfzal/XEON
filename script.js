// Toggle Dark/Light Mode with localStorage support
const toggle = document.getElementById('modeToggle');
const html = document.documentElement;

// On load: check saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  html.classList.add('dark');
  toggle.textContent = '☀️';
} else {
  html.classList.remove('dark');
  toggle.textContent = '🌙';
}

// Toggle on click
toggle.addEventListener('click', () => {
  const isDark = html.classList.toggle('dark');
  toggle.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
