(() => {
  const btn = document.getElementById("theme-toggle");
  const html = document.documentElement;
  const ICONS = { light: "☀️", dark: "🌙" };

  // Initialize: read saved theme or default to light
  const saved = localStorage.getItem("theme");
  const initial = saved || "light";
  html.className = initial;
  btn.textContent = ICONS[initial];

  // Toggle on click
  btn.addEventListener("click", () => {
    const next = html.className === "dark" ? "light" : "dark";
    html.className = next;
    localStorage.setItem("theme", next);
    btn.textContent = ICONS[next];
  });
})();
