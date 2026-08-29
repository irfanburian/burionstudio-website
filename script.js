document.addEventListener("DOMContentLoaded", () => {

  /* =========================================================
     BURION STUDIO — SCRIPT V2
  ========================================================= */


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

      heroTitle:
        `Ideas,<br>built into <em>reality.</em>`,

      heroDescription:
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

      gamesText:
        "Interactive worlds, mechanics and experiences built from the ground up.",

      apps:
        "Apps",

      appsText:
        "Useful digital products designed to solve real problems.",

      digital:
        "Digital Experiences",

      digitalText:
        "Websites, systems and digital experiences with purpose.",

      featured:
        "FEATURED PROJECTS",

      comingNext:
        "What's coming next.",

      projectsText:
        "New projects are currently in development. More will be revealed as they take shape.",

      aboutEyebrow:
        "ABOUT",

      aboutTitle:
        `The person behind<br>Burion Studio.`,

      about1:
        `Hi, I'm <strong>İrfan Aslan BÜRİAN.</strong>`,

      about2:
        "I'm an independent developer based in Türkiye. I build games, applications and digital products from scratch.",

      about3:
        "I handle everything from code and design to systems, testing and the problems in between.",

      about4:
        "Burion Studio is my space to create, experiment and build things that are worth making.",

      signature:
        "İrfan Aslan BÜRİAN",

      contactEyebrow:
        "LET'S WORK TOGETHER",

      contactTitle:
        `Have an idea?<br>Let's build something<br>worth making.`,

      contactDescription:
        "Have a project, idea or collaboration in mind? Tell me about it.",

      nameLabel:
        "NAME",

      emailLabel:
        "EMAIL",

      subjectLabel:
        "SUBJECT",

      messageLabel:
        "MESSAGE",

      namePlaceholder:
        "Your name",

      emailPlaceholder:
        "you@example.com",

      subjectPlaceholder:
        "What is it about?",

      messagePlaceholder:
        "Tell me about your idea...",

      send:
        "Send Message",

      footer:
        "Independent developer creating games, apps and digital experiences.",

      footerHome:
        "Home",

      footerProjects:
        "Projects",

      footerAbout:
        "About",

      footerContact:
        "Contact"

    },


    tr: {

      home:
        "Ana Sayfa",

      projects:
        "Projeler",

      about:
        "Hakkında",

      contact:
        "İletişim",

      eyebrow:
        "BURION STUDIO",

      heroTitle:
        `Fikirleri,<br><em>gerçeğe</em> dönüştürüyorum.`,

      heroDescription:
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

      gamesText:
        "Sıfırdan oluşturulan interaktif dünyalar, mekanikler ve oyun deneyimleri.",

      apps:
        "Uygulamalar",

      appsText:
        "Gerçek problemlere çözüm üretmek için tasarlanan kullanışlı dijital ürünler.",

      digital:
        "Dijital Deneyimler",

      digitalText:
        "Amacı olan web siteleri, sistemler ve dijital deneyimler.",

      featured:
        "ÖNE ÇIKAN PROJELER",

      comingNext:
        "Sırada ne var?",

      projectsText:
        "Yeni projeler geliştirme aşamasında. Şekillendikçe daha fazlasını paylaşacağım.",

      aboutEyebrow:
        "HAKKINDA",

      aboutTitle:
        `Burion Studio'nun<br>arkasındaki kişi.`,

      about1:
        `Merhaba, ben <strong>İrfan Aslan BÜRİAN.</strong>`,

      about2:
        "Türkiye'de yaşayan bağımsız bir geliştiriciyim. Oyunları, uygulamaları ve dijital ürünleri sıfırdan geliştiriyorum.",

      about3:
        "Koddan tasarıma, sistemlerden testlere kadar tüm süreçlerle ve aradaki problemlerle kendim ilgileniyorum.",

      about4:
        "Burion Studio; üretmek, denemek ve yapmaya değer işler ortaya koymak için oluşturduğum kişisel stüdyom.",

      signature:
        "İrfan Aslan BÜRİAN",

      contactEyebrow:
        "BİRLİKTE ÇALIŞALIM",

      contactTitle:
        `Bir fikrin mi var?<br>Yapmaya değer<br>bir şey geliştirelim.`,

      contactDescription:
        "Bir projen, fikrin veya iş birliği önerin mi var? Bana anlat.",

      nameLabel:
        "İSİM",

      emailLabel:
        "E-POSTA",

      subjectLabel:
        "KONU",

      messageLabel:
        "MESAJ",

      namePlaceholder:
        "Adınız",

      emailPlaceholder:
        "siz@ornek.com",

      subjectPlaceholder:
        "Konu nedir?",

      messagePlaceholder:
        "Fikrinizden bahsedin...",

      send:
        "Mesaj Gönder",

      footer:
        "Oyunlar, uygulamalar ve dijital deneyimler geliştiren bağımsız geliştirici.",

      footerHome:
        "Ana Sayfa",

      footerProjects:
        "Projeler",

      footerAbout:
        "Hakkında",

      footerContact:
        "İletişim"

    },


    ru: {

      home:
        "Главная",

      projects:
        "Проекты",

      about:
        "Обо мне",

      contact:
        "Контакты",

      eyebrow:
        "BURION STUDIO",

      heroTitle:
        `Идеи,<br>превращаю в <em>реальность.</em>`,

      heroDescription:
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

      gamesText:
        "Интерактивные миры, механики и игровые впечатления, созданные с нуля.",

      apps:
        "Приложения",

      appsText:
        "Полезные цифровые продукты, созданные для решения реальных задач.",

      digital:
        "Цифровые продукты",

      digitalText:
        "Сайты, системы и цифровые решения с конкретной целью.",

      featured:
        "ИЗБРАННЫЕ ПРОЕКТЫ",

      comingNext:
        "Что будет дальше?",

      projectsText:
        "Новые проекты находятся в разработке. Больше информации появится по мере их развития.",

      aboutEyebrow:
        "ОБО МНЕ",

      aboutTitle:
        `Человек, стоящий<br>за Burion Studio.`,

      about1:
        `Привет, я <strong>İrfan Aslan BÜRİAN.</strong>`,

      about2:
        "Я независимый разработчик из Турции. Создаю игры, приложения и цифровые продукты с нуля.",

      about3:
        "Я самостоятельно занимаюсь кодом, дизайном, системами, тестированием и всеми возникающими задачами.",

      about4:
        "Burion Studio — моё пространство для создания, экспериментов и разработки действительно стоящих вещей.",

      signature:
        "İrfan Aslan BÜRİAN",

      contactEyebrow:
        "ДАВАЙТЕ СОЗДАДИМ ВМЕСТЕ",

      contactTitle:
        `Есть идея?<br>Давайте создадим<br>что-то стоящее.`,

      contactDescription:
        "Есть проект, идея или предложение о сотрудничестве? Расскажите мне о нём.",

      nameLabel:
        "ИМЯ",

      emailLabel:
        "ЭЛЕКТРОННАЯ ПОЧТА",

      subjectLabel:
        "ТЕМА",

      messageLabel:
        "СООБЩЕНИЕ",

      namePlaceholder:
        "Ваше имя",

      emailPlaceholder:
        "you@example.com",

      subjectPlaceholder:
        "О чём сообщение?",

      messagePlaceholder:
        "Расскажите о своей идее...",

      send:
        "Отправить сообщение",

      footer:
        "Независимый разработчик игр, приложений и цифровых продуктов.",

      footerHome:
        "Главная",

      footerProjects:
        "Проекты",

      footerAbout:
        "Обо мне",

      footerContact:
        "Контакты"

    }

  };


  /* =========================================================
     ELEMENT HELPERS
  ========================================================= */

  const $ = (selector, parent = document) =>
    parent.querySelector(selector);


  const $$ = (selector, parent = document) =>
    Array.from(parent.querySelectorAll(selector));


  /* =========================================================
     HEADER ELEMENTS
  ========================================================= */

  const menuButton =
    $(".menu-button") ||
    $(".menu-btn");

  const languageButton =
    $(".language-button") ||
    $(".lang");

  const headerActions =
    $(".header-actions") ||
    $(".nav-right");


  let mobileMenu = null;
  let languageMenu = null;


  /* =========================================================
     MOBILE MENU
  ========================================================= */

  if (menuButton) {

    mobileMenu =
      document.createElement("div");

    mobileMenu.className =
      "mobile-menu";

    mobileMenu.hidden = true;

    mobileMenu.innerHTML = `

      <nav class="mobile-nav"
           aria-label="Mobile navigation">

        <a href="#home">
          Home
        </a>

        <a href="#projects">
          Projects
        </a>

        <a href="#about">
          About
        </a>

        <a href="#contact">
          Contact
        </a>

      </nav>


      <div class="mobile-language">

        <span>
          LANGUAGE
        </span>

        <div>

          <button
            type="button"
            data-lang="en">
            English
          </button>

          <button
            type="button"
            data-lang="tr">
            Türkçe
          </button>

          <button
            type="button"
            data-lang="ru">
            Русский
          </button>

        </div>

      </div>

    `;


    document.body.appendChild(
      mobileMenu
    );


    menuButton.addEventListener(
      "click",
      event => {

        event.preventDefault();

        event.stopPropagation();

        if (mobileMenu.hidden) {

          openMobileMenu();

        } else {

          closeMobileMenu();

        }

      }
    );


    $$(".mobile-nav a", mobileMenu)
      .forEach(link => {

        link.addEventListener(
          "click",
          () => {

            closeMobileMenu();

          }
        );

      });


    $$(".mobile-language button", mobileMenu)
      .forEach(button => {

        button.addEventListener(
          "click",
          event => {

            event.stopPropagation();

            setLanguage(
              button.dataset.lang
            );

            closeMobileMenu();

          }
        );

      });

  }


  function openMobileMenu(){

    if (!mobileMenu)
      return;

    mobileMenu.hidden = false;

    menuButton.classList.add(
      "is-open"
    );

    menuButton.setAttribute(
      "aria-expanded",
      "true"
    );

    menuButton.setAttribute(
      "aria-label",
      "Close menu"
    );

  }


  function closeMobileMenu(){

    if (!mobileMenu)
      return;

    mobileMenu.hidden = true;

    if (menuButton){

      menuButton.classList.remove(
        "is-open"
      );

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

      menuButton.setAttribute(
        "aria-label",
        "Open menu"
      );

    }

  }


  /* =========================================================
     LANGUAGE MENU
  ========================================================= */

  if (
    languageButton &&
    headerActions
  ){

    languageMenu =
      document.createElement("div");

    languageMenu.className =
      "language-menu";

    languageMenu.hidden = true;

    languageMenu.innerHTML = `

      <button
        type="button"
        data-lang="en">
        English
      </button>

      <button
        type="button"
        data-lang="tr">
        Türkçe
      </button>

      <button
        type="button"
        data-lang="ru">
        Русский
      </button>

    `;


    headerActions.appendChild(
      languageMenu
    );


    languageButton.setAttribute(
      "aria-expanded",
      "false"
    );


    languageButton.addEventListener(
      "click",
      event => {

        event.preventDefault();

        event.stopPropagation();

        if (languageMenu.hidden){

          openLanguageMenu();

        } else {

          closeLanguageMenu();

        }

      }
    );


    $$("button", languageMenu)
      .forEach(button => {

        button.addEventListener(
          "click",
          event => {

            event.stopPropagation();

            setLanguage(
              button.dataset.lang
            );

            closeLanguageMenu();

          }
        );

      });

  }


  function openLanguageMenu(){

    if (!languageMenu)
      return;

    languageMenu.hidden = false;

    languageButton.setAttribute(
      "aria-expanded",
      "true"
    );

  }


  function closeLanguageMenu(){

    if (!languageMenu)
      return;

    languageMenu.hidden = true;

    if (languageButton){

      languageButton.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  }


  /* =========================================================
     CLOSE MENUS
  ========================================================= */

  document.addEventListener(
    "click",
    event => {

      if (
        mobileMenu &&
        !mobileMenu.hidden &&
        !mobileMenu.contains(event.target) &&
        event.target !== menuButton
      ){

        closeMobileMenu();

      }


      if (
        languageMenu &&
        !languageMenu.hidden &&
        !languageMenu.contains(event.target) &&
        event.target !== languageButton
      ){

        closeLanguageMenu();

      }

    }
  );


  /* =========================================================
     LANGUAGE
  ========================================================= */

  function setLanguage(language){

    const t =
      translations[language];

    if (!t)
      return;


    document.documentElement.lang =
      language;


    /* -------------------------------------------------------
       LANGUAGE BUTTON
    ------------------------------------------------------- */

    if (languageButton){

      const arrow =
        languageButton.querySelector(
          ".language-arrow"
        );

      if (arrow){

        languageButton.innerHTML =
          `${language.toUpperCase()}
           <span class="language-arrow">⌄</span>`;

      } else {

        languageButton.innerHTML =
          `${language.toUpperCase()}
           <span>⌄</span>`;

      }

    }


    /* -------------------------------------------------------
       DESKTOP NAV
    ------------------------------------------------------- */

    const navLinks =
      $$(".desktop-nav a");

    if (navLinks.length >= 4){

      navLinks[0].textContent =
        t.home;

      navLinks[1].textContent =
        t.projects;

      navLinks[2].textContent =
        t.about;

      navLinks[3].textContent =
        t.contact;

    }


    /* -------------------------------------------------------
       MOBILE NAV
    ------------------------------------------------------- */

    if (mobileMenu){

      const links =
        $$(".mobile-nav a", mobileMenu);

      if (links.length >= 4){

        links[0].textContent =
          t.home;

        links[1].textContent =
          t.projects;

        links[2].textContent =
          t.about;

        links[3].textContent =
          t.contact;

      }

    }


    /* =======================================================
       HERO
    ======================================================= */

    const hero =
      $("#home") ||
      $(".hero");


    if (hero){

      const eyebrow =
        $(".eyebrow", hero);

      const title =
        $("h1", hero);

      const description =
        $(".hero-description", hero) ||
        $(".lead", hero);

      const buttons =
        $$(".button", hero).length
          ? $$(".button", hero)
          : $$(".btn", hero);


      if (eyebrow)
        eyebrow.textContent =
          t.eyebrow;


      if (title)
        title.innerHTML =
          t.heroTitle;


      if (description)
        description.textContent =
          t.heroDescription;


      if (buttons[0])
        buttons[0].innerHTML =
          `${t.explore}
           <span>→</span>`;


      if (buttons[1])
        buttons[1].innerHTML =
          `${t.getInTouch}
           <span>→</span>`;

    }


    /* =======================================================
       BUILD
    ======================================================= */

    const buildSection =
      $(".build-section");


    if (buildSection){

      const eyebrow =
        $(".eyebrow", buildSection);

      const title =
        $("h2", buildSection);

      const cards =
        $$(".build-card", buildSection);


      if (eyebrow)
        eyebrow.textContent =
          t.whatIBuild;


      if (title)
        title.innerHTML =
          t.buildTitle;


      if (cards[0]){

        const heading =
          $("h3", cards[0]);

        const paragraph =
          $("p", cards[0]);

        if (heading)
          heading.textContent =
            t.games;

        if (paragraph)
          paragraph.textContent =
            t.gamesText;

      }


      if (cards[1]){

        const heading =
          $("h3", cards[1]);

        const paragraph =
          $("p", cards[1]);

        if (heading)
          heading.textContent =
            t.apps;

        if (paragraph)
          paragraph.textContent =
            t.appsText;

      }


      if (cards[2]){

        const heading =
          $("h3", cards[2]);

        const paragraph =
          $("p", cards[2]);

        if (heading)
          heading.textContent =
            t.digital;

        if (paragraph)
          paragraph.textContent =
            t.digitalText;

      }

    }


    /* =======================================================
       PROJECTS
    ======================================================= */

    const projectsSection =
      $("#projects") ||
      $(".projects-section");


    if (projectsSection){

      const eyebrow =
        $(".eyebrow", projectsSection);

      const title =
        $("h2", projectsSection);

      const description =
        $(".section-description", projectsSection);


      if (eyebrow)
        eyebrow.textContent =
          t.featured;


      if (title)
        title.textContent =
          t.comingNext;


      if (description)
        description.textContent =
          t.projectsText;

    }


    /* =======================================================
       ABOUT
    ======================================================= */

    const aboutSection =
      $("#about") ||
      $(".about-section");


    if (aboutSection){

      const eyebrow =
        $(".eyebrow", aboutSection);

      const title =
        $("h2", aboutSection);

      const paragraphs =
        $$("p", aboutSection);

      const signature =
        $(".signature", aboutSection);


      if (eyebrow)
        eyebrow.textContent =
          t.aboutEyebrow;


      if (title)
        title.innerHTML =
          t.aboutTitle;


      if (paragraphs[0])
        paragraphs[0].innerHTML =
          t.about1;


      if (paragraphs[1])
        paragraphs[1].textContent =
          t.about2;


      if (paragraphs[2])
        paragraphs[2].textContent =
          t.about3;


      if (paragraphs[3])
        paragraphs[3].textContent =
          t.about4;


      if (signature)
        signature.textContent =
          t.signature;

    }


    /* =======================================================
       CONTACT
    ======================================================= */

    const contactSection =
      $("#contact") ||
      $(".contact-section");


    if (contactSection){

      const eyebrow =
        $(".eyebrow", contactSection);

      const title =
        $("h2", contactSection);

      const description =
        $(".contact-heading > p",
          contactSection);

      const labels =
        $$("label", contactSection);

      const inputs =
        $$("input, textarea",
          contactSection);

      const submit =
        $(".submit-button",
          contactSection) ||
        $(".button",
          contactSection);


      if (eyebrow)
        eyebrow.textContent =
          t.contactEyebrow;


      if (title)
        title.innerHTML =
          t.contactTitle;


      if (description)
        description.textContent =
          t.contactDescription;


      /* LABELS */

      if (labels[0]){

        const span =
          $("span", labels[0]);

        if (span)
          span.textContent =
            t.nameLabel;

      }


      if (labels[1]){

        const span =
          $("span", labels[1]);

        if (span)
          span.textContent =
            t.emailLabel;

      }


      if (labels[2]){

        const span =
          $("span", labels[2]);

        if (span)
          span.textContent =
            t.subjectLabel;

      }


      if (labels[3]){

        const span =
          $("span", labels[3]);

        if (span)
          span.textContent =
            t.messageLabel;

      }


      /* PLACEHOLDERS */

      if (inputs[0])
        inputs[0].placeholder =
          t.namePlaceholder;


      if (inputs[1])
        inputs[1].placeholder =
          t.emailPlaceholder;


      if (inputs[2])
        inputs[2].placeholder =
          t.subjectPlaceholder;


      if (inputs[3])
        inputs[3].placeholder =
          t.messagePlaceholder;


      if (submit){

        submit.innerHTML =
          `${t.send}
           <span>→</span>`;

      }

    }


    /* =======================================================
       FOOTER
    ======================================================= */

    const footer =
      $(".site-footer") ||
      $(".footer");


    if (footer){

      const paragraph =
        $("p", footer);

      if (paragraph)
        paragraph.textContent =
          t.footer;


      const links =
        $$(".footer-nav a", footer).length
          ? $$(".footer-nav a", footer)
          : $$(".footer-links a", footer);


      if (links.length >= 4){

        links[0].textContent =
          t.footerHome;

        links[1].textContent =
          t.footerProjects;

        links[2].textContent =
          t.footerAbout;

        links[3].textContent =
          t.footerContact;

      }

    }


    /* =======================================================
       SAVE LANGUAGE
    ======================================================= */

    try{

      localStorage.setItem(
        "burionLanguage",
        language
      );

    }catch(error){

      console.warn(
        "Language preference could not be saved.",
        error
      );

    }

  }


  /* =========================================================
     CONTACT FORM
  ========================================================= */

  const contactForm =
    $("#contactForm") ||
    $(".contact-form");


  if (contactForm){

    contactForm.addEventListener(
      "submit",
      event => {

        event.preventDefault();


        const formData =
          new FormData(
            contactForm
          );


        const name =
          String(
            formData.get("name") || ""
          ).trim();


        const email =
          String(
            formData.get("email") || ""
          ).trim();


        const subject =
          String(
            formData.get("subject") ||
            "Burion Studio Contact"
          ).trim();


        const message =
          String(
            formData.get("message") || ""
          ).trim();


        const body =
          `Name: ${name}\n\n` +
          `Email: ${email}\n\n` +
          `Message:\n${message}`;


        const mailto =
          "mailto:support@burionstudio.com" +
          "?subject=" +
          encodeURIComponent(subject) +
          "&body=" +
          encodeURIComponent(body);


        window.location.href =
          mailto;

      }
    );

  }


  /* =========================================================
     ACTIVE NAVIGATION
  ========================================================= */

  const sections =
    $$("main section[id]");


  const desktopNavLinks =
    $$('.desktop-nav a[href^="#"]');


  if (
    sections.length &&
    desktopNavLinks.length &&
    "IntersectionObserver" in window
  ){

    const observer =
      new IntersectionObserver(
        entries => {

          entries.forEach(
            entry => {

              if (
                !entry.isIntersecting
              )
                return;


              desktopNavLinks
                .forEach(link => {

                  link.classList.remove(
                    "active"
                  );


                  if (
                    link.getAttribute(
                      "href"
                    ) ===
                    `#${entry.target.id}`
                  ){

                    link.classList.add(
                      "active"
                    );

                  }

                });

            }
          );

        },
        {
          rootMargin:
            "-25% 0px -55% 0px",

          threshold:0
        }
      );


    sections.forEach(
      section => {

        observer.observe(
          section
        );

      }
    );

  }


  /* =========================================================
     SMOOTH NAVIGATION
  ========================================================= */

  $$('a[href^="#"]')
    .forEach(link => {

      link.addEventListener(
        "click",
        event => {

          const targetId =
            link.getAttribute(
              "href"
            );


          if (
            !targetId ||
            targetId === "#"
          )
            return;


          const target =
            document.querySelector(
              targetId
            );


          if (!target)
            return;


          event.preventDefault();


          target.scrollIntoView({
            behavior:"smooth",
            block:"start"
          });

        }
      );

    });


  /* =========================================================
     INITIAL LANGUAGE
  ========================================================= */

  let savedLanguage = null;

  try{

    savedLanguage =
      localStorage.getItem(
        "burionLanguage"
      );

  }catch(error){

    savedLanguage = null;

  }


  const browserLanguage =
    (
      navigator.language ||
      "en"
    )
      .toLowerCase()
      .split("-")[0];


  const initialLanguage =
    savedLanguage &&
    translations[savedLanguage]
      ? savedLanguage

      : translations[browserLanguage]
        ? browserLanguage

        : "en";


  setLanguage(
    initialLanguage
  );


  /* =========================================================
     INITIAL MENU STATE
  ========================================================= */

  closeMobileMenu();
  closeLanguageMenu();


  /* =========================================================
     ESCAPE KEY
  ========================================================= */

  document.addEventListener(
    "keydown",
    event => {

      if (event.key !== "Escape")
        return;


      closeMobileMenu();
      closeLanguageMenu();

    }
  );


  /* =========================================================
     RESIZE
  ========================================================= */

  window.addEventListener(
    "resize",
    () => {

      if (
        window.innerWidth > 800
      ){

        closeMobileMenu();

      }

    }
  );


});
