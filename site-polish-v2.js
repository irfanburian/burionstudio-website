/* BURION STUDIO — Site polish V3
   Interaction/accessibility polish only. No visual Hero/Projects changes.
*/
document.addEventListener("DOMContentLoaded",()=>{
  const $=(s,r=document)=>r.querySelector(s);
  const $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
  const menu=$("#mobileMenu"), menuBtn=$(".menu-button"), langBtn=$(".language-button"), langMenu=$("#languageMenu");

  function closeMenu(returnFocus=false){
    if(!menu || menu.hidden)return;
    menu.hidden=true;
    menuBtn?.setAttribute("aria-expanded","false");
    menuBtn?.classList.remove("is-open");
    if(returnFocus)menuBtn?.focus();
  }
  function closeLanguage(returnFocus=false){
    if(!langMenu || langMenu.hidden)return;
    langMenu.hidden=true;
    langBtn?.setAttribute("aria-expanded","false");
    if(returnFocus)langBtn?.focus();
  }

  /* Keyboard-safe language dropdown. */
  if(langBtn && langMenu){
    langBtn.addEventListener("keydown",e=>{
      if(e.key==="ArrowDown" || e.key==="Enter" || e.key===" "){
        e.preventDefault();
        if(langMenu.hidden)langBtn.click();
        $("button",langMenu)?.focus();
      }
    });
    langMenu.addEventListener("keydown",e=>{
      const items=$$("button",langMenu), i=items.indexOf(document.activeElement);
      if(e.key==="Escape"){e.preventDefault();closeLanguage(true);}
      if(e.key==="ArrowDown" && items.length){e.preventDefault();items[(i+1)%items.length].focus();}
      if(e.key==="ArrowUp" && items.length){e.preventDefault();items[(i-1+items.length)%items.length].focus();}
    });
  }

  /* Close overlays when tapping outside or pressing Escape. */
  document.addEventListener("click",e=>{
    if(langMenu && !langMenu.hidden && !langMenu.contains(e.target) && !langBtn?.contains(e.target))closeLanguage();
    if(menu && !menu.hidden && !menu.contains(e.target) && !menuBtn?.contains(e.target))closeMenu();
  });
  document.addEventListener("keydown",e=>{
    if(e.key!=="Escape")return;
    closeLanguage(true);
    closeMenu(true);
  });

  /* Mobile navigation closes after selecting an anchor. */
  $$("#mobileMenu a").forEach(a=>a.addEventListener("click",()=>closeMenu(false)));

  /* Contact form: use mail client as an honest fallback until a server endpoint exists. */
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
