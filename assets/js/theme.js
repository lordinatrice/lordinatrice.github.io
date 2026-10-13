const STORAGE_KEY = "theme";
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = () =>
  document.documentElement.dataset.theme || (prefersDark.matches ? "dark" : "light");

export function initThemeToggle(button) {
  if (!button) return;

  const sync = () => button.setAttribute("aria-pressed", String(currentTheme() === "dark"));

  button.addEventListener("click", () => {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem(STORAGE_KEY, next); } catch { /* storage disabled: theme just won't persist */ }
    sync();
  });

  prefersDark.addEventListener("change", sync);
  sync();
}
