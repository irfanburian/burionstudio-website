/* BURION STUDIO — i18n polish
   Language-specific fallback for the contact submit button.
   Language controls use real localized URLs.
*/
(function(){
  const labels={en:"Send Message",tr:"Mesaj Gönder",ru:"Отправить сообщение"};
  const urls={en:"/",tr:"/tr/",ru:"/ru/"};

  function sync(){
    const lang=(document.documentElement.lang||"en").toLowerCase().slice(0,2);
    const send=document.querySelector("#contactForm .submit-button span:first-child");
    if(send)send.textContent=labels[lang]||labels.en;
  }

  document.addEventListener("click",function(e){
    const control=e.target.closest("[data-language]");
    if(!control)return;
    const lang=control.getAttribute("data-language");
    if(!urls[lang])return;
    e.preventDefault();
    e.stopImmediatePropagation();
    window.location.assign(urls[lang]);
  },true);

  document.addEventListener("DOMContentLoaded",sync);
  new MutationObserver(sync).observe(document.documentElement,{attributes:true,attributeFilter:["lang"]});
})();
