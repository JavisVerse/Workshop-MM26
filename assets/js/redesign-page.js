const variantMeta = {
  v1: {
    bodyClass: "variant-cosmos",
    label: "V1",
    title: "V1 Orbit Night | JAV-CG @ ACM MM 2026",
    heroNote: "A deep-space conference identity built from the logo planet, orbit, audio, and film symbols.",
  },
  v2: {
    bodyClass: "variant-atlas",
    label: "V2",
    title: "V2 Atlas Light | JAV-CG @ ACM MM 2026",
    heroNote: "A bright editorial version for a polished academic workshop page.",
  },
  v3: {
    bodyClass: "variant-control",
    label: "V3",
    title: "V3 Mission Control | JAV-CG @ ACM MM 2026",
    heroNote: "A compact dashboard style for scanning dates, tracks, speakers, and program details.",
  },
  v4: {
    bodyClass: "variant-cinema",
    label: "V4",
    title: "V4 Cinema Wave | JAV-CG @ ACM MM 2026",
    heroNote: "A cinematic audio-video direction with film-strip rhythm and waveform accents.",
  },
};

const dates = [
  ["Workshop Paper Submission", "11 June 2026", "Official ACM MM 2026 workshop-paper deadline."],
  ["Author Notification", "30 July 2026", "Acceptance notification for workshop submissions."],
  ["Camera-Ready", "06 August 2026", "Final accepted material due under the ACM schedule."],
  ["Author Registration", "13 August 2026", "Registration deadline for accepted workshop contributions."],
  ["ACM Multimedia 2026", "10-14 November 2026", "Conference venue: Rio de Janeiro, Brazil."],
  ["Workshop Day", "Coming Soon", "Final agenda and exact workshop day will be updated after logistics are confirmed."],
];

const topics = [
  {
    title: "Audio-Visual Comprehension",
    items: [
      "Sound source localization and source separation",
      "Audio-visual event detection and localization",
      "Question answering, grounding, and scene reasoning",
      "Trustworthy and long-form audio-visual understanding",
    ],
  },
  {
    title: "Audio-Video Generation",
    items: [
      "Video-to-audio and text-to-audio-video synthesis",
      "Audio-driven video generation and talking heads",
      "Foley, spatial audio, multimodal editing, and music",
      "Controllable synchronized generation across modalities",
    ],
  },
  {
    title: "Unified AV Frameworks",
    items: [
      "Any-to-any multimodal generation involving audio and video",
      "Joint tokenization, alignment, and representation learning",
      "Unified encoder-decoder or MLLM architectures",
      "Benchmarks, datasets, metrics, safety, and evaluation",
    ],
  },
];

const schedule = {
  "Program Block 01": [
    ["Session TBD 01", "Duration TBD", "Speaker TBD", "Affiliation TBD"],
    ["Session TBD 02", "Duration TBD", "Speaker TBD", "Affiliation TBD"],
    ["Session TBD 03", "Duration TBD", "Speaker TBD", "Affiliation TBD"],
    ["Break TBD", "Duration TBD", "-", "-"],
    ["Session TBD 04", "Duration TBD", "Speaker TBD", "Affiliation TBD"],
    ["Session TBD 05", "Duration TBD", "Speaker TBD", "Affiliation TBD"],
  ],
  "Program Block 02": [
    ["Session TBD 06", "Duration TBD", "Speaker TBD", "Affiliation TBD"],
    ["Session TBD 07", "Duration TBD", "Speaker TBD", "Affiliation TBD"],
    ["Session TBD 08", "Duration TBD", "Speaker TBD", "Affiliation TBD"],
    ["Break TBD", "Duration TBD", "-", "-"],
    ["Session TBD 09", "Duration TBD", "Speaker TBD", "Affiliation TBD"],
    ["Session TBD 10", "Duration TBD", "Speaker TBD", "Affiliation TBD"],
  ],
};

const organizers = [
  ["You Qin", "National University of Singapore", "https://42xingxing.github.io/", "assets/images/organizers/you-qin.png"],
  ["Kai Liu", "Zhejiang University", "https://kail8.github.io/", ""],
  ["Shengqiong Wu", "University of Oxford", "https://sqwu.top/", "assets/images/organizers/shengqiong-wu-workshop.png", "organizer-avatar-shengqiong"],
  ["Wei Ji", "Nanjing University", "https://jiwei0523.github.io/", "assets/images/organizers/wei-ji.jpg"],
  ["Hao Fei", "University of Oxford", "http://haofei.vip/", "assets/images/organizers/hao-fei.jpg"],
  ["Liang Zheng", "Australian National University", "https://zheng-lab.cecs.anu.edu.au/", "assets/images/organizers/liang-zheng.jpg"],
  ["Roger Zimmermann", "National University of Singapore", "https://www.comp.nus.edu.sg/~rogerz/", "assets/images/organizers/roger-zimmermann.png"],
  ["Jiebo Luo", "University of Rochester", "https://www.cs.rochester.edu/u/jluo/", "assets/images/organizers/jiebo-luo.jpg"],
  ["Tat-Seng Chua", "National University of Singapore", "https://www.chuatatseng.com/", "assets/images/organizers/tat-seng-chua.jpg"],
];

const currentVariant = document.body.dataset.variant || "v1";
const current = variantMeta[currentVariant] || variantMeta.v1;
const isPreviewPage = /html_v[1-4]\.html$/.test(window.location.pathname);
document.body.classList.add(current.bodyClass);
document.title = isPreviewPage ? current.title : "JAV-CG @ ACM MM 2026";

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function renderDateCards() {
  return dates
    .map(
      ([title, date, note], index) => `
        <article class="date-card">
          <span class="index">0${index + 1}</span>
          <h3>${title}</h3>
          <strong>${date}</strong>
          <p>${note}</p>
        </article>`
    )
    .join("");
}

function renderTopics() {
  return topics
    .map(
      (topic) => `
        <article class="topic-card">
          <h3>${topic.title}</h3>
          <ul>
            ${topic.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>`
    )
    .join("");
}

function renderSpeakers() {
  return Array.from({ length: 6 }, (_, index) => index + 1)
    .map(
      (slot) => `
        <article class="speaker-card speaker-card-placeholder">
          <div class="speaker-identity">
            <div class="speaker-token" aria-hidden="true">TBD</div>
            <div>
              <h3>Speaker TBD ${String(slot).padStart(2, "0")}</h3>
              <p>Affiliation TBD</p>
            </div>
          </div>
          <div class="speaker-talk">
            <span>Title</span>
            <strong>Talk title TBD</strong>
          </div>
          <div class="speaker-detail-placeholder">
            <div class="speaker-detail-header">
              <strong>Abstract</strong>
              <span aria-hidden="true">TBD</span>
            </div>
            <p>Abstract TBD. Final keynote abstract will be added after speaker confirmation.</p>
          </div>
          <div class="speaker-detail-placeholder">
            <div class="speaker-detail-header">
              <strong>Speaker Bio</strong>
              <span aria-hidden="true">TBD</span>
            </div>
            <p>Speaker bio TBD. Official biography and portrait will be added after confirmation.</p>
          </div>
        </article>`
    )
    .join("");
}

function renderScheduleBlock(period, rows) {
  return `
    <article class="schedule-block">
      <div class="block-heading">
        <span class="section-kicker">${period}</span>
        <h3>Schedule details TBD</h3>
      </div>
      <table class="schedule-table">
        <thead>
          <tr>
            <th>Session</th>
            <th>Duration</th>
            <th>Speaker</th>
            <th>Affiliation</th>
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(
              ([session, duration, speaker, affiliation]) => `
                <tr>
                  <td data-label="Session"><strong>${session}</strong></td>
                  <td data-label="Duration">${duration}</td>
                  <td data-label="Speaker">${speaker}</td>
                  <td data-label="Affiliation">${affiliation}</td>
                </tr>`
            )
            .join("")}
        </tbody>
      </table>
    </article>`;
}

function renderOrganizers() {
  return organizers
    .map(([name, affiliation, link, image, imageClass = ""]) => {
      const avatar = image
        ? `<img class="organizer-avatar ${imageClass}" src="${image}" alt="${name}" loading="lazy" decoding="async">`
        : `<div class="organizer-avatar organizer-avatar-placeholder" aria-label="${name}">${initials(name)}</div>`;
      return `
        <article class="organizer-card">
          ${avatar}
          <h3>${name}</h3>
          <p>${affiliation}</p>
          <a href="${link}" target="_blank" rel="noopener noreferrer">Homepage</a>
        </article>`;
    })
    .join("");
}

function activeVersionLink(version) {
  const meta = variantMeta[version];
  const file = `html_${version}.html`;
  const activeClass = currentVariant === version ? "is-active" : "";
  return `<a class="${activeClass}" href="${file}">${meta.label}</a>`;
}

document.getElementById("site-root").innerHTML = `
  <div class="page-shell">
    <header class="site-header">
      <div class="container header-row">
        <a class="brand" href="#top" aria-label="JAV-CG home">
          <img src="./assets/images/JavisVerse.png" alt="JavisVerse logo" />
          <span>JAV-CG 2026</span>
        </a>
        <button class="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <nav class="nav-links" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#dates">Dates</a>
          <a href="#cfp">CFP</a>
          <a href="#speakers">Speakers</a>
          <a href="#schedule">Schedule</a>
          <a href="#organizers">Organizers</a>
          <a href="#contact">Contact</a>
        </nav>
        ${
          isPreviewPage
            ? `<nav class="version-links" aria-label="Design versions">
                ${["v1", "v2", "v3", "v4"].map(activeVersionLink).join("")}
              </nav>`
            : ""
        }
      </div>
    </header>

    <main id="top">
      <section class="hero">
        <div class="container hero-layout">
          <div class="hero-copy">
            <span class="section-kicker">ACM Multimedia 2026 Workshop</span>
            <h1>
              <span>JAV-CG</span>
              <small>The 1st International Workshop on Joint Audio-Video Comprehension and Generation</small>
            </h1>
            <p>
              A dedicated forum for the next wave of audio-video intelligence, spanning robust multimodal
              understanding, synchronized generation, and unified models that bridge perception and creation.
            </p>
            <div class="hero-actions">
              <a class="button primary" href="#cfp">Explore CFP</a>
              <a class="button secondary" href="https://2026.acmmm.org/" target="_blank" rel="noopener noreferrer">ACM MM 2026</a>
              <a class="button secondary" href="https://javisverse.github.io/" target="_blank" rel="noopener noreferrer">JavisVerse</a>
            </div>
          </div>
          <div class="hero-visual" aria-label="JAV-CG logo-inspired visual">
            <div class="orbit orbit-a"></div>
            <div class="orbit orbit-b"></div>
            <img src="./assets/images/JavisVerse.png" alt="JavisVerse logo" />
            <div class="signal signal-a">AUDIO</div>
            <div class="signal signal-b">VIDEO</div>
            <div class="signal signal-c">JOINT AI</div>
          </div>
        </div>
        <div class="container fact-strip">
          <article><span>Venue</span><strong>Rio de Janeiro, Brazil</strong></article>
          <article><span>Dates</span><strong>10-14 November 2026</strong></article>
          <article><span>Submission</span><strong>11 June 2026</strong></article>
          <article><span>Scope</span><strong>Comprehension, Generation, Unified AV</strong></article>
        </div>
      </section>

      <section class="section intro-section" id="about">
        <div class="container two-column">
          <div class="section-heading">
            <span class="section-kicker">About</span>
            <h2>Joint audio-video intelligence as one research problem.</h2>
          </div>
          <div class="prose">
            <p>
              Real-world multimedia is naturally audio-visual, yet many multimodal systems still treat sound as a side
              channel. JAV-CG focuses on models that listen, see, reason, and generate synchronized multimedia in one
              coherent framework.
            </p>
            <p>
              The workshop brings together multimedia, audio and speech, computer vision, and multimodal foundation-model
              communities to sharpen the research agenda for audio-video comprehension and generation.
            </p>
          </div>
        </div>
      </section>

      <section class="section" id="dates">
        <div class="container">
          <div class="section-heading">
            <span class="section-kicker">Important Dates</span>
            <h2>Submission timeline and event milestones.</h2>
          </div>
          <div class="date-grid">${renderDateCards()}</div>
        </div>
      </section>

      <section class="section" id="cfp">
        <div class="container cfp-layout">
          <div class="submission-panel">
            <span class="section-kicker">Call for Papers</span>
            <h2>Welcomes submissions across understanding, generation, and unified AV modeling.</h2>
            <p>
              Submissions may be technical papers, position or perspective papers, and featured papers aligned with
              joint audio-video comprehension and generation. The current proposal specifies up to 8 pages plus references.
            </p>
            <div class="chip-row">
              <span>ACM format</span>
              <span>Double blind</span>
              <span>English only</span>
              <span>8 pages + references</span>
            </div>
          </div>
          <div class="topic-grid">${renderTopics()}</div>
        </div>
      </section>

      <section class="section" id="speakers">
        <div class="container">
          <div class="section-heading">
            <span class="section-kicker">Keynote Speakers</span>
            <h2>Keynote speaker details are placeholders.</h2>
          </div>
          <div class="speaker-grid">${renderSpeakers()}</div>
        </div>
      </section>

      <section class="section" id="schedule">
        <div class="container">
          <div class="section-heading">
            <span class="section-kicker">Tentative Schedule</span>
            <h2>Program schedule is TBD.</h2>
          </div>
          <div class="schedule-grid">
            ${Object.entries(schedule).map(([period, rows]) => renderScheduleBlock(period, rows)).join("")}
          </div>
        </div>
      </section>

      <section class="section" id="organizers">
        <div class="container">
          <div class="section-heading">
            <span class="section-kicker">Organizers</span>
            <h2>An international team across multimedia, AV learning, and foundation models.</h2>
          </div>
          <div class="organizer-grid">${renderOrganizers()}</div>
        </div>
      </section>

      <section class="section contact-section" id="contact">
        <div class="container contact-layout">
          <div>
            <span class="section-kicker">Contact</span>
            <h2>Workshop correspondence</h2>
          </div>
          <ul class="contact-list">
            <li><a href="https://42xingxing.github.io/" target="_blank" rel="noopener noreferrer">You Qin</a> <span>qinyou@u.nus.edu</span></li>
            <li><a href="https://kail8.github.io/" target="_blank" rel="noopener noreferrer">Kai Liu</a> <span>kail@zju.edu.cn</span></li>
            <li><a href="http://haofei.vip/" target="_blank" rel="noopener noreferrer">Hao Fei</a> <span>haofei7419@gmail.com</span></li>
          </ul>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container">
        <span>© Copyright JAV-CG Workshop 2026 @ ACM MM 2026 | All Rights Reserved</span>
      </div>
    </footer>
  </div>
`;

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const pageLinks = Array.from(document.querySelectorAll(".nav-links a"));
const sections = pageLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    navLinks.classList.toggle("is-open");
  });

  pageLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = `#${entry.target.id}`;
        pageLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === id);
        });
      });
    },
    {
      rootMargin: "-30% 0px -55% 0px",
      threshold: 0.01,
    }
  );

  sections.forEach((section) => observer.observe(section));
}
