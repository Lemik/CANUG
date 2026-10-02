type Dated = { data: { date: Date } };
type ProjectLike = {
  data: {
    status: 'active' | 'completed';
    featured?: boolean;
  };
};

export function sortByDateDesc<T extends Dated>(entries: T[]): T[] {
  return [...entries].sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function upcomingEvents<T extends Dated>(events: T[], now = new Date()) {
  return sortByDateDesc(events.filter((e) => e.data.date >= startOfDay(now))).reverse();
}

export function pastEvents<T extends Dated>(events: T[], now = new Date()) {
  return sortByDateDesc(events.filter((e) => e.data.date < startOfDay(now)));
}

export function activeProjects<T extends ProjectLike>(projects: T[]) {
  return projects.filter((p) => p.data.status === 'active');
}

export function featuredProject<T extends ProjectLike>(projects: T[]) {
  return (
    projects.find((p) => p.data.featured && p.data.status === 'active') ??
    activeProjects(projects)[0]
  );
}

export function progressPercent(raised?: number, goal?: number) {
  if (raised == null || goal == null || goal <= 0) return 0;
  return Math.min(100, Math.round((raised / goal) * 100));
}

function startOfDay(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

export function formatMoney(amount: number, currency = 'CAD') {
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(date: Date, locale: 'en' | 'uk' = 'en') {
  return new Intl.DateTimeFormat(locale === 'uk' ? 'uk-UA' : 'en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}
