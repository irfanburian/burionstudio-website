document.addEventListener("DOMContentLoaded",()=>{
  const q=s=>document.querySelector(s);
  const menu=q("#mobileMenu");
  const menuBtn=q(".menu-button");

  // English-only site: no language state, routing, or translation runtime.
  document.documentElement.lang="en";

  if(menuBtn&&menu){
    menuBtn.addEventListener("click",()=>{
      const open=menuBtn.getAttribute("aria-expanded")==="true";
      menuBtn.setAttribute("aria-expanded",String(!open));
      menuBtn.setAttribute("aria-label",!open?"Close menu":"Open menu");
      menu.hidden=open;
    });
  }

  document.querySelectorAll(".mobile-nav a,.desktop-nav a,.footer-nav a").forEach(a=>a.addEventListener("click",()=>{
    if(menu&&menuBtn){
      menu.hidden=true;
      menuBtn.setAttribute("aria-expanded","false");
      menuBtn.setAttribute("aria-label","Open menu");
    }
  }));
});
