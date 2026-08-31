document.addEventListener("DOMContentLoaded",()=>{
  const q=s=>document.querySelector(s), menu=q("#mobileMenu"), menuBtn=q(".menu-button"), header=q(".site-header");
  document.documentElement.lang="en";
  if(menuBtn&&menu){menuBtn.addEventListener("click",()=>{const open=menuBtn.getAttribute("aria-expanded")==="true";menuBtn.setAttribute("aria-expanded",String(!open));menuBtn.setAttribute("aria-label",!open?"Close menu":"Open menu");menuBtn.classList.toggle("is-open",!open);menu.hidden=open;});}
  document.querySelectorAll(".mobile-nav a,.desktop-nav a,.footer-nav a").forEach(a=>a.addEventListener("click",()=>{if(menu&&menuBtn){menu.hidden=true;menuBtn.setAttribute("aria-expanded","false");menuBtn.setAttribute("aria-label","Open menu");menuBtn.classList.remove("is-open");}}));
  const reduceMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(header&&!reduceMotion){const sync=()=>header.classList.toggle("is-scrolled",window.scrollY>18);sync();window.addEventListener("scroll",sync,{passive:true});}
  if(!reduceMotion&&"IntersectionObserver" in window){const targets=document.querySelectorAll(".projects-section,.build-section,.about-section,.contact-section,.project-card,.build-card");targets.forEach((el,i)=>{el.classList.add("reveal-ready");if(i%4===1)el.classList.add("reveal-delay-1");if(i%4===2)el.classList.add("reveal-delay-2");if(i%4===3)el.classList.add("reveal-delay-3");});const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target);}}),{threshold:.12,rootMargin:"0px 0px -40px"});targets.forEach(el=>observer.observe(el));}
});
