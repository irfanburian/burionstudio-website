/* BURION STUDIO — canonical URL language routing */
(function(){
  const labels={en:"Send Message",tr:"Mesaj Gönder",ru:"Отправить сообщение"};
  const urls={en:"/",tr:"/tr/",ru:"/ru/"};
  const seo={
    en:{description:"Independent developer creating games, applications and digital experiences.",locale:"en_US"},
    tr:{description:"Oyunlar, uygulamalar ve dijital deneyimler geliştiren bağımsız stüdyo.",locale:"tr_TR"},
    ru:{description:"Независимая студия, создающая игры, приложения и цифровые продукты.",locale:"ru_RU"}
  };

  function currentLanguage(){
    const path=window.location.pathname.replace(/\/+$/,'/');
    if(path==='/tr/')return 'tr';
    if(path==='/ru/')return 'ru';
    return 'en';
  }

  function sync(){
    const lang=currentLanguage();
    document.documentElement.lang=lang;
    const send=document.querySelector('#contactForm .submit-button span:first-child');
    if(send)send.textContent=labels[lang];
    document.querySelectorAll('.current-language').forEach(el=>{el.textContent=lang.toUpperCase();});
  }

  function addFooterSocials(){
    const footer=document.querySelector('.site-footer');
    if(!footer || footer.querySelector('.footer-socials')) return;
    const nav=footer.querySelector('.footer-nav');
    const main=footer.querySelector('.footer-main');
    if(!main) return;
    const socials=document.createElement('div');
    socials.className='footer-socials';
    socials.setAttribute('aria-label','Social links');
    socials.innerHTML=`
      <a class="footer-social" href="https://www.linkedin.com/company/burionstudio/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 8.2H3.1V21h3.4V8.2ZM4.8 3A2 2 0 1 0 4.8 7 2 2 0 0 0 4.8 3ZM21 13.7c0-3.8-2-5.6-4.7-5.6-2.2 0-3.2 1.2-3.8 2v-1.9H9.1V21h3.4v-6.3c0-1.7.3-3.4 2.5-3.4 2.1 0 2.1 1.9 2.1 3.5V21h3.4l.5-7.3Z"/></svg></a>
      <a class="footer-social" href="https://www.instagram.com/burionstudio/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.2" y="3.2" width="17.6" height="17.6" rx="4.6"/><circle cx="12" cy="12" r="4.1"/><circle cx="17.6" cy="6.5" r="1" class="fill"/></svg></a>
      <a class="footer-social" href="https://www.facebook.com/burionstudio/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.2 21v-8h2.7l.4-3.2h-3.1V7.7c0-.9.3-1.6 1.7-1.6h1.8V3.2c-.3 0-1.4-.2-2.6-.2-2.6 0-4.4 1.6-4.4 4.5v2.3H8v3.2h2.7v8h3.5Z"/></svg></a>
      <a class="footer-social" href="https://x.com/burionstudio" target="_blank" rel="noopener noreferrer" aria-label="X"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 3h4.6l4 5.5L17.2 3H20l-6.1 7.1L20.4 21h-4.6l-4.4-6.1L6.1 21H3.3l6.5-7.7L4 3Zm4.1 2.3H6.7l9.5 13.4h1.4L8.1 5.3Z"/></svg></a>
      <a class="footer-social" href="mailto:support@burionstudio.com" aria-label="Email Burion Studio"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5.2" width="18" height="13.6" rx="2.2"/><path d="m4.2 7 7.8 6 7.8-6"/></svg></a>`;
    if(nav) nav.insertAdjacentElement('afterend',socials);
    else main.appendChild(socials);
  }

  function addStructuredData(){
    if(document.querySelector('script[data-burion-structured-data]'))return;
    const lang=currentLanguage();
    const data=seo[lang]||seo.en;
    const path=window.location.pathname.replace(/\/$/,'')||'/';
    const url='https://burionstudio.com'+(path==='/'?'/':path+'/');
    const script=document.createElement('script');
    script.type='application/ld+json';
    script.dataset.burionStructuredData='true';
    script.textContent=JSON.stringify({
      '@context':'https://schema.org',
      '@graph':[
        {'@type':'Organization','@id':'https://burionstudio.com/#organization','name':'Burion Studio','url':'https://burionstudio.com/','logo':{'@type':'ImageObject','url':'https://burionstudio.com/assets/brand/burion-logo-primary.png'},'description':data.description},
        {'@type':'WebSite','@id':'https://burionstudio.com/#website','url':'https://burionstudio.com/','name':'Burion Studio','publisher':{'@id':'https://burionstudio.com/#organization'},'inLanguage':lang},
        {'@type':'WebPage','@id':url+'#webpage','url':url,'name':'Burion Studio','description':data.description,'isPartOf':{'@id':'https://burionstudio.com/#website'},'inLanguage':lang}
      ]
    });
    document.head.appendChild(script);
    document.documentElement.dataset.ogLocale=data.locale;
  }

  // Language is determined exclusively by the canonical URL.
  // Do not use localStorage/cookies for language state.
  document.addEventListener('click',function(e){
    const control=e.target.closest('[data-language]');
    if(!control)return;
    const lang=control.getAttribute('data-language');
    if(!urls[lang])return;
    e.preventDefault();
    e.stopImmediatePropagation();
    window.location.assign(urls[lang]);
  },true);

  document.addEventListener('DOMContentLoaded',function(){
    sync();
    addFooterSocials();
    addStructuredData();
  });
})();
