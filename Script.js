document.addEventListener("DOMContentLoaded", () => {
  /* =========================
     MOBILE MENU
  ========================= */

  const menuButton = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");
  const desktopNav = document.querySelector(".desktop-nav");

  if (menuButton && nav && desktopNav) {
    const mobileMenu = document.createElement("div");

    mobileMenu.className = "mobile-menu";

    mobileMenu.innerHTML = `
      <a href="#home">Home</a>
      <a href="#projects">Projects</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    `;

    Object.assign(mobileMenu.style, {
      display: "none",
      position: "absolute",
      top: "82px",
      left: "0",
      right: "0",
      background: "#0d0f11",
      borderBottom: "1px solid #24272a",
      padding: "18px",
      zIndex: "1000",
      flexDirection: "column",
      gap: "4px"
    });

    document.body.appendChild(mobileMenu);

    const mobileLinks = mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(link => {
      Object.assign(link.style, {
        display: "block",
        padding: "14px 12px",
        color: "#f3f1ec",
        fontSize: "14px",
        borderBottom: "1px solid rgba(255,255,255,.05)"
      });

      link.addEventListener("click", () => {
        mobileMenu.style.display = "none";
        menuButton.textContent = "☰";
      });
    });

    menuButton.addEventListener("click", () => {
      const isOpen = mobileMenu.style.display === "flex";

      mobileMenu.style.display = isOpen ? "none" : "flex";
      menuButton.textContent = isOpen ? "☰" : "✕";
    });
  }


  /* =========================
     LANGUAGE SELECTOR
  ========================= */

  const languageButton = document.querySelector(".lang");

  if (languageButton) {
    const languageMenu = document.createElement("div");

    languageMenu.className = "language-menu";

    languageMenu.innerHTML = `
      <button data-lang="en">English</button>
      <button data-lang="tr">Türkçe</button>
      <button data-lang="ru">Русский</button>
    `;

    Object.assign(languageMenu.style, {
      display: "none",
      position: "absolute",
      top: "60px",
      right: "0",
      background: "#0d0f11",
      border: "1px solid #24272a",
      borderRadius: "6px",
      padding: "6px",
      minWidth: "130px",
      zIndex: "1001",
      boxShadow: "0 12px 30px rgba(0,0,0,.35)"
    });

    const navRight = document.querySelector(".nav-right");

    if (navRight) {
      navRight.style.position = "relative";
      navRight.appendChild(languageMenu);
    }

    languageMenu.querySelectorAll("button").forEach(button => {
      Object.assign(button.style, {
        display: "block",
        width: "100%",
        background: "none",
        border: "0",
        color: "#f3f1ec",
        textAlign: "left",
        padding: "9px 10px",
        cursor: "pointer",
        fontSize: "12px"
      });

      button.addEventListener("click", () => {
        const selectedLanguage = button.dataset.lang;

        languageButton.innerHTML =
          selectedLanguage.toUpperCase() + " <span>⌄</span>";

        languageMenu.style.display = "none";

        setLanguage(selectedLanguage);
      });
    });

    languageButton.addEventListener("click", () => {
      const isOpen = languageMenu.style.display === "block";
      languageMenu.style.display = isOpen ? "none" : "block";
    });
  }


  /* =========================
     LANGUAGE SYSTEM
  ========================= */

  const translations = {
    en: {
      home: "Home",
      projects: "Projects",
      about: "About",
      contact: "Contact",

      eyebrow: "BURION STUDIO",

      heroTitle: `Ideas,<br>built into <em>reality.</em>`,
      heroLead:
        "Independent developer creating games, applications and digital experiences from idea to release.",

      explore: "Explore the studio",
      getInTouch: "Get in touch",

      whatIBuild: "WHAT I BUILD",
      buildTitle: `Turning ideas into <em>digital products.</em>`,

      games: "Games",
      apps: "Apps",
      digital: "Digital Experiences",

      featured: "FEATURED PROJECTS",
      comingNext: "What's coming next.",
      projectsText:
        "New projects are in development. Stay tuned for updates.",

      aboutEyebrow: "ABOUT",
      aboutTitle: `The person behind<br>Burion Studio.`,

      about1: "Hi, I'm <strong>İrfan Aslan BÜRİAN.</strong>",
      about2:
        "I'm an independent developer based in Türkiye. I build games, applications and digital products from scratch.",
      about3:
        "I handle everything: code, design, systems, and the problems in between.",
      about4:
        "Burion Studio is my space to create, experiment and build things that matter.",

      contactEyebrow: "LET'S WORK TOGETHER",
      contactTitle:
        `Have an idea?<br>Let's build something<br>worth making.`,

      send: "Send Message",

      footer:
        "Independent developer creating games, apps and digital experiences."
    },

    tr: {
      home: "Ana Sayfa",
      projects: "Projeler",
      about: "Hakkında",
      contact: "İletişim",

      eyebrow: "BURION STUDIO",

      heroTitle: `Fikirleri,<br><em>gerçeğe</em> dönüştürüyoruz.`,
      heroLead:
        "Fikirden yayınlanmaya kadar oyunlar, uygulamalar ve dijital deneyimler geliştiren bağımsız geliştirici.",

      explore: "Stüdyoyu keşfet",
      getInTouch: "İletişime geç",

      whatIBuild: "NELER GELİŞTİRİYORUM",
      buildTitle: `Fikirleri <em>dijital ürünlere</em> dönüştürüyorum.`,

      games: "Oyunlar",
      apps: "Uygulamalar",
      digital: "Dijital Deneyimler",

      featured: "ÖNE ÇIKAN PROJELER",
      comingNext: "Sırada ne var?",
      projectsText:
        "Yeni projeler geliştirme aşamasında. Güncellemeler için takipte kalın.",

      aboutEyebrow: "HAKKINDA",
      aboutTitle: `Burion Studio'nun<br>arkasındaki kişi.`,

      about1: "Merhaba, ben <strong>İrfan Aslan BÜRİAN.</strong>",
      about2:
        "Türkiye'de yaşayan bağımsız bir geliştiriciyim. Oyunları, uygulamaları ve dijital ürünleri sıfırdan geliştiriyorum.",
      about3:
        "Kod, tasarım, sistemler ve aradaki tüm problemlerle kendim ilgileniyorum.",
      about4:
        "Burion Studio; üretmek, denemek ve değerli işler ortaya koymak için oluşturduğum kişisel stüdyom.",

      contactEyebrow: "BİRLİKTE ÇALIŞALIM",
      contactTitle:
        `Bir fikrin mi var?<br>Yapmaya değer<br>bir şey geliştirelim.`,

      send: "Mesaj Gönder",

      footer:
        "Oyunlar, uygulamalar ve dijital deneyimler geliştiren bağımsız geliştirici."
    },

    ru: {
      home: "Главная",
      projects: "Проекты",
      about: "Обо мне",
      contact: "Контакты",

      eyebrow: "BURION STUDIO",

      heroTitle: `Идеи,<br>превращённые в <em>реальность.</em>`,
      heroLead:
        "Независимый разработчик, создающий игры, приложения и цифровые продукты от идеи до релиза.",

      explore: "Исследовать студию",
      getInTouch: "Связаться",

      whatIBuild: "ЧТО Я СОЗДАЮ",
      buildTitle: `Превращаю идеи в <em>цифровые продукты.</em>`,

      games: "Игры",
      apps: "Приложения",
      digital: "Цифровые продукты",

      featured: "ИЗБРАННЫЕ ПРОЕКТЫ",
      comingNext: "Что будет дальше?",
      projectsText:
        "Новые проекты находятся в разработке. Следите за обновлениями.",

      aboutEyebrow: "ОБО МНЕ",
      aboutTitle: `Человек, стоящий<br>за Burion Studio.`,

      about1: "Привет, я <strong>İrfan Aslan BÜRİAN.</strong>",
      about2:
        "Я независимый разработчик из Турции. Создаю игры, приложения и цифровые продукты с нуля.",
      about3:
        "Я самостоятельно занимаюсь кодом, дизайном, системами и всеми возникающими задачами.",
      about4:
        "Burion Studio — моё пространство для создания, экспериментов и разработки действительно важных вещей.",

      contactEyebrow: "ДАВАЙТЕ СОЗДАДИМ ВМЕСТЕ",
      contactTitle:
        `Есть идея?<br>Давайте создадим<br>что-то стоящее.`,

      send: "Отправить сообщение",

      footer:
        "Независимый разработчик игр, приложений и цифровых продуктов."
    }
  };


  function setLanguage(language) {
    const t = translations[language];

    if (!t) return;

    document.documentElement.lang = language;

    const desktopLinks = document.querySelectorAll(".desktop-nav a");

    if (desktopLinks.length >= 4) {
      desktopLinks[0].textContent = t.home;
      desktopLinks[1].textContent = t.projects;
      desktopLinks[2].textContent = t.about;
      desktopLinks[3].textContent = t.contact;
    }

    const mobileLinks = document.querySelectorAll(".mobile-menu a");

    if (mobileLinks.length >= 4) {
      mobileLinks[0].textContent = t.home;
      mobileLinks[1].textContent = t.projects;
      mobileLinks[2].textContent = t.about;
      mobileLinks[3].textContent = t.contact;
    }

    const hero = document.querySelector(".hero");

    if (hero) {
      const heroEyebrow = hero.querySelector(".eyebrow");
      const heroTitle = hero.querySelector("h1");
      const heroLead = hero.querySelector(".lead");
      const buttons = hero.querySelectorAll(".btn");

      if (heroEyebrow) heroEyebrow.textContent = t.eyebrow;
      if (heroTitle) heroTitle.innerHTML = t.heroTitle;
      if (heroLead) heroLead.textContent = t.heroLead;

      if (buttons[0]) {
        buttons[0].innerHTML = `${t.explore} <span>→</span>`;
      }

      if (buttons[1]) {
        buttons[1].innerHTML = `${t.getInTouch} <span>→</span>`;
      }
    }

    const buildSection = document.querySelector(".build-section");

    if (buildSection) {
      const introEyebrow = buildSection.querySelector(".eyebrow");
      const introTitle = buildSection.querySelector("h2");
      const cards = buildSection.querySelectorAll(".card h3");

      if (introEyebrow) introEyebrow.textContent = t.whatIBuild;
      if (introTitle) introTitle.innerHTML = t.buildTitle;

      if (cards[0]) cards[0].textContent = t.games;
      if (cards[1]) cards[1].textContent = t.apps;
      if (cards[2]) cards[2].textContent = t.digital;
    }

    const projectsPanel = document.querySelector(".projects-panel");

    if (projectsPanel) {
      const eyebrow = projectsPanel.querySelector(".eyebrow");
      const title = projectsPanel.querySelector("h2");
      const paragraph = projectsPanel.querySelector("p:not(.eyebrow)");

      if (eyebrow) eyebrow.textContent = t.featured;
      if (title) title.textContent = t.comingNext;
      if (paragraph) paragraph.textContent = t.projectsText;
    }

    const aboutPanel = document.querySelector("#about");

    if (aboutPanel) {
      const eyebrow = aboutPanel.querySelector(".eyebrow");
      const title = aboutPanel.querySelector("h2");
      const paragraphs = aboutPanel.querySelectorAll("p");

      if (eyebrow) eyebrow.textContent = t.aboutEyebrow;
      if (title) title.innerHTML = t.aboutTitle;

      if (paragraphs[0]) paragraphs[0].innerHTML = t.about1;
      if (paragraphs[1]) paragraphs[1].textContent = t.about2;
      if (paragraphs[2]) paragraphs[2].textContent = t.about3;
      if (paragraphs[3]) paragraphs[3].textContent = t.about4;
    }

    const contactPanel = document.querySelector(".contact-panel");

    if (contactPanel) {
      const eyebrow = contactPanel.querySelector(".eyebrow");
      const title = contactPanel.querySelector("h2");
      const button = contactPanel.querySelector("form .btn");

      if (eyebrow) eyebrow.textContent = t.contactEyebrow;
      if (title) title.innerHTML = t.contactTitle;
      if (button) button.innerHTML = `${t.send} <span>→</span>`;
    }

    const footerText = document.querySelector(".footer > p");

    if (footerText) {
      footerText.textContent = t.footer;
    }

    localStorage.setItem("burionLanguage", language);
  }


  /* =========================
     CONTACT FORM
  ========================= */

  const contactForm = document.querySelector("#contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", event => {
      event.preventDefault();

      const formData = new FormData(contactForm);

      const name = formData.get("name");
      const email = formData.get("email");
      const subject = formData.get("subject") || "Burion Studio Contact";
      const message = formData.get("message");

      const body =
        `Name: ${name}\n\n` +
        `Email: ${email}\n\n` +
        `Message:\n${message}`;

      const mailto =
        `mailto:support@burionstudio.com` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(body)}`;

      window.location.href = mailto;
    });
  }


  /* =========================
     ACTIVE NAVIGATION
  ========================= */

  const sections = document.querySelectorAll("main section[id]");

  const navLinks = document.querySelectorAll(
    '.desktop-nav a[href^="#"]'
  );

  if (sections.length && navLinks.length) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            navLinks.forEach(link => {
              link.classList.remove("active");

              if (
                link.getAttribute("href") ===
                `#${entry.target.id}`
              ) {
                link.classList.add("active");
              }
            });
          }
        });
      },
      {
        threshold: 0.35
      }
    );

    sections.forEach(section => observer.observe(section));
  }


  /* =========================
     RESTORE SAVED LANGUAGE
  ========================= */

  const savedLanguage =
    localStorage.getItem("burionLanguage") || "en";

  setLanguage(savedLanguage);
});
