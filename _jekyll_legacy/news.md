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
      Live updates from our Facebook page — events, fundraisers, and community news.
    </span>
    <span data-lang="uk">
      Актуальні дописи з нашої сторінки Facebook — події, збори та новини громади.
    </span>
  </p>
</section>

<section class="section fb-feed-section">
  <p class="fb-feed-intro">
    <span data-lang="en">
      Posts below are loaded from
      <a href="{{ site.facebook_page_url | default: 'https://www.facebook.com/profile.php?id=61588431459687' }}" target="_blank" rel="noopener noreferrer">CANUG on Facebook</a>.
      Like and follow us there so you never miss an announcement.
    </span>
    <span data-lang="uk">
      Дописи нижче завантажуються з
      <a href="{{ site.facebook_page_url | default: 'https://www.facebook.com/profile.php?id=61588431459687' }}" target="_blank" rel="noopener noreferrer">CANUG у Facebook</a>.
      Поставте «лайк» і підпишіться, щоб не пропустити важливі оголошення.
    </span>
  </p>
  {% include facebook-page-feed.html height=720 %}
  <a class="cta fb-feed-cta" href="{{ site.facebook_page_url | default: 'https://www.facebook.com/profile.php?id=61588431459687' }}" target="_blank" rel="noopener noreferrer">
    <span data-lang="en">Open Facebook page</span>
    <span data-lang="uk">Відкрити сторінку Facebook</span>
  </a>
</section>
