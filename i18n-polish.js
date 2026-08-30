/* BURION STUDIO — i18n polish
   Language-specific fallback for the contact submit button.
   Main translations remain in script.js.
*/
(function(){
  const labels={en:"Send Message",tr:"Mesaj Gönder",ru:"Отправить сообщение"};

  function sync(){
    const lang=(document.documentElement.lang||"en").toLowerCase().slice(0,2);
    const send=document.querySelector("#contactForm .submit-button span:first-child");
    if(send) send.textContent=labels[lang]||labels.en;
  }

  document.addEventListener("DOMContentLoaded",sync);
  new MutationObserver(sync).observe(document.documentElement,{attributes:true,attributeFilter:["lang"]});
})();
