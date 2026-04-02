---
layout: default
title: News
---

<section class="hero">
  <h1>
    <span data-lang="en">News</span>
    <span data-lang="uk">Новини</span>
  </h1>
  <p class="muted">
    <span data-lang="en">
      Updates from our community, events, and support initiatives.
    </span>
    <span data-lang="uk">
      Оновлення від нашої громади, подій та ініціатив підтримки.
    </span>
  </p>
</section>

<section class="section">
  <h2>
    <span data-lang="en">Latest</span>
    <span data-lang="uk">Останні</span>
  </h2>
  {% assign items = site.news | sort: 'date' | reverse %}
  {% for item in items limit: 10 %}
    {% include news-list-card.html item=item %}
  {% endfor %}
</section>
