!function(e){function n(data){for(var n,t,o=data[0],c=data[1],i=0,d=[];i<o.length;i++)t=o[i],Object.prototype.hasOwnProperty.call(r,t)&&r[t]&&d.push(r[t][0]),r[t]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(f&&f(data);d.length;)d.shift()()}var t={},r={1:0};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var c=new Promise((function(n,o){t=r[e]=[n,o]}));n.push(t[2]=c);var d,script=document.createElement("script");script.charset="utf-8",script.timeout=120,o.nc&&script.setAttribute("nonce",o.nc),script.src=function(e){return o.p+""+({2:"pages/index",3:"pages/tests/iframe/index",4:"pages/tests/image/index",5:"pages/tests/picture/index",6:"pages/tests/speedkit-loader/index",7:"pages/tests/v-font-media/index",8:"pages/tests/v-font-scroll/index",9:"pages/tests/v-font/index",10:"pages/tests/vimeo/index",11:"pages/tests/youtube/index",12:"vendor"}[e]||e)+"."+{0:"7b9938bb9531ff7b6b52",2:"4ad185d1a6eb624de8a4",3:"de2728dfcb6b43069549",4:"12ae7e17b726359fbc5c",5:"9223002043e09a4454bd",6:"2469c389a3ef94423366",7:"19ff5c3a461bba07f16c",8:"9bd013a00afd2e5b0908",9:"408f748dc7a763786150",10:"6277232dfb3a399b5b99",11:"fc8aa176ef6b2ae35408",12:"a9c842cce8985ce3b015",13:"f8ffbfdc24ad46011f89",14:"45a685b1670caf477e20",15:"5afaab16bc26f2749983",16:"11a7aac0037387e690fc",17:"2671628896e99c763a28",18:"1faa25fef83ace3324be",19:"a8bf2906be8d84d1bdfd",20:"ed882c4aff330cd6f018",21:"01bf0c6f27208bab9bf0",22:"85f7240ad0b8ae57cceb",23:"451f036852d3991d9c9d",24:"3548b0b58468833d80bb",25:"60fbb04a80844b4f6017",26:"1ecdb7d215d87fd36483",27:"03df3c5fa5333b1af18e",28:"da04f2257faf35852fa6"}[e]+".js"}(e);var f=new Error;d=function(n){script.onerror=script.onload=null,clearTimeout(l);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+c+")",f.name="ChunkLoadError",f.type=o,f.request=c,t[1](f)}r[e]=void 0}};var l=setTimeout((function(){d({type:"timeout",target:script})}),12e4);script.onerror=script.onload=d,document.head.appendChild(script)}return Promise.all(n)},o.m=e,o.c=t,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(t,r,function(n){return e[n]}.bind(null,r));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(object,e){return Object.prototype.hasOwnProperty.call(object,e)},o.p="/example/_nuxt/",o.oe=function(e){throw console.error(e),e};var c=window.webpackJsonp=window.webpackJsonp||[],d=c.push.bind(c);c.push=n,c=c.slice();for(var i=0;i<c.length;i++)n(c[i]);var f=d;o(o.s=3)}([function(e,n,t){"use strict";(function(e){t.d(n,"d",(function(){return d})),t.d(n,"c",(function(){return l})),t.d(n,"b",(function(){return m})),t.d(n,"a",(function(){return y}));const r={device:{hardwareConcurrency:{min:2,max:48},deviceMemory:{min:2}},timing:{fcp:500,dcl:800}};let o=r,c=f(o);function d(e={}){o={device:Object.assign({},r.device,e.device||{}),timing:Object.assign({},r.timing,e.timing||{})},o=Object.assign({},r,e),c=f(o)}function f(n={}){const t=e.navigator||{};return{hardwareConcurrency:t.hardwareConcurrency||n.device.hardwareConcurrency.min,deviceMemory:t.deviceMemory||n.device.deviceMemory.min,userAgent:t.userAgent||""}}function l(){return y()&&m()&&!0}function m(){return c.hardwareConcurrency>=o.device.hardwareConcurrency.min&&c.hardwareConcurrency<=o.device.hardwareConcurrency.max&&c.deviceMemory>=o.device.deviceMemory.min}function y(){if(e.performance){const e=performance.getEntriesByName("first-contentful-paint"),n=performance.getEntriesByType("resource");if(e.length)return e[0].startTime<o.timing.fcp;if(n.length)return n.reduce(((e,n)=>((!e||e<n.responseEnd)&&(e=n.responseEnd),e)),null)<o.timing.dcl}return!1}}).call(this,t(1))},function(e,n){var g;g=function(){return this}();try{g=g||new Function("return this")()}catch(e){"object"==typeof window&&(g=window)}e.exports=g},function(e,n,t){"use strict";(function(e){function r(n){return new RegExp(n.regex).test(e.navigator.userAgent)}t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return o}));const o=()=>!!("ontouchstart"in e||e.DocumentTouch&&document instanceof e.DocumentTouch)}).call(this,t(1))},function(e,n,t){t(4),e.exports=t(5)},function(e,n,t){(function(e){e.installComponents=function(component,e){var t="function"==typeof component.exports?component.exports.extendOptions:component.options;for(var i in"function"==typeof component.exports&&(t.components=component.exports.options.components),t.components=t.components||{},e)t.components[i]=t.components[i]||e[i];t.functional&&function(component,e){if(component.exports[n])return;component.exports[n]=!0;var t=component.exports.render;component.exports.render=function(n,r){return t(n,Object.assign({},r,{_c:function(n,a,b){return r._c(e[n]||n,a,b)}}))}}(component,t.components)};var n="_functionalComponents"}).call(this,t(1))},function(e,n,t){"use strict";t.r(n),function(e){var n=t(0),r=t(2);let o=!1;async function c(){if(!o)return o=!0,await new Promise((e=>d(e))),Promise.all([t.e(23),t.e(12),t.e(15),t.e(13)]).then(t.bind(null,6))}function d(n){"requestIdleCallback"in e?e.requestIdleCallback((e=>{e.timeRemaining()>10||e.didTimeout?n():d(n)}),{timeout:2e3}):n()}function f(){e.document.querySelectorAll("[data-font]").forEach((e=>{e.classList.add("font-active")}))}function l(button,e){button&&button.addEventListener("click",e,{capture:!0,once:!0,passive:!0})}function m(n){n.style.display="block",e.document.querySelector("#nuxt-speedkit-speedkit-layer").className+=" nuxt-speedkit-speedkit-layer-visible"}const y=Object(r.a)({regex:new RegExp("((CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS)[ +]+(12[_.]2|12[_.]([3-9]|\\d{2,})|12[_.]5|12[_.]([6-9]|\\d{2,})|(1[3-9]|[2-9]\\d|\\d{3,})[_.]\\d+|14[_.]0|14[_.]([1-9]|\\d{2,})|14[_.]4|14[_.]([5-9]|\\d{2,})|14[_.]8|14[_.](9|\\d{2,})|(1[5-9]|[2-9]\\d|\\d{3,})[_.]\\d+|15[_.]0|15[_.]([1-9]|\\d{2,})|(1[6-9]|[2-9]\\d|\\d{3,})[_.]\\d+)(?:[_.]\\d+)?)|(Opera Mini(?:\\/att)?\\/?(\\d+)?(?:\\.\\d+)?(?:\\.\\d+)?)|(Opera\\/.+Opera Mobi.+Version\\/(64|(6[5-9]|[7-9]\\d|\\d{3,}))\\.\\d+)|(Opera\\/(64|(6[5-9]|[7-9]\\d|\\d{3,}))\\.\\d+.+Opera Mobi)|(Opera Mobi.+Opera(?:\\/|\\s+)(64|(6[5-9]|[7-9]\\d|\\d{3,}))\\.\\d+)|((?:Chrome).*OPR\\/(82|(8[3-9]|9\\d|\\d{3,}))\\.\\d+\\.\\d+)|(SamsungBrowser\\/(15|(1[6-9]|[2-9]\\d|\\d{3,}))\\.\\d+)|(Edge\\/(98|(99|\\d{3,}))(?:\\.\\d+)?)|((Chromium|Chrome)\\/(97|(9[8-9]|\\d{3,}))\\.\\d+(?:\\.\\d+)?)|(Version\\/(14\\.1|14\\.([2-9]|\\d{2,})|(1[5-9]|[2-9]\\d|\\d{3,})\\.\\d+|15\\.2|15\\.([3-9]|\\d{2,})|(1[6-9]|[2-9]\\d|\\d{3,})\\.\\d+)(?:\\.\\d+)? Safari\\/)|(Firefox\\/(91|(9[2-9]|\\d{3,})|97|(9[8-9]|\\d{3,}))\\.\\d+\\.\\d+)|(Firefox\\/(91|(9[2-9]|\\d{3,})|97|(9[8-9]|\\d{3,}))\\.\\d+(pre|[ab]\\d+[a-z]*)?)","")});document.getElementById("nuxt-speedkit-speedkit-layer")?(Object(n.d)({device:{hardwareConcurrency:{min:2,max:48},deviceMemory:{min:2}},timing:{fcp:800,dcl:1200}}),function(t,r){r||m(e.document.getElementById("nuxt-speedkit-button-unsupported-browser")),Object(n.b)()||m(e.document.getElementById("nuxt-speedkit-button-outdated-device")),Object(n.a)()||m(e.document.getElementById("nuxt-speedkit-button-slow-connection")),l(e.document.getElementById("nuxt-speedkit-button-init-app"),t)}(c,y),("__NUXT_SPEEDKIT_AUTO_INIT__"in e&&e.__NUXT_SPEEDKIT_AUTO_INIT__||Object(n.c)()&&y)&&c(),l(e.document.getElementById("nuxt-speedkit-button-init-font"),f),"__NUXT_SPEEDKIT_FONT_INIT__"in e&&e.__NUXT_SPEEDKIT_FONT_INIT__&&f()):c()}.call(this,t(1))}]);