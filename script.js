// Mobile menu toggle and small footer enhancement.
const navToggle = document.getElementById("navToggle");
const primaryMenu = document.getElementById("primaryMenu");
const languageSelect = document.getElementById("languageSelect");

const translations = {
  en: {
    meta_title: "Mindwise | Helping Adults Understand the Digital World of Teens",
    meta_description:
      "Mindwise helps adults understand teen digital culture with calm, reliable guidance, weekly insights, and expert-led support.",
    nav_problem: "The Problem",
    nav_features: "Features",
    nav_voices: "Meet the Voices",
    nav_pricing: "Pricing",
    nav_download: "Download",
    kicker: "Mindwise App",
    hero_title: "Helping Adults Understand the Digital World of Teens",
    hero_subheadline: "Calm, reliable guidance for navigating today’s online culture",
    hero_copy:
      "Mindwise turns confusing online trends into practical, supportive insights so adults can guide teens with confidence.",
    cta_app_store: "Download on App Store - Free",
    cta_google_play: "Download on Google Play - Free",
    weekly_title: "What You Get Weekly",
    weekly_item_1: "Trend explainers in plain language",
    weekly_item_2: "Conversation starters for real-life moments",
    weekly_item_3: "Expert-backed guidance without alarmism",
    problem_title: "The Problem",
    problem_copy:
      "Many adults want to support teens online but feel left behind by fast-changing platforms, slang, social pressures, and trends. Created by high school students who are living this digital world every day, Mindwise brings an inside perspective to help bridge that gap with steady, judgment-free guidance that supports trust and open communication.",
    features_title: "Key Features",
    feature_free_title: "Free App Access",
    feature_free_copy: "Mindwise is free to download and use.",
    feature_1_title: "Weekly Insights",
    feature_1_copy: "Short, practical updates on new trends, apps, and online behaviors.",
    feature_2_title: "WiserAI Chatbot",
    feature_2_copy: "Get clear answers to tough questions in a calm, evidence-based tone.",
    feature_3_title: "Question Wall",
    feature_3_copy: "See common concerns from other parents and learn from shared experiences.",
    feature_4_title: "Monthly Live Guest Sessions",
    feature_4_copy: "Hear directly from psychologists, educators, and digital safety specialists.",
    feature_5_title: "Personalized Quiz",
    feature_5_copy: "Get recommendations tailored to your family’s age, needs, and goals.",
    voices_title: "Meet the Voices",
    voices_copy:
      "Mindwise was created by a team of high school students who are living the digital experience every day. As members of the same generation that parents are trying to understand, we have firsthand insight into online trends, social media culture, digital pressures, and the way teens actually think and communicate. Our perspective allows us to bridge the gap between parents and teens in a way that feels honest, relevant, and real. We didn't build Mindwise from the outside looking in - we built it from within the world parents are trying to navigate, offering clarity, empathy, and understanding that can truly make a difference.",
    cofounder_label: "Co-Founder, Mindwise",
    juliette_role:
      "Focused on defining the problem, researching online safety, and designing the app's layout and experience.",
    nara_role:
      "Focused on shaping the app's concept, features, and overall direction while collaborating on every stage of development.",
    pricing_title: "Special Guest Session Pricing",
    price_1_title: "Single Session",
    price_1_copy: "One live expert session with replay access.",
    price_2_title: "5-Session Package",
    price_2_copy: "Five sessions with priority Q&A submission.",
    price_3_title: "Yearly Access",
    price_3_copy: "All guest sessions for 12 months plus archives.",
    download_title: "Start with calm, practical guidance today",
    download_copy:
      "Download Mindwise and stay informed with trusted support designed for adults raising teens in a digital-first world.",
    footer_rights: "All rights reserved.",
    footer_terms: "Terms & Conditions",
    footer_privacy: "Privacy Policy",
    footer_contact: "Contact",
  },
  fr: {
    meta_title: "Mindwise | Aider les adultes a comprendre le monde numerique des ados",
    meta_description:
      "Mindwise aide les adultes a comprendre la culture numerique des adolescents avec des conseils calmes et fiables, des analyses hebdomadaires et un soutien d'experts.",
    nav_problem: "Le probleme",
    nav_features: "Fonctionnalites",
    nav_voices: "Notre equipe",
    nav_pricing: "Tarifs",
    nav_download: "Telecharger",
    kicker: "Application Mindwise",
    hero_title: "Aider les adultes a comprendre le monde numerique des ados",
    hero_subheadline: "Des conseils calmes et fiables pour naviguer la culture en ligne d'aujourd'hui",
    hero_copy:
      "Mindwise transforme les tendances en ligne complexes en conseils pratiques et bienveillants pour guider les ados avec confiance.",
    cta_app_store: "Telecharger sur l'App Store - Gratuit",
    cta_google_play: "Telecharger sur Google Play - Gratuit",
    weekly_title: "Ce que vous recevez chaque semaine",
    weekly_item_1: "Explications des tendances en langage clair",
    weekly_item_2: "Pistes de discussion pour les situations du quotidien",
    weekly_item_3: "Conseils d'experts sans alarmisme",
    problem_title: "Le probleme",
    problem_copy:
      "Beaucoup d'adultes veulent accompagner les ados en ligne mais se sentent depasses par l'evolution rapide des plateformes, du vocabulaire et des pressions sociales. Mindwise comble ce decalage avec des conseils stables, sans jugement, qui renforcent la confiance et le dialogue.",
    features_title: "Fonctionnalites cles",
    feature_free_title: "Acces gratuit a l'application",
    feature_free_copy: "Mindwise est gratuite a telecharger et a utiliser.",
    feature_1_title: "Analyses hebdomadaires",
    feature_1_copy: "Des mises a jour courtes et pratiques sur les tendances, applis et comportements en ligne.",
    feature_2_title: "Chatbot WiserAI",
    feature_2_copy: "Obtenez des reponses claires aux questions difficiles avec un ton calme et base sur des faits.",
    feature_3_title: "Mur de questions",
    feature_3_copy: "Decouvrez les questions frequentes d'autres parents et apprenez des experiences partagees.",
    feature_4_title: "Sessions invitees mensuelles en direct",
    feature_4_copy: "Ecoutez directement des psychologues, educateurs et specialistes de la securite numerique.",
    feature_5_title: "Quiz personnalise",
    feature_5_copy: "Recevez des recommandations adaptees a l'age, aux besoins et aux objectifs de votre famille.",
    voices_title: "Notre equipe",
    voices_copy:
      "Mindwise a ete fonde par des educateurs, cliniciens et parents qui ont vu a quel point il est difficile de suivre la vie numerique des ados. Notre mission est d'humaniser les conseils: moins de panique, plus de comprehension.",
    cofounder_label: "Co-fondatrice, Mindwise",
    juliette_role:
      "Axee sur la definition du probleme, la recherche sur la securite en ligne et la conception de la mise en page et de l'experience de l'application.",
    nara_role:
      "Axee sur l'orientation du concept de l'application, de ses fonctionnalites et de sa direction generale, tout en collaborant a chaque etape du developpement.",
    pricing_title: "Tarifs des sessions speciales avec invites",
    price_1_title: "Session unique",
    price_1_copy: "Une session en direct avec expert et acces au replay.",
    price_2_title: "Pack 5 sessions",
    price_2_copy: "Cinq sessions avec soumission prioritaire des questions.",
    price_3_title: "Acces annuel",
    price_3_copy: "Toutes les sessions invitees pendant 12 mois, plus les archives.",
    download_title: "Commencez aujourd'hui avec des conseils calmes et pratiques",
    download_copy:
      "Telechargez Mindwise et restez informe avec un accompagnement de confiance pour les adultes qui elevent des ados dans un monde numerique.",
    footer_rights: "Tous droits reserves.",
    footer_terms: "Conditions generales",
    footer_privacy: "Politique de confidentialite",
    footer_contact: "Contact",
  },
};

function setLanguage(lang) {
  const selected = translations[lang] ? lang : "en";
  const dict = translations[selected];

  document.documentElement.lang = selected;
  localStorage.setItem("mindwise_lang", selected);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key && dict[key]) {
      el.textContent = dict[key];
    }
  });

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && dict.meta_description) {
    metaDescription.setAttribute("content", dict.meta_description);
  }
  if (dict.meta_title) {
    document.title = dict.meta_title;
  }
}

if (navToggle && primaryMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = primaryMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  primaryMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      primaryMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

if (languageSelect) {
  const storedLanguage = localStorage.getItem("mindwise_lang") || "en";
  languageSelect.value = storedLanguage;
  setLanguage(storedLanguage);

  languageSelect.addEventListener("change", (event) => {
    const nextLang = event.target.value;
    setLanguage(nextLang);
  });
}

const revealTargets = document.querySelectorAll(
  ".kicker, h1, .subheadline, .hero-copy, .section h2, .section h3, .section p, .feature-card, .price-card, .voice-card"
);

const sectionAnchors = {
  problem: document.querySelector('a[href="#problem"]'),
  features: document.querySelector('a[href="#features"]'),
  voices: document.querySelector('a[href="#voices"]'),
  pricing: document.querySelector('a[href="#pricing"]'),
  download: document.querySelector('a[href="#download"]'),
};

if ("IntersectionObserver" in window) {
  revealTargets.forEach((el) => el.classList.add("reveal-label"));

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
  );

  revealTargets.forEach((el) => revealObserver.observe(el));

  const sections = document.querySelectorAll("main section[id]");
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        Object.values(sectionAnchors).forEach((link) => {
          if (link) {
            link.classList.remove("active");
          }
        });
        const activeLink = sectionAnchors[entry.target.id];
        if (activeLink) {
          activeLink.classList.add("active");
        }
      });
    },
    { threshold: 0.45 }
  );

  sections.forEach((section) => navObserver.observe(section));
}
