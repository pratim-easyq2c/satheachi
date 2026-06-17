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
      yearlyCouple: 72000, // base annual couple rate before 5% → ₹68,400/yr
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
      yearlyCouple: 192000, // base annual couple rate before 5% → ₹1,82,400/yr
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

const ARTICLES = [
  {
    url: 'https://www.etvbharat.com/bn/!state/the-aged-purchase-companionship-and-friends-west-bengal-news-wbs24100106696',
    title: 'বন্ধু হবে কি আমার... অপেক্ষায় তপন-সংঘমিত্রার মতো প্রবীণরা',
    desc: 'টাকা দিয়ে তাঁরা কিনছেন আড্ডা মারার সাথী। বন্ধুত্বের হাত বাড়িয়ে দিচ্ছে \'সাথে আছি\' নামের সংস্থা।',
    img: 'https://imgs.etvbharat.com/etvbharat/prod-images/02-10-2024/1200-675-22584262-thumbnail-16x9-aaaa-new.jpg',
    source: 'ETV Bharat',
    domain: 'etvbharat.com',
    video: false,
  },
  {
    url: 'https://www.dw.com/bn/%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%AC%E0%A7%80%E0%A6%A3%E0%A6%A6%E0%A7%87%E0%A6%B0-%E0%A6%B8%E0%A6%B9%E0%A6%BE%E0%A7%9F%E0%A6%A4%E0%A6%BE%E0%A7%9F-%E0%A6%B8%E0%A6%BE%E0%A6%A5%E0%A7%87-%E0%A6%86%E0%A6%9B%E0%A6%BF/video-44584029',
    title: 'প্রবীণদের সহায়তায় \'সাথে আছি\'',
    desc: 'পশ্চিমবঙ্গের দুই ব্যক্তি নিজেদের নিশ্চিত উপার্জন ছেড়ে প্রবীণদের সহায়তায় গড়ে তুলেছেন একটি সংস্থা।',
    img: 'https://static.dw.com/image/44221998_6.jpg',
    source: 'Deutsche Welle',
    domain: 'dw.com',
    video: true,
  },
  {
    url: 'https://youtu.be/Gf5CT7ZGJoo',
    title: 'প্রবীণদের আনন্দ',
    desc: 'সাথে আছি-র সাথে প্রবীণদের আনন্দের মুহূর্ত — ভিডিওতে দেখুন।',
    img: 'https://i.ytimg.com/vi/Gf5CT7ZGJoo/maxresdefault.jpg',
    source: 'YouTube',
    domain: 'youtube.com',
    video: true,
  },
];

let billing = 'monthly';

function formatINR(n) {
  return n.toLocaleString('en-IN');
}

/** Yearly billing matches satheachi.co.in: 5% off monthly rate (single), 5% off yearly lump (couple). */
function getYearlyPrices(pr) {
  const singlePerMonth = Math.round(pr.monthlySingle * 0.95);
  const singleAnnual = singlePerMonth * 12;
  const couplePerMonth = pr.yearlyCouple
    ? Math.round(pr.yearlyCouple * 0.95 / 12)
    : Math.round(pr.monthlyCouple * 0.95);
  const coupleAnnual = couplePerMonth * 12;
  return { singlePerMonth, singleAnnual, couplePerMonth, coupleAnnual };
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
      const y = getYearlyPrices(pr);
      priceHtml = `
        <span class="price__amount">₹${formatINR(y.singlePerMonth)}</span><span class="price__period">/ month</span>
        <p class="price__annual">₹${formatINR(y.singleAnnual)} billed yearly <span class="price__save">5% off</span></p>
        <p class="price__couple">Couple: ₹${formatINR(y.couplePerMonth)}/mo (₹${formatINR(y.coupleAnnual)}/yr)</p>`;
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

function renderNews() {
  const grid = document.getElementById('news-grid');
  if (!grid) return;
  grid.innerHTML = ARTICLES.map((a) => `
    <a href="${a.url}" class="news-card ${a.video ? 'news-card--video' : ''}" target="_blank" rel="noopener">
      <div class="news-card__media">
        <img src="${a.img}" alt="" loading="lazy" />
        ${a.video ? '<span class="news-card__play" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span>' : ''}
      </div>
      <div class="news-card__body">
        <p class="news-card__source">${a.source}</p>
        <h3 lang="bn">${a.title}</h3>
        <p lang="bn">${a.desc}</p>
        <span class="news-card__link">${a.domain} ↗</span>
      </div>
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

function initGallery() {
  const scroll = document.getElementById('gallery-scroll');
  if (!scroll) return;
  const imgs = [
    { src: 'gallery-1.jpg', alt: 'Sathe Achi caregivers with seniors' },
    { src: 'gallery-2.jpg', alt: 'Elder companionship at home' },
    { src: 'gallery-3.jpg', alt: 'Senior activities and outings' },
    { src: 'gallery-4.jpg', alt: 'Community care moments' },
    { src: 'gallery-5.jpg', alt: 'Wellness and support' },
    { src: 'activities-3.jpg', alt: 'Group activities' },
    { src: 'companionship-new.jpg', alt: 'Companionship visit' },
    { src: 'doctor-consultation-2.jpeg', alt: 'Doctor consultation at home' },
  ];
  const slide = imgs.map((i) =>
    `<img src="resources/${i.src}" alt="${i.alt}" loading="lazy" />`
  ).join('');
  scroll.innerHTML = slide + slide;
}

const CARE_FEED = [
  { title: 'Doctor visit complete', meta: 'Report sent · 6:42 PM Kolkata' },
  { title: 'Bazaar run done', meta: 'Fresh fish & vegetables delivered' },
  { title: 'Evening adda', meta: '45 min companionship walk' },
  { title: 'BP check normal', meta: 'Logged to family WhatsApp' },
  { title: 'Medicine refilled', meta: 'Apollo Pharmacy · receipt attached' },
];

function initCareFeed() {
  const list = document.getElementById('care-feed-list');
  if (!list) return;

  const defaults = CARE_FEED.slice(0, 3);
  list.innerHTML = defaults.map((item, i) => `
    <li class="care-feed__item${i === 0 ? ' is-live' : ''}">
      <span class="care-feed__dot" aria-hidden="true"></span>
      <div><strong>${item.title}</strong><small>${item.meta}</small></div>
    </li>
  `).join('');

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const items = list.querySelectorAll('.care-feed__item');
  let feedIdx = 0;
  setInterval(() => {
    items.forEach((el) => el.classList.remove('is-live'));
    feedIdx = (feedIdx + 1) % CARE_FEED.length;
    const slot = feedIdx % items.length;
    const feed = CARE_FEED[feedIdx];
    const item = items[slot];
    item.querySelector('strong').textContent = feed.title;
    item.querySelector('small').textContent = feed.meta;
    item.classList.add('is-live');
  }, 4500);
}

document.addEventListener('DOMContentLoaded', () => {
  renderPlans();
  renderServices();
  renderNews();
  initHeader();
  initReveal();
  initHeroSlides();
  initGallery();
  initCareFeed();
  document.querySelectorAll('[data-billing]').forEach((btn) => {
    btn.addEventListener('click', () => setBilling(btn.dataset.billing));
  });
});
