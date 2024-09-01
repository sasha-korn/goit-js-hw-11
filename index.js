import{S as p,i as d}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const f=e=>`
  <li class="wraper">
      <a href="${e.largeImageURL}">
        <img
          class="gallery-image"
          src="${e.previewURL}"
  alt="${e.tags}"
title="${e.tags}"
        />
      </a>

      <ul class="info">
        <li class="info-el">
          <span class="title">Likes</span>
          <span class="value">${e.likes}</span>
        </li>
        <li class="info-el">
          <span class="title">Views</span>
          <span class="value">${e.views}</span>
        </li>
        <li class="info-el">
          <span class="title">Comments</span>
          <span class="value">${e.comments}</span>
        </li>
        <li class="info-el">
          <span class="title">Downloads</span>
          <span class="value">${e.downloads}</span>
        </li>
      </ul>

      </li>
  `,y=document.querySelector(".gallery"),c=document.querySelector(".loader"),m=new p(".gallery a",{captionDelay:250});function g(e){c.style.display="inline",fetch(`https://pixabay.com/api/?key=45750701-ca468da961c367d7a246db4b7&q=${encodeURIComponent(e)}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>(t.ok||l("something went wrong, bitch, try again"),t.json())).then(t=>{if(console.log(t),t.total==0){l("Sorry, there are no images matching your search query. Please try again!");return}const o=t.hits.map(r=>f(r)).join("");y.innerHTML=o,m.refresh()}).catch(t=>{console.log(t),l("something went wrong, try again")}).finally(()=>{c.style.display="none"})}function l(e){d.show({message:e,position:"topRight",progressBar:!1,theme:"dark",backgroundColor:"red"})}let i=document.querySelector('[type="submit"]'),u=document.querySelector('[type="text"]');u.addEventListener("keyup",h);function h(e){const t=e.target.value;if(t==""||t==" "){i.disabled=!0;return}i.disabled=!1}i.addEventListener("click",w);function w(e){e.preventDefault(),g(u.value)}
//# sourceMappingURL=index.js.map
