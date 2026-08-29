document.addEventListener("DOMContentLoaded", () => {

  /* =========================================================
     BURION STUDIO — SCRIPT V3
     HTML + CSS COMPATIBLE
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

      whatWeBuild:
        "WHAT WE BUILD",

      buildTitle:
        `Turning ideas into <em>digital products.</em>`,

      games:
        "Games",

      applications:
        "Applications",

      digitalProducts:
        "Digital Products",

      selectedWork:
        "SELECTED WORK",

      projectsTitle:
        `Projects currently <em>in development.</em>`,

      projectsDescription:
        "A selection of products and ideas currently being shaped at Burion Studio.",

      aboutEyebrow:
        "ABOUT BURION STUDIO",

      aboutTitle:
        `One developer.<br><em>Many ideas.</em>`,

      about1:
        `Hi, I'm <strong>İrfan Aslan BÜRİAN.</strong>`,

      about2:
        "I'm an independent developer based in Türkiye, building games, applications and digital products from scratch.",

      about3:
        "I handle the entire process — code, design, systems and everything in between.",

      about4:
        "Burion Studio is my space to create, experiment and turn ideas into something real.",

      contactEyebrow:
        "LET'S WORK TOGETHER",

      contactTitle:
        `Have an idea?<br>Let's build something <em>worth making.</em>`,

      contactDescription:
        "Have a project, idea or collaboration in mind? I'd love to hear about it.",

      name:
        "Name",

      email:
        "Email",

      subject:
        "Subject",

      message:
        "Message",

      send:
        "Send Message",

      language:
        "LANGUAGE",

      privacy:
        "Privacy Policy",

      terms:
        "Terms of Use",

      footer:
        "Independent developer creating games, apps and digital experiences."
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

      whatWeBuild:
        "NELER GELİŞTİRİYORUM",

      buildTitle:
        `Fikirleri <em>dijital ürünlere</em> dönüştürüyorum.`,

      games:
        "Oyunlar",

      applications:
        "Uygulamalar",

      digitalProducts:
        "Dijital Ürünler",

      selectedWork:
        "SEÇİLİ PROJELER",

      projectsTitle:
        `Şu anda <em>geliştirdiğim projeler.</em>`,

      projectsDescription:
        "Burion Studio bünyesinde şu anda şekillendirdiğim ürün ve fikirlerden bir seçki.",

      aboutEyebrow:
        "BURION STUDIO HAKKINDA",

      aboutTitle:
        `Tek geliştirici.<br><em>Birçok fikir.</em>`,

      about1:
        `Merhaba, ben <strong>İrfan Aslan BÜRİAN.</strong>`,

      about2:
        "Türkiye'de yaşayan bağımsız bir geliştiriciyim. Oyunları, uygulamaları ve dijital ürünleri sıfırdan geliştiriyorum.",

      about3:
        "Tüm süreci kendim yürütüyorum — kod, tasarım, sistemler ve aradaki her şey.",

      about4:
        "Burion Studio; üretmek, denemek ve fikirleri gerçek bir ürüne dönüştürmek için oluşturduğum kişisel stüdyom.",

      contactEyebrow:
        "BİRLİKTE ÇALIŞALIM",

      contactTitle:
        `Bir fikrin mi var?<br>Yapmaya <em>değer</em> bir şey geliştirelim.`,

      contactDescription:
        "Bir projen, fikrin veya iş birliği önerin varsa senden haber almak isterim.",

      name:
        "İsim",

      email:
        "E-posta",

      subject:
        "Konu",

      message:
        "Mesaj",

      send:
        "Mesaj Gönder",

      language:
        "DİL",

      privacy:
        "Gizlilik Politikası",

      terms:
        "Kullanım Koşulları",

      footer:
        "Oyunlar, uygulamalar ve dijital deneyimler geliştiren bağımsız geliştirici."
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
        `Идеи,<br>превращённые в <em>реальность.</em>`,

      heroDescription:
        "Независимый разработчик, создающий игры, приложения и цифровые продукты от идеи до релиза.",

      explore:
        "Исследовать студию",

      getInTouch:
        "Связаться",

      whatWeBuild:
        "ЧТО Я СОЗДАЮ",

      buildTitle:
        `Превращаю идеи в <em>цифровые продукты.</em>`,

      games:
        "Игры",

      applications:
        "Приложения",

      digitalProducts:
        "Цифровые продукты",

      selectedWork:
        "ИЗБРАННЫЕ ПРОЕКТЫ",

      projectsTitle:
        `Проекты сейчас <em>в разработке.</em>`,

      projectsDescription:
        "Подборка продуктов и идей, которые сейчас развиваются в Burion Studio.",

      aboutEyebrow:
        "О BURION STUDIO",

      aboutTitle:
        `Один разработчик.<br><em>Много идей.</em>`,

      about1:
        `Привет, я <strong>İrfan Aslan BÜRİAN.</strong>`,

      about2:
        "Я независимый разработчик из Турции. Создаю игры, приложения и цифровые продукты с нуля.",

      about3:
        "Я самостоятельно занимаюсь всем процессом — кодом, дизайном, системами и всеми задачами между ними.",

      about4:
        "Burion Studio — моё пространство для создания, экспериментов и превращения идей в реальные продукты.",

      contactEyebrow:
        "ДАВАЙТЕ СОЗДАДИМ ВМЕСТЕ",

      contactTitle:
        `Есть идея?<br>Давайте создадим что-то <em>стоящее.</em>`,

      contactDescription:
        "Есть проект, идея или предложение о сотрудничестве? Буду рад услышать о нём.",

      name:
        "Имя",

      email:
        "Эл. почта",

      subject:
        "Тема",

      message:
        "Сообщение",

      send:
        "Отправить сообщение",

      language:
        "ЯЗЫК",

      privacy:
        "Политика конфиденциальности",

      terms:
        "Условия использования",

      footer:
        "Независимый разработчик игр, приложений и цифровых продуктов."
    }

  };


  /* =========================================================
     ELEMENTS
  ========================================================= */

  const menuButton =
    document.querySelector(".menu-button");

  const mobileMenu =
    document.querySelector("#mobileMenu");

  const languageButton =
    document.querySelector(".language-button");

  const languageMenu =
    document.querySelector("#languageMenu");

  const currentLanguage =
    document.querySelector(".current-language");


  /* =========================================================
     LANGUAGE
  ========================================================= */

  function setLanguage(language) {

    const t = translations[language];

    if (!t) return;


    document.documentElement.lang =
      language;


    /* HEADER NAV */

    const navLinks =
      document.querySelectorAll(
        ".desktop-nav .nav-link"
      );

    if (navLinks.length >= 4) {

      navLinks[0].textContent = t.home;
      navLinks[1].textContent = t.projects;
      navLinks[2].textContent = t.about;
      navLinks[3].textContent = t.contact;

    }


    /* MOBILE NAV */

    const mobileLinks =
      document.querySelectorAll(
        ".mobile-nav a"
      );

    if (mobileLinks.length >= 4) {

      mobileLinks[0].textContent = t.home;
      mobileLinks[1].textContent = t.projects;
      mobileLinks[2].textContent = t.about;
      mobileLinks[3].textContent = t.contact;

    }


    /* LANGUAGE BUTTON */

    if (currentLanguage) {

      currentLanguage.textContent =
        language.toUpperCase();

    }


    /* MOBILE LANGUAGE */

    const mobileLanguageTitle =
      document.querySelector(
        ".mobile-language > span"
      );

    if (mobileLanguageTitle) {

      mobileLanguageTitle.textContent =
        t.language;

    }


    /* HERO */

    const hero =
      document.querySelector("#home");

    if (hero) {

      const eyebrow =
        hero.querySelector(".eyebrow");

      const title =
        hero.querySelector("h1");

      const description =
        hero.querySelector(".hero-description");

      const buttons =
        hero.querySelectorAll(".hero-actions .button");


      if (eyebrow)
        eyebrow.textContent =
          t.eyebrow;


      if (title)
        title.innerHTML =
          t.heroTitle;


      if (description)
        description.textContent =
          t.heroDescription;


      if (buttons[0]) {

        const span =
          buttons[0].querySelectorAll("span");

        if (span[0])
          span[0].textContent =
            t.explore;

      }


      if (buttons[1]) {

        const span =
          buttons[1].querySelectorAll("span");

        if (span[0])
          span[0].textContent =
            t.getInTouch;

      }

    }


    /* BUILD */

    const build =
      document.querySelector(
        ".build-section"
      );

    if (build) {

      const eyebrow =
        build.querySelector(".eyebrow");

      const title =
        build.querySelector("h2");

      const cards =
        build.querySelectorAll(
          ".build-card h3"
        );


      if (eyebrow)
        eyebrow.textContent =
          t.whatWeBuild;


      if (title)
        title.innerHTML =
          t.buildTitle;


      if (cards[0])
        cards[0].textContent =
          t.games;


      if (cards[1])
        cards[1].textContent =
          t.applications;


      if (cards[2])
        cards[2].textContent =
          t.digitalProducts;

    }


    /* PROJECTS */

    const projects =
      document.querySelector(
        "#projects"
      );

    if (projects) {

      const eyebrow =
        projects.querySelector(
          ".eyebrow"
        );

      const title =
        projects.querySelector(
          ".projects-heading h2"
        );

      const description =
        projects.querySelector(
          ".section-description"
        );


      if (eyebrow)
        eyebrow.textContent =
          t.selectedWork;


      if (title)
        title.innerHTML =
          t.projectsTitle;


      if (description)
        description.textContent =
          t.projectsDescription;

    }


    /* ABOUT */

    const about =
      document.querySelector(
        "#about"
      );

    if (about) {

      const eyebrow =
        about.querySelector(
          ".about-content .eyebrow"
        );

      const title =
        about.querySelector(
          ".about-content h2"
        );

      const paragraphs =
        about.querySelectorAll(
          ".about-content > p"
        );


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

    }


    /* CONTACT */

    const contact =
      document.querySelector(
        "#contact"
      );

    if (contact) {

      const eyebrow =
        contact.querySelector(
          ".contact-heading .eyebrow"
        );

      const title =
        contact.querySelector(
          ".contact-heading h2"
        );

      const description =
        contact.querySelector(
          ".contact-heading > p"
        );


      if (eyebrow)
        eyebrow.textContent =
          t.contactEyebrow;


      if (title)
        title.innerHTML =
          t.contactTitle;


      if (description)
        description.textContent =
          t.contactDescription;

    }


    /* FORM LABELS */

    const labels =
      document.querySelectorAll(
        ".contact-form label > span"
      );

    if (labels.length >= 4) {

      labels[0].textContent = t.name;
      labels[1].textContent = t.email;
      labels[2].textContent = t.subject;
      labels[3].textContent = t.message;

    }


    /* SEND BUTTON */

    const submitButton =
      document.querySelector(
        ".submit-button"
      );

    if (submitButton) {

      const span =
        submitButton.querySelector(
          "span"
        );

      if (span)
        span.textContent =
          t.send;

    }


    /* FOOTER */

    const footerText =
      document.querySelector(
        ".footer-brand p"
      );

    if (footerText)
      footerText.textContent =
        t.footer;


    const privacy =
      document.querySelector(
        '.footer-legal a[href="privacy.html"]'
      );

    const terms =
      document.querySelector(
        '.footer-legal a[href="terms.html"]'
      );


    if (privacy)
      privacy.textContent =
        t.privacy;


    if (terms)
      terms.textContent =
        t.terms;


    /* FOOTER LANGUAGE ACTIVE STATE */

    document
      .querySelectorAll(
        ".footer-languages button"
      )
      .forEach(button => {

        button.style.color =
          button.dataset.language === language
            ? "var(--gold)"
            : "var(--muted-dark)";

      });


    /* SAVE */

    localStorage.setItem(
      "burionLanguage",
      language
    );

  }


  /* =========================================================
     LANGUAGE MENU
  ========================================================= */

  function openLanguageMenu() {

    if (!languageMenu) return;

    languageMenu.hidden = false;

    if (languageButton) {

      languageButton.setAttribute(
        "aria-expanded",
        "true"
      );

    }

  }


  function closeLanguageMenu() {

    if (!languageMenu) return;

    languageMenu.hidden = true;

    if (languageButton) {

      languageButton.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  }


  if (languageButton && languageMenu) {

    languageButton.addEventListener(
      "click",
      event => {

        event.stopPropagation();

        if (languageMenu.hidden) {

          openLanguageMenu();

        } else {

          closeLanguageMenu();

        }

      }
    );


    languageMenu
      .querySelectorAll(
        "[data-language]"
      )
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            setLanguage(
              button.dataset.language
            );

            closeLanguageMenu();

          }
        );

      });

  }


  /* =========================================================
     MOBILE MENU
  ========================================================= */

  function openMobileMenu() {

    if (!mobileMenu) return;

    mobileMenu.hidden = false;

    if (menuButton) {

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

  }


  function closeMobileMenu() {

    if (!mobileMenu) return;

    mobileMenu.hidden = true;

    if (menuButton) {

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


  if (menuButton && mobileMenu) {

    menuButton.addEventListener(
      "click",
      event => {

        event.stopPropagation();

        if (mobileMenu.hidden) {

          openMobileMenu();

        } else {

          closeMobileMenu();

        }

      }
    );


    mobileMenu
      .querySelectorAll(
        ".mobile-nav a"
      )
      .forEach(link => {

        link.addEventListener(
          "click",
          () => {

            closeMobileMenu();

          }
        );

      });


    mobileMenu
      .querySelectorAll(
        "[data-language]"
      )
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            setLanguage(
              button.dataset.language
            );

            closeMobileMenu();

          }
        );

      });

  }


  /* =========================================================
     OUTSIDE CLICK
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

        closeLanguageMenu();

      }


      if (
        mobileMenu &&
        !mobileMenu.hidden &&
        !mobileMenu.contains(event.target) &&
        event.target !== menuButton
      ) {

        closeMobileMenu();

      }

    }
  );


  /* =========================================================
     ESCAPE KEY
  ========================================================= */

  document.addEventListener(
    "keydown",
    event => {

      if (event.key !== "Escape")
        return;

      closeLanguageMenu();
      closeMobileMenu();

    }
  );


  /* =========================================================
     ACTIVE NAVIGATION
  ========================================================= */

  const sections =
    document.querySelectorAll(
      "main section[id]"
    );

  const navLinks =
    document.querySelectorAll(
      ".desktop-nav .nav-link"
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

            if (!entry.isIntersecting)
              return;


            navLinks.forEach(link => {

              link.classList.remove(
                "active"
              );


              const href =
                link.getAttribute(
                  "href"
                );


              if (
                href ===
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
          rootMargin:
            "-20% 0px -60% 0px",

          threshold:0
        }
      );


    sections.forEach(section => {

      observer.observe(section);

    });

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
          [
            `Name: ${name}`,
            `Email: ${email}`,
            "",
            "Message:",
            message
          ].join("\n");


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
     INITIAL STATE
  ========================================================= */

  closeMobileMenu();
  closeLanguageMenu();


  const savedLanguage =
    localStorage.getItem(
      "burionLanguage"
    ) || "en";


  setLanguage(
    translations[savedLanguage]
      ? savedLanguage
      : "en"
  );


});
