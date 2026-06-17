/**
 * Sathe Achi — showcase site
 * Custom UI (not a clone of satheachi.co.in)
 */

const PLANS = [
  {
    id: 'regular',
    name: 'Regular Care',
    bengali: 'Samparka — সম্পর্ক',
    desc: 'Moderate support for independent seniors who need a trusted safety net.',
    popular: true,
    pricing: {
      monthlySingle: 5000,
      monthlyCouple: 7000,
      yearlySingle: 60000,
      yearlyCouple: 72000,
      deposit: '₹30,000 single · ₹50,000 couple',
    },
    highlights: ['2 companion visits / month', '24/7 hospitalisation', 'Weekly bazar & banking'],
    features: [
      'Monthly 2 phone calls & 2 companionship visits',
      'Monthly 2 vital check-ups (BP, sugar, weight)',
      '24/7 hospitalisation + ambulance & care manager',
      'Doctor on call · teleconsult for family abroad',
      'Weekly bazar · monthly groceries · banking help',
      'Lab assistance · medicine procurement',
      'Social activities · online wellness sessions',
    ],
  },
  {
    id: 'complete',
    name: 'Complete Care',
    bengali: 'Bhorsa — ভরসা',
    desc: 'Intensive daily support when parents need someone truly present.',
    popular: false,
    pricing: {
      monthlySingle: 13000,
      monthlyCouple: 16000,
      yearlySingle: 156000,
      yearlyCouple: 192000,
      deposit: '₹40,000 single · ₹60,000 couple',
    },
    highlights: ['14 visits / month', '₹1,000 lab wallet credit', 'No holiday surcharges'],
    features: [
      'Monthly 8 calls & 14 visits (8 companion + 6 technical)',
      'Monthly 8 vital check-ups',
      '1 complimentary doctor-on-call / month',
      '₹1,000/mo lab test credit in Sathe Achi wallet',
      'No extra charges on Sundays & holidays',
      '50% discount on all service charges',
      'Day trips · birthday celebrations · vendor coordination',
      'Everything in Regular Care, plus intensive presence',
    ],
  },
  {
    id: 'short',
    name: 'Short Term Care',
    bengali: 'Nirbhar — নির্ভর',
    desc: '7–15 days when family travels, or during post-hospital recovery.',
    popular: false,
    daily: true,
    pricing: {
      daily: 1000,
      deposit: 'No deposit · one-time payment',
    },
    highlights: ['Daily visits & calls', 'Full plan coverage', 'Ideal for NRIs on travel'],
    features: [
      'Daily phone calls during the plan',
      'Daily in-person visits',
      'Full service access for the period',
      '24/7 hospitalisation support included',
    ],
  },
];

const SERVICES = [
  { title: 'Emergency Hospitalization', img: 'emergency-v3.jpg', tag: 'All plans', desc: 'Ambulance, admission, bedside support until family arrives.' },
  { title: 'Doctor Consultation', img: 'doctor-consultation-v2.jpg', tag: 'Teleconsult', desc: 'Home visits + virtual consults for children abroad.' },
  { title: 'Lab Tests', img: 'pathological-v2.jpg', tag: '', desc: 'Home sample collection, reports to you digitally.' },
  { title: 'Companionship', img: 'companionship-new.jpg', tag: '', desc: 'Adda, walks, reading — fighting loneliness with warmth.' },
  { title: 'Banking & Paperwork', img: 'banking-new.jpg', tag: '', desc: 'Bills, pension, KMC tax, government documents.' },
  { title: 'Medication Management', img: 'medication-v2.jpg', tag: 'New', desc: 'Pharmacy coordination and prescription tracking.' },
  { title: 'Weekly Bazaar', img: 'weekly-bazaar-v2.jpg', tag: '', desc: 'Groceries, fish from market, household supplies.' },
  { title: 'Activities & Wellness', img: 'activities-new.jpg', tag: '', desc: 'Picnics, cultural programs, group outings.' },
];

const PRESS = [
  { title: 'ETV Bharat', img: 'https://imgs.etvbharat.com/etvbharat/prod-images/02-10-2024/1200-675-22584262-thumbnail-16x9-aaaa-new.jpg', url: 'https://www.etvbharat.com/bn/!state/the-aged-purchase-companionship-and-friends-west-bengal-news-wbs24100106696', label: 'বন্ধু হবে কি আমার...' },
  { title: 'Deutsche Welle', img: 'https://static.dw.com/image/44221998_6.jpg', url: 'https://www.dw.com/bn/', label: "প্রবীণদের সহায়তায় 'সাথে আছি'" },
  { title: 'YouTube', img: 'https://i.ytimg.com/vi/Gf5CT7ZGJoo/maxresdefault.jpg', url: 'https://youtu.be/Gf5CT7ZGJoo', label: 'প্রবীণদের আনন্দ' },
];

let billing = 'monthly';

function formatINR(n) {
  return n.toLocaleString('en-IN');
}

function renderPlans() {
  const grid = document.getElementById('pricing-grid');
  if (!grid) return;

  grid.innerHTML = PLANS.map((p) => {
    const pr = p.pricing;
    let priceHtml;
    if (p.daily) {
      priceHtml = `<span class="price__amount">₹${formatINR(pr.daily)}</span><span class="price__period">/ day · 7–15 days</span>`;
    } else if (billing === 'yearly') {
      const perMo = Math.round(pr.yearlySingle / 12);
      priceHtml = `
        <span class="price__amount">₹${formatINR(perMo)}</span><span class="price__period">/ month</span>
        <p class="price__annual">₹${formatINR(pr.yearlySingle)} billed yearly <span class="price__save">5% off</span></p>
        <p class="price__couple">Couple: ₹${formatINR(Math.round(pr.yearlyCouple / 12))}/mo (₹${formatINR(pr.yearlyCouple)}/yr)</p>`;
    } else {
      priceHtml = `
        <span class="price__amount">₹${formatINR(pr.monthlySingle)}</span><span class="price__period">/ month</span>
        <p class="price__couple">Couple: ₹${formatINR(pr.monthlyCouple)}/month</p>`;
    }

    const feats = p.features.map((f) => `<li>${f}</li>`).join('');
    const highlights = p.highlights.map((h) => `<span>${h}</span>`).join('');

    return `
      <article class="price-card ${p.popular ? 'price-card--featured' : ''}" data-plan="${p.id}">
        ${p.popular ? '<span class="price-card__badge">Most chosen</span>' : ''}
        <header class="price-card__head">
          <p class="price-card__bn">${p.bengali}</p>
          <h3>${p.name}</h3>
          <p class="price-card__desc">${p.desc}</p>
        </header>
        <div class="price-card__price">${priceHtml}</div>
        <p class="price-card__deposit">Deposit: ${pr.deposit}</p>
        <div class="price-card__highlights">${highlights}</div>
        <ul class="price-card__features">${feats}</ul>
        <a href="https://wa.me/917044063399?text=${encodeURIComponent('Hi Sathe Achi, I am interested in ' + p.name)}" class="btn ${p.popular ? 'btn--primary' : 'btn--outline'} btn--block" target="_blank" rel="noopener">Enquire on WhatsApp</a>
      </article>`;
  }).join('');
}

function renderServices() {
  const grid = document.getElementById('services-bento');
  if (!grid) return;
  grid.innerHTML = SERVICES.map((s, i) => `
    <article class="bento-item ${i === 0 ? 'bento-item--hero' : ''}">
      <img src="resources/${s.img}" alt="${s.title}" loading="lazy" />
      <div class="bento-item__body">
        ${s.tag ? `<span class="bento-item__tag">${s.tag}</span>` : ''}
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
      </div>
    </article>
  `).join('');
}

function renderPress() {
  const row = document.getElementById('press-row');
  if (!row) return;
  row.innerHTML = PRESS.map((p) => `
    <a href="${p.url}" class="press-card" target="_blank" rel="noopener">
      <img src="${p.img}" alt="${p.title}" loading="lazy" />
      <div><strong>${p.title}</strong><span>${p.label}</span></div>
    </a>
  `).join('');
}

function setBilling(mode) {
  billing = mode;
  document.querySelectorAll('[data-billing]').forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.billing === mode);
  });
  renderPlans();
}

function initHeader() {
  const header = document.getElementById('header');
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => header.classList.toggle('is-scrolled', window.scrollY > 24), { passive: true });
  toggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open);
  });
  nav?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => nav.classList.remove('is-open')));
}

function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const obs = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); } }),
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  els.forEach((el) => obs.observe(el));
}

function initHeroSlides() {
  const slides = document.querySelectorAll('.hero__slide');
  if (slides.length < 2) return;
  let i = 0;
  setInterval(() => {
    slides[i].classList.remove('is-active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('is-active');
  }, 5000);
}

function initGalleryMarquee() {
  const track = document.getElementById('gallery-track');
  if (!track) return;
  const imgs = [
    'gallery-1.jpg', 'gallery-2.jpg', 'gallery-3.jpg', 'gallery-4.jpg', 'gallery-5.jpg',
    'activities-2.jpg', 'companionship-2.jpg', 'doctor-consultation-2.jpeg', 'activities-3.jpg',
  ];
  const html = [...imgs, ...imgs].map((f) => `<img src="resources/${f}" alt="" loading="lazy" />`).join('');
  track.innerHTML = html;
}

const CARE_FEED = [
  { title: 'Doctor visit complete', meta: 'Report sent · 6:42 PM Kolkata' },
  { title: 'Bazaar run done', meta: 'Fresh fish & vegetables delivered' },
  { title: 'Evening adda', meta: '45 min companionship walk' },
  { title: 'BP check normal', meta: 'Logged to family WhatsApp' },
  { title: 'Medicine refilled', meta: 'Apollo Pharmacy · receipt attached' },
];

function initCareFeed() {
  const card = document.querySelector('.care-card');
  if (!card || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const items = card.querySelectorAll('.care-card__item');
  if (!items.length) return;
  let idx = 0;
  setInterval(() => {
    items.forEach((el) => el.classList.remove('is-live'));
    const item = items[idx % items.length];
    const feed = CARE_FEED[idx % CARE_FEED.length];
    item.querySelector('strong').textContent = feed.title;
    item.querySelector('small').textContent = feed.meta;
    item.classList.add('is-live');
    idx = (idx + 1) % items.length;
  }, 4200);
}

document.addEventListener('DOMContentLoaded', () => {
  renderPlans();
  renderServices();
  renderPress();
  initHeader();
  initReveal();
  initHeroSlides();
  initGalleryMarquee();
  initCareFeed();
  document.querySelectorAll('[data-billing]').forEach((btn) => {
    btn.addEventListener('click', () => setBilling(btn.dataset.billing));
  });
});
