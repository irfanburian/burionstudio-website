document.addEventListener("DOMContentLoaded", () => {

  /* =========================================================
     MOBILE MENU
  ========================================================= */

  const menuButton = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");

  let mobileMenu = null;

  if (menuButton && nav) {

    mobileMenu = document.createElement("div");

    mobileMenu.className = "mobile-menu";

    mobileMenu.innerHTML = `
      <a href="#home" data-nav="home">Home</a>
      <a href="#projects" data-nav="projects">Projects</a>
      <a href="#about" data-nav="about">About</a>
      <a href="#contact" data-nav="contact">Contact</a>
    `;

    mobileMenu.style.display = "none";

    document.body.appendChild(mobileMenu);

    menuButton.addEventListener("click", () => {

      const isOpen = mobileMenu.style.display === "block";

      mobileMenu.style.display = isOpen ? "none" : "block";

      menuButton.textContent = isOpen ? "☰" : "✕";

    });

    mobileMenu.querySelectorAll("a").forEach(link => {

      link.addEventListener("click", () => {

        mobileMenu.style.display = "none";

        menuButton.textContent = "☰";

      });

    });
  }


  /* =========================================================
     LANGUAGE SYSTEM
  ========================================================= */

  const translations = {

    en: {

      home: "Home",
      projects: "Projects",
      about: "About",
      contact: "Contact",

      eyebrow: "BURION STUDIO",

      heroTitle:
        `Ideas,<br>built into <em>reality.</em>`,

      heroLead:
        "Independent developer creating games, applications and digital experiences from idea to release.",

      explore:
        "Explore the studio",

      getInTouch:
        "Get in touch",

      whatIBuild:
        "WHAT I BUILD",

      buildTitle:
        `Turning ideas into <em>digital products.</em>`,

      games:
        "Games",

      apps:
        "Apps",

      digital:
        "Digital Experiences",

      featured:
        "FEATURED PROJECTS",

      comingNext:
        "What's coming next.",

      projectsText:
        "New projects are in development. Stay tuned for updates.",

      aboutEyebrow:
        "ABOUT",

      aboutTitle:
        `The person behind<br>Burion Studio.`,

      about1:
        "Hi, I'm <strong>İrfan Aslan BÜRİAN.</strong>",

      about2:
        "I'm an independent developer based in Türkiye. I build games, applications and digital products from scratch.",

      about3:
        "I handle everything: code, design, systems, and the problems in between.",

      about4:
        "Burion Studio is my space to create, experiment and build things that matter.",

      contactEyebrow:
        "LET'S WORK TOGETHER",

      contactTitle:
        `Have an idea?<br>Let's build something<br>worth making.`,

      send:
        "Send Message",

      footer:
        "Independent developer creating games, apps and digital experiences."

    },


    tr: {

      home: "Ana Sayfa",
      projects: "Projeler",
      about: "Hakkında",
      contact: "İletişim",

      eyebrow: "BURION STUDIO",

      heroTitle:
        `Fikirleri,<br><em>gerçeğe</em> dönüştürüyoruz.`,

      heroLead:
        "Fikirden yayınlanmaya kadar oyunlar, uygulamalar ve dijital deneyimler geliştiren bağımsız geliştirici.",

      explore:
        "Stüdyoyu keşfet",

      getInTouch:
        "İletişime geç",

      whatIBuild:
        "NELER GELİŞTİRİYORUM",

      buildTitle:
        `Fikirleri <em>dijital ürünlere</em> dönüştürüyorum.`,

      games:
        "Oyunlar",

      apps:
        "Uygulamalar",

      digital:
        "Dijital Deneyimler",

      featured:
        "ÖNE ÇIKAN PROJELER",

      comingNext:
        "Sırada ne var?",

      projectsText:
        "Yeni projeler geliştirme aşamasında. Güncellemeler için takipte kalın.",

      aboutEyebrow:
        "HAKKINDA",

      aboutTitle:
        `Burion Studio'nun<br>arkasındaki kişi.`,

      about1:
        "Merhaba, ben <strong>İrfan Aslan BÜRİAN.</strong>",

      about2:
        "Türkiye'de yaşayan bağımsız bir geliştiriciyim. Oyunları, uygulamaları ve dijital ürünleri sıfırdan geliştiriyorum.",

      about3:
        "Kod, tasarım, sistemler ve aradaki tüm problemlerle kendim ilgileniyorum.",

      about4:
        "Burion Studio; üretmek, denemek ve değerli işler ortaya koymak için oluşturduğum kişisel stüdyom.",

      contactEyebrow:
        "BİRLİKTE ÇALIŞALIM",

      contactTitle:
        `Bir fikrin mi var?<br>Yapmaya değer<br>bir şey geliştirelim.`,

      send:
        "Mesaj Gönder",

      footer:
        "Oyunlar, uygulamalar ve dijital deneyimler geliştiren bağımsız geliştirici."

    },


    ru: {

      home: "Главная",
      projects: "Проекты",
      about: "Обо мне",
      contact: "Контакты",

      eyebrow: "BURION STUDIO",

      heroTitle:
        `Идеи,<br>превращённые в <em>реальность.</em>`,

      heroLead:
        "Независимый разработчик, создающий игры, приложения и цифровые продукты от идеи до релиза.",

      explore:
        "Исследовать студию",

      getInTouch:
        "Связаться",

      whatIBuild:
        "ЧТО Я СОЗДАЮ",

      buildTitle:
        `Превращаю идеи в <em>цифровые продукты.</em>`,

      games:
        "Игры",

      apps:
        "Приложения",

      digital:
        "Цифровые продукты",

      featured:
        "ИЗБРАННЫЕ ПРОЕКТЫ",

      comingNext:
        "Что будет дальше?",

      projectsText:
        "Новые проекты находятся в разработке. Следите за обновлениями.",

      aboutEyebrow:
        "ОБО МНЕ",

      aboutTitle:
        `Человек, стоящий<br>за Burion Studio.`,

      about1:
        "Привет, я <strong>İrfan Aslan BÜRİAN.</strong>",

      about2:
        "Я независимый разработчик из Турции. Создаю игры, приложения и цифровые продукты с нуля.",

      about3:
        "Я самостоятельно занимаюсь кодом, дизайном, системами и всеми возникающими задачами.",

      about4:
        "Burion Studio — моё пространство для создания, экспериментов и разработки действительно важных вещей.",

      contactEyebrow:
        "ДАВАЙТЕ СОЗДАДИМ ВМЕСТЕ",

      contactTitle:
        `Есть идея?<br>Давайте создадим<br>что-то стоящее.`,

      send:
        "Отправить сообщение",

      footer:
        "Независимый разработчик игр, приложений и цифровых продуктов."

    }

  };


  /* =========================================================
     LANGUAGE SELECTOR
  ========================================================= */

  const languageButton = document.querySelector(".lang");

  let languageMenu = null;

  if (languageButton) {

    languageMenu = document.createElement("div");

    languageMenu.className = "language-menu";

    languageMenu.innerHTML = `
      <button type="button" data-lang="en">English</button>
      <button type="button" data-lang="tr">Türkçe</button>
      <button type="button" data-lang="ru">Русский</button>
    `;

    languageMenu.style.display = "none";

    const navRight = document.querySelector(".nav-right");

    if (navRight) {

      navRight.style.position = "relative";

      navRight.appendChild(languageMenu);

    }

    languageMenu.querySelectorAll("button").forEach(button => {

      button.addEventListener("click", () => {

        const language = button.dataset.lang;

        setLanguage(language);

        languageMenu.style.display = "none";

      });

    });

    languageButton.addEventListener("click", event => {

      event.stopPropagation();

      const isOpen =
        languageMenu.style.display === "block";

      languageMenu.style.display =
        isOpen ? "none" : "block";

    });

    document.addEventListener("click", event => {

      if (
        languageMenu &&
        !languageMenu.contains(event.target) &&
        event.target !== languageButton
      ) {

        languageMenu.style.display = "none";

      }

    });

  }


  /* =========================================================
     SET LANGUAGE
  ========================================================= */

  function setLanguage(language) {

    const t = translations[language];

    if (!t) return;

    document.documentElement.lang = language;


    /* NAVIGATION */

    const desktopLinks =
      document.querySelectorAll(".desktop-nav a");

    if (desktopLinks.length >= 4) {

      desktopLinks[0].textContent = t.home;
      desktopLinks[1].textContent = t.projects;
      desktopLinks[2].textContent = t.about;
      desktopLinks[3].textContent = t.contact;

    }


    if (mobileMenu) {

      const mobileLinks =
        mobileMenu.querySelectorAll("a");

      if (mobileLinks.length >= 4) {

        mobileLinks[0].textContent = t.home;
        mobileLinks[1].textContent = t.projects;
        mobileLinks[2].textContent = t.about;
        mobileLinks[3].textContent = t.contact;

      }

    }


    /* LANGUAGE BUTTON */

    if (languageButton) {

      languageButton.innerHTML =
        `${language.toUpperCase()} <span>⌄</span>`;

    }


    /* HERO */

    const hero =
      document.querySelector(".hero");

    if (hero) {

      const eyebrow =
        hero.querySelector(".eyebrow");

      const title =
        hero.querySelector("h1");

      const lead =
        hero.querySelector(".lead");

      const buttons =
        hero.querySelectorAll(".btn");

      if (eyebrow)
        eyebrow.textContent = t.eyebrow;

      if (title)
        title.innerHTML = t.heroTitle;

      if (lead)
        lead.textContent = t.heroLead;

      if (buttons[0])
        buttons[0].innerHTML =
          `${t.explore} <span>→</span>`;

      if (buttons[
