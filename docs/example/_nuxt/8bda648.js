(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{313:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n={webp:"image/webp",jpg:"image/jpeg",png:"image/png"};function o(t){return n[String(t)]}},314:function(t,e,r){var content=r(323);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("841b0088",content,!0,{sourceMap:!1})},315:function(t,e,r){"use strict";r(322);var n=r(4),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"preview-container"},[r("div",{staticClass:"preview-container__preview"},[t._t("default")],2),t._v(" "),r("div",{directives:[{name:"font",rawName:"v-font",value:t.$getFont("Quicksand",400,"normal"),expression:"$getFont('Quicksand', 400, 'normal')"}],staticClass:"preview-container__info"},[t._t("title",[r("p",[t._v("Preview Info")])])],2)])}),[],!1,null,"fa2458f0",null);e.a=component.exports},316:function(t,e,r){"use strict";(function(t){r(65);var n=r(85),o=r(317),c=r(64),l=r(313),d=r(318),f=r(40),m=new d.a;function h(t){return t.type===Object(l.a)("webp")}e.a={props:{sources:{type:Array,default:function(){return[]}},preload:{type:Array,default:function(){return[]}},alt:{type:String,default:function(){return""}},title:{type:String,default:function(){return""}},crossorigin:{type:String,default:function(){return this.$crossorigin}}},data:function(){return{imageSources:this.sources,inProgress:!0,visible:!1,style:{}}},head:function(){var e=this,data={};if(this.preload.length&&(this.isCritical||!0&this.visible)){var source=function(t,e){return t.filter((function(source){return!h(source)||h(source)&&e}))}(this.preload,o.b)[0];m.getPromise(Object(f.a)(source.srcset),(function(r,n){Object(o.a)()?data={link:[Object(c.b)(source,e.crossorigin,r)]}:function(e,r,n){var o=e.srcset,c=e.sizes;void 0===n&&(n=function(){});var img=new t.Image;img.onload=n,img.crossorigin=r,img.sizes=c,img.srcset=o}(source,e.crossorigin,r)})).then((function(t){return e.onPreload(t)}))}return data},watch:{sources:function(){this.imageSources.length||(this.imageSources=this.sources)}},mounted:function(){var t=this;Object(n.a)(this.$el,(function(){t.visible=!0}))},destroyed:function(){Object(n.b)(this.$el)},methods:{onPreload:function(t){this.style.backgroundImage="url("+this.$refs.image.currentSrc+")",this.imageSources=this.preload,this.inProgress=!1,this.$emit("load")}}}}).call(this,r(14))},317:function(t,e,r){"use strict";(function(t){r.d(e,"b",(function(){return c})),r.d(e,"a",(function(){return l}));r(210);var n=r(126);var o,c=!(!(o=t.document.createElement("canvas")).getContext||!o.getContext("2d"))&&0===o.toDataURL("image/webp").indexOf("data:image/webp");function l(){if(Object(n.a)())return!1;var e=t.document.createElement("link").relList;return function(element,e){var r={};t.document&&(r=t.document.createElement(element));if(e in r)return!0;return!1}("link","imageSrcset")&&!!(e&&e.supports&&e.supports("preload"))}}).call(this,r(14))},318:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(36),r(28),r(112),r(10),r(37),r(113),r(114),r(115),r(116),r(117),r(118),r(119),r(120),r(121),r(122),r(123),r(124),r(125),r(42);var n=r(111),o=function(){function t(){this.map=new Map}return t.prototype.getPromise=function(t,e){if(!this.map.has(t)){var r=new n.a;this.map.set(t,r.promise),e(r.resolve,r.reject)}return this.map.get(t)},t}()},319:function(t,e,r){var content=r(328);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("62c1a5d0",content,!0,{sourceMap:!1})},320:function(t,e,r){var content=r(330);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("74502007",content,!0,{sourceMap:!1})},322:function(t,e,r){"use strict";r(314)},323:function(t,e,r){var n=r(12)(!1);n.push([t.i,".preview-container[data-v-fa2458f0]{display:flex;flex-direction:column;min-height:100vh;min-height:-webkit-fill-available;min-height:-moz-available;min-height:stretch;margin:50px 0}.preview-container[data-v-fa2458f0]:first-child{margin-top:0}.preview-container[data-v-fa2458f0]:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container[data-v-fa2458f0]{flex-direction:row}}@media (min-width:992px){.preview-container[data-v-fa2458f0]{flex-direction:row}}.preview-container>div[data-v-fa2458f0]{display:flex;align-items:center;justify-content:center;width:100%;height:50vh;overflow:hidden}@media (orientation:landscape){.preview-container>div[data-v-fa2458f0]{width:50vw;height:100vh}}@media (min-width:992px){.preview-container>div[data-v-fa2458f0]{width:50vw;height:100vh}}.preview-container .preview-container__info[data-v-fa2458f0]{font-size:2em}.preview-container .preview-container__info p[data-v-fa2458f0]{line-height:1.375;text-align:center}.preview-container .preview-container__info button[data-v-fa2458f0]{width:90%;margin:0 auto}.preview-container .preview-container__preview[data-v-fa2458f0]{font-size:1.125em;--bg-opacity:1;background-color:rgb(0 0 0/40%)}@media (prefers-color-scheme:dark){.preview-container .preview-container__preview[data-v-fa2458f0]{background-color:rgb(255 255 255/40%)}}.preview-container .preview-container__preview>article[data-v-fa2458f0]{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%;text-align:center}.preview-container .preview-container__preview>div[data-v-fa2458f0]{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.preview-container .preview-container__preview>div>ul[data-v-fa2458f0]{padding:0;margin:0;list-style:none}.preview-container .preview-container__preview>div>ul li[data-v-fa2458f0]{margin:.625em 0}.preview-container .preview-container__preview>iframe[data-v-fa2458f0]{position:relative;width:100%;height:100%}",""]),t.exports=n},325:function(t,e,r){var content=r(338);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("6299c55a",content,!0,{sourceMap:!1})},327:function(t,e,r){"use strict";r(319)},328:function(t,e,r){var n=r(12)(!1);n.push([t.i,"picture[data-v-4022b340]{display:block;height:inherit;overflow:hidden;background-size:cover}picture img[data-v-4022b340]{display:block;width:100%;height:100%;filter:blur(0);transition-duration:.35s;transition-property:filter,transform;transform:scale(1);-o-object-fit:cover;object-fit:cover}picture img.in-progress[data-v-4022b340]{filter:blur(10px);transform:scale(1.1)}",""]),t.exports=n},329:function(t,e,r){"use strict";r(320)},330:function(t,e,r){var n=r(12)(!1);n.push([t.i,".nuxt-speedkit__noscript[data-v-e63e686a]{display:block;height:inherit}",""]),t.exports=n},333:function(t,e,r){"use strict";r(84),r(28);var n=r(313),o=r(64),c=r(334),l=r(335),d={components:{CustomPicture:c.a,CustomNoScript:l.a},props:{sources:{type:Array,default:function(){return[]}},placeholders:{type:Array,default:function(){return[]}},alt:{type:String,default:function(){return""}},title:{type:String,default:function(){return""}},crossorigin:{type:String,default:function(){return this.$crossorigin}}},data:function(){return{resolvedPlacholders:this.getPlaceholders(),resolvedSources:this.getSources()}},head:function(){return{noscript:[Object(o.c)(".nuxt-speedkit__speedkit-picture > noscript.nuxt-speedkit__noscript + picture { display:none; } .nuxt-speedkit__speedkit-picture > noscript.nuxt-speedkit__noscript > picture > img { filter: none; }",!0)],__dangerouslyDisableSanitizers:["noscript"]}},computed:{hasSlot:function(){return this.$slots.caption}},methods:{getPlaceholders:function(){return this.placeholders.map((function(t){var e=t.media,r=t.url,o=t.format;return{media:e,url:r,type:Object(n.a)(o)}}))},getSources:function(){return this.sources.map((function(t){var e=t.sizes,r=t.format;return{media:t.media,srcset:e.map((function(t){var e=t.width,r=t.url;return e?r+" "+e+"w":r})).join(", "),sizes:e.map((function(t){var e=t.width,r=t.media;return r?r+" "+e+"px":e+"px"})).reverse().join(", "),type:Object(n.a)(r)}}))}}},f=(r(337),r(4)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("figure",{staticClass:"nuxt-speedkit__speedkit-picture"},[r("custom-no-script",[r("custom-picture",{attrs:{sources:t.resolvedSources,alt:t.alt,title:t.title,crossorigin:t.crossorigin}})],1),t._v(" "),r("custom-picture",t._g({attrs:{sources:t.resolvedPlacholders,preload:t.resolvedSources,alt:t.alt,title:t.title,crossorigin:t.crossorigin}},t.$listeners)),t._v(" "),t.hasSlot?r("figcaption",[t._t("caption")],2):t._e()],1)}),[],!1,null,"06f20260",null);e.a=component.exports},334:function(t,e,r){"use strict";var n=r(316).a,o=(r(327),r(4)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("picture",{style:t.style},[t._l(t.imageSources,(function(source,t){return r("source",{key:t,attrs:{srcset:source.dataURI||source.srcset||source.url,media:source.media,sizes:source.sizes,type:source.type}})})),t._v(" "),r("img",{ref:"image",class:{"in-progress":t.inProgress},attrs:{loading:"lazy",alt:t.alt,title:t.title,crossorigin:t.crossorigin}})],2)}),[],!1,null,"4022b340",null);e.a=component.exports},335:function(t,e,r){"use strict";r(329);var n=r(4),component=Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("noscript",{staticClass:"nuxt-speedkit__noscript",inlineTemplate:{render:function(){var t=this,e=t.$createElement;t._self._c;return t._t("default")},staticRenderFns:[]}})}),[],!1,null,"e63e686a",null);e.a=component.exports},337:function(t,e,r){"use strict";r(325)},338:function(t,e,r){var n=r(12)(!1);n.push([t.i,".nuxt-speedkit__speedkit-picture[data-v-06f20260]{width:100%;height:inherit;margin:0}",""]),t.exports=n},418:function(t,e,r){t.exports=r.p+"img/414.c18a756.webp"},419:function(t,e,r){t.exports=r.p+"img/576.4f9fdc0.webp"},420:function(t,e,r){t.exports=r.p+"img/768.90cbc1e.webp"},421:function(t,e,r){t.exports=r.p+"img/1024.9b261f3.webp"},422:function(t,e,r){t.exports=r.p+"img/1280.60356c7.webp"},423:function(t,e,r){t.exports=r.p+"img/1680.aaf62d9.webp"},424:function(t,e,r){t.exports=r.p+"img/1920.8a4c25e.webp"},425:function(t,e,r){t.exports=r.p+"img/414.d71c0d7.jpg"},426:function(t,e,r){t.exports=r.p+"img/576.cca0bd8.jpg"},427:function(t,e,r){t.exports=r.p+"img/768.a13f32a.jpg"},428:function(t,e,r){t.exports=r.p+"img/1024.4337ebf.jpg"},429:function(t,e,r){t.exports=r.p+"img/1280.476672b.jpg"},430:function(t,e,r){t.exports=r.p+"img/1680.44d44f0.jpg"},431:function(t,e,r){t.exports=r.p+"img/1920.a702b7c.jpg"},432:function(t,e,r){t.exports=r.p+"img/placeholder.5a208b2.jpg"},433:function(t,e,r){t.exports=r.p+"img/414.e879e2a.webp"},434:function(t,e,r){t.exports=r.p+"img/576.d66eca7.webp"},435:function(t,e,r){t.exports=r.p+"img/768.fb99262.webp"},436:function(t,e,r){t.exports=r.p+"img/1024.f1cbbb0.webp"},437:function(t,e,r){t.exports=r.p+"img/1280.e9f3d59.webp"},438:function(t,e,r){t.exports=r.p+"img/1680.d9c9dc3.webp"},439:function(t,e,r){t.exports=r.p+"img/1920.5961fe5.webp"},440:function(t,e,r){t.exports=r.p+"img/414.350df4a.jpg"},441:function(t,e,r){t.exports=r.p+"img/576.d0c0bf9.jpg"},442:function(t,e,r){t.exports=r.p+"img/768.cfef123.jpg"},443:function(t,e,r){t.exports=r.p+"img/1024.e759c95.jpg"},444:function(t,e,r){t.exports=r.p+"img/1280.df26ccb.jpg"},445:function(t,e,r){t.exports=r.p+"img/1680.bbba996.jpg"},446:function(t,e,r){t.exports=r.p+"img/1920.1fec178.jpg"},535:function(t,e,r){"use strict";r.r(e);var n=r(315),o=r(333),c={components:{OrganismPreviewContainer:n.a,SpeedkitPicture:o.a},data:function(){return{picture:{placeholders:[{url:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wgARCAAeAB4DAREAAhEBAxEB/8QAGgAAAgIDAAAAAAAAAAAAAAAABggCBwQFCf/EABkBAAMBAQEAAAAAAAAAAAAAAAMEBQYCB//aAAwDAQACEAMQAAAA3Xlfoq7McFri7gxDc/6RLUflF5ODDNVMpZsQsJWqYEg8jsiuzmhzJFTlKzG0n//EAC0QAAICAQQBAwIEBwAAAAAAAAEDAgQFBgcREgAIEzEVIRQiI1EyQVKBg9Lx/9oACAEBAAE/ANLbi2MzgV6ZrVS9aKDVWBIxKTES5hNh+YD7gc/v4/dDdnbh2SOUsKysYWGCvUhyTXSAZBvu/J7R+IAHjqfPTpqPcHcHdVW4GqM663VYiVddW0ZM+nqEYmLFQH5R3B/MeO/mLzSW2cmsPrsZXuSQ0qd7gBEYngy/n9pA/wB/Nh8XZWvC6iuOyLrecuTq2HTaFVK1SE+Iza2fEFgknj55PA8y+D2pDDX1Hl22dQZGhkWUabLcyFjsr3ltBjErasw/RMZEH9XgdCCdBaL2k0tpjAW6uRsQ1IrGpyT0qeyYnD8Uw1zIR4hEsJb2nOQAhCPAkR5F7tHFz7CqoRlnsfXvVjL2r6onhbesgJQl1IBjIcjjzanbrBZfbWhgHViyolc0WUQPQujIkTj8H581z6NMzmdR4yjgNS2q2DSJtxGXyDmP+hNlx3jJf8MoTjELPHB482b9MuKV9N1NqqpUzVO2vo9FhMoNo165Ps04EcBkJN7OMiOR24Hnq209RTozCOqIhUNXJyVAVl8AQYqRMeP8Y82D1abdLI1imcUV8i9UID+gS4805eYVxUVr68dZR4+x/wCDx1sRErHEuswIyH7fsR56tNYrr4ajVmlwQMkOPb4EjMKl/t5//8QAKBEAAgEDAgUDBQAAAAAAAAAAAQIDAAQRMUESEyFRcQVh0RQVIzKB/9oACAECAQE/ALa4PI5B0FfaLW+CmElTue58U1rFYIsS6g5Jxr58bV6jI8k5D7afP9q94XkaCPAC4PuSdqdfobZJI2BBxnGo81GYryCR5pMMP1Hc/FX8ZVwPaoCzymXPWlM7twYBVsBtgR7nUFT1qwsJbQLxtlepIGdc69e4xpV7GG2qL8bYqzmJAWi3XNStzpCNhX//xAApEQACAQIEBQMFAAAAAAAAAAABAgMABBEhQVEFEhMiMTJhcTNSodHx/9oACAEDAQE/AHgX6uOZPjWjeNblusoI03oSm5LOBgNBt/ajVVUclQkoglfMn8CopmvrmSJ0I5fB0Px7607T2s6JFGSh9TfaP3tvUR6q4irkhO3So5oYwXbHmXMDUH2HjMVxjicVw7iIYNkATt8DxhVhKWBq5AJxq9hGbY0kePbtVrD04xX/2Q=="}],sources:[{format:"webp",sizes:[{width:414,media:"",url:r(418)},{width:576,media:"(min-width: 576px)",url:r(419)},{width:768,media:"(min-width: 768px)",url:r(420)},{width:1024,media:"(min-width: 1024px)",url:r(421)},{width:1280,media:"(min-width: 1200px)",url:r(422)},{width:1680,media:"(min-width: 1600px)",url:r(423)},{width:1920,media:"(min-width: 1900)",url:r(424)}]},{format:"jpg",sizes:[{width:414,media:"",url:r(425)},{width:576,media:"(min-width: 576px)",url:r(426)},{width:768,media:"(min-width: 768px)",url:r(427)},{width:1024,media:"(min-width: 1024px)",url:r(428)},{width:1280,media:"(min-width: 1200px)",url:r(429)},{width:1680,media:"(min-width: 1600px)",url:r(430)},{width:1920,media:"(min-width: 1900)",url:r(431)}]}]}}}},l=r(4),d=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("organism-preview-container",{attrs:{id:"criticalContainer"},scopedSlots:t._u([{key:"default",fn:function(){return[r("speedkit-picture",t._b({},"speedkit-picture",t.picture,!1))]},proxy:!0},{key:"title",fn:function(){return[r("p",[t._v("Critical - SpeedkitPicture")])]},proxy:!0}])})}),[],!1,null,null,null).exports,f={components:{OrganismPreviewContainer:n.a,SpeedkitPicture:o.a},data:function(){return{picture:{placeholders:[{url:r(432)}],sources:[{format:"webp",sizes:[{width:414,url:r(433)},{width:576,media:"(min-width: 576px)",url:r(434)},{width:768,media:"(min-width: 768px)",url:r(435)},{width:1024,media:"(min-width: 1024px)",url:r(436)},{width:1280,media:"(min-width: 1200px)",url:r(437)},{width:1680,media:"(min-width: 1600px)",url:r(438)},{width:1920,media:"(min-width: 1900)",url:r(439)}]},{format:"jpg",sizes:[{width:414,url:r(440)},{width:576,media:"(min-width: 576px)",url:r(441)},{width:768,media:"(min-width: 768px)",url:r(442)},{width:1024,media:"(min-width: 1024px)",url:r(443)},{width:1280,media:"(min-width: 1200px)",url:r(444)},{width:1680,media:"(min-width: 1600px)",url:r(445)},{width:1920,media:"(min-width: 1900)",url:r(446)}]}]}}}},m={components:{Critical:d,Lazy:Object(l.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("organism-preview-container",{attrs:{id:"lazyContainer"},scopedSlots:t._u([{key:"default",fn:function(){return[r("speedkit-picture",t._b({},"speedkit-picture",t.picture,!1))]},proxy:!0},{key:"title",fn:function(){return[r("p",[t._v("Lazy - SpeedkitPicture")])]},proxy:!0}])})}),[],!1,null,null,null).exports}},h=Object(l.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("critical",{attrs:{critical:""}}),t._v(" "),r("lazy")],1)}),[],!1,null,null,null);e.default=h.exports}}]);