!function(e){function n(data){for(var n,r,d=data[0],f=data[1],l=data[2],i=0,v=[];i<d.length;i++)r=d[i],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&v.push(o[r][0]),o[r]=0;for(n in f)Object.prototype.hasOwnProperty.call(f,n)&&(e[n]=f[n]);for(m&&m(data);v.length;)v.shift()();return c.push.apply(c,l||[]),t()}function t(){for(var e,i=0;i<c.length;i++){for(var n=c[i],t=!0,r=1;r<n.length;r++){var f=n[r];0!==o[f]&&(t=!1)}t&&(c.splice(i--,1),e=d(d.s=n[0]))}return e}var r={},o={2:0},c=[];function d(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var c,script=document.createElement("script");script.charset="utf-8",script.timeout=120,d.nc&&script.setAttribute("nonce",d.nc),script.src=function(e){return d.p+""+({4:"pages/index",5:"pages/tests/iframe/index",6:"pages/tests/image/index",7:"pages/tests/picture/index",8:"pages/tests/speedkit-loader/index",9:"pages/tests/v-font-media/index",10:"pages/tests/v-font-scroll/index",11:"pages/tests/v-font/index",12:"pages/tests/vimeo/index",13:"pages/tests/youtube/index",14:"vendor"}[e]||e)+"."+{0:"ade81d26a9f365edc748",1:"aa2acd0cef5fec9e6315",4:"ac10483e28c71c7ca45c",5:"93640e307932742f4174",6:"5a62fa33354951259818",7:"c2df34d0942486f7eed2",8:"a0b5854b4c6537c3dbf4",9:"644b5eb98cace07fad1c",10:"690c999eff23bf2dfb23",11:"634bc32edcbf73481d81",12:"1037ab7b68673fc2e71a",13:"2aa11086fecf985bcdbf",14:"b8419641a3fff9e969b8",15:"eed72699d9f58221f415",16:"f35557ed8bebfd376021",17:"7ecb0ba38d9d3ef9a34c",18:"42694f5e3527a9003d90",19:"7faba2adf547aeb041b6",20:"99f9ba038bb41493b11a",21:"3c98471401022ad2f579",22:"b364eaaefe4b4335b1d3",23:"95145d42c0a0082bf0c2",24:"f381f279319f6e629bb2",25:"132c87bd8d79f5e18c7b",26:"751fa8fb0b38566b8cf8",27:"d9fc7110af147d65bc7c",28:"38800d87faff8ce119d9",29:"20f1db4f4749461c3ee2",30:"cd120bdc2ed7d4ac47e1",31:"ff78da5d0155169e87ff"}[e]+".js"}(e);var f=new Error;c=function(n){script.onerror=script.onload=null,clearTimeout(l);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",f.name="ChunkLoadError",f.type=r,f.request=c,t[1](f)}o[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:script})}),12e4);script.onerror=script.onload=c,document.head.appendChild(script)}return Promise.all(n)},d.m=e,d.c=r,d.d=function(e,n,t){d.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},d.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,n){if(1&n&&(e=d(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)d.d(t,r,function(n){return e[n]}.bind(null,r));return t},d.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(n,"a",n),n},d.o=function(object,e){return Object.prototype.hasOwnProperty.call(object,e)},d.p="/example/_nuxt/",d.oe=function(e){throw console.error(e),e};var f=window.webpackJsonp=window.webpackJsonp||[],l=f.push.bind(f);f.push=n,f=f.slice();for(var i=0;i<f.length;i++)n(f[i]);var m=l;c.push([127,3]),t()}({127:function(e,n,t){t(128),e.exports=t(129)},128:function(e,n,t){(function(e){e.installComponents=function(component,e){var t="function"==typeof component.exports?component.exports.extendOptions:component.options;for(var i in"function"==typeof component.exports&&(t.components=component.exports.options.components),t.components=t.components||{},e)t.components[i]=t.components[i]||e[i];t.functional&&function(component,e){if(component.exports[n])return;component.exports[n]=!0;var t=component.exports.render;component.exports.render=function(n,r){return t(n,Object.assign({},r,{_c:function(n,a,b){return r._c(e[n]||n,a,b)}}))}}(component,t.components)};var n="_functionalComponents"}).call(this,t(22))},129:function(e,n,t){"use strict";t.r(n),function(e){var n=t(64),r=(t(130),t(145),t(100),t(62),t(102),t(76),t(65),t(66),t(63),t(97),t(98),t(27)),o=t(67),c=!1;function d(){return f.apply(this,arguments)}function f(){return(f=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c){e.next=2;break}return e.abrupt("return");case 2:return c=!0,e.next=5,new Promise((function(e){return l(e)}));case 5:return e.abrupt("return",Promise.all([t.e(15),t.e(14),t.e(18),t.e(16)]).then(t.bind(null,151)));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(n){"requestIdleCallback"in e?e.requestIdleCallback((function(e){e.timeRemaining()>10||e.didTimeout?n():l(n)}),{timeout:2e3}):n()}function m(){e.document.querySelectorAll("[data-font]").forEach((function(e){e.classList.add("font-active")}))}function v(button,e){button&&button.addEventListener("click",e,{capture:!0,once:!0,passive:!0})}function y(n){n.style.display="block",e.document.querySelector("#nuxt-speedkit-speedkit-layer").className+=" nuxt-speedkit-speedkit-layer-visible"}var _=Object(o.a)({regex:new RegExp("((CPU[ +]OS|iPhone[ +]OS|CPU[ +]iPhone|CPU IPhone OS)[ +]+(12[_.]2|12[_.]([3-9]|\\d{2,})|12[_.]5|12[_.]([6-9]|\\d{2,})|(1[3-9]|[2-9]\\d|\\d{3,})[_.]\\d+|14[_.]0|14[_.]([1-9]|\\d{2,})|14[_.]4|14[_.]([5-9]|\\d{2,})|14[_.]8|14[_.](9|\\d{2,})|(1[5-9]|[2-9]\\d|\\d{3,})[_.]\\d+|15[_.]0|15[_.]([1-9]|\\d{2,})|(1[6-9]|[2-9]\\d|\\d{3,})[_.]\\d+)(?:[_.]\\d+)?)|(Opera Mini(?:\\/att)?\\/?(\\d+)?(?:\\.\\d+)?(?:\\.\\d+)?)|(Opera\\/.+Opera Mobi.+Version\\/(64|(6[5-9]|[7-9]\\d|\\d{3,}))\\.\\d+)|(Opera\\/(64|(6[5-9]|[7-9]\\d|\\d{3,}))\\.\\d+.+Opera Mobi)|(Opera Mobi.+Opera(?:\\/|\\s+)(64|(6[5-9]|[7-9]\\d|\\d{3,}))\\.\\d+)|((?:Chrome).*OPR\\/(82|(8[3-9]|9\\d|\\d{3,}))\\.\\d+\\.\\d+)|(SamsungBrowser\\/(15|(1[6-9]|[2-9]\\d|\\d{3,}))\\.\\d+)|(Edge\\/(97|(9[8-9]|\\d{3,}))(?:\\.\\d+)?)|((Chromium|Chrome)\\/(96|(9[7-9]|\\d{3,}))\\.\\d+(?:\\.\\d+)?)|(Version\\/(14\\.1|14\\.([2-9]|\\d{2,})|(1[5-9]|[2-9]\\d|\\d{3,})\\.\\d+|15\\.2|15\\.([3-9]|\\d{2,})|(1[6-9]|[2-9]\\d|\\d{3,})\\.\\d+)(?:\\.\\d+)? Safari\\/)|(Firefox\\/(91|(9[2-9]|\\d{3,})|96|(9[7-9]|\\d{3,}))\\.\\d+\\.\\d+)|(Firefox\\/(91|(9[2-9]|\\d{3,})|96|(9[7-9]|\\d{3,}))\\.\\d+(pre|[ab]\\d+[a-z]*)?)","")});document.getElementById("nuxt-speedkit-speedkit-layer")?(Object(r.d)({device:{hardwareConcurrency:{min:2,max:48},deviceMemory:{min:2}},timing:{fcp:800,dcl:1200}}),function(n,t){t||y(e.document.getElementById("nuxt-speedkit-button-unsupported-browser")),Object(r.b)()||y(e.document.getElementById("nuxt-speedkit-button-outdated-device")),Object(r.a)()||y(e.document.getElementById("nuxt-speedkit-button-slow-connection")),v(e.document.getElementById("nuxt-speedkit-button-init-app"),n)}(d,_),("__NUXT_SPEEDKIT_AUTO_INIT__"in e&&e.__NUXT_SPEEDKIT_AUTO_INIT__||Object(r.c)()&&_)&&d(),v(e.document.getElementById("nuxt-speedkit-button-init-font"),m),"__NUXT_SPEEDKIT_FONT_INIT__"in e&&e.__NUXT_SPEEDKIT_FONT_INIT__&&m()):d()}.call(this,t(22))},27:function(e,n,t){"use strict";(function(e){t.d(n,"d",(function(){return d})),t.d(n,"c",(function(){return l})),t.d(n,"b",(function(){return m})),t.d(n,"a",(function(){return v}));t(101),t(62);var r={device:{hardwareConcurrency:{min:2,max:48},deviceMemory:{min:2}},timing:{fcp:500,dcl:800}},o=r,c=f(o);function d(e){void 0===e&&(e={}),o={device:Object.assign({},r.device,e.device||{}),timing:Object.assign({},r.timing,e.timing||{})},o=Object.assign({},r,e),c=f(o)}function f(n){void 0===n&&(n={});var t=e.navigator||{};return{hardwareConcurrency:t.hardwareConcurrency||n.device.hardwareConcurrency.min,deviceMemory:t.deviceMemory||n.device.deviceMemory.min,userAgent:t.userAgent||""}}function l(){return v()&&m()&&!0}function m(){return c.hardwareConcurrency>=o.device.hardwareConcurrency.min&&c.hardwareConcurrency<=o.device.hardwareConcurrency.max&&c.deviceMemory>=o.device.deviceMemory.min}function v(){if(e.performance){var n=performance.getEntriesByName("first-contentful-paint"),t=performance.getEntriesByType("resource");if(n.length)return n[0].startTime<o.timing.fcp;if(t.length)return t.reduce((function(e,n){return(!e||e<n.responseEnd)&&(e=n.responseEnd),e}),null)<o.timing.dcl}return!1}}).call(this,t(22))},67:function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return o}));t(65),t(76),t(66);function r(n){return new RegExp(n.regex).test(e.navigator.userAgent)}var o=function(){return!!("ontouchstart"in e||e.DocumentTouch&&document instanceof e.DocumentTouch)}}).call(this,t(22))}});