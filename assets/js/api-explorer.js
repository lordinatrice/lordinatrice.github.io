// Highlights JSON keys and // comments, then lets visitors switch between endpoints.
const highlight = (code) => {
  const lines = code.textContent.split("\n");
  code.textContent = "";
  lines.forEach((line, index) => {
    if (index > 0) code.append("\n");
    const [, content, comment] = line.match(/^(.*?)(\s*\/\/.*)?$/);
    content.split(/("[^"]*")(?=\s*:)/).forEach((part, i) => {
      code.append(i % 2 === 1 ? span("json__key", part) : part);
    });
    if (comment) code.append(span("json__comment", comment));
  });
};

const span = (className, text) => Object.assign(document.createElement("span"), { className, textContent: text });

export function initApiExplorer(root) {
  if (!root) return;

  const buttons = root.querySelectorAll("[data-endpoint]");
  const responses = root.querySelectorAll("[data-response]");
  root.querySelectorAll(".json code").forEach(highlight);

  const show = (id) => {
    buttons.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.endpoint === id)));
    responses.forEach((r) => { r.hidden = r.dataset.response !== id; });
  };

  buttons.forEach((button) => button.addEventListener("click", () => show(button.dataset.endpoint)));
}
