/* BURION STUDIO — Site polish V4
   Interaction/accessibility hardening. Hero/Projects visuals untouched.
*/
document.addEventListener("DOMContentLoaded",()=>{
  const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
  const menu=$("#mobileMenu"), menuBtn=$(".menu-button"), langBtn=$(".language-button"), langMenu=$("#languageMenu"), form=$("#contactForm");
  const closeMenu=(focus=false)=>{if(!menu)return;menu.hidden=true;menuBtn?.setAttribute("aria-expanded","false");menuBtn?.setAttribute("aria-label",document.documentElement.lang==="tr"?"Menüyü aç":document.documentElement.lang==="ru"?"Открыть меню":"Open menu");if(focus)menuBtn?.focus();};
  const closeLanguage=(focus=false)=>{if(!langMenu)return;langMenu.hidden=true;langBtn?.setAttribute("aria-expanded","false");if(focus)langBtn?.focus();};
  menuBtn?.addEventListener("click",()=>{const open=menu.hidden;closeLanguage();menu.hidden=!open;menuBtn.setAttribute("aria-expanded",String(open));menuBtn.setAttribute("aria-label",open?(document.documentElement.lang==="tr"?"Menüyü kapat":document.documentElement.lang==="ru"?"Закрыть меню":"Close menu"):(document.documentElement.lang==="tr"?"Menüyü aç":document.documentElement.lang==="ru"?"Открыть меню":"Open menu"));});
  langBtn?.addEventListener("click",()=>{const open=langMenu?.hidden;closeMenu();if(langMenu){langMenu.hidden=!open;langBtn.setAttribute("aria-expanded",String(open));if(open)$("button",langMenu)?.focus();}});
  document.addEventListener("click",e=>{if(menu&&!menu.hidden&&!menu.contains(e.target)&&!menuBtn?.contains(e.target))closeMenu();if(langMenu&&!langMenu.hidden&&!langMenu.contains(e.target)&&!langBtn?.contains(e.target))closeLanguage();});
  document.addEventListener("keydown",e=>{if(e.key!=="Escape")return;if(langMenu&&!langMenu.hidden)closeLanguage(true);else if(menu&&!menu.hidden)closeMenu(true);});
  $$("#mobileMenu a").forEach(a=>a.addEventListener("click",()=>closeMenu()));
  $$(".language-menu button,.mobile-language button,.footer-languages button").forEach(b=>b.addEventListener("click",()=>{closeLanguage();closeMenu();}));
  if(form){form.addEventListener("submit",e=>{if(form.dataset.mailtoFallbackBound==="1")return;e.preventDefault();const d=new FormData(form);const name=String(d.get("name")||"").trim(),email=String(d.get("email")||"").trim(),subject=String(d.get("subject")||"Website contact").trim(),message=String(d.get("message")||"").trim();window.location.href=`mailto:support@burionstudio.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;});}
  const lazyImages=$("img");$$('img[loading="lazy"]').forEach(img=>img.setAttribute("decoding","async"));
});
