(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{127:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));const r={webp:"image/webp",jpg:"image/jpeg",png:"image/png"};function o(e){return r[String(e)]}},130:function(e,t,n){var content=n(140);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(4).default)("841b0088",content,!0,{sourceMap:!1})},131:function(e,t,n){"use strict";n(139);var r=n(2),component=Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"preview-container"},[n("div",{staticClass:"preview-container__preview"},[e._t("default")],2),e._v(" "),n("div",{directives:[{name:"font",rawName:"v-font",value:e.$getFont("Quicksand",400,"normal"),expression:"$getFont('Quicksand', 400, 'normal')"}],staticClass:"preview-container__info"},[e._t("title",[n("p",[e._v("Preview Info")])])],2)])}),[],!1,null,"fa2458f0",null);t.a=component.exports},132:function(e,t,n){"use strict";(function(e){n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var r=n(19);const o=function(){const t=e.document.createElement("canvas");return!(!t.getContext||!t.getContext("2d"))&&0===t.toDataURL("image/webp").indexOf("data:image/webp")}();function c(){if(Object(r.a)())return!1;{const t=e.document.createElement("link").relList;return function(element,t){let n={};e.document&&(n=e.document.createElement(element));if(t in n)return!0;return!1}("link","imageSrcset")&&!!(t&&t.supports&&t.supports("preload"))}}}).call(this,n(5))},133:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(18);class o{constructor(){this.map=new Map}getPromise(e,t){if(!this.map.has(e)){const n=new r.a;this.map.set(e,n.promise),t(n.resolve,n.reject)}return this.map.get(e)}}},139:function(e,t,n){"use strict";n(130)},140:function(e,t,n){var r=n(3)(!1);r.push([e.i,".preview-container[data-v-fa2458f0]{display:flex;flex-direction:column;min-height:100vh;min-height:-webkit-fill-available;min-height:-moz-available;min-height:stretch;margin:50px 0}.preview-container[data-v-fa2458f0]:first-child{margin-top:0}.preview-container[data-v-fa2458f0]:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container[data-v-fa2458f0]{flex-direction:row}}@media (min-width:992px){.preview-container[data-v-fa2458f0]{flex-direction:row}}.preview-container>div[data-v-fa2458f0]{display:flex;align-items:center;justify-content:center;width:100%;height:50vh;overflow:hidden}@media (orientation:landscape){.preview-container>div[data-v-fa2458f0]{width:50vw;height:100vh}}@media (min-width:992px){.preview-container>div[data-v-fa2458f0]{width:50vw;height:100vh}}.preview-container .preview-container__info[data-v-fa2458f0]{font-size:2em}.preview-container .preview-container__info p[data-v-fa2458f0]{line-height:1.375;text-align:center}.preview-container .preview-container__info button[data-v-fa2458f0]{width:90%;margin:0 auto}.preview-container .preview-container__preview[data-v-fa2458f0]{font-size:1.125em;--bg-opacity:1;background-color:rgb(0 0 0/40%)}@media (prefers-color-scheme:dark){.preview-container .preview-container__preview[data-v-fa2458f0]{background-color:rgb(255 255 255/40%)}}.preview-container .preview-container__preview>article[data-v-fa2458f0]{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%;text-align:center}.preview-container .preview-container__preview>div[data-v-fa2458f0]{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.preview-container .preview-container__preview>div>ul[data-v-fa2458f0]{padding:0;margin:0;list-style:none}.preview-container .preview-container__preview>div>ul li[data-v-fa2458f0]{margin:.625em 0}.preview-container .preview-container__preview>iframe[data-v-fa2458f0]{position:relative;width:100%;height:100%}",""]),e.exports=r},146:function(e,t,n){"use strict";function r(e,t){return Promise.all(e.map((async source=>{const[{url:e},n]=await t(source);return o(e,c(n))}))).then(f)}function o(e,t){const{media:n,breakpoint:r}=t.min,{width:o}=t.max;return{size:t,media:n,breakpoint:r,width:o,url:e}}function c(e){const t=Array.from(e).sort(((a,b)=>a.width>b.width?1:-1)),n=t.shift();return{min:n,max:t.pop()||n}}function f(e){return e.sort(((a,b)=>a.width<b.width?1:-1))}n.d(t,"a",(function(){return r}))},318:function(e,t,n){"use strict";n.r(t);var r=n(190),o=n(131),c={components:{SpeedkitYoutube:r.a,OrganismPreviewContainer:o.a},data:()=>({youtube:{id:"cLKvbhfVBUU"}})},f=n(2),l=Object(f.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("organism-preview-container",{scopedSlots:e._u([{key:"default",fn:function(){return[n("div",[n("speedkit-youtube",e._b({},"speedkit-youtube",e.youtube,!1))],1)]},proxy:!0},{key:"title",fn:function(){return[n("p",[e._v("Critical"),n("br"),e._v("SpeedkitYoutube")])]},proxy:!0}])})}),[],!1,null,null,null).exports,v={components:{SpeedkitYoutube:r.a,OrganismPreviewContainer:o.a},data:()=>({youtube:{id:"cLKvbhfVBUU"}})},d={components:{Critical:l,Lazy:Object(f.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("organism-preview-container",{scopedSlots:e._u([{key:"default",fn:function(){return[n("div",[n("speedkit-youtube",e._b({},"speedkit-youtube",e.youtube,!1))],1)]},proxy:!0},{key:"title",fn:function(){return[n("p",[e._v("SpeedkitYoutube")])]},proxy:!0}])})}),[],!1,null,null,null).exports}},w=Object(f.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("critical",{attrs:{critical:""}}),e._v(" "),n("lazy")],1)}),[],!1,null,null,null);t.default=w.exports}}]);