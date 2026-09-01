document.addEventListener("DOMContentLoaded",()=>{
  const q=s=>document.querySelector(s), menu=q("#mobileMenu"), menuBtn=q(".menu-button"), header=q(".site-header");
  if(menuBtn&&menu){menuBtn.addEventListener("click",()=>{const open=menuBtn.getAttribute("aria-expanded")==="true";menuBtn.setAttribute("aria-expanded",String(!open));menuBtn.setAttribute("aria-label",!open?"Close menu":"Open menu");menuBtn.classList.toggle("is-open",!open);menu.hidden=open;});}
  document.querySelectorAll(".mobile-nav a,.desktop-nav a,.footer-nav a").forEach(a=>a.addEventListener("click",()=>{if(menu&&menuBtn){menu.hidden=true;menuBtn.setAttribute("aria-expanded","false");menuBtn.setAttribute("aria-label","Open menu");menuBtn.classList.remove("is-open");}}));
  const reduceMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(header&&!reduceMotion){const sync=()=>header.classList.toggle("is-scrolled",window.scrollY>18);sync();window.addEventListener("scroll",sync,{passive:true});}

  /* Trivia product shot: load the real WebP directly.
     The previous implementation fetched binary WebP as text and attempted to
     interpret it as base64, so the image could never render reliably. */
  const triviaStage=q(".project-image-trivia");
  if(triviaStage){
    const img=document.createElement("img");
    img.className="trivia-product-shot";
    img.alt="Trivia mobile quiz and leaderboard interface";
    img.decoding="async";
    img.loading="eager";
    img.draggable=false;
    img.src="assets/projects/trivia-devices.webp";
    triviaStage.appendChild(img);
  }

  const carousel=q("[data-projects-carousel]");
  if(carousel){
    const track=carousel.querySelector(".projects-track"), cards=[...carousel.querySelectorAll(".project-card")], prev=q(".projects-prev"), next=q(".projects-next"), current=q(".projects-pagination-current");
    let index=0, resizeFrame=0;
    const isMobile=()=>window.matchMedia("(max-width:800px)").matches;
    const maxIndex=()=>isMobile()?Math.max(0,cards.length-1):Math.max(0,cards.length-2);
    const calcDesktopStep=()=>{
      if(!track||cards.length<2)return 0;
      const gap=parseFloat(getComputedStyle(track).gap)||14;
      return ((track.clientWidth/2+gap/2)/track.clientWidth)*100;
    };
    const update=()=>{
      if(!track)return;
      const mobile=isMobile(), step=mobile?100:calcDesktopStep();
      track.style.transform=`translate3d(-${index*step}%,0,0)`;
      if(prev)prev.disabled=index===0;
      if(next)next.disabled=index>=maxIndex();
      if(current)current.textContent=String(index+1).padStart(2,"0");
      cards.forEach((card,i)=>{
        const visible=mobile?i===index:(i===index||i===index+1);
        card.setAttribute("aria-hidden",String(!visible));
        card.inert=!visible;
      });
    };
    const go=delta=>{index=Math.min(maxIndex(),Math.max(0,index+delta));update();};
    prev?.addEventListener("click",()=>go(-1));
    next?.addEventListener("click",()=>go(1));
    const onResize=()=>{cancelAnimationFrame(resizeFrame);resizeFrame=requestAnimationFrame(()=>{index=Math.min(index,maxIndex());update();});};
    window.addEventListener("resize",onResize,{passive:true});
    let startX=0,startY=0;
    carousel.addEventListener("touchstart",e=>{const t=e.changedTouches[0];startX=t.clientX;startY=t.clientY},{passive:true});
    carousel.addEventListener("touchend",e=>{const t=e.changedTouches[0],dx=t.clientX-startX,dy=t.clientY-startY;if(Math.abs(dx)>45&&Math.abs(dx)>Math.abs(dy))go(dx<0?1:-1)},{passive:true});
    update();
  }
  if(!reduceMotion&&"IntersectionObserver" in window){const targets=document.querySelectorAll(".projects-section,.build-section,.about-section,.contact-section,.project-card,.build-card");targets.forEach((el,i)=>{el.classList.add("reveal-ready");if(i%4===1)el.classList.add("reveal-delay-1");if(i%4===2)el.classList.add("reveal-delay-2");if(i%4===3)el.classList.add("reveal-delay-3");});const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target);}}),{threshold:.12,rootMargin:"0px 0px -40px"});targets.forEach(el=>observer.observe(el));}
});
