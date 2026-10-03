export const site = {
  title: 'Canadian Association of the New Ukrainian Generation',
  shortName: 'CANUG',
  description:
    'A non-profit organization in Canada supporting the Ukrainian community through social, educational, and cultural initiatives.',
  descriptionUk:
    'Неприбуткова організація в Канаді, що підтримує українську громаду через соціальні, освітні та культурні ініціативи.',
  email: 'canug.org@gmail.com',
  facebookPageUrl: 'https://www.facebook.com/profile.php?id=61588431459687',
  /**
   * Stripe Payment Link from the Stripe Dashboard (Payment Links).
   * Replace this placeholder with your live link before promoting donate CTAs.
   */
  stripePaymentLink: 'https://buy.stripe.com/test_REPLACE_WITH_YOUR_PAYMENT_LINK',
  incorporationNumber: 'S0082571',
  locationEn: 'Nanaimo, British Columbia, Canada',
  locationUk: 'Нанаймо, Британська Колумбія, Канада',
};

export const navItems = [
  { href: '/about/', en: 'About', uk: 'Про нас' },
  { href: '/events/', en: 'Events', uk: 'Події' },
  { href: '/news/', en: 'News', uk: 'Новини' },
  { href: '/projects/', en: 'Projects', uk: 'Проєкти' },
  { href: '/donate/', en: 'Donate', uk: 'Підтримати' },
  { href: '/contact/', en: 'Contact', uk: 'Контакти' },
] as const;
