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
    addStructuredData();
  });
})();
