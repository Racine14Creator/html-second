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

const profileSections = document.querySelectorAll(".profile-section");
const profilePanels = document.querySelectorAll(".profile-section-panel");

profileSections.forEach((section) => {
  section.addEventListener("click", () => {
    profileSections.forEach((item) => item.classList.remove("active"));
    profilePanels.forEach((panel) => panel.classList.add("hidden"));
    section.classList.add("active");
    const target = document.querySelector(`[data-panel="${section.dataset.section}"]`);
    if (target) target.classList.remove("hidden");
  });
});

const photoInput = document.querySelector("#photoInput");
const profilePreview = document.querySelector("#profilePreview");

if (photoInput && profilePreview) {
  photoInput.addEventListener("change", () => {
    const file = photoInput.files?.[0];
    if (file) profilePreview.src = URL.createObjectURL(file);
  });
}

const profileForm = document.querySelector("#profileForm");
const savedStatus = document.querySelector("#savedStatus");

if (profileForm && savedStatus) {
  profileForm.addEventListener("submit", () => {
    savedStatus.classList.add("visible");
    savedStatus.innerHTML = '<i class="fas fa-circle-check"></i> Changes saved';
    window.setTimeout(() => savedStatus.classList.remove("visible"), 2400);
  });
}
