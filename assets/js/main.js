(() => {
  const STORAGE_KEY = "canug-lang";
  const html = document.documentElement;
  const buttons = Array.from(document.querySelectorAll("[data-set-lang]"));

  const setLang = (lang) => {
    html.setAttribute("data-lang", lang);
    html.setAttribute("lang", lang === "uk" ? "uk" : "en");
    localStorage.setItem(STORAGE_KEY, lang);
    buttons.forEach((button) => {
      const isActive = button.getAttribute("data-set-lang") === lang;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  };

  const storedLang = localStorage.getItem(STORAGE_KEY);
  const initialLang = storedLang || html.getAttribute("data-lang") || "en";
  setLang(initialLang);

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      setLang(button.getAttribute("data-set-lang"));
    });
  });

  const galleryImages = Array.from(document.querySelectorAll(".event-gallery img"));
  if (galleryImages.length) {
    const modal = document.createElement("div");
    modal.className = "lightbox";
    modal.innerHTML = `
      <div class="lightbox-backdrop" data-lightbox-close></div>
      <div class="lightbox-content" role="dialog" aria-modal="true">
        <button type="button" class="lightbox-close" data-lightbox-close aria-label="Close">✕</button>
        <img class="lightbox-image" alt="">
      </div>
    `;
    document.body.appendChild(modal);

    const lightboxImage = modal.querySelector(".lightbox-image");
    const closeTargets = modal.querySelectorAll("[data-lightbox-close]");

    const closeLightbox = () => {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("no-scroll");
    };

    closeTargets.forEach((target) => {
      target.addEventListener("click", closeLightbox);
    });

    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeLightbox();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && modal.classList.contains("open")) {
        closeLightbox();
      }
    });

    galleryImages.forEach((image) => {
      image.addEventListener("click", () => {
        const fullSrc = image.getAttribute("data-full") || image.getAttribute("src");
        lightboxImage.src = fullSrc;
        lightboxImage.alt = image.alt || "Event photo";
        modal.classList.add("open");
        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("no-scroll");
      });
    });
  }
})();
