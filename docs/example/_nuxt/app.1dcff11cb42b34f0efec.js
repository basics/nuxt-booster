!function(e){function t(data){for(var t,n,o=data[0],d=data[1],i=0,c=[];i<o.length;i++)n=o[i],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&c.push(r[n][0]),r[n]=0;for(t in d)Object.prototype.hasOwnProperty.call(d,t)&&(e[t]=d[t]);for(f&&f(data);c.length;)c.shift()()}var n={},r={2:0};function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var d=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=d);var c,script=document.createElement("script");script.charset="utf-8",script.timeout=120,o.nc&&script.setAttribute("nonce",o.nc),script.src=function(e){return o.p+""+({3:"pages/index",4:"pages/tests/iframe/index",5:"pages/tests/image/index",6:"pages/tests/picture/index",7:"pages/tests/speedkit-layer/index",8:"pages/tests/speedkit-loader/index",9:"pages/tests/v-font-media/index",10:"pages/tests/v-font-scroll/index",11:"pages/tests/v-font/index",12:"pages/tests/vimeo/index",13:"pages/tests/youtube/index",14:"vendor"}[e]||e)+"."+{0:"b1384e8f0bf5af21877e",1:"306910e0271f4b659eda",3:"4cc2fef5c493f0d70408",4:"fa376dcce25c658f0505",5:"e2eb8edbbe1b35fede1b",6:"27372b5df0b093f1f0e6",7:"f19833d91f3f1fa3e337",8:"ccbd33f1eb482d56c9b9",9:"93c329c5c535d5f99f18",10:"9fa93f3351ee99b6776b",11:"668d2a395bbd19c65871",12:"2d8dd9aab775c4ddc914",13:"6b0701f565463c7a362c",14:"576322aaea4319f1c07c",15:"3427c55929d3b520690a",16:"04cabc353273401b671a",17:"d8a50ad981764d5f1819",18:"96a500d0e388d1ab0f46",19:"d4b417511f3508a1e62f",20:"fe5696c601f6f8e4f111",21:"d8b6339adb80aaedd4e6",22:"7e7ec6f4dfe4078fd07e",23:"41904d695c30f2d53373",24:"46202c21d6bd8392ba4b",25:"90d89347004693a960a5",26:"31e8232cb9d2992a6540",27:"65c791c3327dd9a6e8d1",28:"150da49207c38b8ecccc",29:"02cb69380c6c75f59aa1"}[e]+".js"}(e);var f=new Error;c=function(t){script.onerror=script.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),d=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+d+")",f.name="ChunkLoadError",f.type=o,f.request=d,n[1](f)}r[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:script})}),12e4);script.onerror=script.onload=c,document.head.appendChild(script)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(object,e){return Object.prototype.hasOwnProperty.call(object,e)},o.p="/example/_nuxt/",o.oe=function(e){throw console.error(e),e};var d=window.webpackJsonp=window.webpackJsonp||[],c=d.push.bind(d);d.push=t,d=d.slice();for(var i=0;i<d.length;i++)t(d[i]);var f=c;o(o.s=3)}([function(e,t){var g;g=function(){return this}();try{g=g||new Function("return this")()}catch(e){"object"==typeof window&&(g=window)}e.exports=g},function(e,t,n){"use strict";(function(e){n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return f}));const r={timing:{fcp:500,dcl:800}};let o=r;function d(e={}){o={timing:Object.assign({},r.timing,e.timing||{})},o=Object.assign({},r,e)}function c(){return f()&&!0}function f(){if(e.performance){const e=performance.getEntriesByName("first-contentful-paint"),t=performance.getEntriesByType("resource");if(e.length)return e[0].startTime<o.timing.fcp;if(t.length)return t.reduce(((e,t)=>((!e||e<t.responseEnd)&&(e=t.responseEnd),e)),null)<o.timing.dcl}return!1}}).call(this,n(0))},function(e,t,n){"use strict";(function(e){function r(t){return new RegExp(t.regex).test(e.navigator.userAgent)}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));const o=()=>!!("ontouchstart"in e||e.DocumentTouch&&document instanceof e.DocumentTouch)}).call(this,n(0))},function(e,t,n){n(4),e.exports=n(5)},function(e,t,n){(function(e){e.installComponents=function(component,e){var n="function"==typeof component.exports?component.exports.extendOptions:component.options;for(var i in"function"==typeof component.exports&&(n.components=component.exports.options.components),n.components=n.components||{},e)n.components[i]=n.components[i]||e[i];n.functional&&function(component,e){if(component.exports[t])return;component.exports[t]=!0;var n=component.exports.render;component.exports.render=function(t,r){return n(t,Object.assign({},r,{_c:function(t,a,b){return r._c(e[t]||t,a,b)}}))}}(component,n.components)};var t="_functionalComponents"}).call(this,n(0))},function(e,t,n){"use strict";n.r(t),function(e){var t=n(1),r=n(2);const o=function(){let e=16;return void 0!==window.__NUXT_SPEEDKIT_MAX_IDLE_DURATION__&&(e=window.__NUXT_SPEEDKIT_MAX_IDLE_DURATION__),60*e}();let d=!1;const c=e.document.getElementById("nuxt-speedkit-layer");async function f(e){if(!d)return document.documentElement.classList.remove("nuxt-speedkit-reduced-view"),d=e||await new Promise((e=>m(e))),d?Promise.all([n.e(24),n.e(14),n.e(16),n.e(15)]).then(n.bind(null,6)):null}let l=0;function m(t){c&&l>=o?(x("nuxt-speedkit-message-weak-hardware"),t(!1)):"requestIdleCallback"in e&&o>l?(l++,e.requestIdleCallback((e=>{e.timeRemaining()>10||e.didTimeout?t(!0):m(t)}),{timeout:2e3})):t(!0)}function _(e,t){Array.from(document.querySelectorAll(`#${e}`)).forEach((e=>{e.addEventListener("click",t,{capture:!0,once:!0,passive:!0})}))}function x(t){const n=e.document.getElementById(t);if(!n)throw new Error(`Can't update speedkit-layer, message ${t} missing.`);n.style.display="block",c.className+=" nuxt-speedkit-layer-visible"}const h=Object(r.a)({regex:new RegExp("((CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS)[ +]+(14[_.]5|14[_.]([6-9]|\\d{2,})|14[_.]8|14[_.](9|\\d{2,})|(1[5-9]|[2-9]\\d|\\d{3,})[_.]\\d+|15[_.]4|15[_.]([5-9]|\\d{2,})|(1[6-9]|[2-9]\\d|\\d{3,})[_.]\\d+|16[_.]0|16[_.]([1-9]|\\d{2,})|(1[7-9]|[2-9]\\d|\\d{3,})[_.]\\d+)(?:[_.]\\d+)?)|(Opera Mini(?:\\/att)?\\/?(\\d+)?(?:\\.\\d+)?(?:\\.\\d+)?)|(Opera\\/.+Opera Mobi.+Version\\/(64|(6[5-9]|[7-9]\\d|\\d{3,}))\\.\\d+)|(Opera\\/(64|(6[5-9]|[7-9]\\d|\\d{3,}))\\.\\d+.+Opera Mobi)|(Opera Mobi.+Opera(?:\\/|\\s+)(64|(6[5-9]|[7-9]\\d|\\d{3,}))\\.\\d+)|((?:Chrome).*OPR\\/(89|(9\\d|\\d{3,}))\\.\\d+\\.\\d+)|(SamsungBrowser\\/(17|(1[8-9]|[2-9]\\d|\\d{3,}))\\.\\d+)|(Edge\\/(103|(10[4-9]|1[1-9]\\d|[2-9]\\d\\d|\\d{4,}))(?:\\.\\d+)?)|((Chromium|Chrome)\\/(103|(10[4-9]|1[1-9]\\d|[2-9]\\d\\d|\\d{4,}))\\.\\d+(?:\\.\\d+)?)|(Version\\/(15\\.5|15\\.([6-9]|\\d{2,})|(1[6-9]|[2-9]\\d|\\d{3,})\\.\\d+|16\\.0|16\\.([1-9]|\\d{2,})|(1[7-9]|[2-9]\\d|\\d{3,})\\.\\d+)(?:\\.\\d+)? Safari\\/)|(Firefox\\/(91|(9[2-9]|\\d{3,})|102|(10[3-9]|1[1-9]\\d|[2-9]\\d\\d|\\d{4,}))\\.\\d+\\.\\d+)|(Firefox\\/(91|(9[2-9]|\\d{3,})|102|(10[3-9]|1[1-9]\\d|[2-9]\\d\\d|\\d{4,}))\\.\\d+(pre|[ab]\\d+[a-z]*)?)","")});document.getElementById("nuxt-speedkit-layer")?(_("nuxt-speedkit-button-init-reduced-view",(function(){document.documentElement.classList.add("nuxt-speedkit-reduced-view"),e.document.querySelectorAll("[data-font]").forEach((e=>{e.classList.add("font-active")})),Array.from(document.querySelectorAll("noscript.nuxt-speedkit-picture-noscript")).forEach((e=>{const t=document.createElement("div");t.innerHTML=e.innerHTML,e.parentNode.replaceChild(t.children[0],e),t.remove()}))})),_("nuxt-speedkit-button-init-app",(()=>f(!0))),Object(t.c)({timing:{fcp:800,dcl:1200},device:{hardwareConcurrency:{min:2,max:48},deviceMemory:{min:2}}}),"__NUXT_SPEEDKIT_AUTO_INIT__"in e&&e.__NUXT_SPEEDKIT_AUTO_INIT__||Object(t.b)()&&h?f():function(e){e||x("nuxt-speedkit-message-unsupported-browser"),Object(t.a)()||x("nuxt-speedkit-message-reduced-bandwidth")}(h)):f()}.call(this,n(0))}]);