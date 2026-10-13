import { initThemeToggle } from "./theme.js";
import { initApiExplorer } from "./api-explorer.js";
import { initTestimonials } from "./testimonials.js";
import { initContactForm } from "./contact-form.js";

initThemeToggle(document.querySelector("[data-theme-toggle]"));
initApiExplorer(document.querySelector("[data-explorer]"));
initTestimonials(document.querySelector("[data-testimonials]"));
initContactForm(document.querySelector("[data-contact-form]"));

// 404 page: show the path the visitor actually asked for.
document.querySelectorAll("[data-current-path]").forEach((el) => { el.textContent = location.pathname; });
