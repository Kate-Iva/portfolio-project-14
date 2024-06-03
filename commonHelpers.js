import{S as y,N as E,K as x,M as L,a as v,i as g}from"./assets/vendor-0177c146.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();const j=document.getElementById("menu-open_btn"),h=document.getElementById("mobile-menu"),b=document.getElementById("close-mobile-menu"),k=document.querySelectorAll(".mob-nav-list li");j.addEventListener("click",function(){h.style.transform="translateY(0)"});b.addEventListener("click",function(){h.style.transform="translateY(-100%)"});k.forEach(e=>{e.addEventListener("click",function(){h.style.transform="translateY(-100%)"})});document.addEventListener("DOMContentLoaded",function(){document.addEventListener("click",function(e){if(e.target.matches('a[href^="#"]')){e.preventDefault();const o=e.target.getAttribute("href"),s=document.querySelector(o);s&&s.scrollIntoView({behavior:"smooth",block:"start"})}})});const f=document.querySelector(".check-input"),d=document.body,u=localStorage.getItem("theme");u&&(d.classList.add(u),u==="dark-mode"&&(f.checked=!0));f.addEventListener("change",()=>{f.checked?(d.classList.remove("light-mode"),d.classList.add("dark-mode"),localStorage.setItem("theme","dark-mode")):(d.classList.remove("dark-mode"),d.classList.add("light-mode"),localStorage.setItem("theme","light-mode"))});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".projects-list"),o=document.querySelector(".load-more-button"),s=[{imgSrc1x:"../img/energy-1x.jpg",imgSrc2x:"../img/energy-2x.jpg",alt:"energy projects",stack:"React, JavaScript, Node JS, Git",title:"ENERGY FLOW WEBSERVICE",link:"https://github.com/Kate-Iva/portfolio-project-14"},{imgSrc1x:"../img/fruitbox-1x.jpg",imgSrc2x:"../img/fruitbox-2x.jpg",alt:"fruitbox projects",stack:"React, JavaScript, Node JS, Git",title:"FRUITBOX ONLINE STORE",link:"https://github.com/Kate-Iva/portfolio-project-14"},{imgSrc1x:"../img/jewelry-1x.jpg",imgSrc2x:"../img/jewelry-2x.jpg",alt:"jewelry projects",stack:"React, JavaScript, Node JS, Git",title:"CHEGO JEWELRY WEBSITE",link:"https://github.com/Kate-Iva/portfolio-project-14"},{imgSrc1x:"../img/mimino-1x.jpg",imgSrc2x:"../img/mimino-2x.jpg",alt:"mimino projects",stack:"React, JavaScript, Node JS, Git",title:"MIMINO WEBSITE",link:"https://github.com/Kate-Iva/portfolio-project-14"},{imgSrc1x:"../img/power-1x.jpg",imgSrc2x:"../img/power-2x.jpg",alt:"power projects",stack:"React, JavaScript, Node JS, Git",title:"POWER PULSE WEBSERVICE",link:"https://github.com/Kate-Iva/portfolio-project-14"},{imgSrc1x:"../img/starlight-1x.jpg",imgSrc2x:"../img/starlight-2x.jpg",alt:"starlight projects",stack:"React, JavaScript, Node JS, Git",title:"STARLIGHT STUDIO LANDING PAGE",link:"https://github.com/Kate-Iva/portfolio-project-14"},{imgSrc1x:"../img/vyshyvanka-1x.jpg",imgSrc2x:"../img/vyshyvanka-2x.jpg",alt:"vyshyvanka projects",stack:"React, JavaScript, Node JS, Git",title:"VYSHYVANKA VIBES LANDING PAGE",link:"https://github.com/Kate-Iva/portfolio-project-14"}];let r=0;const t=3,i=()=>{const l=Math.min(r+t,s.length);for(let m=r;m<l;m++){const c=s[m],p=document.createElement("li");p.classList.add("projects-list-items"),p.innerHTML=`
                <picture>
                    <source srcset="${c.imgSrc1x} 1x", 
                    ${c.imgSrc2x} 2x />
                    <img src="${c.imgSrc1x}" alt="${c.alt}" class="projects-item-img">
                </picture>
                <div class="tech-stack">${c.stack}</div>
                <div class="projects-item-conteiner">
                    <div class="projects-item-title">${c.title}</div>
                    <a href="${c.link}" class="projects-btn" target="_blank">VISIT
                        <svg class="projects-icon" width="24" height="24">
                            <use href="../img/icons.svg#icon-arrow-visit"></use>
                        </svg>
                    </a>
                </div>
            `,e.appendChild(p)}r+=t,r>=s.length&&(o.style.display="none")};o.addEventListener("click",i)});const w={accordionWrappers:document.querySelectorAll(".ac"),acList:document.querySelector(".accordion-container")};function I(e){const o=e.target;if(o.closest(".ac-panel"))return;const r=o.closest(".ac"),t=document.querySelector(".is-active");t&&t.id!==r.id&&t.classList.remove("is-active"),r.classList.toggle("is-active")}w.acList.addEventListener("click",I);const S=document.querySelector(".reviews-list"),N=async()=>{const e="https://portfolio-js.b.goit.study/api/reviews";try{return(await v.get(e)).data}catch(o){g.show({fontSize:"large",position:"topRight",messageColor:"white",timeout:6e3,backgroundColor:"#ED3B44",progressBar:!1,message:"Error while fetching reviews"}),console.error("Error fetching reviews:",o),S.insertAdjacentHTML("beforeend",`
        <li class="not-found-item">
        <p class="not-found-text">Not found</p>
        </li>
        `)}},M=async()=>{const e=await N();if(e){const o=e.map(s=>`
            <li class="reviews-list-item swiper-slide">
                <p class="reviews-text">${s.review}</p>
                <div class="author-information">
                    <img class="author-image" src="${s.avatar_url}" alt="review from ${s.author}" 
                    width="40" height="40" loading="lazy">
                    <p class="name-text">${s.author}</p>
                </div>
            </li>
        `).join("");S.insertAdjacentHTML("beforeend",o)}};M();new y(".reviews .swiper",{modules:[E,x,L],mousewheel:{enabled:!0,invert:!0},keyboard:{enabled:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{360:{slidesPerView:1},768:{slidesPerView:1},1280:{slidesPerView:2,spaceBetween:32}}});const R=document.querySelector(".form");document.querySelector(".form-btn");const A=document.querySelector(".modal-close-btn"),B=document.querySelector(".form-input-name"),q=document.querySelector(".input-textarea"),a=document.querySelector(".backdrop"),O="https://portfolio-js.b.goit.study/api/requests",n={email:"",comment:""},P=e=>{n.email=e.target.value};B.addEventListener("input",P);const J=e=>{n.comment=e.target.value};q.addEventListener("input",J);const G=async()=>v.post(O,n),T=async e=>{if(e.preventDefault(),n.comment===""||n.email===""){g.error({message:"All fields must be completed!",position:"topRight",maxWidth:"300px"});return}G();try{a.classList.add("is-open")}catch{g.error({message:"Ops! Something went wrong. Please try again!",position:"topRight",maxWidth:"300px"})}e.currentTarget.reset(),n.comment="",n.email=""};R.addEventListener("submit",T);const K=e=>{a.classList.remove("is-open")};A.addEventListener("click",K);const $=e=>{e.target===a&&a.classList.remove("is-open")};a.addEventListener("click",$);document.addEventListener("keydown",e=>{e.key==="Escape"&&a.classList.remove("is-open")});
//# sourceMappingURL=commonHelpers.js.map
