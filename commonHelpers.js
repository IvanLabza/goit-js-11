import{S as a,i as c}from"./assets/vendor-9310f15c.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();function u(e,t){return`
    <li class="gallery__item">
      <a href="${e.largeImageURL}" target="_blank">
        <img class="gallery__image" data-index="${t}" src="${e.webformatURL}" alt="${e.tags}">
        <ul class="gallery-item__description">
          <li>Likes: ${e.likes}</li>
          <li>Views: ${e.views}</li>
          <li>Downloads: ${e.downloads}</li>
          <li>Comments: ${e.comments}</li>
        </ul>
      </a>
    </li>
  `}function f(e){const t=document.getElementById("galary");t.innerHTML="";for(let o=0;o<e.length;o++)t.insertAdjacentHTML("beforeend",u(e[o],o));d()}function d(e){new a(".gallery__item a").refresh()}function m(){const e=document.getElementById("galary");e.innerHTML=""}const g=document.querySelector(".form__input"),l=document.querySelector(".form"),y="38303120-77261ecd691aecbe62c4afdac",h=`https://pixabay.com/api/?key=${y}`;async function p(e){const t=document.createElement("span");t.classList.add("loader");try{l.appendChild(t);const o=await fetch(`${h}&q=${e}&orientation=horizontal`);if(!o.ok)throw new Error(`Failed to fetch. Status: ${o.status}`);const i=await o.json();if(i.hits.length===0)throw new Error("No img found");f(i.hits)}catch(o){c.error({title:"Error",message:o.message})}finally{l.contains(t)&&l.removeChild(t)}}l.addEventListener("submit",async e=>{e.preventDefault();const t=g.value;m(),await p(t)});
//# sourceMappingURL=commonHelpers.js.map
