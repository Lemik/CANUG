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

  const localServicesBoard = document.getElementById("local-services-board");
  if (localServicesBoard) {
    const keywordsInput = document.getElementById("local-services-keywords");
    const locationSelect = document.getElementById("local-services-location");
    const serviceSelect = document.getElementById("local-services-service");
    const countEl = document.getElementById("local-services-count");
    const emptyEl = document.getElementById("local-services-empty");
    const cards = Array.from(localServicesBoard.querySelectorAll(".specialist-card"));

    const formatLabel = (slug) =>
      slug
        .split(/\s+/)
        .filter(Boolean)
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");

    const collectFromAttr = (attr) => {
      const out = new Set();
      cards.forEach((card) => {
        const raw = card.getAttribute(attr) || "";
        raw.split("|").forEach((part) => {
          const t = part.trim();
          if (t) out.add(t);
        });
      });
      return Array.from(out).sort((a, b) => a.localeCompare(b));
    };

    const fillSelect = (select, values) => {
      select.innerHTML = "";
      const allOpt = document.createElement("option");
      allOpt.value = "";
      allOpt.textContent = "All";
      select.appendChild(allOpt);
      values.forEach((v) => {
        const opt = document.createElement("option");
        opt.value = v;
        opt.textContent = formatLabel(v);
        select.appendChild(opt);
      });
    };

    fillSelect(locationSelect, collectFromAttr("data-locations"));
    fillSelect(serviceSelect, collectFromAttr("data-services"));

    const getLang = () => document.documentElement.getAttribute("data-lang") || "en";

    const applyLocalServicesFilter = () => {
      const kw = (keywordsInput && keywordsInput.value) ? String(keywordsInput.value).trim().toLowerCase() : "";
      const tokens = kw.split(/\s+/).filter(Boolean);
      const loc = locationSelect && locationSelect.value ? String(locationSelect.value).trim().toLowerCase() : "";
      const svc = serviceSelect && serviceSelect.value ? String(serviceSelect.value).trim().toLowerCase() : "";

      let visible = 0;
      cards.forEach((card) => {
        const search = (card.getAttribute("data-search") || "").toLowerCase();
        const locations = (card.getAttribute("data-locations") || "")
          .split("|")
          .map((s) => s.trim().toLowerCase());
        const services = (card.getAttribute("data-services") || "")
          .split("|")
          .map((s) => s.trim().toLowerCase());

        let match = true;
        for (const t of tokens) {
          if (!search.includes(t)) {
            match = false;
            break;
          }
        }
        if (match && loc && !locations.includes(loc)) {
          match = false;
        }
        if (match && svc && !services.includes(svc)) {
          match = false;
        }

        card.classList.toggle("is-hidden", !match);
        if (match) {
          visible += 1;
        }
      });

      const total = cards.length;
      const lang = getLang();
      if (countEl) {
        countEl.textContent =
          lang === "uk" ? `Показано ${visible} з ${total}` : `Showing ${visible} of ${total}`;
      }
      if (emptyEl) {
        emptyEl.classList.toggle("is-hidden", visible !== 0);
      }
    };

    if (keywordsInput) {
      keywordsInput.addEventListener("input", applyLocalServicesFilter);
    }
    if (locationSelect) {
      locationSelect.addEventListener("change", applyLocalServicesFilter);
    }
    if (serviceSelect) {
      serviceSelect.addEventListener("change", applyLocalServicesFilter);
    }

    new MutationObserver(() => {
      applyLocalServicesFilter();
    }).observe(document.documentElement, { attributes: true, attributeFilter: ["data-lang"] });

    applyLocalServicesFilter();

    localServicesBoard.querySelectorAll(".specialist-card-trigger").forEach((trigger) => {
      const dialogId = trigger.getAttribute("aria-controls");
      const dialog = dialogId ? document.getElementById(dialogId) : null;
      if (!dialog || typeof dialog.showModal !== "function") {
        return;
      }
      trigger.addEventListener("click", () => {
        document.body.classList.add("no-scroll");
        dialog.showModal();
      });
      dialog.addEventListener("close", () => {
        document.body.classList.remove("no-scroll");
      });
    });
  }
})();
