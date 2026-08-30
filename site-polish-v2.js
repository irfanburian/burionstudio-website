/* BURION STUDIO — Site polish V2
   Progressive enhancements layered after the existing site scripts.
*/
document.addEventListener("DOMContentLoaded",()=>{
  const $=(s,r=document)=>r.querySelector(s);
  const $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
  const menu=$("#mobileMenu"), menuBtn=$(".menu-button"), langBtn=$(".language-button"), langMenu=$("#languageMenu");

  /* Persist the selected language so refresh/navigation does not silently revert to EN. */
  const stored=localStorage.getItem("burion-language");
  if(stored && /^(en|tr|ru)$/.test(stored) && window.BurionSetLanguage){
    window.BurionSetLanguage(stored);
  }
  $$('[data-language]').forEach(btn=>btn.addEventListener("click",()=>{
    const lang=btn.getAttribute("data-language");
    if(!/^(en|tr|ru)$/.test(lang))return;
    localStorage.setItem("burion-language",lang);
  }));

  /* Keyboard-safe language dropdown. */
  if(langBtn && langMenu){
    langBtn.addEventListener("keydown",e=>{
      if(e.key==="ArrowDown" || e.key==="Enter" || e.key===" "){
        e.preventDefault();
        if(langMenu.hidden) langBtn.click();
        const first=$("button",langMenu); if(first) first.focus();
      }
    });
    langMenu.addEventListener("keydown",e=>{
      const items=$$("button",langMenu), i=items.indexOf(document.activeElement);
      if(e.key==="Escape"){langBtn.click();langBtn.focus();}
      if(e.key==="ArrowDown" && items.length){e.preventDefault();items[(i+1)%items.length].focus();}
      if(e.key==="ArrowUp" && items.length){e.preventDefault();items[(i-1+items.length)%items.length].focus();}
    });
  }

  /* Close overlays when tapping outside or pressing Escape. */
  document.addEventListener("click",e=>{
    if(langMenu && !langMenu.hidden && !langMenu.contains(e.target) && !langBtn?.contains(e.target)){
      langMenu.hidden=true;
      langBtn?.setAttribute("aria-expanded","false");
    }
    if(menu && !menu.hidden && !menu.contains(e.target) && !menuBtn?.contains(e.target)){
      menu.hidden=true;
      menuBtn?.setAttribute("aria-expanded","false");
      menuBtn?.classList.remove("is-open");
    }
  });
  document.addEventListener("keydown",e=>{
    if(e.key!=="Escape")return;
    if(langMenu && !langMenu.hidden){langMenu.hidden=true;langBtn?.setAttribute("aria-expanded","false");langBtn?.focus();}
    if(menu && !menu.hidden){menu.hidden=true;menuBtn?.setAttribute("aria-expanded","false");menuBtn?.classList.remove("is-open");menuBtn?.focus();}
  });

  /* Mobile navigation closes after selecting an anchor. */
  $$("#mobileMenu a").forEach(a=>a.addEventListener("click",()=>{
    if(menu){menu.hidden=true;menuBtn?.setAttribute("aria-expanded","false");menuBtn?.classList.remove("is-open");}
  }));

  /* Contact form: graceful mail client fallback until a transactional endpoint exists. */
  const form=$("#contactForm");
  if(form){
    form.addEventListener("submit",e=>{
      if(form.dataset.mailtoFallbackBound==="1")return;
      e.preventDefault();
      form.dataset.mailtoFallbackBound="1";
      const data=new FormData(form);
      const name=String(data.get("name")||"").trim();
      const email=String(data.get("email")||"").trim();
      const subject=String(data.get("subject")||"Website contact").trim();
      const message=String(data.get("message")||"").trim();
      const body=[`Name: ${name}`,`Email: ${email}`,"",message].join("\n");
      window.location.href=`mailto:support@burionstudio.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setTimeout(()=>{form.dataset.mailtoFallbackBound="";},500);
    });
  }
});

/* Expose the existing translator without rewriting its translation table. */
window.addEventListener("load",()=>{
  if(window.BurionSetLanguage)return;
});
