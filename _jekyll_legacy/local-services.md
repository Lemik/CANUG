---
layout: default
title: Local services
permalink: /local-services/
---

<section class="hero">
  <h1>
    <span data-lang="en">Local Services Board</span>
    <span data-lang="uk">Місцева дошка послуг</span>
  </h1>
  <p class="muted">
    <span data-lang="en">
      Find local specialists in the area. Use search to filter by keyword, location, or service.
    </span>
    <span data-lang="uk">
      Знайдіть місцевих фахівців у регіоні. Використовуйте пошук за словом, місцем або послугою.
    </span>
  </p>
  <p class="muted local-services-hero-hint">
    <span data-lang="en">Click a card to open full details, contacts, and service areas.</span>
    <span data-lang="uk">Натисніть картку, щоб відкрити деталі, контакти та зони обслуговування.</span>
  </p>
</section>

<div id="local-services-board" class="local-services-page">
  <section class="section local-services-filters" aria-label="Filter specialists">
    <form class="local-services-form" onsubmit="return false;">
      <div class="local-services-field">
        <label for="local-services-keywords">
          <span data-lang="en">Keywords</span>
          <span data-lang="uk">Ключові слова</span>
        </label>
        <input
          type="search"
          id="local-services-keywords"
          class="local-services-input"
          autocomplete="off"
          placeholder=""
        >
      </div>
      <div class="local-services-field">
        <label for="local-services-location">
          <span data-lang="en">Location</span>
          <span data-lang="uk">Місцезнаходження</span>
        </label>
        <select id="local-services-location" class="local-services-select" aria-label="Filter by location">
          <option value="">All</option>
        </select>
      </div>
      <div class="local-services-field">
        <label for="local-services-service">
          <span data-lang="en">Service</span>
          <span data-lang="uk">Послуга</span>
        </label>
        <select id="local-services-service" class="local-services-select" aria-label="Filter by service">
          <option value="">All</option>
        </select>
      </div>
    </form>
    <p class="local-services-count muted" id="local-services-count" role="status" aria-live="polite"></p>
  </section>

  <section class="section local-services-list">
    {% if site.data.local_specialists and site.data.local_specialists.size > 0 %}
    <div class="specialist-list">
      {% for specialist in site.data.local_specialists %}
        {% include specialist-card.html specialist=specialist %}
      {% endfor %}
    </div>
    <p class="local-services-empty is-hidden" id="local-services-empty">
      <span data-lang="en">No specialists match your filters. Try different keywords or reset the filters.</span>
      <span data-lang="uk">Немає фахівців, що відповідають фільтрам. Спробуйте інші слова або скиньте фільтри.</span>
    </p>
    {% else %}
    <p class="muted">
      <span data-lang="en">No entries yet. Please check back soon.</span>
      <span data-lang="uk">Записів поки немає. Завітайте пізніше.</span>
    </p>
    {% endif %}
  </section>
</div>
