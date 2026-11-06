document.querySelectorAll(".toggle").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
  });
});

document.querySelectorAll(".job-actions .btn-light").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent.trim() === "Save") {
      button.textContent = "Saved";
      button.classList.add("active");
    } else if (button.textContent.trim() === "Saved") {
      button.textContent = "Save";
      button.classList.remove("active");
    } else if (button.textContent.trim() === "Remove") {
      const card = button.closest(".job-card");
      if (card) card.remove();
    }
  });
});

document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", (event) => event.preventDefault());
});
