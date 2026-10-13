// Sends the form to Web3Forms without leaving the page. Without JS, the form still posts normally.
export function initContactForm(form) {
  if (!form) return;

  const status = form.querySelector("[data-form-status]");
  const submit = form.querySelector("[type=submit]");
  const { sending, sent, error } = form.dataset;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    submit.disabled = true;
    status.textContent = sending;

    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const result = await response.json();
      if (!result.success) throw new Error(result.message);

      form.reset();
      status.textContent = `201 Created. ${sent}`;
    } catch {
      status.textContent = error;
    } finally {
      submit.disabled = false;
    }
  });
}
