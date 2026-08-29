document.addEventListener("DOMContentLoaded", () => {

  /* =========================================================
     TRANSLATIONS
  ========================================================= */

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

      buildTitle:
        `Turning ideas into <em>digital products.</em>`,

      games: "Games",
      apps: "Apps",
      digital: "Digital Experiences",

      featured: "FEATURED PROJECTS",

      comingNext:
        "What's coming next.",

      projectsText:
        "New projects are in development. Stay tuned for updates.",

      aboutEyebrow: "ABOUT",

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

      heroTitle:
        `Fikirleri,<br><em>gerçeğe</em> dönüştürüyoruz.`,

      heroLead:
        "Fikirden yayınlanmaya kadar oyunlar, uygulamalar ve dijital deneyimler geliştiren bağımsız geliştirici.",

      explore: "Stüdyoyu keşfet",
      getInTouch: "İletişime geç",

      whatIBuild:
        "NELER GELİŞTİRİYORUM",

      buildTitle:
        `Fikirleri <em>dijital ürünlere</em> dönüştürüyorum.`,

      games: "Oyunlar",
      apps: "Uygulamalar",
      digital: "Dijital Deneyimler",

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

      games: "Игры",
      apps: "Приложения",
      digital: "Цифровые продукты",

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
     ELEMENTS
  ========================================================= */

  const menuButton =
    document.querySelector(".menu-btn");

  const nav =
    document.querySelector(".nav");

  const languageButton =
    document.querySelector(".lang");

  const navRight =
    document.querySelector(".nav-right");


  let mobileMenu = null;
  let languageMenu = null;


  /* =========================================================
     DESKTOP LANGUAGE MENU
  ========================================================= */

  if (languageButton && navRight) {

    languageMenu =
      document.createElement("div");

    languageMenu.className =
      "language-menu";

    languageMenu.innerHTML = `
      <button type="button" data-lang="en">
        English
      </button>

      <button type="button" data-lang="tr">
        Türkçe
      </button>

      <button type="button" data-lang="ru">
        Русский
      </button>
    `;

    languageMenu.hidden = true;

    navRight.appendChild(languageMenu);


    languageButton.addEventListener(
      "click",
      event => {

        event.stopPropagation();

        languageMenu.hidden =
          !languageMenu.hidden;

      }
    );


    languageMenu
      .querySelectorAll("button")
      .forEach(button => {

        button.addEventListener(
          "click",
          event => {

            event.stopPropagation();

            const language =
              button.dataset.lang;

            setLanguage(language);

            languageMenu.hidden = true;

          }
        );

      });

  }


  /* =========================================================
     MOBILE MENU
  ========================================================= */

  if (menuButton && nav) {

    mobileMenu =
      document.createElement("div");

    mobileMenu.className =
      "mobile-menu";

    mobileMenu.innerHTML = `

      <nav class="mobile-nav" aria-label="Mobile navigation">

        <a href="#home" data-nav="home">
          Home
        </a>

        <a href="#projects" data-nav="projects">
          Projects
        </a>

        <a href="#about" data-nav="about">
          About
        </a>

        <a href="#contact" data-nav="contact">
          Contact
        </a>

      </nav>

      <div class="mobile-language">

        <span>LANGUAGE</span>

        <div class="mobile-language-buttons">

          <button
            type="button"
            data-lang="en"
          >
            English
          </button>

          <button
            type="button"
            data-lang="tr"
          >
            Türkçe
          </button>

          <button
            type="button"
            data-lang="ru"
          >
            Русский
          </button>

        </div>

      </div>

    `;

    mobileMenu.hidden = true;

    document.body.appendChild(mobileMenu);


    /* MENU OPEN / CLOSE */

    menuButton.addEventListener(
      "click",
      event => {

        event.stopPropagation();

        const isOpen =
          !mobileMenu.hidden;

        mobileMenu.hidden = isOpen;

        menuButton.textContent =
          isOpen ? "☰" : "✕";

        menuButton.setAttribute(
          "aria-expanded",
          String(!isOpen)
        );

      }
    );


    /* MOBILE NAV LINKS */

    mobileMenu
      .querySelectorAll(".mobile-nav a")
      .forEach(link => {

        link.addEventListener(
          "click",
          () => {

            mobileMenu.hidden = true;

            menuButton.textContent = "☰";

            menuButton.setAttribute(
              "aria-expanded",
              "false"
            );

          }
        );

      });


    /* MOBILE LANGUAGE BUTTONS */

    mobileMenu
      .querySelectorAll(
        ".mobile-language-buttons button"
      )
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            const language =
              button.dataset.lang;

            setLanguage(language);

            mobileMenu.hidden = true;

            menuButton.textContent = "☰";

            menuButton.setAttribute(
              "aria-expanded",
              "false"
            );

          }
        );

      });

  }


  /* =========================================================
     CLOSE MENUS WHEN CLICKING OUTSIDE
  ========================================================= */

  document.addEventListener(
    "click",
    event => {

      if (
        languageMenu &&
        !languageMenu.hidden &&
        !languageMenu.contains(event.target) &&
        event.target !== languageButton
      ) {

        languageMenu.hidden = true;

      }


      if (
        mobileMenu &&
        !mobileMenu.hidden &&
        !mobileMenu.contains(event.target) &&
        event.target !== menuButton
      ) {

        mobileMenu.hidden = true;

        if (menuButton) {
          menuButton.textContent = "☰";

          menuButton.setAttribute(
            "aria-expanded",
            "false"
          );
        }

      }

    }
  );


  /* =========================================================
     SET LANGUAGE
  ========================================================= */

  function setLanguage(language) {

    const t =
      translations[language];

    if (!t) return;


    document.documentElement.lang =
      language;


    /* -----------------------------------------
       LANGUAGE BUTTON
    ----------------------------------------- */

    if (languageButton) {

      languageButton.innerHTML =
        `${language.toUpperCase()} <span>⌄</span>`;

    }


    /* -----------------------------------------
       DESKTOP NAV
    ----------------------------------------- */

    const desktopLinks =
      document.querySelectorAll(
        ".desktop-nav a"
      );

    if (desktopLinks.length >= 4) {

      desktopLinks[0].textContent = t.home;
      desktopLinks[1].textContent = t.projects;
      desktopLinks[2].textContent = t.about;
      desktopLinks[3].textContent = t.contact;

    }


    /* -----------------------------------------
       MOBILE NAV
    ----------------------------------------- */

    if (mobileMenu) {

      const mobileLinks =
        mobileMenu.querySelectorAll(
          ".mobile-nav a"
        );

      if (mobileLinks.length >= 4) {

        mobileLinks[0].textContent = t.home;
        mobileLinks[1].textContent = t.projects;
        mobileLinks[2].textContent = t.about;
        mobileLinks[3].textContent = t.contact;

      }

    }


    /* -----------------------------------------
       HERO
    ----------------------------------------- */

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

      if (eyebrow) {
        eyebrow.textContent =
          t.eyebrow;
      }

      if (title) {
        title.innerHTML =
          t.heroTitle;
      }

      if (lead) {
        lead.textContent =
          t.heroLead;
      }

      if (buttons[0]) {

        buttons[0].innerHTML =
          `${t.explore} <span>→</span>`;

      }

      if (buttons[1]) {

        buttons[1].innerHTML =
          `${t.getInTouch} <span>→</span>`;

      }

    }


    /* -----------------------------------------
       WHAT I BUILD
    ----------------------------------------- */

    const buildSection =
      document.querySelector(
        ".build-section"
      );

    if (buildSection) {

      const eyebrow =
        buildSection.querySelector(
          ".eyebrow"
        );

      const title =
        buildSection.querySelector("h2");

      const cards =
        buildSection.querySelectorAll(
          ".card h3"
        );

      if (eyebrow) {
        eyebrow.textContent =
          t.whatIBuild;
      }

      if (title) {
        title.innerHTML =
          t.buildTitle;
      }

      if (cards[0]) {
        cards[0].textContent =
          t.games;
      }

      if (cards[1]) {
        cards[1].textContent =
          t.apps;
      }

      if (cards[2]) {
        cards[2].textContent =
          t.digital;
      }

    }


    /* -----------------------------------------
       PROJECTS
    ----------------------------------------- */

    const projectsPanel =
      document.querySelector(
        ".projects-panel"
      );

    if (projectsPanel) {

      const eyebrow =
        projectsPanel.querySelector(
          ".eyebrow"
        );

      const title =
        projectsPanel.querySelector("h2");

      const paragraph =
        projectsPanel.querySelector(
          "p:not(.eyebrow)"
        );

      if (eyebrow) {
        eyebrow.textContent =
          t.featured;
      }

      if (title) {
        title.textContent =
          t.comingNext;
      }

      if (paragraph) {
        paragraph.textContent =
          t.projectsText;
      }

    }


    /* -----------------------------------------
       ABOUT
    ----------------------------------------- */

    const aboutPanel =
      document.querySelector("#about");

    if (aboutPanel) {

      const eyebrow =
        aboutPanel.querySelector(
          ".eyebrow"
        );

      const title =
        aboutPanel.querySelector("h2");

      const paragraphs =
        aboutPanel.querySelectorAll("p");

      if (eyebrow) {
        eyebrow.textContent =
          t.aboutEyebrow;
      }

      if (title) {
        title.innerHTML =
          t.aboutTitle;
      }

      if (paragraphs[0]) {
        paragraphs[0].innerHTML =
          t.about1;
      }

      if (paragraphs[1]) {
        paragraphs[1].textContent =
          t.about2;
      }

      if (paragraphs[2]) {
        paragraphs[2].textContent =
          t.about3;
      }

      if (paragraphs[3]) {
        paragraphs[3].textContent =
          t.about4;
      }

    }


    /* -----------------------------------------
       CONTACT
    ----------------------------------------- */

    const contactPanel =
      document.querySelector(
        ".contact-panel"
      );

    if (contactPanel) {

      const eyebrow =
        contactPanel.querySelector(
          ".eyebrow"
        );

      const title =
        contactPanel.querySelector("h2");

      const button =
        contactPanel.querySelector(
          "form .btn"
        );

      if (eyebrow) {
        eyebrow.textContent =
          t.contactEyebrow;
      }

      if (title) {
        title.innerHTML =
          t.contactTitle;
      }

      if (button) {

        button.innerHTML =
          `${t.send} <span>→</span>`;

      }

    }


    /* -----------------------------------------
       FOOTER
    ----------------------------------------- */

    const footerText =
      document.querySelector(
        ".footer > p"
      );

    if (footerText) {

      footerText.textContent =
        t.footer;

    }


    /* -----------------------------------------
       SAVE LANGUAGE
    ----------------------------------------- */

    localStorage.setItem(
      "burionLanguage",
      language
    );

  }


  /* =========================================================
     CONTACT FORM
  ========================================================= */

  const contactForm =
    document.querySelector(
      "#contactForm"
    );

  if (contactForm) {

    contactForm.addEventListener(
      "submit",
      event => {

        event.preventDefault();

        const formData =
          new FormData(contactForm);

        const name =
          formData.get("name") || "";

        const email =
          formData.get("email") || "";

        const subject =
          formData.get("subject") ||
          "Burion Studio Contact";

        const message =
          formData.get("message") || "";


        const body =
          `Name: ${name}\n\n` +
          `Email: ${email}\n\n` +
          `Message:\n${message}`;


        const mailto =
          `mailto:support@burionstudio.com` +
          `?subject=${encodeURIComponent(subject)}` +
          `&body=${encodeURIComponent(body)}`;


        window.location.href =
          mailto;

      }
    );

  }


  /* =========================================================
     ACTIVE NAVIGATION
  ========================================================= */

  const sections =
    document.querySelectorAll(
      "main section[id]"
    );

  const navLinks =
    document.querySelectorAll(
      '.desktop-nav a[href^="#"]'
    );


  if (
    sections.length &&
    navLinks.length &&
    "IntersectionObserver" in window
  ) {

    const observer =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (!entry.isIntersecting) {
              return;
            }

            navLinks.forEach(link => {

              link.classList.remove(
                "active"
              );

              if (
                link.getAttribute("href") ===
                `#${entry.target.id}`
              ) {

                link.classList.add(
                  "active"
                );

              }

            });

          });

        },
        {
          threshold:0.35
        }
      );


    sections.forEach(section => {

      observer.observe(section);

    });

  }


  /* =========================================================
     RESTORE LANGUAGE
  ========================================================= */

  const savedLanguage =
    localStorage.getItem(
      "burionLanguage"
    ) || "en";


  setLanguage(savedLanguage);


  /* =========================================================
     INITIAL MENU STATE
  ========================================================= */

  if (menuButton) {

    menuButton.setAttribute(
      "aria-expanded",
      "false"
    );

  }

});
