!function(t){function e(data){for(var e,o,l=data[0],f=data[1],d=data[2],i=0,h=[];i<l.length;i++)o=l[i],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&h.push(r[o][0]),r[o]=0;for(e in f)Object.prototype.hasOwnProperty.call(f,e)&&(t[e]=f[e]);for(m&&m(data);h.length;)h.shift()();return c.push.apply(c,d||[]),n()}function n(){for(var t,i=0;i<c.length;i++){for(var e=c[i],n=!0,o=1;o<e.length;o++){var f=e[o];0!==r[f]&&(n=!1)}n&&(c.splice(i--,1),t=l(l.s=e[0]))}return t}var o={},r={4:0},c=[];function l(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=o);var c,script=document.createElement("script");script.charset="utf-8",script.timeout=120,l.nc&&script.setAttribute("nonce",l.nc),script.src=function(t){return l.p+""+{0:"2cf8593",1:"8ee0115",2:"23a8e3c",3:"2b24700",6:"c0adf32",7:"8759cf4",8:"bfd8ed0",9:"cc07ab4",10:"a3f89b7",11:"accb670",12:"e01211f",13:"8bda648",14:"67ee9fe",15:"ca0936b",16:"b7a31f7",18:"c06bc1c",19:"e9ab823",20:"977a31f",21:"d89a761",22:"3fdb537",23:"f5be9a3",24:"ee96a2d"}[t]+".js"}(t);var f=new Error;c=function(e){script.onerror=script.onload=null,clearTimeout(d);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",f.name="ChunkLoadError",f.type=o,f.request=c,n[1](f)}r[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:script})}),12e4);script.onerror=script.onload=c,document.head.appendChild(script)}return Promise.all(e)},l.m=t,l.c=o,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(n,o,function(e){return t[e]}.bind(null,o));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return l.d(e,"a",e),e},l.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},l.p="/example/_nuxt/",l.oe=function(t){throw console.error(t),t};var f=window.webpackJsonp=window.webpackJsonp||[],d=f.push.bind(f);f.push=e,f=f.slice();for(var i=0;i<f.length;i++)e(f[i]);var m=d;c.push([220,5,17]),n()}(Array(40).concat([function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(10),n(44);function o(t){return function(t){var e=0;if(0===t.length)return e;for(var i=0;i<t.length;i++)e=(e<<5)-e+t.charCodeAt(i),e&=e;return e}(t).toString(16)}},,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";(function(t){n.d(e,"d",(function(){return l})),n.d(e,"c",(function(){return d})),n.d(e,"b",(function(){return m})),n.d(e,"a",(function(){return h}));n(77),n(35);var o={device:{hardwareConcurrency:{min:2,max:48},deviceMemory:{min:2}},timing:{fcp:500,dcl:800},lighthouseDetectionByUserAgent:!1},r=o,c=f(r);function l(t){void 0===t&&(t={}),r={device:Object.assign({},o.device,t.device||{}),timing:Object.assign({},o.timing,t.timing||{}),lighthouseDetectionByUserAgent:r.lighthouseDetectionByUserAgent||o.lighthouseDetectionByUserAgent},r=Object.assign({},o,t),c=f(r)}function f(e){void 0===e&&(e={});var n=t.navigator||{};return{hardwareConcurrency:n.hardwareConcurrency||e.device.hardwareConcurrency.min,deviceMemory:n.deviceMemory||e.device.deviceMemory.min,userAgent:n.userAgent||""}}function d(){return h()&&m()&&!(r.lighthouseDetectionByUserAgent&&/(Speed Insights)|(Chrome-Lighthouse)/.test(c.userAgent))&&!0}function m(){return c.hardwareConcurrency>=r.device.hardwareConcurrency.min&&c.hardwareConcurrency<=r.device.hardwareConcurrency.max&&c.deviceMemory>=r.device.deviceMemory.min}function h(){if(t.performance){var e=performance.getEntriesByName("first-contentful-paint"),n=performance.getEntriesByType("resource");if(e.length)return e[0].startTime<r.timing.fcp;if(n.length)return n.reduce((function(t,e){return(!t||t<e.responseEnd)&&(t=e.responseEnd),t}),null)<r.timing.dcl}return!1}}).call(this,n(14))},,function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return l}));var o=n(40);function r(t,e,n){var r=t.srcset,c=t.sizes;return void 0===n&&(n=function(){}),{hid:Object(o.a)(r),rel:"preload",as:"image",crossorigin:e,imageSrcset:r,imageSizes:c,callback:n}}function c(t,e,n,r){return void 0===r&&(r=function(){}),{hid:Object(o.a)((t.family+"-"+t.weight+"-"+t.style+"-"+e).toLowerCase()),rel:"preload",as:"font",crossorigin:n,href:t.src,type:t.type,media:e,callback:r}}function l(t,e){return void 0===e&&(e=!1),e?(html='<style type="text/css">'+t+"</style>",{hid:Object(o.a)(html),innerHTML:html}):{hid:Object(o.a)(t),type:"text/css",cssText:t};var html}},,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l}));n(51),n(36),n(112),n(10),n(37),n(113),n(114),n(115),n(116),n(117),n(118),n(119),n(120),n(121),n(122),n(123),n(124),n(125),n(56),n(42);var o=new Map;var r=function(t,e){if(void 0===t&&(t="0%"),void 0===e&&(e=[0]),"undefined"==typeof IntersectionObserver)return null;var n=new IntersectionObserver((function(t){t.forEach((function(t){if(t.isIntersecting||t.intersectionRatio>0){var e=t.target;!function(t){o.get(t)(),o.delete(t)}(e),n.unobserve(e)}}))}),{rootMargin:t,threshold:e});return n}("0%");function c(t,e){r&&(o.set(t,e),r.observe(t))}function l(t){o.delete(t)}},,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(219),n(10);var o=Symbol("pending"),r=Symbol("fulfilled"),c=Symbol("rejected"),l=function(){var t=this;this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n,t.state=o})).then((function(e){return t.state=r,e})).catch((function(e){throw t.state=c,new Error(e)}))}},,,,,,,,,,,,,,,function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return r}));n(98),n(39),n(44);function o(e){return new RegExp(e.regex).test(t.navigator.userAgent)}function r(){return"undefined"!=typeof InstallTrigger}}).call(this,n(14))},,,,,,function(t,e,n){"use strict";n(257);var o=n(4),component=Object(o.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("noscript",{staticClass:"nuxt-speedkit__noscript",inlineTemplate:{render:function(){var t=this,e=t.$createElement;t._self._c;return t._t("default")},staticRenderFns:[]}})}),[],!1,null,"7b49c021",null);e.a=component.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var content=n(258);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("3bcf2470",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(260);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("73089ea0",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(262);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("c5304096",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(264);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("a887cd6c",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(266);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("1e02c7c4",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(268);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("18889a2a",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(270);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("fa626ea4",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(272);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("751477be",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(274);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("7af26a97",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(276);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(13).default)("b44de92e",content,!0,{sourceMap:!1})},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-300.c21933f.woff2"},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-regular.4632f3d.woff2"},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-500.4ff6e5b.woff2"},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-600.07a3480.woff2"},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-700.e38cff2.woff2"},function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-300.d4457e8.woff2"},function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-300italic.0e41e2a.woff2"},function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-regular.2505a65.woff2"},function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-italic.b3e2224.woff2"},function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-700.1c74418.woff2"},function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-700italic.4a76648.woff2"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-300.3799f02.woff2"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-300italic.60cbad5.woff2"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-regular.dfa745d.woff2"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-italic.f9b07b1.woff2"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-700.9088e5b.woff2"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-700italic.d0b458a.woff2"},,,,,,,function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(131),n(28),n(35);var o=n(199),r=function(){function t(t){void 0===t&&(t=[]),this.list=t.map((function(t){return t.variances=t.variances.map((function(t){return Object.assign({style:"normal",weight:400},t)})),t}))}return t.prototype.getFont=function(t,e,style,n){void 0===e&&(e=400),void 0===style&&(style="normal"),void 0===n&&(n={selector:null,media:null});var r=this.list.find((function(e){return e.family===t}));if(!r)throw new Error("font family "+t+" not found, please define in module options");return function(t,e,style,n){void 0===n&&(n={selector:null,media:null});var r=t.variances.find((function(t){return t.weight===e&&t.style===style})),c=r.src,l=r.type;return new o.a(t.family,{src:c,type:l,fallbackFamily:t.fallback},n,e,style)}(r,e,style,n)},t}()},function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return m}));n(49),n(131),n(128),n(84),n(28),n(33),n(35),n(39),n(37),n(87),n(160),n(218),n(38);var o=n(6),r=n(63),c=n(200),l=n(201),f=n(111),d=Object(c.a)("rootSelector"),m=function(){function e(t,e,n,o,style){var c=e.src,l=e.type,m=e.fallbackFamily,h=n.media,v=n.selector;void 0===o&&(o=400),void 0===style&&(style="normal"),Object.defineProperty(this,d,{writable:!0,value:void 0}),this.family=t,this.style=style,this.weight=o,this.src=c,this.type="font/"+l,this.fallbackFamily=m,Object(r.a)(this,d)[d]="",this.selector=v||"",this.media=h||null,this.loaded=new f.a}var n=e.prototype;return n.load=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.document.fonts.ready;case 2:if((n=e.sent).check(this.style+" "+this.weight+" 12px '"+this.family+"'")){e.next=7;break}return o=Array.from(n).find((function(t){return t.family.replace(/"(.*)"/,"$1")===r.family&&t.style===r.style&&y(t.weight)===y(r.weight)})),e.next=7,o.load();case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.getKey=function(){var data=Object.assign({},this);return delete data.src,Object(l.a)(JSON.stringify(data))},n.getCSSText=function(){var t=h(Object(r.a)(this,d)[d],this.selector).trim();return v(t+" {\n        font-family: "+this.fallbackFamily.join(", ")+";\n        font-weight: "+this.weight+";\n        font-style: "+this.style+";\n      }\n      .font-active"+t+" {\n        font-family: "+['"'+this.family+'"'].concat(this.fallbackFamily).join(", ")+";\n      }",this.media)},n.getNoScriptCSSText=function(){return v(h(Object(r.a)(this,d)[d],this.selector).trim()+" {\n        font-family: "+['"'+this.family+'"'].concat(this.fallbackFamily).join(", ")+";\n        font-weight: "+this.weight+";\n        font-style: "+this.style+";\n      }",this.media)},n.setRootSelector=function(t){Object(r.a)(this,d)[d]=t.name+'="'+t.value+'"'},e}();function h(t,e){return e.split(", ").map((function(e){return"["+t+"] "+e.trim()})).join(", ")}function v(style,t){return t&&"@media "+t+" { "+style+" }"||style}function y(t){switch(t=String(t)){case"400":return"normal";case"700":return"bold";default:return t}}}).call(this,n(14))},,function(t,e,n){"use strict";(function(t,o){n.d(e,"a",(function(){return r}));n(10),n(44);function r(e){return"btoa"in t?t.btoa(e):o.from(e).toString("base64")}}).call(this,n(14),n(306).Buffer)},,,,,,function(t,e,n){"use strict";n(33),n(10);var o=n(208),r=n(132),c={components:{SpeedkitLayer:o.a,CustomNoScript:r.a},data:function(){return{text:"Sorry, but you will have a limited user experience due to a ...",buttonLabel:"OK"}}},l=(n(259),n(4)),f={speedkitComponents:{GoogleLighthouse:function(){return Promise.resolve().then(n.bind(null,312))},OrganismPageHeader:function(){return Promise.resolve().then(n.bind(null,310))}},components:{InfoLayer:Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("speedkit-layer",[n("div",{staticClass:"info_layer"},[n("div",[n("p",[t._v(t._s(t.text))]),t._v(" "),n("ul",[n("custom-no-script",[n("li",[t._v("disabled javascript")])]),t._v(" "),n("li",{attrs:{id:"nuxt-speedkit__unsupported-browser"}},[t._v("\n          outdated browser\n        ")]),t._v(" "),n("li",{attrs:{id:"nuxt-speedkit__outdated-device"}},[t._v("\n          outdated device\n        ")]),t._v(" "),n("li",{attrs:{id:"nuxt-speedkit__slow-connection"}},[t._v("\n          slow connection\n        ")])],1),t._v(" "),n("button",{staticClass:"info_layer__button",attrs:{id:"nuxt-speedkit__button__init-font",onclick:"window.__NUXT_SPEEDKIT_FONT_INIT__ = true;"}},[n("label",{attrs:{for:"close"}},[t._v("\n          No\n        ")])]),t._v(" "),n("button",{staticClass:"info_layer__button",attrs:{id:"nuxt-speedkit__button__init-app",onclick:"window.__NUXT_SPEEDKIT_AUTO_INIT__ = true;"}},[t._v("\n        "+t._s(t.buttonLabel)+"\n      ")])])])])}),[],!1,null,null,null).exports},data:function(){return{pageHeader:{menu:{lists:[{links:[{title:"Home",to:"/"}]},{headline:"Test",links:[{title:"v-font",to:"/tests/v-font"},{title:"v-font (media)",to:"/tests/v-font-media"},{title:"SpeedkitPicture",to:"/tests/speedkit-picture"},{title:"SpeedkitYoutube",to:"/tests/speedkit-youtube/"},{title:"SpeedkitIframe",to:"/tests/speedkit-iframe"}]},{headline:"Experimental",links:[{title:"Home",to:"/experimental/"},{title:"SpeedkitYoutube",to:"/experimental/speedkit-youtube/"},{title:"SpeedkitPicture (5 Pictures)",to:"/experimental/speedkit-picture/5/"}]}]}}}},head:function(){return{title:this.$route.name+" | nuxt-speedkit",meta:[{hid:"description",name:"description",content:this.$route.name+" - description"}]}}},d=(n(273),Object(l.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("organism-page-header",t._b({},"organism-page-header",t.pageHeader,!1)),t._v(" "),n("Nuxt"),t._v(" "),n("info-layer"),t._v(" "),n("GithubCorner"),t._v(" "),n("google-lighthouse")],1)}),[],!1,null,null,null));e.a=d.exports;installComponents(d,{GithubCorner:n(311).default})},,function(t,e,n){"use strict";n(49),n(36),n(28),n(33),n(10),n(37),n(42),n(38);var o=n(6),r=n(85),c=function(t,e){t.directive(e,{bind:function(t,e,n){var o=n.context.fontCollection.add(n,[].concat(e.value));n.elm.setAttribute(o.name,o.value)},inserted:function(t,e,n){!function(t){var rect=t.getBoundingClientRect();return rect.bottom<0||rect.right<0||rect.left>window.innerWidth||rect.top>window.innerHeight}(t)?l(t,e,n):Object(r.a)(t,(function(){return l(t,e,n)}))},unbind:function(t,e,n){Object(r.b)(t)}})};function l(t,e,n){return f.apply(this,arguments)}function f(){return(f=Object(o.a)(regeneratorRuntime.mark((function t(e,n,o){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[].concat(n.value),t.next=3,Promise.all(r.map((function(t){return t.load()})));case 3:e.classList.add("font-active"),o.context.$emit("load:font",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}n(77),n(35),n(158),n(65),n(128),n(84),n(112),n(301),n(113),n(114),n(115),n(116),n(117),n(118),n(119),n(120),n(121),n(122),n(123),n(124),n(125),n(304);var d=n(40),m=n(64),h=function(){function t(){this.list=[]}var e=t.prototype;return e.add=function(t,e){var n={name:"data-font",value:""+v(t.tag,JSON.stringify(e.map((function(t){return t.getKey()}))))};return this.list=[].concat(this.list).concat(e.map((function(t){return t.setRootSelector(n),t}))),n},e.getHeadDescription=function(t,e){return{link:this.getPreloadDescriptions(t,e),style:this.getStyleDescriptions(),noscript:this.getNoScriptStyleDescriptions(),__dangerouslyDisableSanitizers:["style","noscript"]}},e.getPreloadDescriptions=function(t,e){return Array.from(this.list.reduce((function(t,e){return t}),new Map).values())},e.getStyleDescriptions=function(){return y([Object(m.c)(this.list.map((function(t){return t.getCSSText()})).join(" "))])},e.getNoScriptStyleDescriptions=function(){return y([Object(m.c)(this.list.map((function(t){return t.getNoScriptCSSText()})).join(" "),!0)])},e.toJSON=function(){return this.list},t}();function v(t,e){return Object(d.a)(t+"_"+e).padStart(9,"-")}function y(t){return t.filter((function(t){return"0"!==t.hid}))}var k=n(197),_={install:function(t){var e=this;t.mixin({provide:function(){return{criticalParent:this.critical||this.criticalParent}},inject:{criticalParent:{default:function(){return e.critical||!1}}},props:{critical:{type:Boolean,default:function(){return!1}}},data:function(){return{fontCollection:new h}},head:function(){return this.fontCollection.getHeadDescription?this.fontCollection.getHeadDescription(this.isCritical,this.$crossorigin):{}},computed:{isCritical:function(){return this.criticalParent||this.critical}},beforeCreate:function(){var t=Object.entries(this.$options.speedkitComponents||{}).reduce((function(t,e){var n,o=e[0],r=e[1];return Object.assign(t,((n={})[o]=Object(k.a)(r,{rootMargin:"0%"}),n))}),{});Object.assign(this.$options.components,t)}})}},x=!1;e.a={install:function(t,e){x||(x=!0,c(t,"font"),_.install(t))}}},,,,,,,,,,,function(t,e,n){n(221),t.exports=n(222)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n(165)},function(t,e,n){var o=n(12)(!1);o.push([t.i,".nuxt-speedkit__noscript[data-v-7b49c021]{display:block;height:inherit}",""]),t.exports=o},function(t,e,n){"use strict";n(166)},function(t,e,n){var o=n(12)(!1);o.push([t.i,".info_layer{position:fixed;top:0;left:0;z-index:1000;width:100%;height:100%;background-color:rgba(0,0,0,.25);opacity:0;-webkit-animation-name:fade-in;animation-name:fade-in;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-delay:3s;animation-delay:3s;-webkit-backdrop-filter:blur(.4375em);backdrop-filter:blur(.4375em);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.info_layer>div{padding:10px;font-family:sans-serif;font-weight:700;color:#f5f7fa;text-align:center;background-color:#2c3e50;box-shadow:0 0 .625em hsla(0,0%,100%,.6);transform:translateY(-100%);-webkit-animation-name:fall-down;animation-name:fall-down;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-delay:.5s;animation-delay:.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@media (prefers-color-scheme:dark){.info_layer>div{color:#2f495e;background-color:#fff;box-shadow:0 0 .625em rgba(0,0,0,.6)}}.info_layer>div ul{padding:0;margin:0}.info_layer>div ul>li{display:none}@-webkit-keyframes fade-in{to{opacity:1}}@keyframes fade-in{to{opacity:1}}@-webkit-keyframes fall-down{to{transform:translateY(0)}}@keyframes fall-down{to{transform:translateY(0)}}",""]),t.exports=o},function(t,e,n){"use strict";n(167)},function(t,e,n){var o=n(12)(!1);o.push([t.i,".nuxt-speedkit__lighthouse[data-v-33cc96f6]{--pi:3.14159265358979;--score:0;position:fixed;top:0;right:0;z-index:1;display:block;width:60px;font-family:Arial,Helvetica,sans-serif;text-align:center;pointer-events:none;background-color:#fff}.nuxt-speedkit__lighthouse.ready[data-v-33cc96f6]{pointer-events:all}.nuxt-speedkit__lighthouse>svg[data-v-33cc96f6]{display:block;width:50px;height:50px;margin:5px}.nuxt-speedkit__lighthouse>svg circle[data-v-33cc96f6]{fill:transparent;stroke:var(--color-status);stroke-width:10;transform:rotate(-90deg);transform-origin:50%}.nuxt-speedkit__lighthouse>svg circle.pending[data-v-33cc96f6]{stroke-dasharray:calc(var(--pi)*1.35*45);stroke-dashoffset:calc(var(--pi)*2*45);-webkit-animation:nuxt-speedkit-lighthouse-rotating 1s linear infinite;animation:nuxt-speedkit-lighthouse-rotating 1s linear infinite}.nuxt-speedkit__lighthouse>svg circle.ready[data-v-33cc96f6]{fill:var(--color-status);fill-opacity:.1;stroke-dasharray:calc(var(--pi)*2*45);stroke-dashoffset:calc(var(--pi)*2*45);-webkit-animation:nuxt-speedkit-lighthouse-stroke-data-v-33cc96f6 var(--duration) ease-out forwards;animation:nuxt-speedkit-lighthouse-stroke-data-v-33cc96f6 var(--duration) ease-out forwards}.nuxt-speedkit__lighthouse>svg line[data-v-33cc96f6]{stroke:var(--color-status);stroke-width:10}.nuxt-speedkit__lighthouse>svg text[data-v-33cc96f6]{font-size:32px;fill:var(--color-status)}.nuxt-speedkit__lighthouse span[data-v-33cc96f6]{font-size:12px;text-decoration:underline}.nuxt-speedkit__lighthouse svg[data-v-33cc96f6]{display:inline;width:12px;height:12px;margin-left:3px}@-webkit-keyframes nuxt-speedkit-lighthouse-stroke-data-v-33cc96f6{to{stroke-dashoffset:var(--radian)}}@keyframes nuxt-speedkit-lighthouse-stroke-data-v-33cc96f6{to{transform:rotate(270deg)}}",""]),t.exports=o},function(t,e,n){"use strict";n(168)},function(t,e,n){var o=n(12)(!1);o.push([t.i,"",""]),t.exports=o},function(t,e,n){"use strict";n(169)},function(t,e,n){var o=n(12)(!1);o.push([t.i,"ul[data-v-1c4244ca]{padding:0;list-style:none}li[data-v-1c4244ca]{margin:.625em 0}& span[data-v-1c4244ca]{display:inline-block;margin-right:5px;font-size:1.2em;opacity:.5;transition:opacity .2s linear,transform .2s linear}a[data-v-1c4244ca]{position:relative;display:block;color:currentColor;text-decoration:none;opacity:.8}a.nuxt-link-exact-active[data-v-1c4244ca],a[data-v-1c4244ca]:hover{opacity:1}a.nuxt-link-exact-active span[data-v-1c4244ca],a:hover span[data-v-1c4244ca]{opacity:1;transform:translateX(5px)}",""]),t.exports=o},function(t,e,n){"use strict";n(170)},function(t,e,n){var o=n(12)(!1);o.push([t.i,"html.js--menu-open{overflow:hidden}",""]),t.exports=o},function(t,e,n){"use strict";n(171)},function(t,e,n){var o=n(12)(!1);o.push([t.i,".menu[data-v-261714f4]{color:#000}@media (prefers-color-scheme:dark){.menu[data-v-261714f4]{color:#fff}}.menu .menu__toggle[data-v-261714f4]{position:absolute;top:.625em;left:.625em;padding:.625em;cursor:pointer;background:rgb(255 255 255/40%);transition:background .2s linear}@media (prefers-color-scheme:dark){.menu .menu__toggle[data-v-261714f4]{background:rgb(0 0 0/40%)}}.menu .menu__toggle svg[data-v-261714f4]{display:block;width:1.875em}.menu .menu__toggle path[data-v-261714f4]{fill:#333;transition:opacity .2s linear,transform .2s linear;transform-origin:center}@media (prefers-color-scheme:dark){.menu .menu__toggle path[data-v-261714f4]{fill:#fff}}.menu input:checked~.menu__toggle[data-v-261714f4]{background:transparent}.menu input:checked~.menu__toggle #open path[data-v-261714f4]{opacity:0}.menu input:checked~.menu__toggle #open path[data-v-261714f4]:first-child{transform:translateY(-10%)}.menu input:checked~.menu__toggle #open path[data-v-261714f4]:nth-child(2){transform:translateY(10%)}.menu input:checked~.menu__toggle #close path[data-v-261714f4]:first-child{transform:rotate(45deg)}.menu input:checked~.menu__toggle #close path[data-v-261714f4]:nth-child(2){transform:rotate(-45deg)}.menu .menu__title[data-v-261714f4]{display:block;font-size:1.125em;font-weight:400;text-align:right;text-transform:uppercase;opacity:.4}.menu .menu__headline[data-v-261714f4]{display:block;font-size:1.125em;color:#333}@media (prefers-color-scheme:dark){.menu .menu__headline[data-v-261714f4]{color:rgb(255 255 255/80%)}}.menu .menu-button[data-v-261714f4]{position:absolute;top:0;padding:0}.menu .menu__content[data-v-261714f4]{position:fixed;top:0}.menu .menu__content>label[data-v-261714f4]{position:absolute;top:0;left:0;width:100%;height:100%;cursor:pointer}.menu .menu__content[data-v-261714f4]{width:100%;height:100%;pointer-events:none;transition:-webkit-backdrop-filter .2s ease-in .2s;transition:backdrop-filter .2s ease-in .2s;transition:backdrop-filter .2s ease-in .2s,-webkit-backdrop-filter .2s ease-in .2s;-webkit-backdrop-filter:none;backdrop-filter:none}.menu .menu__content>div[data-v-261714f4]{display:flex;height:100%}.menu .menu__content>div>div[data-v-261714f4]{padding:3.125em 1.25em 1.25em;overflow:auto;text-align:left;background:hsla(0,0%,100%,.5);transition:transform .2s ease-in;transform:translateX(-100%)}@media (prefers-color-scheme:dark){.menu .menu__content>div>div[data-v-261714f4]{background:rgba(0,0,0,.5)}}.menu input[data-v-261714f4]{display:none}.menu input:checked+.menu__content[data-v-261714f4]{display:block;pointer-events:auto;transition-delay:0s;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.menu input:checked+.menu__content>div>div[data-v-261714f4]{transition-delay:.2s;transform:translateX(0)}",""]),t.exports=o},function(t,e,n){"use strict";n(172)},function(t,e,n){var o=n(12)(!1);o.push([t.i,".page-header[data-v-44c547e4]{position:fixed;top:0;left:0;z-index:1}.page-header .overview-link[data-v-44c547e4]{display:inline-block;padding:.55556em;font-size:1.125em;color:#f5f7fa;text-decoration:none;background-color:#2c3e50;border-radius:0 0 .27778em 0;box-shadow:0 0 .27778em hsla(0,0%,100%,.6)}@media (prefers-color-scheme:dark){.page-header .overview-link[data-v-44c547e4]{color:#2f495e;background-color:#fff;box-shadow:0 0 .27778em rgba(0,0,0,.6)}}",""]),t.exports=o},function(t,e,n){"use strict";n(173)},function(t,e,n){var o=n(12)(!1);o.push([t.i,"html{height:-webkit-fill-available;height:-moz-available;height:stretch}body{min-height:100vh;min-height:-webkit-fill-available;min-height:-moz-available;min-height:stretch;margin:0;font-size:5vw;color:#000;background-color:#fff}@media (prefers-color-scheme:dark){body{color:#fff;background-color:#333}}@media (min-width:375px){body{font-size:4.26667vw}}@media (min-width:414px){body{font-size:3.86473vw}}@media (min-width:768px){body{font-size:2.08333vw}}@media (min-width:992px){body{font-size:16px}}",""]),t.exports=o},function(t,e,n){"use strict";n(174)},function(t,e,n){var o=n(12)(!1);o.push([t.i,".atom-github-corner{position:fixed;top:0;right:0}.atom-github-corner:hover .octo-arm{-webkit-animation:octocat-wave .56s ease-in-out;animation:octocat-wave .56s ease-in-out}@media (max-width:500px){.atom-github-corner .octo-arm{-webkit-animation:octocat-wave .56s ease-in-out;animation:octocat-wave .56s ease-in-out}.atom-github-corner:hover .octo-arm{-webkit-animation:none;animation:none}}@-webkit-keyframes octocat-wave{0%,to{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@keyframes octocat-wave{0%,to{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}",""]),t.exports=o},,,,function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-300.c7342fb.woff"},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-regular.5589694.woff"},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-500.e16bfdc.woff"},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-600.6891aed.woff"},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-700.82849a6.woff"},function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-300.dab6f49.woff"},function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-300italic.4825746.woff"},function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-regular.353a3c6.woff"},function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-italic.cb162aa.woff"},function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-700.bbf6855.woff"},function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-700italic.1ae96ad.woff"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-300.3020f48.woff"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-300italic.3a4e0ee.woff"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-regular.949959a.woff"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-italic.fa400a7.woff"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-700.49de2c7.woff"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-700italic.c7b87f9.woff"},,,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var o={props:{tag:{type:String,default:"h1"},content:{type:String,default:"Headline"}}},r=(n(263),n(4)),c=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.tag,{directives:[{name:"font",rawName:"v-font",value:t.$getFont("Quicksand",700,"normal"),expression:"$getFont('Quicksand', 700, 'normal')"}],tag:"component",staticClass:"atom-headline"},[t._t("default",[t._v(t._s(t.content))])],2)}),[],!1,null,null,null).exports,l={props:{items:{type:Array,default:function(){return[{title:"Link 1."},{title:"Link 2."},{title:"Link 3."}]}}}},f=(n(265),{components:{Headline:c,LinkList:Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{directives:[{name:"font",rawName:"v-font",value:[t.$getFont("Quicksand",400,"normal")],expression:"[\n    $getFont('Quicksand', 400, 'normal'),\n  ]"}]},t._l(t.items,(function(e,o){return n("li",{key:o},[n("nuxt-link",t._b({},"nuxt-link",e,!1),[n("span",[t._v("»")]),t._v(" "+t._s(e.title)+"\n    ")])],1)})),0)}),[],!1,null,"1c4244ca",null).exports},props:{lists:{type:Array,default:function(){return[{headline:"Preview",links:[{title:"Item",to:"/"}]}]}}},data:function(){return{open:!1}},watch:{open:function(t){document.documentElement.classList.toggle("js--menu-open",t)}},mounted:function(){var t=this;this.$router.afterEach((function(e,n){t.open=!1}))}}),d=(n(267),n(269),{components:{OrganismMenu:Object(r.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.open,expression:"open"}],attrs:{id:"menu-control",type:"checkbox",name:"menu-control"},domProps:{checked:Array.isArray(t.open)?t._i(t.open,null)>-1:t.open},on:{change:function(e){var n=t.open,o=e.target,r=!!o.checked;if(Array.isArray(n)){var c=t._i(n,null);o.checked?c<0&&(t.open=n.concat([null])):c>-1&&(t.open=n.slice(0,c).concat(n.slice(c+1)))}else t.open=r}}}),t._v(" "),n("div",{staticClass:"menu__content",attrs:{"aria-label":"Menu"}},[n("label",{attrs:{for:"menu-control"}}),t._v(" "),n("div",[n("div",t._l(t.lists,(function(e,o){var r=e.headline,c=e.links;return n("nav",{key:o},[r?n("headline",{staticClass:"menu__headline",attrs:{tag:"span",type:"menu",content:r}}):t._e(),t._v(" "),n("link-list",{attrs:{items:c,"aria-label":"Menu"}})],1)})),0)])]),t._v(" "),n("label",{staticClass:"menu__toggle",attrs:{for:"menu-control"}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 120 120"}},[n("g",{attrs:{id:"open"}},[n("g",[n("path",{attrs:{d:"M0 10h120v16.67H0z"}}),t._v(" "),n("path",{attrs:{d:"M0 93.33h120V110H0z"}})])]),t._v(" "),n("g",{attrs:{id:"close"}},[n("path",{attrs:{d:"M0 51.67h120v16.67H0z"}}),t._v(" "),n("path",{attrs:{d:"M0 51.67h120v16.67H0z"}})])])])])}),[],!1,null,"261714f4",null).exports},props:{menu:{type:Object,default:function(){return{lists:[]}}}}}),m=(n(271),Object(r.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"page-header"},[n("organism-menu",t._b({},"organism-menu",t.menu,!1))],1)}),[],!1,null,"44c547e4",null));e.default=m.exports},function(t,e,n){"use strict";n.r(e);var o={props:{title:{type:String,default:"View source on GitHub"},url:{type:String,default:"https://github.com/GrabarzUndPartner/nuxt-speedkit"}}},r=(n(275),n(4)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"atom-github-corner",attrs:{href:t.url,"aria-label":t.title,title:t.title}},[n("svg",{staticStyle:{position:"absolute",top:"0",right:"0",color:"#fff",border:"0",fill:"#151513"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[n("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),n("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),n("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])}),[],!1,null,null,null);e.default=component.exports},function(t,e,n){"use strict";n.r(e);n(10);var o={components:{LighthouseWidget:function(){return n.e(22).then(n.bind(null,550))}},created:function(){this.$router.beforeEach((function(t,e,n){!("lh"in t.query)&&"lh"in e.query&&(t.query.lh=e.query.lh,n({path:t.path,query:t.query})),n()}))}},r=(n(261),n(4)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return"lh"in t.$route.query?n("lighthouse-widget",t._b({},"lighthouse-widget",t.$attrs,!1)):t._e()}),[],!1,null,"33cc96f6",null);e.default=component.exports}]));