// Without JS every testimonial is listed. With JS they become a pager, one at a time.
export function initTestimonials(root) {
  if (!root) return;

  const items = [...root.querySelectorAll("[data-testimonial]")];
  const controls = root.querySelector("[data-testimonials-controls]");
  const tabs = [...root.querySelectorAll("[data-goto]")];
  const counter = root.querySelector("[data-counter]");
  let current = 0;

  const show = (index) => {
    current = (index + items.length) % items.length;
    items.forEach((item, i) => { item.hidden = i !== current; });
    tabs.forEach((tab, i) => tab.setAttribute("aria-pressed", String(i === current)));
    counter.textContent = `GET /testimonials?page=${current + 1} · ${current + 1}/${items.length}`;
  };

  tabs.forEach((tab) => tab.addEventListener("click", () => show(Number(tab.dataset.goto))));
  root.querySelectorAll("[data-step]").forEach((button) =>
    button.addEventListener("click", () => show(current + Number(button.dataset.step))),
  );

  controls.hidden = false;
  show(0);
}
