import{S as a,i as c}from"./assets/vendor-9310f15c.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();function u(e,r){return`
    <li class="gallery__item">
      <a href="${e.largeImageURL}" target="_blank">
        <img class="gallery__image" data-index="${r}" src="${e.webformatURL}" alt="${e.tags}">
        <ul class="gallery-item__description">
          <li>Likes: ${e.likes}</li>
          <li>Views: ${e.views}</li>
          <li>Downloads: ${e.downloads}</li>
          <li>Comments: ${e.comments}</li>
        </ul>
      </a>
    </li>
  `}function d(e){const r=document.getElementById("galary");r.innerHTML="";for(let n=0;n<e.length;n++)r.insertAdjacentHTML("beforeend",u(e[n],n));document.querySelectorAll(".gallery__image").forEach(n=>{n.addEventListener("click",t=>{const o=t.target.dataset.index;f(e[o])})})}function f(e){new a(".gallery__item a").refresh()}const m=document.querySelector(".form__input"),l=document.querySelector(".form"),g="38303120-77261ecd691aecbe62c4afdac",y=`https://pixabay.com/api/?key=${g}`;async function h(e){const r=document.createElement("span");r.classList.add("loader");try{l.appendChild(r);const i=await fetch(`${y}&q=${e}&orientation=horizontal`);if(!i.ok)throw new Error(`Failed to fetch. Status: ${i.status}`);const n=await i.json();if(n.hits.length===0)throw new Error("No img found");d(n.hits)}catch(i){c.error({title:"Error",message:i.message})}finally{l.contains(r)&&l.removeChild(r)}}l.addEventListener("submit",async e=>{e.preventDefault();const r=m.value;await h(r)});
//# sourceMappingURL=commonHelpers.js.map
