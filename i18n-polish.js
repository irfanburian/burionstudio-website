/* BURION STUDIO — i18n polish
   Keeps small UI strings synchronized with the active document language.
*/
(function(){
  const labels={
    en:{send:"Send Message"},
    tr:{send:"Mesaj Gönder"},
    ru:{send:"Отправить сообщение"}
  };

  function sync(){
    const lang=(document.documentElement.lang||"en").toLowerCase().slice(0,2);
    const t=labels[lang]||labels.en;
    const send=document.querySelector("#contactForm .submit-button span:first-child");
    if(send) send.textContent=t.send;
  }

  document.addEventListener("DOMContentLoaded",sync);
  new MutationObserver(sync).observe(document.documentElement,{attributes:true,attributeFilter:["lang"]});
})();
