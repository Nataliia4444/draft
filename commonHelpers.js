import{v as p}from"./assets/vendor-4a60fe23.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const o={list:document.getElementById("list-container"),input:document.getElementById("input-box"),inputName:document.getElementById("input-box-name"),btnWriteName:document.querySelector(".button-write"),btnAdd:document.querySelector(".button-add")};function u(){const a=localStorage.getItem("KEY");if(a){let r=function(e){return e.map(t=>`
         <li id=${t.id}>
         ${t.name}
         <button class="btn-card btn">Delete</button>
         </li>
      `).join("")};const i=JSON.parse(a);o.list.insertAdjacentHTML("beforeend",r(i))}document.querySelectorAll(".btn-card").forEach(i=>{i.addEventListener("click",function(r){const e=r.target.closest("li").id,t=localStorage.getItem("KEY");if(t){const l=JSON.parse(t),s=Array.from(l).filter(d=>d.id!==e);localStorage.setItem("KEY",JSON.stringify(s)),o.list.innerHTML="",u()}})})}const c=[];let m=localStorage.getItem("KEY");m&&JSON.parse(m).map(n=>c.push(n));o.btnAdd.addEventListener("click",f);document.addEventListener("keypress",function(a){a.key==="Enter"&&f()});function f(a){if(o.input.value.trim().length>0){const n=document.createElement("li");n.id=p(),n.textContent=o.input.value,o.list.appendChild(n);const i=document.createElement("button");i.className="btn-card btn",i.textContent="Delete",n.appendChild(i);const r=document.createElement("button");r.textContent="Write",n.appendChild(r),i.addEventListener("click",function(e){o.list.removeChild(n);const t=localStorage.getItem("KEY");if(t){const l=JSON.parse(t),s=Array.from(l).filter(d=>d.id!==idEl);localStorage.setItem("KEY",JSON.stringify(s)),o.list.innerHTML="",u()}}),o.input.value="",r.addEventListener("click",function(){const e=r.parentNode.firstChild,t={name:e.textContent,id:e.parentElement.id};c.push(t),r.disabled=!0,r.classList.add("btn-disabled"),console.log(c,"newArr"),localStorage.setItem("KEY",JSON.stringify(c))})}}o.btnWriteName.addEventListener("click",a=>{o.inputName.placeholder=`${o.inputName.value}`,o.inputName.value=""});u();
//# sourceMappingURL=commonHelpers.js.map
