// 1. Top Gold Hairline Scroll Progress Bar
const scrollProgress = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (scrollProgress) scrollProgress.style.width = `${progress}%`;
});

// 2. Smooth Dark / Light Mode Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const iconSun = document.getElementById('icon-sun');
const iconMoon = document.getElementById('icon-moon');

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('theme-light');
        const isLight = document.body.classList.contains('theme-light');
        if (isLight) {
            iconSun.classList.add('hidden');
            iconMoon.classList.remove('hidden');
        } else {
            iconSun.classList.remove('hidden');
            iconMoon.classList.add('hidden');
        }
    });
}

// 3. Custom Champagne Gold Cursor Ring + Center Precision Dot
const cursorRing = document.getElementById('custom-cursor-ring');
const cursorDot = document.getElementById('custom-cursor-dot');
const cursorGlow = document.getElementById('cursor-glow');

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let ringX = mouseX;
let ringY = mouseY;

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    if (cursorDot) {
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
    }
    if (cursorGlow) {
        cursorGlow.style.left = `${mouseX}px`;
        cursorGlow.style.top = `${mouseY}px`;
    }
});

function animateCursorRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    if (cursorRing) {
        cursorRing.style.left = `${ringX}px`;
        cursorRing.style.top = `${ringY}px`;
    }
    requestAnimationFrame(animateCursorRing);
}
animateCursorRing();

document.querySelectorAll('.interactive-target, a, button, input, select, textarea').forEach(el => {
    el.addEventListener('mouseenter', () => cursorRing && cursorRing.classList.add('cursor-active'));
    el.addEventListener('mouseleave', () => cursorRing && cursorRing.classList.remove('cursor-active'));
});

// 4. Mouse-Tracking Radial Spotlight & Subtle 3D Perspective Card Tilt
document.querySelectorAll('.velvet-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);

        if (card.classList.contains('tilt-card')) {
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -3;
            const rotateY = ((x - centerX) / centerX) * 3;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        }
    });

    card.addEventListener('mouseleave', () => {
        if (card.classList.contains('tilt-card')) {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        }
    });
});

// 5. Magnetic Pull on Primary Executive Buttons
document.querySelectorAll('.magnetic-btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.2}px, ${y * 0.25}px)`;
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate(0px, 0px)';
    });
});

// 6. Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
}

// 7. Divisions Matrix Interactive Filter
document.querySelectorAll('.division-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.division-filter-btn').forEach(b => {
            b.classList.remove('bg-velvet-600', 'text-white', 'border-gold-hairline/60', 'shadow-lg');
            b.classList.add('bg-velvet-900/80', 'text-lavender-soft', 'border-velvet-700');
        });
        btn.classList.add('bg-velvet-600', 'text-white', 'border-gold-hairline/60', 'shadow-lg');
        btn.classList.remove('bg-velvet-900/80', 'text-lavender-soft', 'border-velvet-700');

        const filter = btn.dataset.filter;
        document.querySelectorAll('.division-card').forEach(card => {
            if (filter === 'all' || card.dataset.division === filter) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// 8. Interactive 4-Phase VELA Masterplan Roadmap
const phaseDetails = [
    {
        tag: 'PHASE 01 SPECIFICATION // INSTITUTIONAL BLUEPRINT',
        title: 'Discovery, Architecture & Institutional Audit',
        desc: 'Before a single line of production code is written, VELA Principal Architects conduct an exhaustive audit of your operational workflows, data silos, and security posture—producing a deterministic technical blueprint with crystal-clear milestones and ROI projections.',
        outputs: [
            'Complete System Architecture & Database Schema',
            'Zero-Trust Cybersecurity & Compliance Matrix',
            'Fixed Milestone Roadmap & Resource Allocation'
        ]
    },
    {
        tag: 'PHASE 02 SPECIFICATION // SOVEREIGN ENGINEERING',
        title: 'Sovereign Engineering & Core Development',
        desc: 'Our engineering pods construct your bespoke web platform, custom ERP/CRM core, and resilient multi-region cloud infrastructure using modular, high-performance frameworks built for rapid scaling and zero technical debt.',
        outputs: [
            'Production-Grade Web Platform & Custom ERP/CRM Core',
            'High-Security API Mesh & Automated CI/CD Pipelines',
            'Full Source Code & Intellectual Property Handover'
        ]
    },
    {
        tag: 'PHASE 03 SPECIFICATION // INTELLIGENCE LAYER',
        title: 'AI Integration & Data Intelligence Layer',
        desc: 'We embed sovereign artificial intelligence directly into your operations—automating repetitive workflows, unifying big data pipelines, and equipping leadership with real-time executive Business Intelligence dashboards.',
        outputs: [
            'Private AI Models & Intelligent Workflow Automation',
            'Unified Data Warehouse & Predictive Analytics Engine',
            'Real-Time Executive KPI & Decision Dashboards'
        ]
    },
    {
        tag: 'PHASE 04 SPECIFICATION // STEWARDSHIP & R&D',
        title: 'Deployment, Governance & Continuous Innovation',
        desc: 'Following zero-downtime global launch, VELA provides continuous 24/7 enterprise IT stewardship, proactive threat defense, and ongoing R&D partnership through VELA Labs to keep your organization ahead of market shifts.',
        outputs: [
            '99.99% Uptime SLA & 24/7 Security Telemetry',
            'Continuous Performance Optimization & Feature Scaling',
            'Dedicated VELA Labs Innovation & Product Advisory'
        ]
    }
];

document.querySelectorAll('.phase-card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.phase-card').forEach(c => {
            c.classList.remove('border-gold-hairline', 'shadow-xl');
        });
        card.classList.add('border-gold-hairline', 'shadow-xl');

        const idx = parseInt(card.dataset.phase, 10);
        const data = phaseDetails[idx];
        if (data) {
            document.getElementById('phase-detail-tag').textContent = data.tag;
            document.getElementById('phase-detail-title').textContent = data.title;
            document.getElementById('phase-detail-desc').textContent = data.desc;
            document.getElementById('phase-detail-outputs').innerHTML = data.outputs
                .map(item => `<li class="flex items-center gap-2.5"><span class="theme-gold">✓</span> ${item}</li>`)
                .join('');
        }
    });
});

// 8.5 Our Ethos Interactive Reflections Switcher (Bilingual AR/EN)
let currentSiteLang = 'en';
let currentReflectionIdx = 0;

const ethosReflections = {
    en: [
        {
            quote: '“Excellence does not need to shout. When architecture is built with patience, discipline, and care, its strength speaks for decades.”',
            caption: 'PRINCIPLE 01 // QUIET MASTERY'
        },
        {
            quote: '“We never treat a client’s ambition as a ticket number. When you entrust your vision to VELA, we carry it with the same devotion as our own.”',
            caption: 'PRINCIPLE 02 // SHARED STEWARDSHIP'
        },
        {
            quote: '“True innovation is measured by the doors it opens for those who come after us—leaving institutions stronger, freer, and more human.”',
            caption: 'PRINCIPLE 03 // GENERATIONAL IMPACT'
        }
    ],
    ar: [
        {
            quote: '«الإتقان الحقيقي لا يحتاج إلى ضجيج؛ فحين يُبنى الأساس بالصبر والانضباط والعناية، تتحدث صلابته لعقود طويلة.»',
            caption: 'المبدأ الأول // هدوء الإتقان'
        },
        {
            quote: '«نحن لا نتعامل مع طموح الشريك كمجرد مشروع عابر؛ فحين تأتمننا على رؤيتك، نحملها بذات الشغف والمسؤولية التي نحمل بها اسم VELA.»',
            caption: 'المبدأ الثاني // قدسية الشراكة'
        },
        {
            quote: '«يقاس الابتكار الأصيل بما يفتحه من آفاق لمن يأتون بعدنا؛ بأن نترك المؤسسات أقوى، وأكثر استقلالية، وأقرب للإنسان.»',
            caption: 'المبدأ الثالث // الأثر المستدام'
        }
    ]
};

function renderEthosReflection(idx) {
    currentReflectionIdx = idx;
    const list = ethosReflections[currentSiteLang] || ethosReflections.en;
    const item = list[idx] || list[0];
    const quoteEl = document.getElementById('ethos-reflection-quote');
    const captionEl = document.getElementById('ethos-reflection-caption');
    if (quoteEl) quoteEl.textContent = item.quote;
    if (captionEl) captionEl.textContent = item.caption;
}

document.querySelectorAll('.ethos-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.ethos-tab').forEach(t => {
            t.classList.remove('bg-velvet-600', 'text-white', 'border-gold-hairline/60', 'font-bold');
            t.classList.add('bg-velvet-900/80', 'text-lavender-soft', 'border-velvet-700', 'font-semibold');
        });
        tab.classList.add('bg-velvet-600', 'text-white', 'border-gold-hairline/60', 'font-bold');
        tab.classList.remove('bg-velvet-900/80', 'text-lavender-soft', 'border-velvet-700', 'font-semibold');

        const idx = parseInt(tab.dataset.reflection, 10);
        renderEthosReflection(idx);
    });
});

// 9. Interactive Sovereign Architecture & Scope Configurator
let selectedOrg = 'Startup / High-Growth Venture';
const selectedModules = new Set(['Web & Enterprise Systems (ERP/CRM)']);

const orgDisplayEl = document.getElementById('selected-org-display');
const configListEl = document.getElementById('configured-modules-list');
const configCountEl = document.getElementById('config-count');
const configTimelineEl = document.getElementById('config-timeline');

document.querySelectorAll('.org-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.org-btn').forEach(b => {
            b.classList.remove('bg-velvet-600', 'text-white', 'border-gold-hairline/60', 'shadow-lg');
            b.classList.add('bg-velvet-900/80', 'text-lavender-soft', 'border-velvet-700');
        });
        btn.classList.add('bg-velvet-600', 'text-white', 'border-gold-hairline/60', 'shadow-lg');
        btn.classList.remove('bg-velvet-900/80', 'text-lavender-soft', 'border-velvet-700');

        selectedOrg = btn.dataset.org;
        if (orgDisplayEl) orgDisplayEl.textContent = selectedOrg;
    });
});

function renderConfiguratorSummary() {
    const count = selectedModules.size;
    if (configCountEl) configCountEl.textContent = `${count} Selected`;

    if (count === 0) {
        configListEl.innerHTML = `<div class="text-xs font-mono theme-text-muted py-4">Select one or more VELA specializations to assemble your blueprint...</div>`;
        configTimelineEl.textContent = 'Custom Cadence';
        return;
    }

    configListEl.innerHTML = Array.from(selectedModules).map(mod => `
        <div class="flex items-center gap-2.5 text-xs sm:text-sm theme-text-secondary theme-inner-box px-3.5 py-2.5 rounded-xl border">
            <span class="w-1.5 h-1.5 rounded-full bg-gold-hairline"></span>
            <span>${mod}</span>
        </div>
    `).join('');

    const startWeeks = 4 + count * 2;
    const endWeeks = startWeeks + 4;
    configTimelineEl.textContent = `${startWeeks}–${endWeeks} Weeks`;
}

document.querySelectorAll('.module-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
        const mod = btn.dataset.module;
        const check = btn.querySelector('.mod-check');

        if (selectedModules.has(mod)) {
            selectedModules.delete(mod);
            btn.classList.remove('bg-velvet-900/90', 'border-gold-hairline/65', 'shadow-md');
            btn.classList.add('bg-velvet-950/80', 'border-velvet-700');
            check.classList.remove('bg-velvet-600', 'border-gold-hairline', 'text-gold-hairline');
            check.classList.add('bg-velvet-900', 'border-velvet-700', 'text-transparent');
        } else {
            selectedModules.add(mod);
            btn.classList.add('bg-velvet-900/90', 'border-gold-hairline/65', 'shadow-md');
            btn.classList.remove('bg-velvet-950/80', 'border-velvet-700');
            check.classList.add('bg-velvet-600', 'border-gold-hairline', 'text-gold-hairline');
            check.classList.remove('bg-velvet-900', 'border-velvet-700', 'text-transparent');
        }
        renderConfiguratorSummary();
    });
});

// Transfer Configured Blueprint to Consultation Form
const transferScopeBtn = document.getElementById('transfer-scope-btn');
if (transferScopeBtn) {
    transferScopeBtn.addEventListener('click', () => {
        const divisionSelect = document.getElementById('divisionSelect');
        const messageBox = document.getElementById('message');
        const contactSection = document.getElementById('contact');

        if (divisionSelect) {
            divisionSelect.value = 'Multi-Division Sovereign Mandate (Configured Blueprint)';
        }
        if (messageBox) {
            const mods = selectedModules.size > 0
                ? Array.from(selectedModules).map(m => `  • ${m}`).join('\n')
                : '  • Full-Spectrum VELA Strategic Consultation';
            messageBox.value = `VELA ARCHITECTURAL MANDATE BRIEF:\n• Institution Profile: ${selectedOrg}\n• Target Delivery Cadence: ${configTimelineEl.textContent}\n• Selected Specializations:\n${mods}\n\nRequesting a confidential executive consultation with Founder & CEO Aymane Assaidi.`;
        }
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// 10. Scroll-Triggered Reveal Observer
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal-up').forEach(el => revealObserver.observe(el));

// 10.5 Reviews Category Filter & Bilingual AR/EN Switcher (with RTL support)
document.querySelectorAll('.review-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.review-filter-btn').forEach(b => {
            b.classList.remove('bg-velvet-600', 'text-white', 'border-gold-hairline/60', 'shadow-md');
            b.classList.add('bg-velvet-900/80', 'text-lavender-soft', 'border-velvet-700');
        });
        btn.classList.add('bg-velvet-600', 'text-white', 'border-gold-hairline/60', 'shadow-md');
        btn.classList.remove('bg-velvet-900/80', 'text-lavender-soft', 'border-velvet-700');

        const filter = btn.dataset.reviewFilter;
        document.querySelectorAll('.review-card').forEach(card => {
            if (filter === 'all' || card.dataset.reviewCat === filter) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

const i18nDictionary = {
    en: {
        nav_services: 'Solutions',
        nav_execution: 'Execution',
        nav_company: 'About Us',
        dd_div1_t: 'Web &amp; Enterprise Systems',
        dd_div1_d: 'Bespoke web platforms, ERP &amp; CRM engineering',
        dd_div2_t: 'AI &amp; Data Intelligence',
        dd_div2_d: 'Autonomous agents, private LLMs &amp; BI analytics',
        dd_div3_t: 'Enterprise IT &amp; Venture Building',
        dd_div3_d: 'Zero-Trust cloud &amp; zero-to-launch company building',
        dd_div4_t: 'VELA Labs &amp; GovTech',
        dd_div4_d: 'Public-sector innovation &amp; applied R&amp;D',
        dd_exec1_t: 'Strategic Masterplan',
        dd_exec1_d: '4-phase deterministic delivery roadmap',
        dd_exec2_t: 'Scope Configurator',
        dd_exec2_d: 'Assemble your custom technical mandate',
        dd_exec3_t: 'Client Endorsements',
        dd_exec3_d: 'Verified reviews from global executives',
        dd_comp1_t: 'Live Operations &amp; Global Map',
        dd_comp1_d: 'Real-time engineering pods &amp; international specialists',
        dd_comp2_t: 'Our Story &amp; Vision 2030',
        dd_comp2_d: 'From student code editor to sovereign tech vision',
        dd_comp3_t: 'Who We Are &amp; CEO',
        dd_comp3_d: 'Governance &amp; leadership of Aymane Assaidi',
        dd_comp4_t: 'Our Ethos &amp; Philosophy',
        dd_comp4_d: 'Human values, quiet mastery &amp; manifesto',
        mob_cat_sol: 'SOLUTIONS &amp; EXECUTION',
        mob_cat_about: 'ABOUT US',
        story_badge: '05.5 // ORIGIN STORY &amp; LEADERSHIP MINDSET',
        story_title: 'From a Student’s Code Editor to a <span class="font-editorial italic font-semibold theme-gold">Sovereign Tech Vision</span>',
        story_p1: '<strong class="theme-text-primary font-semibold">VELA</strong> was not born in a corporate boardroom—it began with the relentless curiosity of <strong class="theme-text-primary font-semibold">Aymane Assaidi</strong>, a dedicated programming student who saw how enterprises struggled with fragmented, slow, and insecure legacy software.',
        story_p2: 'Driven by the conviction that ambitious young engineering can build world-class digital infrastructure, Aymane architected <strong class="theme-text-primary font-brand font-bold">VELORANTIS INTERNATIONAL TECHNOLOGIES</strong> around one core principle: <em>precision engineering without compromise</em>. What started as lines of code written late at night evolved into a structured ecosystem uniting AI, cloud architecture, and custom enterprise systems.',
        story_quote: '“Being a student of programming taught me that great technology isn’t about complexity—it’s about clarity, discipline, and solving real human problems with elegance.”',
        story_quote_author: '— Aymane Assaidi, Founder &amp; Chief Architect',
        story_img1_tag: 'THE ENGINEERING CORE',
        story_img1_title: 'Precision Code &amp; Sovereign Architecture',
        story_img2_tag: 'COLLABORATION',
        story_img2_title: 'Agile Engineering Squads',
        story_img3_tag: 'HEADQUARTERS',
        story_img3_title: 'Executive Innovation Space',
        story_img4_tag: 'STRATEGIC PLANNING',
        story_img4_title: 'Architectural Roadmaps &amp; Global Scaling',
        roster_title: 'ACTIVE INTERNATIONAL SPECIALISTS (LIVE STATUS)',
        founder_map_caption: 'Aymane Assaidi — Monitoring Global Nodes &amp; Architecture',
        ops_badge: 'LIVE OPERATIONAL BLUEPRINT // VELA COMMAND CENTER',
        ops_title: 'Our Operating System &amp; Active Engineering Squads',
        pod1_t: 'Systems &amp; ERP Architects',
        pod1_d: '6 Senior Engineers led by Aymane Assaidi building modular web &amp; financial cores.',
        pod2_t: 'AI &amp; Data Science Unit',
        pod2_d: '4 AI Specialists deploying private RAG models and autonomous business workflows.',
        pod3_t: 'DevSecOps &amp; Infrastructure',
        pod3_d: '3 Cloud Engineers managing multi-region deployments and Zero-Trust firewalls.',
        pod4_t: 'Executive UX &amp; Brand Studio',
        pod4_d: '3 Product Designers crafting high-contrast interfaces and executive dashboards.',
        map_badge: 'GLOBAL FOOTPRINT &amp; OPERATIONAL MAP',
        map_title: 'Where VELA Builds &amp; Expands',
        map_desc: 'Rooted in Nador, Morocco with distributed cloud nodes and strategic partnerships spanning Europe and the MENA region.',
        hub1_t: 'Nador, Morocco',
        hub1_d: 'Executive Command, Core Engineering &amp; R&amp;D Hub',
        hub2_t: 'Paris &amp; Amsterdam',
        hub2_d: 'Enterprise Client Advisory &amp; Cloud Sovereign Clusters',
        hub3_t: 'Riyadh &amp; Dubai',
        hub3_d: 'FinTech Venture Building &amp; GovTech Partnerships',
        amb_badge: 'HORIZON 2030 // OUR AMBITIONS',
        amb_title: 'Where We Are Going',
        amb_desc: 'Our ambition is to transform <strong class="theme-text-primary font-semibold">VELA</strong> into a premier sovereign technology powerhouse—proving that young, visionary engineering can set new global benchmarks.',
        amb1_t: 'Proprietary Sovereign AI Models',
        amb1_d: 'Developing localized, ultra-secure Arabic &amp; multilingual enterprise AI engines.',
        amb2_t: 'VELA Venture Studio',
        amb2_d: 'Incubating and launching 10+ high-impact SaaS and FinTech startups from scratch.',
        amb3_t: 'Empowering Young Tech Talent',
        amb3_d: 'Mentoring the next generation of programming students to become world-class system architects.',
        amb_cta: 'Partner With Our Vision',
        nav_ethos: 'Our Ethos',
        nav_reviews: 'Reviews',
        nav_about: 'About',
        nav_contact: 'Contact',
        nav_cta: 'Get a quote',
        mob_work: 'Work & Configurator',
        mob_services: 'Services & Divisions',
        mob_masterplan: 'Strategic Masterplan',
        mob_ethos: 'Our Ethos & Philosophy',
        mob_reviews: 'Client Reviews',
        mob_about: 'About & Leadership',
        mob_contact: 'Contact & Official Channels',
        hero_title: 'Architecting Sovereign Digital Systems,<span class="block font-editorial italic font-semibold text-4xl sm:text-6xl md:text-7xl text-gold-shimmer mt-1 pb-2">Artificial Intelligence &amp; Next-Generation Enterprise Ecosystems.</span>',
        hero_sub: 'Led by Founder &amp; CEO <span class="theme-text-primary font-semibold border-b border-gold-hairline/50 pb-0.5">Aymane Assaidi</span>, <span class="theme-text-primary font-brand font-bold tracking-wider">VELA</span> unites enterprise software engineering, applied AI &amp; data intelligence, resilient IT infrastructure, venture building, and sovereign public-sector innovation under one unified institutional blueprint.',
        hero_cta1: 'Explore Complete Blueprint',
        hero_cta2: 'Discover Our Ethos',
        ethos_badge: '03 // OUR ETHOS & HUMAN PHILOSOPHY',
        ethos_title: 'Beyond Code &amp; Systems: <span class="font-editorial italic font-semibold theme-gold">The Soul Behind VELA</span>',
        ethos_lead: 'True technological sovereignty is never born from cold algorithms alone—it begins with reverence for human ambition, quiet craftsmanship, and the responsibility of building what endures.',
        ethos_img1_tag: 'I. ARCHITECTURAL CLARITY',
        ethos_img1_title: 'Building Structures That Outlast Trends',
        ethos_img1_desc: 'Every line of architecture we craft is treated like a cornerstone—designed with stillness, mathematical order, and deep respect for the institutions that rely on it.',
        ethos_img2_tag: 'II. HUMAN-FIRST ENGINEERING',
        ethos_img2_title: 'Technology in Service of Dignity &amp; Focus',
        ethos_img2_desc: 'Behind every dashboard and workflow is a human team deserving calm, clarity, and freedom from friction.',
        ethos_img3_tag: 'III. SOVEREIGN HORIZONS',
        ethos_img3_title: 'Rooted in Purpose, Built for the World',
        ethos_img3_desc: 'Empowering founders, enterprises, and nations to own their digital destiny without compromise.',
        ethos_letter_tag: 'A LETTER ON WHAT MOVES US',
        ethos_letter_body: '<p>At <strong class="theme-text-primary font-semibold">VELA</strong>, we do not measure our work solely by server uptime, model benchmarks, or lines of code deployed. We measure it by the quiet confidence a leader feels when their entire enterprise runs in harmony—and the relief a team experiences when complex technology finally feels effortless.</p><p>We carry a deep emotional reverence for every vision entrusted to us. Behind every system we architect is a founder risking everything for an idea, an institution serving thousands of citizens, or a team striving to leave a meaningful mark.</p><p>That is why we reject rushed shortcuts and noisy promises. We choose <strong class="theme-text-primary font-semibold">calm mastery, radical honesty, and enduring stewardship</strong>—building digital foundations that honor both human dignity and future generations.</p>',
        ethos_signer_role: 'Founder &amp; CEO — VELORANTIS INTERNATIONAL TECHNOLOGIES',
        ethos_refl_tag: 'REFLECTIONS // INNER COMPASS',
        ethos_refl_heading: 'What Guides Every Decision',
        ethos_tab_0: 'On Craftsmanship',
        ethos_tab_1: 'On Partnership',
        ethos_tab_2: 'On Legacy',
        ethos_footer_note: 'Written from the heart of VELA',
        ethos_footer_cta: 'Share Your Vision →',
        ethos_pillar1_t: 'Quiet Craftsmanship',
        ethos_pillar1_d: 'We pour care into invisible details—clean architecture, resilient security, and thoughtful interfaces—because integrity lives in what users never have to worry about.',
        ethos_pillar2_t: 'Sacred Trust &amp; Empathy',
        ethos_pillar2_d: 'We listen before we architect. Understanding your fears, ambitions, and operational realities allows us to stand beside you as true stewards—not distant vendors.',
        ethos_pillar3_t: 'Enduring Human Impact',
        ethos_pillar3_d: 'Every platform, AI engine, and public service we build is judged by a single question: does it genuinely elevate people’s work, dignity, and future?',
        about_badge: '06 // ABOUT VELA & EXECUTIVE GOVERNANCE',
        about_title: 'Guided by Visionary <span class="theme-gold">Sovereignty</span> &amp; Institutional Rigor',
        about_p1: '<strong class="theme-text-primary font-brand font-bold">VELORANTIS INTERNATIONAL TECHNOLOGIES (VELA)</strong> was established as a sovereign technology conglomerate dedicated to engineering next-generation digital infrastructure, applied artificial intelligence, and enterprise ecosystems for global corporations, financial leaders, and public institutions.',
        about_p2: 'Under the direct executive leadership of Founder &amp; CEO <strong class="theme-text-primary font-brand font-bold">Aymane Assaidi</strong>, we eliminate reliance on fragmented legacy software—delivering unified, high-security architectures built for long-term technological independence.',
        about_card1_t: '100% Client IP Sovereignty',
        about_card1_d: 'Every line of source code, trained AI model, and cloud environment belongs exclusively to your institution under binding NDA governance.',
        about_card2_t: 'Direct Executive Stewardship',
        about_card2_d: 'Strategic mandates receive direct architectural oversight from Founder &amp; CEO Aymane Assaidi and VELA Principal Leads.',
        contact_badge: '07 // EXECUTIVE DESK & GLOBAL INQUIRIES',
        contact_title: 'Initiate a <span class="font-editorial italic font-semibold theme-gold">Sovereign Mandate</span>',
        contact_sub: 'Reach our official institutional email desks directly or submit a confidential project briefing below. Every inquiry is reviewed under strict NDA protection by <span class="theme-text-primary font-semibold">Aymane Assaidi</span> and the <span class="theme-text-primary font-brand font-bold">VELA</span> Executive Architecture Desk.'
    },
    ar: {
        nav_services: 'خدماتنا',
        nav_execution: 'التنفيذ والأعمال',
        nav_company: 'عنّا',
        dd_div1_t: 'هندسة الأنظمة والمواقع (ERP/CRM)',
        dd_div1_d: 'منصات ويب متكاملة وأنظمة إدارة مؤسسية مخصصة',
        dd_div2_t: 'الذكاء الاصطناعي وتحليل البيانات',
        dd_div2_d: 'وكلاء ذكاء اصطناعي ونماذج خاصة ولوحات تحكم BI',
        dd_div3_t: 'البنية التحتية IT وبناء الشركات',
        dd_div3_d: 'سحابة مؤمنة وتأسيس الشركات الناشئة من الصفر',
        dd_div4_t: 'مختبرات VELA والحلول الحكومية',
        dd_div4_d: 'الابتكار والبحث والتطوير للمؤسسات العامة',
        dd_exec1_t: 'خارطة التنفيذ الاستراتيجية',
        dd_exec1_d: 'منهجية العمل من 4 مراحل واضحة ومحددة',
        dd_exec2_t: 'أداة تكوين المشروع',
        dd_exec2_d: 'صمم نطاق مشروعك التقني واحصل على خطة فورية',
        dd_exec3_t: 'آراء وشهادات العملاء',
        dd_exec3_d: 'تقييمات موثقة من رواد الأعمال والمديرين التنفيذيين',
        dd_comp1_t: 'العمليات الحية (Live) وخريطة الشركة',
        dd_comp1_d: 'متابعة حية للفرق الهندسية والمختصين الدوليين الآن',
        dd_comp2_t: 'قصتنا ورؤية 2030',
        dd_comp2_d: 'من شغف البرمجة إلى بناء تكتل تقني سيادي',
        dd_comp3_t: 'من نحن والقيادة التنفيذية',
        dd_comp3_d: 'الحوكمة وإشراف المؤسس والمدير التنفيذي أيمن أسايدي',
        dd_comp4_t: 'مشاعرنا وفلسفتنا الإنسانية',
        dd_comp4_d: 'قيمنا الإنسانية، هدوء الإتقان، ورسالة الشركة',
        mob_cat_sol: 'الخدمات والتنفيذ',
        mob_cat_about: 'عنّا (الشركة والقيادة)',
        story_badge: '05.5 // قصة البداية وعقلية القيادة',
        story_title: 'من شغف تلميذ في البرمجة إلى <span class="font-editorial italic font-semibold theme-gold">رؤية تقنية سيادية</span>',
        story_p1: 'لم تولد شركة <strong class="theme-text-primary font-semibold">VELA</strong> في قاعات الاجتماعات المغلقة—بل انطلقت من الشغف اللامحدود لـ <strong class="theme-text-primary font-semibold">Aymane Assaidi</strong>، تلميذ طموح في عالم البرمجة لاحظ معاناة الشركات مع الأنظمة التقليدية البطيئة والمجزأة.',
        story_p2: 'انطلاقاً من قناعته بأن العقول الشابة الطموحة قادرة على بناء بنية تحتية رقمية تضاهي المعايير العالمية، أسس أيمن شركة <strong class="theme-text-primary font-brand font-bold">VELORANTIS INTERNATIONAL TECHNOLOGIES</strong> على مبدأ واحد: <em>الإتقان الهندسي بلا تنازلات</em>. ما بدأ كأسطر برمجية تُكتب بشغف ليلاً تحول إلى منظومة متكاملة تجمع الذكاء الاصطناعي، الحوسبة السحابية، والأنظمة المؤسسية.',
        story_quote: '«كوني تلميذاً في البرمجة علمني أن التكنولوجيا العظيمة لا تكمن في التعقيد، بل في الوضوح، والانضباط، وحل مشكلات الإنسان بأناقة وإتقان.»',
        story_quote_author: '— Aymane Assaidi، المؤسس والمهندس المعماري الرئيسي',
        story_img1_tag: 'الجوهر الهندسي',
        story_img1_title: 'كود دقيق وبنية معمارية سيادية',
        story_img2_tag: 'روح الفريق',
        story_img2_title: 'فرق هندسية متكاملة ومرنة',
        story_img3_tag: 'المقر التنفيذي',
        story_img3_title: 'مساحة الابتكار والقيادة',
        story_img4_tag: 'التخطيط الاستراتيجي',
        story_img4_title: 'رسم المخططات المعمارية والتوسع العالمي',
        roster_title: 'نخبة المختصين الدوليين النشطين الآن (حركة حية)',
        founder_map_caption: 'أيمن أسايدي — يتابع خريطة العمليات العالمية وأنظمة الشركة',
        ops_badge: 'مخطط العمليات الحية // مركز قيادة VELA',
        ops_title: 'نظام العمل الداخلي والفرق الهندسية النشطة',
        pod1_t: 'معماريو الأنظمة و ERP',
        pod1_d: '6 مهندسين بقيادة Aymane Assaidi لبناء منصات الويب والأنظمة المالية الموحدة.',
        pod2_t: 'وحدة الذكاء الاصطناعي والبيانات',
        pod2_d: '4 مختصين لتطوير نماذج ذكاء اصطناعي خاصة وأتمتة سير العمل المؤسسي.',
        pod3_t: 'البنية السحابية والأمن السيبراني',
        pod3_d: '3 مهندسي سحابة لإدارة الخوادم العالمية وأنظمة الحماية الفائقة.',
        pod4_t: 'استوديو التصميم وتجربة المستخدم',
        pod4_d: '3 مصممي منتجات لابتكار واجهات تنفيذية فاخرة ولوحات تحكم دقيقة.',
        map_badge: 'التواجد الجغرافي وخريطة التوسع',
        map_title: 'أين تبني VELA وتنطلق للعالم',
        map_desc: 'ننطلق من مدينة الناظور بالمغرب بشبكة سحابية موزعة وشراكات استراتيجية تمتد نحو أوروبا والشرق الأوسط.',
        hub1_t: 'الناظور، المغرب',
        hub1_d: 'المقر الرئيسي، القيادة التنفيذية، ومركز الهندسة والبحث',
        hub2_t: 'باريس وأمستردام',
        hub2_d: 'استشارات الشركات الأوروبية والخوادم السحابية السيادية',
        hub3_t: 'الرياض ودبي',
        hub3_d: 'بناء شركات التقنية المالية FinTech والشراكات الحكومية',
        amb_badge: 'أفق 2030 // طموحاتنا المستقبلية',
        amb_title: 'إلى أين نتجه في VELA',
        amb_desc: 'طموحنا هو تحويل <strong class="theme-text-primary font-semibold">VELA</strong> إلى قوة تكنولوجية سيادية رائدة—لنثبت أن الهندسة الشابة الطموحة قادرة على رسم معايير عالمية جديدة.',
        amb1_t: 'نماذج ذكاء اصطناعي سيادية خاصة',
        amb1_d: 'تطوير محركات ذكاء اصطناعي عربية ومتعددة اللغات فائقة الأمان ومخصصة للمؤسسات.',
        amb2_t: 'استوديو VELA لبناء الشركات',
        amb2_d: 'احتضان وإطلاق أكثر من 10 شركات ناشئة رائدة في مجالات SaaS والتقنية المالية من الصفر.',
        amb3_t: 'تمكين المواهب البرمجية الشابة',
        amb3_d: 'توجيه وتدريب الجيل القادم من طلاب البرمجة ليصبحوا معماريي أنظمة عالميين.',
        amb_cta: 'كن شريكاً في رؤيتنا',
        nav_ethos: 'مشاعرنا',
        nav_reviews: 'آراء العملاء',
        nav_about: 'من نحن',
        nav_contact: 'تواصل معنا',
        nav_cta: 'اطلب عرض سعر',
        mob_work: 'أعمالنا وتكوين المشاريع',
        mob_services: 'الخدمات والأقسام الأربعة',
        mob_masterplan: 'خارطة التنفيذ الاستراتيجية',
        mob_ethos: 'مشاعرنا وفلسفتنا الإنسانية',
        mob_reviews: 'آراء وشهادات العملاء',
        mob_about: 'من نحن والحوكمة التنفيذية',
        mob_contact: 'تواصل معنا والقنوات الرسمية',
        hero_title: 'نهندس الأنظمة الرقمية السيادية،<span class="block font-editorial italic font-semibold text-4xl sm:text-6xl md:text-7xl text-gold-shimmer mt-2 pb-2">والذكاء الاصطناعي ومنظومات المستقبل المؤسسية.</span>',
        hero_sub: 'بقيادة المؤسس والمدير التنفيذي <span class="theme-text-primary font-semibold border-b border-gold-hairline/50 pb-0.5">Aymane Assaidi</span>، تجمع <span class="theme-text-primary font-brand font-bold tracking-wider">VELA</span> بين هندسة البرمجيات المؤسسية، الذكاء الاصطناعي وتحليل البيانات، البنية التحتية السحابية، بناء الشركات الناشئة، والابتكار الحكومي في رؤية موحدة.',
        hero_cta1: 'استكشف خارطة العمل الكاملة',
        hero_cta2: 'اقرأ مشاعرنا وفلسفتنا',
        ethos_badge: '03 // مشاعرنا وفلسفتنا الإنسانية',
        ethos_title: 'ما وراء الكود والأنظمة: <span class="font-editorial italic font-semibold theme-gold">الروح التي تحرك VELA</span>',
        ethos_lead: 'السيادة التقنية الحقيقية لا تولد من الخوارزميات الجامدة وحدها؛ بل تبدأ من احترام طموح الإنسان، وهدوء الإتقان، والشعور العميق بالمسؤولية تجاه كل أثر نتركه.',
        ethos_img1_tag: 'أولاً // وضوح البناء المعماري',
        ethos_img1_title: 'نبني أسساً تتجاوز الصيحات العابرة',
        ethos_img1_desc: 'نتعامل مع كل تفصيل هندسي بوصفه حجر أساس؛ يُصمم بهدوء وتوازن واحترام عميق للمؤسسات التي تعتمد عليه في مسيرتها.',
        ethos_img2_tag: 'ثانياً // الإنسان أولاً',
        ethos_img2_title: 'تقنية تخدم كرامة الإنسان ووضوح ذهنه',
        ethos_img2_desc: 'خلف كل لوحة تحكم ونظام رقمي فريق بشري يستحق الطمأنينة والانسيابية بعيداً عن التعقيد والضجيج.',
        ethos_img3_tag: 'ثالثاً // آفاق سيادية عالمية',
        ethos_img3_title: 'جذور راسخة بالمعنى، ورؤية تمتد للعالم',
        ethos_img3_desc: 'نمكّن الرواد والشركات والمؤسسات من امتلاك مصيرهم الرقمي باستقلالية وثقة لا تتزعزع.',
        ethos_letter_tag: 'رسالة وجدانية // ما الذي يحركنا؟',
        ethos_letter_body: '<p>في <strong class="theme-text-primary font-semibold">VELA</strong>، لا نقيس نجاحنا فقط بسرعة الخوادم أو عدد الأسطر البرمجية؛ بل نقيسه بتلك الطمأنينة الهادئة التي يشعر بها القائد حين تعمل مؤسسته بتناغم تام، وبالراحة التي يلمسها الفريق حين تتحول التقنية المعقدة إلى أداة بسيطة تخدم إبداعه.</p><p>نحمل في قلوبنا تقديراً عميقاً لكل رؤية تُؤتمن بين أيدينا؛ فخلف كل نظام نبنيه مؤسسٌ يراهن بحلمه، أو مؤسسة تخدم آلاف الناس، أو فريق يسعى لترك بصمة صادقة تبقى.</p><p>لذلك نرفض الحلول المتسرعة والوعود الصاخبة، ونختار <strong class="theme-text-primary font-semibold">هدوء الإتقان، والصدق المطلق، والمسؤولية المستدامة</strong>—لنصنع بنية رقمية تليق بالإنسان وتصمد أمام الزمن.</p>',
        ethos_signer_role: 'المؤسس والمدير التنفيذي — VELORANTIS INTERNATIONAL TECHNOLOGIES',
        ethos_refl_tag: 'تأملات // البوصلة الداخلية',
        ethos_refl_heading: 'ما يوجّه كل قرار نتخذه',
        ethos_tab_0: 'في الإتقان',
        ethos_tab_1: 'في الشراكة',
        ethos_tab_2: 'في الأثر',
        ethos_footer_note: 'كُتبت بصدق من قلب VELA',
        ethos_footer_cta: 'شاركنا رؤيتك ←',
        ethos_pillar1_t: 'هدوء الإتقان',
        ethos_pillar1_d: 'نمنح التفاصيل الخفية ذات العناية التي نمنحها للواجهة—بنية نظيفة، وأمان صلب، وتجربة سلسة—لأن النزاهة تسكن فيما لا يضطر العميل للقلق بشأنه.',
        ethos_pillar2_t: 'قدسية الثقة والتعاطف',
        ethos_pillar2_d: 'نستمع بعمق قبل أن نرسم أي مخطط؛ ففهم مخاوفك وطموحاتك يجعلنا شركاء حقيقيين نحمل معك المسؤولية لا مجرد منفذين.',
        ethos_pillar3_t: 'الأثر الإنساني المستدام',
        ethos_pillar3_d: 'كل منصة أو نظام ذكاء اصطناعي نبنيه يُقاس بسؤال واحد: هل يرتقي حقاً بعمل الإنسان، ويمنحه وضوحاً وقيمة تدوم؟',
        about_badge: '06 // من نحن والحوكمة التنفيذية',
        about_title: 'رؤية مؤسسية قائمة على <span class="theme-gold">السيادة الرقمية</span> والدقة الهندسية',
        about_p1: 'تأسست <strong class="theme-text-primary font-brand font-bold">VELA (VELORANTIS INTERNATIONAL TECHNOLOGIES)</strong> لتكون تكتلاً تقنياً سيادياً رائداً يقود التحول الرقمي وهندسة الأنظمة المتقدمة والذكاء الاصطناعي للشركات الكبرى، المؤسسات المالية، والجهات الحكومية على مستوى العالم.',
        about_p2: 'تحت القيادة المباشرة للمؤسس والمدير التنفيذي <strong class="theme-text-primary font-brand font-bold">Aymane Assaidi</strong>، نمكّن المؤسسات من تجاوز الأنظمة التقليدية المجزأة عبر بناء منظومات رقمية موحدة وعالية الأمان تضمن الاستقلالية التكنولوجية الكاملة.',
        about_card1_t: 'ملكية فكرية كاملة للعميل 100%',
        about_card1_d: 'كافة الأكواد البرمجية، نماذج الذكاء الاصطناعي الخاصة، والبنية السحابية مملوكة بالكامل لمؤسستكم تحت حماية اتفاقيات سرية صارمة (NDA).',
        about_card2_t: 'إشراف تنفيذي ومعماري مباشر',
        about_card2_d: 'تخضع كافة المشاريع الاستراتيجية لإشراف مباشر من المؤسس والمدير التنفيذي Aymane Assaidi وفريق المهندسين الرئيسيين في VELA.',
        contact_badge: '07 // المكتب التنفيذي والاستفسارات المؤسسية',
        contact_title: 'ابدأ <span class="font-editorial italic font-semibold theme-gold">مشروعك الاستراتيجي</span> مع VELA',
        contact_sub: 'تواصل مباشرة عبر قنوات البريد الإلكتروني الرسمية لشركتنا أو أرسل ملخص مشروعك بسرية تامة. تتم مراجعة جميع الطلبات تحت حماية اتفاقية عدم الإفصاح (NDA) من قبل <span class="theme-text-primary font-semibold">Aymane Assaidi</span> والمكتب التنفيذي في <span class="theme-text-primary font-brand font-bold">VELA</span>.'
    }
};

function applySiteLanguage(lang) {
    currentSiteLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    const dict = i18nDictionary[lang] || i18nDictionary.en;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.innerHTML = dict[key];
        }
    });
    renderEthosReflection(currentReflectionIdx);
}

const langArBtn = document.getElementById('lang-ar-btn');
const langEnBtn = document.getElementById('lang-en-btn');
if (langArBtn && langEnBtn) {
    langArBtn.addEventListener('click', () => {
        langArBtn.classList.add('text-gold-hairline', 'font-bold');
        langArBtn.classList.remove('text-lavender-muted');
        langEnBtn.classList.remove('text-white', 'font-bold');
        langEnBtn.classList.add('text-lavender-muted');
        applySiteLanguage('ar');
        if (typeof setConciergeLanguage === 'function') setConciergeLanguage('ar');
    });
    langEnBtn.addEventListener('click', () => {
        langEnBtn.classList.add('text-white', 'font-bold');
        langEnBtn.classList.remove('text-lavender-muted');
        langArBtn.classList.remove('text-gold-hairline', 'font-bold');
        langArBtn.classList.add('text-lavender-muted');
        applySiteLanguage('en');
        if (typeof setConciergeLanguage === 'function') setConciergeLanguage('en');
    });
}

// 10.8 One-Click Official Corporate Email Copy Buttons
document.querySelectorAll('.copy-email-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
        const email = btn.dataset.copyEmail;
        if (!email) return;
        try {
            await navigator.clipboard.writeText(email);
        } catch (_) {
            const tempInput = document.createElement('input');
            tempInput.value = email;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
        }
        const originalText = btn.textContent;
        btn.textContent = 'Copied ✓';
        btn.classList.add('bg-emerald-600/80', 'border-emerald-300', 'text-white');
        setTimeout(() => {
            btn.textContent = originalText;
            btn.classList.remove('bg-emerald-600/80', 'border-emerald-300', 'text-white');
        }, 2200);
    });
});

// 11. Consultation Form Submission Feedback
const contactForm = document.getElementById('vela-contact-form');
const formFeedback = document.getElementById('form-feedback');
const feedbackText = document.getElementById('feedback-text');

if (contactForm && formFeedback && feedbackText) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const clientName = document.getElementById('fullName').value.trim();
        const selectedScope = document.getElementById('divisionSelect').value;
        const budgetScope = document.getElementById('budgetSelect') ? document.getElementById('budgetSelect').value : '';
        const timelineScope = document.getElementById('timelineSelect') ? document.getElementById('timelineSelect').value : '';
        const wantsCall = document.getElementById('briefingCallCheck') && document.getElementById('briefingCallCheck').checked;

        const callNote = wantsCall ? ' including your request for a 20-minute Executive Architecture Briefing Call' : '';
        feedbackText.innerHTML = `Thank you, <span class="text-gold-hairline font-semibold">${clientName}</span>. Your NDA-protected mandate dossier for <span class="text-white font-semibold">${selectedScope}</span> (${budgetScope} • ${timelineScope}) has been logged for <span class="text-gold-hairline font-semibold">Aymane Assaidi</span> and the <span class="font-brand text-white font-bold">VELA</span> Executive Desk (<span class="font-mono text-xs text-gold-hairline">executive@velorantis.com</span>)${callNote}.`;
        
        formFeedback.classList.remove('hidden');
        contactForm.reset();
        
        setTimeout(() => {
            formFeedback.classList.add('hidden');
        }, 11000);
    });
}

// 12. VELA AI EXECUTIVE CONCIERGE ENGINE (BILINGUAL AR/EN + SMART INTENT + ACTIONS)
const aiWindow = document.getElementById('vela-ai-window');
const aiLauncher = document.getElementById('vela-ai-launcher');
const aiCloseBtn = document.getElementById('ai-close-btn');
const aiResetBtn = document.getElementById('ai-reset-btn');
const aiLangToggle = document.getElementById('ai-lang-toggle');
const aiMessagesEl = document.getElementById('vela-ai-messages');
const aiSuggestionsEl = document.getElementById('vela-ai-suggestions');
const aiForm = document.getElementById('vela-ai-form');
const aiInput = document.getElementById('vela-ai-input');

let aiCurrentLang = 'en';

const aiSuggestionsData = {
    en: [
        { label: 'Our Ethos & Values', query: 'Tell me about VELA ethos, values, and human philosophy' },
        { label: '4 Core Divisions', query: 'What are VELA’s 4 core divisions and services?' },
        { label: 'Official Emails', query: 'What are VELA official corporate email addresses?' },
        { label: 'AI & Data Intelligence', query: 'Tell me about VELA AI automation and data analysis' },
        { label: 'Founder & CEO', query: 'Who is the Founder and CEO of VELA?' }
    ],
    ar: [
        { label: 'مشاعرنا وفلسفتنا', query: 'حدثني عن مشاعر وقيم وفلسفة شركة VELA' },
        { label: 'أقسام الشركة الـ 4', query: 'ما هي أقسام وخدمات شركة VELA الأربعة؟' },
        { label: 'الإيميل الرسمي للتواصل', query: 'ما هو البريد الإلكتروني الرسمي لشركة VELA؟' },
        { label: 'الذكاء الاصطناعي والبيانات', query: 'اشرح لي خدمات الذكاء الاصطناعي وتحليل البيانات' },
        { label: 'المؤسس والمدير التنفيذي', query: 'من هو مؤسس ومدير شركة VELA؟' }
    ]
};

function renderAiSuggestions() {
    if (!aiSuggestionsEl) return;
    const list = aiSuggestionsData[aiCurrentLang] || aiSuggestionsData.en;
    aiSuggestionsEl.innerHTML = list.map(item => `
        <button type="button" data-ai-prompt="${item.query}"
                class="ai-chip interactive-target shrink-0 px-3 py-1.5 rounded-full bg-velvet-900/90 border border-gold-hairline/35 hover:border-gold-hairline text-[11px] font-brand text-lavender-soft hover:text-white transition-all">
            ${item.label}
        </button>
    `).join('');

    aiSuggestionsEl.querySelectorAll('.ai-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            handleUserAiQuery(chip.dataset.aiPrompt);
        });
    });
}

function appendAiMessage(role, htmlText, isRtl = false, actionBtn = null) {
    if (!aiMessagesEl) return;
    const wrapper = document.createElement('div');
    wrapper.className = role === 'user' ? 'flex justify-end' : 'flex items-start gap-2.5';

    if (role === 'user') {
        wrapper.innerHTML = `
            <div dir="${isRtl ? 'rtl' : 'ltr'}" class="max-w-[82%] px-4 py-2.5 rounded-2xl rounded-br-sm bg-velvet-600 border border-gold-hairline/45 text-white text-xs sm:text-sm leading-relaxed shadow-md">
                ${htmlText}
            </div>
        `;
    } else {
        const actionHtml = actionBtn ? `
            <button type="button" data-action-type="${actionBtn.type}" data-action-payload="${actionBtn.payload}"
                    class="ai-action-trigger interactive-target mt-3 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-velvet-950 border border-gold-hairline/60 hover:bg-velvet-600 text-[11px] font-brand font-bold text-gold-hairline hover:text-white transition-all">
                <span>${actionBtn.label}</span>
                <span>→</span>
            </button>
        ` : '';

        wrapper.innerHTML = `
            <div class="w-7 h-7 rounded-full bg-velvet-950 border border-gold-hairline/55 flex items-center justify-center shrink-0 mt-0.5">
                <span class="font-brand font-extrabold text-[11px] text-gold-hairline">V</span>
            </div>
            <div dir="${isRtl ? 'rtl' : 'ltr'}" class="max-w-[85%] px-4 py-3 rounded-2xl rounded-tl-sm bg-velvet-900/95 border border-velvet-700/90 text-lavender-soft text-xs sm:text-sm leading-relaxed shadow-md">
                <div>${htmlText}</div>
                ${actionHtml}
            </div>
        `;
    }

    aiMessagesEl.appendChild(wrapper);
    aiMessagesEl.scrollTop = aiMessagesEl.scrollHeight;

    wrapper.querySelectorAll('.ai-action-trigger').forEach(btn => {
        btn.addEventListener('click', () => {
            executeAiAction(btn.dataset.actionType, btn.dataset.actionPayload);
        });
    });
}

function showAiTyping() {
    const typingDiv = document.createElement('div');
    typingDiv.id = 'vela-ai-typing';
    typingDiv.className = 'flex items-start gap-2.5';
    typingDiv.innerHTML = `
        <div class="w-7 h-7 rounded-full bg-velvet-950 border border-gold-hairline/55 flex items-center justify-center shrink-0">
            <span class="font-brand font-extrabold text-[11px] text-gold-hairline">V</span>
        </div>
        <div class="px-4 py-3 rounded-2xl rounded-tl-sm bg-velvet-900/90 border border-velvet-700 flex items-center gap-1.5">
            <span class="ai-dot w-1.5 h-1.5 rounded-full bg-gold-hairline"></span>
            <span class="ai-dot w-1.5 h-1.5 rounded-full bg-gold-hairline"></span>
            <span class="ai-dot w-1.5 h-1.5 rounded-full bg-gold-hairline"></span>
        </div>
    `;
    aiMessagesEl.appendChild(typingDiv);
    aiMessagesEl.scrollTop = aiMessagesEl.scrollHeight;
}

function removeAiTyping() {
    const el = document.getElementById('vela-ai-typing');
    if (el) el.remove();
}

function executeAiAction(type, payload) {
    if (type === 'scroll') {
        const target = document.querySelector(payload);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    } else if (type === 'quote') {
        const contactSection = document.getElementById('contact');
        const messageBox = document.getElementById('message');
        if (messageBox) {
            messageBox.value = payload;
        }
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

function generateExecutiveAiReply(rawQuery) {
    const isArabic = /[\u0600-\u06FF]/.test(rawQuery) || (aiCurrentLang === 'ar' && !/[a-zA-Z]{3,}/.test(rawQuery));
    const q = rawQuery.toLowerCase();

    if (q.includes('ethos') || q.includes('feel') || q.includes('value') || q.includes('soul') || q.includes('philosophy') || q.includes('مشاعر') || q.includes('قيم') || q.includes('فلسف') || q.includes('روح')) {
        return isArabic
            ? {
                isRtl: true,
                text: `في قسم <strong class="text-gold-hairline">مشاعرنا (Our Ethos)</strong> نؤمن أن التقنية الحقيقية تُقاس بالطمأنينة والوضوح الذي تمنحه للإنسان، لا بالأكواد وحدها. ترتكز فلسفتنا على ثلاث ركائز: <strong>هدوء الإتقان</strong>، <strong>قدسية الثقة</strong>، و<strong>الأثر الإنساني المستدام</strong>.`,
                action: { type: 'scroll', payload: '#ethos', label: 'اقرأ قسم مشاعرنا' }
            }
            : {
                isRtl: false,
                text: `In <strong class="text-gold-hairline">Our Ethos</strong>, VELA believes true technology is measured by the calm confidence and human dignity it creates—guided by three pillars: <strong>Quiet Craftsmanship</strong>, <strong>Sacred Trust &amp; Empathy</strong>, and <strong>Enduring Human Impact</strong>.`,
                action: { type: 'scroll', payload: '#ethos', label: 'Explore Our Ethos' }
            };
    }

    if (q.includes('email') || q.includes('contact') || q.includes('mail') || q.includes('إيميل') || q.includes('ايمايل') || q.includes('بريد') || q.includes('تواصل')) {
        return isArabic
            ? {
                isRtl: true,
                text: `قنوات البريد الإلكتروني الرسمية لشركة <strong class="text-white">VELA</strong>:<br>• المكتب التنفيذي والرئيس التنفيذي: <strong class="text-gold-hairline">executive@velorantis.com</strong><br>• طلبات المشاريع وعروض الأسعار: <strong class="text-gold-hairline">mandates@velorantis.com</strong><br>• المشاريع الحكومية (GovTech): <strong class="text-gold-hairline">govtech@velorantis.com</strong>`,
                action: { type: 'scroll', payload: '#contact', label: 'انتقل لقسم التواصل' }
            }
            : {
                isRtl: false,
                text: `Official <strong class="text-white">VELA</strong> Corporate Email Desks:<br>• Executive &amp; CEO Desk: <strong class="text-gold-hairline">executive@velorantis.com</strong><br>• New Mandates &amp; Quotes: <strong class="text-gold-hairline">mandates@velorantis.com</strong><br>• Public Sector &amp; GovTech: <strong class="text-gold-hairline">govtech@velorantis.com</strong>`,
                action: { type: 'scroll', payload: '#contact', label: 'Open Executive Desk' }
            };
    }

    if (q.includes('founder') || q.includes('ceo') || q.includes('aymane') || q.includes('assaidi') || q.includes('مؤسس') || q.includes('مدير') || q.includes('أيمن') || q.includes('ايمن')) {
        return isArabic
            ? {
                isRtl: true,
                text: `<strong class="text-white">VELA (VELORANTIS INTERNATIONAL TECHNOLOGIES)</strong> تأسست وتُدار بقيادة المؤسس والمدير التنفيذي <strong class="text-gold-hairline">Aymane Assaidi</strong>. ترتكز رؤيتنا على بناء أنظمة رقمية سيادية، حلول ذكاء اصطناعي متقدمة، وبنية تحتية تقنية عالمية المستوى تخدم الشركات الكبرى والمؤسسات الحكومية.`,
                action: { type: 'scroll', payload: '#leadership', label: 'استكشف قسم من نحن' }
            }
            : {
                isRtl: false,
                text: `<strong class="text-white">VELA (VELORANTIS INTERNATIONAL TECHNOLOGIES)</strong> is led by Founder &amp; Chief Executive Officer <strong class="text-gold-hairline">Aymane Assaidi</strong>. Under his direct executive stewardship, VELA delivers sovereign web infrastructure, enterprise AI, and venture-building mandates with 100% client IP ownership.`,
                action: { type: 'scroll', payload: '#leadership', label: 'View Executive Charter' }
            };
    }

    if (q.includes('ai') || q.includes('artificial') || q.includes('data') || q.includes('analytics') || q.includes('ذكاء') || q.includes('بيانات') || q.includes('تحليل')) {
        return isArabic
            ? {
                isRtl: true,
                text: `في <strong class="text-gold-hairline">قطاع الذكاء الاصطناعي وتحليل البيانات (Division 02)</strong>، نطور وكلاء ذكاء اصطناعي لأتمتة العمليات، نماذج لغوية خاصة (Private LLMs) مدربة بأمان على بيانات شركتك، ولوحات تحكم تنفيذية (BI Dashboards) لدعم القرارات الاستراتيجية.`,
                action: { type: 'quote', payload: 'طلب استشارة حول قسم الذكاء الاصطناعي وتحليل البيانات (Division 02) من شركة VELA.', label: 'اطلب مشروع ذكاء اصطناعي' }
            }
            : {
                isRtl: false,
                text: `Our <strong class="text-gold-hairline">AI &amp; Data Intelligence Division (02)</strong> engineers private LLM/RAG knowledge systems, autonomous workflow automation agents, and real-time executive Business Intelligence dashboards that turn raw data into measurable ROI.`,
                action: { type: 'quote', payload: 'Requesting an executive consultation for VELA Division 02: Artificial Intelligence & Data Intelligence.', label: 'Scope an AI Mandate' }
            };
    }

    if (q.includes('web') || q.includes('system') || q.includes('erp') || q.includes('crm') || q.includes('software') || q.includes('موقع') || q.includes('مواقع') || q.includes('سيستام') || q.includes('نظام') || q.includes('برمجة')) {
        return isArabic
            ? {
                isRtl: true,
                text: `<strong class="text-gold-hairline">قطاع هندسة الأنظمة والمنصات (Division 01)</strong> متخصص في تطوير المواقع الإلكترونية الفاخرة عالية الأداء، وبناء أنظمة إدارة المؤسسات المخصصة (<strong class="text-white">ERP &amp; CRM</strong>) القابلة للتوسع مع ملكية كاملة للكود المصدري.`,
                action: { type: 'quote', payload: 'طلب تطوير منصة ويب متقدمة أو نظام إدارة مؤسسي (ERP/CRM) مع شركة VELA.', label: 'ابدأ بناء نظامك' }
            }
            : {
                isRtl: false,
                text: `<strong class="text-gold-hairline">Division 01 (Sovereign Web &amp; Enterprise Systems)</strong> architects ultra-premium flagship websites, custom <strong class="text-white">ERP &amp; CRM</strong> platforms, and high-security distributed backends tailored to replace fragmented legacy software.`,
                action: { type: 'quote', payload: 'Requesting an executive consultation for VELA Division 01: Sovereign Web & Enterprise Systems (ERP/CRM).', label: 'Configure System Scope' }
            };
    }

    if (q.includes('venture') || q.includes('startup') || q.includes('gov') || q.includes('it') || q.includes('cloud') || q.includes('شركة') || q.includes('شركات') || q.includes('حكوم') || q.includes('دولة') || q.includes('سحاب')) {
        return isArabic
            ? {
                isRtl: true,
                text: `نحن ندعم تأسيس الشركات الناشئة من الصفر حتى الإطلاق (<strong class="text-white">Venture Building</strong>)، وندير البنية التحتية السحابية والأمن السيبراني (<strong class="text-gold-hairline">Division 03</strong>)، كما نطور حلول التحول الرقمي للمؤسسات الحكومية والبحث والابتكار عبر <strong class="text-gold-hairline">VELA Labs (Division 04)</strong>.`,
                action: { type: 'scroll', payload: '#divisions', label: 'استعرض الأقسام الأربعة' }
            }
            : {
                isRtl: false,
                text: `Through <strong class="text-gold-hairline">Division 03 (Enterprise IT &amp; Venture Building)</strong> and <strong class="text-gold-hairline">Division 04 (VELA Labs &amp; GovTech)</strong>, we provide Zero-Trust cloud infrastructure, zero-to-launch technical co-building for new companies, and sovereign digital infrastructure for public institutions.`,
                action: { type: 'scroll', payload: '#divisions', label: 'Inspect Divisions 03 & 04' }
            };
    }

    if (q.includes('price') || q.includes('cost') || q.includes('quote') || q.includes('time') || q.includes('how long') || q.includes('سعر') || q.includes('تكلفة') || q.includes('مدة') || q.includes('وقت') || q.includes('عرض')) {
        return isArabic
            ? {
                isRtl: true,
                text: `تعتمد المدة والتكلفة على نطاق المشروع: تبدأ المنصات المتكاملة عادةً من <strong class="text-white">6 إلى 10 أسابيع</strong> وفق خارطة <strong class="text-gold-hairline">VELA Masterplan</strong> ذات المراحل الأربع. يمكنك استخدام أداة تكوين المشروع في الصفحة أو إرسال طلب مباشر للحصول على عرض سعر مخصص.`,
                action: { type: 'scroll', payload: '#architecture', label: 'افتح أداة تكوين المشروع' }
            }
            : {
                isRtl: false,
                text: `Engagement timelines typically span <strong class="text-white">6–12 weeks</strong> depending on architectural complexity, executed across our deterministic 4-phase <strong class="text-gold-hairline">VELA Masterplan</strong>. You can assemble your exact modules in our Scope Configurator or request a tailored executive quote immediately.`,
                action: { type: 'scroll', payload: '#architecture', label: 'Open Scope Configurator' }
            };
    }

    return isArabic
        ? {
            isRtl: true,
            text: `تعمل <strong class="text-white">VELA</strong> عبر 4 قطاعات متكاملة:<br>1. <strong class="text-gold-hairline">هندسة الأنظمة والمواقع (ERP/CRM)</strong><br>2. <strong class="text-gold-hairline">الذكاء الاصطناعي وتحليل البيانات</strong><br>3. <strong class="text-gold-hairline">البنية التحتية IT وبناء الشركات</strong><br>4. <strong class="text-gold-hairline">مختبرات الابتكار والحلول الحكومية GovTech</strong><br>أي قطاع يهم مشروعك حالياً؟`,
            action: { type: 'quote', payload: 'أرغب في حجز استشارة تنفيذية مع شركة VELA لمناقشة مشروعنا التقني.', label: 'احجز استشارة تنفيذية' }
        }
        : {
            isRtl: false,
            text: `<strong class="text-white">VELA</strong> operates across four specialized divisions:<br><strong>01.</strong> Sovereign Web &amp; Enterprise Systems (ERP/CRM)<br><strong>02.</strong> Artificial Intelligence &amp; Data Intelligence<br><strong>03.</strong> Enterprise IT &amp; Venture Building<br><strong>04.</strong> VELA Labs &amp; Sovereign GovTech<br>Which division aligns with your current initiative?`,
            action: { type: 'quote', payload: 'Requesting an executive consultation with Founder & CEO Aymane Assaidi to discuss our upcoming initiative.', label: 'Request Executive Quote' }
        };
}

function initConciergeGreeting() {
    if (!aiMessagesEl) return;
    aiMessagesEl.innerHTML = '';
    if (aiCurrentLang === 'ar') {
        appendAiMessage(
            'ai',
            `مرحباً بك في <strong class="text-white">VELA (VELORANTIS INTERNATIONAL TECHNOLOGIES)</strong>. أنا مستشارك التنفيذي الذكي—اسألني عن خدماتنا في هندسة الأنظمة، الذكاء الاصطناعي، مشاعرنا وفلسفتنا، أو احجز استشارة مباشرة مع المؤسس والمدير التنفيذي <strong class="text-gold-hairline">Aymane Assaidi</strong>.`,
            true
        );
        if (aiInput) {
            aiInput.placeholder = 'اسأل عن الأنظمة، الذكاء الاصطناعي، مشاعرنا، أو اطلب عرض سعر...';
            aiInput.dir = 'rtl';
        }
    } else {
        appendAiMessage(
            'ai',
            `Welcome to <strong class="text-white">VELA (VELORANTIS INTERNATIONAL TECHNOLOGIES)</strong>. I am your Executive AI Concierge—ask me about our 4 technology divisions, AI &amp; data engineering, our ethos, or initiate a confidential briefing with Founder &amp; CEO <strong class="text-gold-hairline">Aymane Assaidi</strong>.`,
            false
        );
        if (aiInput) {
            aiInput.placeholder = 'Ask about Systems, AI, Our Ethos, or Aymane Assaidi...';
            aiInput.dir = 'ltr';
        }
    }
    renderAiSuggestions();
}

function setConciergeLanguage(lang) {
    aiCurrentLang = lang;
    initConciergeGreeting();
}

function handleUserAiQuery(text) {
    const trimmed = text.trim();
    if (!trimmed) return;
    const userIsRtl = /[\u0600-\u06FF]/.test(trimmed);
    appendAiMessage('user', trimmed.replace(/</g, '&lt;').replace(/>/g, '&gt;'), userIsRtl);
    if (aiInput) aiInput.value = '';

    showAiTyping();
    setTimeout(() => {
        removeAiTyping();
        const response = generateExecutiveAiReply(trimmed);
        appendAiMessage('ai', response.text, response.isRtl, response.action);
    }, 650);
}

if (aiLauncher && aiWindow) {
    aiLauncher.addEventListener('click', () => {
        const isClosed = aiWindow.classList.contains('ai-closed');
        if (isClosed) {
            aiWindow.classList.remove('ai-closed');
            aiWindow.classList.add('ai-open');
            if (aiInput) setTimeout(() => aiInput.focus(), 250);
        } else {
            aiWindow.classList.remove('ai-open');
            aiWindow.classList.add('ai-closed');
        }
    });
}

if (aiCloseBtn && aiWindow) {
    aiCloseBtn.addEventListener('click', () => {
        aiWindow.classList.remove('ai-open');
        aiWindow.classList.add('ai-closed');
    });
}

if (aiResetBtn) {
    aiResetBtn.addEventListener('click', () => {
        initConciergeGreeting();
    });
}

if (aiLangToggle) {
    aiLangToggle.addEventListener('click', () => {
        setConciergeLanguage(aiCurrentLang === 'en' ? 'ar' : 'en');
    });
}

if (aiForm && aiInput) {
    aiForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleUserAiQuery(aiInput.value);
    });
}

// Initialize VELA AI Executive Concierge on Load
initConciergeGreeting();

// 13. Live Operations Command Center Ticker
const tickerEl = document.getElementById('live-ops-ticker');
if (tickerEl) {
    const liveLogs = [
        '[LIVE] Lukas Vance (Berlin) synced Sovereign ERP Core v2.4 with Nador HQ...',
        '[LIVE] Elena Rostova (Zurich) completed Private RAG AI training for Enterprise Client...',
        '[LIVE] Marcus Sterling (London) verified Zero-Trust firewall across 12 cloud nodes...',
        '[LIVE] Aymane Assaidi (Nador HQ) approved Q4 Global Expansion & GovTech Blueprint...',
        '[LIVE] Camille Moreau (Paris) published VELA Executive Design System v4.2...'
    ];
    const staffStatuses = [
        ['Deploying', 'Code Review', 'Syncing HQ', 'Live Testing'],
        ['Training LLM', 'Optimizing RAG', 'Data Audit', 'Neural Sync'],
        ['Securing Mesh', 'Cloud Scaling', 'Zero-Trust OK', 'Node Active'],
        ['Prototyping', 'UX Audit', 'Design System', 'UI Polish']
    ];
    let statusTick = 0;
    setInterval(() => {
        statusTick++;
        document.querySelectorAll('.staff-status').forEach((badge, i) => {
            const options = staffStatuses[i % staffStatuses.length];
            badge.textContent = options[statusTick % options.length];
        });
    }, 3200);
    let logIndex = 0;
    setInterval(() => {
        logIndex = (logIndex + 1) % liveLogs.length;
        tickerEl.style.opacity = '0';
        setTimeout(() => {
            tickerEl.textContent = liveLogs[logIndex];
            tickerEl.style.opacity = '1';
        }, 300);
    }, 4500);
}
