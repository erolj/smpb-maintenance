// Theme toggle functionality
const themeToggleBtn = document.getElementById("theme-toggle");

// Function to set theme
function setTheme(theme) {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
}

// Check for saved theme preference or use system preference
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  setTheme(savedTheme);
} else {
  // Check system preference
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
}

// Toggle theme when button is clicked
themeToggleBtn.addEventListener("click", () => {
  if (document.documentElement.classList.contains("dark")) {
    setTheme("light");
  } else {
    setTheme("dark");
  }
});
