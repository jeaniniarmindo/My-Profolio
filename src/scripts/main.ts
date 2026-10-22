// ---- Theme toggle (light / dark) ----
const root = document.documentElement;
document.querySelector('.theme-toggle')?.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = next;
  try { localStorage.setItem('theme', next); } catch {}
});

// ---- Mobile menu ----
const menuBtn = document.querySelector<HTMLButtonElement>('.menu-toggle')!;
const navLinks = document.querySelector<HTMLElement>('.nav-links')!;
const setMenu = (open: boolean) => {
  navLinks.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
};
menuBtn.addEventListener('click', () => setMenu(!navLinks.classList.contains('open')));
navLinks.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));

// ---- Scroll: progress bar, nav border, back-to-top ----
const progress = document.querySelector<HTMLElement>('.scroll-progress')!;
const nav = document.querySelector<HTMLElement>('.nav')!;
const toTop = document.querySelector<HTMLButtonElement>('.to-top')!;
let ticking = false;
const onScroll = () => {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - innerHeight;
  progress.style.width = `${max > 0 ? (y / max) * 100 : 0}%`;
  nav.classList.toggle('scrolled', y > 8);
  toTop.classList.toggle('show', y > innerHeight * 0.8);
  ticking = false;
};
addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
onScroll();
toTop.addEventListener('click', () => scrollTo({ top: 0 }));

// ---- Scrollspy ----
const links = [...navLinks.querySelectorAll<HTMLAnchorElement>('a')];
const spy = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      links.forEach((a) => a.classList.toggle('active', a.hash === `#${e.target.id}`));
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
links.forEach((a) => { const s = document.querySelector(a.hash); if (s) spy.observe(s); });

// ---- Count-up numbers ----
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
function countUp(el: HTMLElement) {
  const target = parseFloat(el.dataset.count!);
  const decimals = (el.dataset.count!.split('.')[1] || '').length;
  if (reduced) return;
  const start = performance.now();
  const dur = 1400;
  const step = (now: number) => {
    const t = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = (target * eased).toFixed(decimals);
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// ---- Reveal on scroll (+ triggers counters and bars) ----
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    const el = e.target as HTMLElement;
    el.classList.add('in');
    el.querySelectorAll<HTMLElement>('[data-count]').forEach(countUp);
    el.querySelectorAll('.lang-bar, .metric-bar').forEach((b) => b.classList.add('go'));
    io.unobserve(el);
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// ---- Copy email ----
document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((btn) => {
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy!);
      btn.classList.add('done');
      btn.setAttribute('aria-label', 'Copied!');
      setTimeout(() => { btn.classList.remove('done'); btn.setAttribute('aria-label', 'Copy email address'); }, 2000);
    } catch {}
  });
});

// ---- Current year ----
const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());

// ---- Light protection for the portrait (no right-click / drag on images) ----
document.addEventListener('contextmenu', (e) => {
  if ((e.target as HTMLElement).closest('img, picture')) e.preventDefault();
});
