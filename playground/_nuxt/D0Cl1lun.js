const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Beff_YD-.js","./entry.TNFNCK2c.css"])))=>i.map(i=>d[i]);
var U=Object.defineProperty;var B=t=>{throw TypeError(t)};var k=(t,e,n)=>e in t?U(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var u=(t,e,n)=>k(t,typeof e!="symbol"?e+"":e,n),C=(t,e,n)=>e.has(t)||B("Cannot "+n);var b=(t,e,n)=>(C(t,e,"read from private field"),n?n.call(t):e.get(t)),_=(t,e,n)=>e.has(t)?B("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),x=(t,e,n,r)=>(C(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n);const N="modulepreload",q=function(t,e){return new URL(t,e).href},O={},j=function(e,n,r){let o=Promise.resolve();if(n&&n.length>0){const a=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),f=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));o=Promise.allSettled(n.map(c=>{if(c=q(c,r),c in O)return;O[c]=!0;const w=c.endsWith(".css"),I=w?'[rel="stylesheet"]':"";if(!!r)for(let h=a.length-1;h>=0;h--){const g=a[h];if(g.href===c&&(!w||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${I}`))return;const d=document.createElement("link");if(d.rel=w?"stylesheet":N,w||(d.as="script"),d.crossOrigin="",d.href=c,f&&d.setAttribute("nonce",f),document.head.appendChild(d),w)return new Promise((h,g)=>{d.addEventListener("load",h),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a}return o.then(a=>{for(const i of a||[])i.status==="rejected"&&s(i.reason);return e().catch(s)})};var m,p;class S{constructor(e){_(this,m,[]);_(this,p,!1);e(n=>b(this,p)?!1:(b(this,m).forEach(r=>r(n)),!0))}subscribe(e){return b(this,m).push(e),{unsubscribe:()=>{x(this,m,b(this,m).filter(n=>n===e))}}}destroy(){x(this,p,!0)}}m=new WeakMap,p=new WeakMap;const M=(t,e)=>{let n=[];const r=o=>s=>{n[Number(o)]=s,n.filter(Boolean).length>=e.length&&(t(n),n=[])};e.forEach((o,s)=>{o.subscribe(r(s))})};function R(){return{timing:{fcp:500,dcl:800}}}let l=R();function V(t=R()){l={timing:{...l.timing,...t.timing||{}}},l={...l,...t}}function F(){return L()&&!0}function L(){if(window.performance&&l.timing){const t=performance.getEntriesByName("first-contentful-paint"),e=performance.getEntriesByType("resource");if(t.length)return t[0].startTime<l.timing.fcp;if(e.length)return e.reduce((n,r)=>((!n||n<r.startTime+r.duration)&&(n=r.startTime+r.duration),n),0)<l.timing.dcl}return!1}let P;function X(t,e,n,r){const o=new H(10,e/2);return([s,a])=>{const i=window.performance.now()-P,f=a/s;f<=1&&o.add(f),o.avg<=1&&o.avg>e?n(!0):i>=t&&r(!1)}}async function D(t={}){if("requestIdleCallback"in window){const e=t.maxTime||1e3,n=t.threshold||.65,r=new S(W),o=new S($);return new Promise((s,a)=>{P=window.performance.now(),M(X(e,n,s,a),[r,o])}).finally(()=>{r.destroy(),o.destroy()})}}function W(t){let e=performance.now();const n=()=>{const r=performance.now(),o=r-e;e=r,t(o)&&requestAnimationFrame(n)};requestAnimationFrame(n)}function $(t){const e=n=>{t(n.timeRemaining())&&window.requestIdleCallback(e)};window.requestIdleCallback(e)}class H{constructor(e=10,n=0){u(this,"list");u(this,"index",0);this.list=Array(e).fill(n)}add(e){this.list[this.index]=e,this.index=(this.index+1)%this.list.length}get avg(){return this.list.reduce((e,n)=>e+=n,0)/this.list.length}}class y{constructor(){u(this,"promise");u(this,"resolve",()=>{});u(this,"reject",()=>{});u(this,"state");this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n,this.state=0}).then(e=>(this.state=1,e)).catch(e=>{throw this.state=2,new Error(e)})}static create(){return new y}}const T=t=>window.dispatchEvent(new CustomEvent("nuxt-booster:run",{detail:{sufficient:t}})),v=(t,e)=>{Array.from(document.querySelectorAll(t)).forEach(n=>{n.addEventListener("click",e,{capture:!0,once:!0,passive:!0})})},E=(t,e)=>{const n=window.document.getElementById(e);if(n)n.style.display="block",t.className+=" nuxt-booster-layer-visible";else throw new Error("Can't update booster-layer, message "+e+" missing.")},Y=(t,e)=>{e||E(t,"nuxt-booster-message-unsupported-browser"),L()||E(t,"nuxt-booster-message-reduced-bandwidth")},A=()=>{document.documentElement.classList.add("nuxt-booster-reduced-view"),window.document.querySelectorAll("[data-font]").forEach(t=>{t.classList.add("font-active")}),Array.from(document.querySelectorAll("noscript.nuxt-booster-picture-noscript")).forEach(t=>{const e=document.createElement("div");e.innerHTML=t.innerHTML,t.parentNode?t.parentNode.replaceChild(e.children[0],t):console.warn("Can not replace noscript element."),e.remove()})},z=async t=>{try{if(await Q())throw new Error("Battery is low.")}catch(e){if(e.message==="Battery is low.")throw e;await G(t)}},K=()=>{const{promise:t,resolve:e}=new y;return document.visibilityState==="hidden"?document.addEventListener("visibilitychange",e,{once:!0}):e(),t},Q=async()=>{const e=await window.navigator.getBattery();return!e.charging&&e.level<=.2},G=async t=>{const e=URL.createObjectURL(t);try{const n=document.createElement("video");n.muted=!0,n.playsInline=!0,n.src=e;const{promise:r,resolve:o}=new y,s=window.setTimeout(o,500);await Promise.race([n.play(),r]),window.clearTimeout(s),URL.revokeObjectURL(e)}catch(n){throw URL.revokeObjectURL(e),n}},J=t=>{document.querySelector("#nuxt-booster-button-init-nojs, #nuxt-booster-button-init-app, #nuxt-booster-button-init-reduced-view")&&(console.warn("The `#nuxt-booster-button-init-nojs`, `#nuxt-booster-button-init-reduced-view` and `#nuxt-booster-button-init-app` ids are deprecated. Please use the following classes instead: `.nuxt-booster-button-init-nojs`, `.nuxt-booster-button-init-reduced-view` and `.nuxt-booster-button-init-app`."),v("#nuxt-booster-button-init-reduced-view",A),v("#nuxt-booster-button-init-app",()=>t(!0)))};function Z(t){return new RegExp(t.regex).test(window.navigator.userAgent)}const s0=()=>typeof window<"u"&&("ontouchstart"in window||navigator.maxTouchPoints>0),a0=(t,e)=>t===!0?"anonymous":t===void 0?e||"anonymous":t,e0=new Blob([new Uint8Array([0,0,0,28,102,116,121,112,105,115,111,109,0,0,2,0,105,115,111,109,105,115,111,50,109,112,52,49,0,0,0,8,102,114,101,101,0,0,2,239,109,100,97,116,33,16,5,32,164,27,255,192,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,55,167,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,112,33,16,5,32,164,27,255,192,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,55,167,128,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,112,0,0,2,194,109,111,111,118,0,0,0,108,109,118,104,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,232,0,0,0,47,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,1,236,116,114,97,107,0,0,0,92,116,107,104,100,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,47,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,36,101,100,116,115,0,0,0,28,101,108,115,116,0,0,0,0,0,0,0,1,0,0,0,47,0,0,0,0,0,1,0,0,0,0,1,100,109,100,105,97,0,0,0,32,109,100,104,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,172,68,0,0,8,0,85,196,0,0,0,0,0,45,104,100,108,114,0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0,0,0,1,15,109,105,110,102,0,0,0,16,115,109,104,100,0,0,0,0,0,0,0,0,0,0,0,36,100,105,110,102,0,0,0,28,100,114,101,102,0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1,0,0,0,211,115,116,98,108,0,0,0,103,115,116,115,100,0,0,0,0,0,0,0,1,0,0,0,87,109,112,52,97,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,2,0,16,0,0,0,0,172,68,0,0,0,0,0,51,101,115,100,115,0,0,0,0,3,128,128,128,34,0,2,0,4,128,128,128,20,64,21,0,0,0,0,1,244,0,0,1,243,249,5,128,128,128,2,18,16,6,128,128,128,1,2,0,0,0,24,115,116,116,115,0,0,0,0,0,0,0,1,0,0,0,2,0,0,4,0,0,0,0,28,115,116,115,99,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,2,0,0,0,1,0,0,0,28,115,116,115,122,0,0,0,0,0,0,0,0,0,0,0,2,0,0,1,115,0,0,1,116,0,0,0,20,115,116,99,111,0,0,0,0,0,0,0,1,0,0,0,44,0,0,0,98,117,100,116,97,0,0,0,90,109,101,116,97,0,0,0,0,0,0,0,33,104,100,108,114,0,0,0,0,0,0,0,0,109,100,105,114,97,112,112,108,0,0,0,0,0,0,0,0,0,0,0,0,45,105,108,115,116,0,0,0,37,169,116,111,111,0,0,0,29,100,97,116,97,0,0,0,1,0,0,0,0,76,97,118,102,53,54,46,52,48,46,49,48,49])],{type:"video/mp4"});t0();function t0(){return r0().then(()=>n0())}function n0(){return j(()=>import("./Beff_YD-.js").then(t=>t.al),__vite__mapDeps([0,1]),import.meta.url).then(t=>t.default)}function r0(){const t=new y;let e=!1;const n=window.document.getElementById("nuxt-booster-layer"),r="__NUXT_BOOSTER_FORCE_INIT__"in window&&window.__NUXT_BOOSTER_FORCE_INIT__;async function o(a){e&&t.resolve(),await K(),document.documentElement.classList.remove("nuxt-booster-reduced-view");try{a||await z(e0)}catch(i){if(console.warn(i),T(!1),n)return E(n,"nuxt-booster-message-low-battery"),null}try{a||await D(),e=!0,T(!0),t.resolve()}catch(i){if(console.warn(i),T(!1),n)return E(n,"nuxt-booster-message-weak-hardware"),null}}const s=Z({regex:new RegExp(/Edge?\/(13[1-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Firefox\/(12[89]|1[3-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Chrom(ium|e)\/(109|1[1-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|(Maci|X1{2}).+ Version\/(18\.([1-9]|\d{2,})|(19|[2-9]\d|\d{3,})\.\d+)([,.]\d+|)( \(\w+\)|)( Mobile\/\w+|) Safari\/|Chrome.+OPR\/(1{2}[3-9]|1[2-9]\d|[2-9]\d{2}|\d{4,})\.\d+\.\d+|(CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS|CPU iPad OS)[ +]+(15[._]([6-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})[._]\d+)([._]\d+|)|Opera Mini|Android:?[ /-](13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})(\.\d+|)(\.\d+|)|Mobile Safari.+OPR\/([89]\d|\d{3,})\.\d+\.\d+|Android.+Firefox\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+Chrom(ium|e)\/(13[2-9]|1[4-9]\d|[2-9]\d{2}|\d{4,})\.\d+(\.\d+|)|Android.+(UC? ?Browser|UCWEB|U3)[ /]?(15\.([5-9]|\d{2,})|(1[6-9]|[2-9]\d|\d{3,})\.\d+)\.\d+|SamsungBrowser\/(2[6-9]|[3-9]\d|\d{3,})\.\d+|Android.+MQ{2}Browser\/(14(\.(9|\d{2,})|)|(1[5-9]|[2-9]\d|\d{3,})(\.\d+|))(\.\d+|)|K[Aa][Ii]OS\/(2\.([5-9]|\d{2,})|([3-9]|\d{2,})\.\d+)(\.\d+|)/)});return window.addEventListener("load",async function(){document.getElementById("nuxt-booster-layer")?(v(".nuxt-booster-button-init-reduced-view",A),v(".nuxt-booster-button-init-app",()=>o(!0)),J(o),V({timing:{fcp:800,dcl:1200},device:{hardwareConcurrency:{min:2,max:48},deviceMemory:{min:2}}}),"__NUXT_BOOSTER_AUTO_INIT__"in window&&window.__NUXT_BOOSTER_AUTO_INIT__||F()&&s?o():Y(n,s)):await o(r)}),t.promise}export{y as D,j as _,s0 as a,a0 as g,Z as i};
