/* BURION STUDIO — Site polish V2
   Progressive enhancements layered after the existing site scripts.
*/
document.addEventListener("DOMContentLoaded",()=>{
  const $=(s,r=document)=>r.querySelector(s);
  const $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
  const menu=$("#mobileMenu"), menuBtn=$(".menu-button"), langBtn=$(".language-button"), langMenu=$("#languageMenu");

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
      if(e.key==="Escape"){langMenu.hidden=true;langBtn.setAttribute("aria-expanded","false");langBtn.focus();}
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
});
