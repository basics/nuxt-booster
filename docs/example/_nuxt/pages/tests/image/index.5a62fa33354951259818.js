(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{156:function(e,t,n){var content=n(160);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(154).default)("964a656c",content,!0,{sourceMap:!1})},157:function(e,t,n){"use strict";var r={},c=(n(159),n(152)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("document-section",{staticClass:"preview-container"},[n("div",{staticClass:"preview"},[n("div",[e._t("default")],2)]),e._v(" "),n("document-heading",{staticClass:"info"},[n("span",{directives:[{name:"font",rawName:"v-font",value:e.$getFont("Quicksand",400,"normal"),expression:"$getFont('Quicksand', 400, 'normal')"}]},[e._t("title",(function(){return[n("p",[e._v("Preview Info")])]}))],2)])],1)}),[],!1,null,"688a103a",null);t.a=component.exports},159:function(e,t,n){"use strict";n(156)},160:function(e,t,n){var r=n(153)((function(i){return i[1]}));r.push([e.i,".preview-container[data-v-688a103a]{display:flex;flex-direction:column;min-height:100vh;min-height:-webkit-fill-available;min-height:-moz-available;min-height:stretch;margin:calc(50 / 16 * 1em) 0}.preview-container[data-v-688a103a]:first-child{margin-top:0}.preview-container[data-v-688a103a]:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container[data-v-688a103a]{flex-direction:row}}@media (min-width:992px){.preview-container[data-v-688a103a]{flex-direction:row}}.preview-container>.info[data-v-688a103a],.preview-container>.preview[data-v-688a103a]{display:flex;align-items:center;justify-content:center;width:100%;height:50vh;margin:0;overflow:hidden}@media (orientation:landscape){.preview-container>.info[data-v-688a103a],.preview-container>.preview[data-v-688a103a]{width:50vw;height:100vh}}@media (min-width:992px){.preview-container>.info[data-v-688a103a],.preview-container>.preview[data-v-688a103a]{width:50vw;height:100vh}}.preview-container .info[data-v-688a103a]{font-size:calc(32 / 16 * 1em)}.preview-container .info p[data-v-688a103a]{line-height:1.375;text-align:center}.preview-container .info button[data-v-688a103a]{width:90%;margin:0 auto}.preview-container .preview[data-v-688a103a]{font-size:calc(18 / 16 * 1em);--bg-opacity:1;background-color:rgba(0,0,0,.4)}@media (color-index: 48){.preview-container .preview[data-v-688a103a]{background-color:hsla(0,0%,100%,.4)}}@media (color: 48842621){.preview-container .preview[data-v-688a103a]{background-color:hsla(0,0%,100%,.4)}}@media (prefers-color-scheme:dark){.preview-container .preview[data-v-688a103a]{background-color:hsla(0,0%,100%,.4)}}.preview-container .preview[data-v-688a103a] img,.preview-container .preview[data-v-688a103a] picture img,.preview-container .preview img[data-v-688a103a]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.preview-container .preview[data-v-688a103a] picture{width:100%;height:100%}.preview-container .preview>article[data-v-688a103a]{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%;text-align:center}.preview-container .preview>div[data-v-688a103a]{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.preview-container .preview>div[data-v-688a103a] .list{padding:0;margin:0;list-style:none}.preview-container .preview>div[data-v-688a103a] .list>*{margin:calc(10 / 16 * 1em) 0}.preview-container .preview>div[data-v-688a103a] .test-iframe{position:relative;width:100%;height:100%}",""]),r.locals={},e.exports=r},217:function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var r=n(193),c=n(207),o=n(199),l=n(200),d=(n(101),n(208),n(168),n(173),n(189)),h=n(261),f=Object(l.a)("src"),v=Object(l.a)("sizes"),m=Object(l.a)("media"),w=Object(l.a)("width"),y=Object(l.a)("height"),j=Object(l.a)("format"),O=Object(l.a)("quality"),x=Object(l.a)("preload"),k=function(){function e(e){var t=e.src,n=e.sizes,r=e.width,c=e.height,l=e.media,d=void 0===l?"all":l,h=e.quality,k=void 0===h?70:h,_=e.format,z=void 0===_?null:_,$=e.preload,S=void 0!==$&&$;Object.defineProperty(this,f,{writable:!0,value:null}),Object.defineProperty(this,v,{writable:!0,value:null}),Object.defineProperty(this,m,{writable:!0,value:null}),Object.defineProperty(this,w,{writable:!0,value:null}),Object.defineProperty(this,y,{writable:!0,value:null}),Object.defineProperty(this,j,{writable:!0,value:null}),Object.defineProperty(this,O,{writable:!0,value:null}),Object.defineProperty(this,x,{writable:!0,value:!1}),Object(o.a)(this,f)[f]=t,Object(o.a)(this,v)[v]=n,Object(o.a)(this,m)[m]=d,Object(o.a)(this,w)[w]=r,Object(o.a)(this,y)[y]=c,Object(o.a)(this,j)[j]=z,Object(o.a)(this,O)[O]=k,Object(o.a)(this,x)[x]=S}var t=e.prototype;return t.getModifiers=function(){return{format:this.format,quality:this.quality}},t.getMeta=function(t,n){return Object(h.b)(new e(Object.assign({},this.toJSON())),t,n)},t.getPreload=function(e,t,n){return{rel:"preload",as:"image",imagesrcset:e,imagesizes:t,media:this.media,crossorigin:n}},t.modify=function(t){return new e(Object.assign({},this.toJSON(),t))},t.toJSON=function(){return{src:Object(o.a)(this,f)[f],sizes:Object(o.a)(this,v)[v],media:Object(o.a)(this,m)[m],width:Object(o.a)(this,w)[w],height:Object(o.a)(this,y)[y],format:Object(o.a)(this,j)[j],quality:Object(o.a)(this,O)[O],preload:Object(o.a)(this,x)[x]}},e.create=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Object(r.a)(this,t)},Object(c.a)(e,[{key:"key",get:function(){return Object(d.a)(JSON.stringify(this.toJSON()))}},{key:"src",get:function(){return Object(o.a)(this,f)[f]}},{key:"sizes",get:function(){return Object(o.a)(this,v)[v]}},{key:"media",get:function(){return Object(o.a)(this,m)[m]}},{key:"width",get:function(){return Object(o.a)(this,w)[w]}},{key:"height",get:function(){return Object(o.a)(this,y)[y]}},{key:"ratio",get:function(){return Object(o.a)(this,w)[w]/Object(o.a)(this,y)[y]}},{key:"format",get:function(){var e,t=Object(h.a)(Object(o.a)(this,f)[f]);return null!=(e=Object(o.a)(this,j)[j])&&e.includes(t)?t:Object(o.a)(this,j)[j]||t}},{key:"quality",get:function(){return Object(o.a)(this,O)[O]}},{key:"preload",get:function(){return Object(o.a)(this,x)[x]}},{key:"className",get:function(){return"image-"+Object(d.a)(this.src)}},{key:"style",get:function(){return"\n      @supports (aspect-ratio: 1) {\n        @media "+this.media+" { ."+this.className+" { aspect-ratio: "+this.width+" / "+this.height+"; } }\n      }\n    "}}]),e}()},218:function(e,t,n){var content=n(263);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(154).default)("dfc1d064",content,!0,{sourceMap:!1})},251:function(e,t,n){"use strict";var r=n(64),c=(n(169),n(161),n(62),n(100),n(217)),o=n(190),l={inheritAttrs:!1,props:{source:{type:[c.a,Object],default:null},title:{type:String,required:!0},alt:{type:String,default:null},loadingSpinner:{type:o.a,default:function(){return this.$speedkit.loader()}}},data:function(){return{className:null,loading:!0,config:null,meta:null}},fetchKey:function(){var e;return this.source?"image-"+(null==(e=new c.a(this.source))?void 0:e.key):"image"},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,source,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.source){t.next=8;break}return source=new c.a(e.source),e.config=e.$img.getSizes(source.src,{sizes:source.sizes,modifiers:source.getModifiers()}),r=e.$nuxt.context.ssrContext,t.next=6,source.getMeta(e.config.src,(null==r||null==(n=r.nuxt)?void 0:n._img)||{});case 6:e.meta=t.sent,e.className=e.meta.className;case 8:case"end":return t.stop()}}),t)})))()},head:function(){return{style:this.style,link:this.preload,noscript:[{hid:"img-nojs",innerHTML:"<style>img { content-visibility: unset !important; }</style>"}],__dangerouslyDisableSanitizers:["noscript"]}},computed:{classNames:function(){var e=[{loading:this.loading}].concat(this.className);return this.loadingSpinner&&e.push(this.loadingSpinner.className),e},srcset:function(){var e,t;return(null==(e=this.config)?void 0:e.srcset)||(null==(t=this.config)?void 0:t.src)},sizes:function(){var e;return null==(e=this.config)?void 0:e.sizes},width:function(){var e;return this.$attrs.width||(null==(e=this.meta)?void 0:e.width)},height:function(){var e;return this.$attrs.height||(null==(e=this.meta)?void 0:e.height)},loadingMode:function(){return this.isCritical?"eager":"lazy"},decodingMode:function(){return this.source&&"svg"===new c.a(this.source).format?"sync":"async"},style:function(){return[this.loadingSpinner&&{hid:this.loadingSpinner.className,type:"text/css",cssText:this.loadingSpinner.style},this.meta&&{hid:this.className,type:"text/css",cssText:new c.a(this.meta).style}].filter(Boolean)},preload:function(){return this.config&&this.isCritical?[new c.a(this.source).getPreload(this.config.srcset,this.config.sizes)]:[]}},mounted:function(){this.loading=!this.$el.complete},methods:{onLoad:function(e){this.loading=!1,this.$emit("load",e.target.currentSrc)}}},d=(n(262),n(152)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("img",e._g(e._b({staticClass:"nuxt-speedkit-image",class:e.classNames,attrs:{srcset:e.srcset,sizes:e.sizes,width:e.width,height:e.height,title:e.title,alt:e.alt||e.title,loading:e.loadingMode,decoding:e.decodingMode,crossorigin:e.$speedkit.crossorigin}},"img",e.$attrs,!1),Object.assign({},e.$listeners,{load:e.onLoad})))}),[],!1,null,"0b2b2d80",null);t.a=component.exports},252:function(e,t,n){"use strict";n(101);var r=n(231),c=n(251),o={inheritAttrs:!1,props:{hydrate:{type:Boolean,default:!0}},render:function(e){return this.hydrate?e(c.a,{props:Object.assign({},this.$attrs,{critical:this.isCritical}),on:this.$listeners}):e(r.a,{props:{never:!0}},[e("noscript",{},[e(c.a,{props:Object.assign({},this.$attrs,{critical:this.hydrate}),on:this.$listeners})])])}},l=n(152),component=Object(l.a)(o,undefined,undefined,!1,null,null,null);t.a=component.exports},261:function(e,t,n){"use strict";(function(e,r){n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var c=n(64),o=(n(100),n(65),n(197),n(201),n(62),n(195),n(174),n(230),n(63),n(97),n(98),n(198)),l=function(e){var t=Object(o.parseURL)(e).pathname;if(/[.]/.exec(t))return/[^.]+$/.exec(t)[0]},d=function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(source,c,l){var d,h,f,v,m,w,y;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.Image){t.next=8;break}return source=source.modify({src:c}),t.next=4,new Promise((function(t){var img=new e.Image;img.onload=function(){return t(img)},img.src=source.src}));case 4:return d=t.sent,t.abrupt("return",source.modify({width:d.naturalWidth,height:d.naturalHeight}));case 8:return h=c,Object.entries(l||{}).length&&(h=Object.entries(l||{}).find((function(e){return e[1].endsWith(h)}))[0]),source=source.modify({src:Object(o.joinURL)(r.env.NUXT_SPEEDKIT_INTERAL_URL,h)}),t.next=13,fetch(source.src);case 13:return f=t.sent,t.next=16,n.e(25).then(n.t.bind(null,330,7));case 16:return v=t.sent.default,t.t0=v,t.next=20,f.buffer();case 20:return t.t1=t.sent,m=(0,t.t0)(t.t1),w=m.width,y=m.height,t.abrupt("return",source.modify({width:w,height:y}));case 25:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()}).call(this,n(22),n(228))},262:function(e,t,n){"use strict";n(218)},263:function(e,t,n){var r=n(153)((function(i){return i[1]}));r.push([e.i,"\n.nuxt-speedkit-image[data-v-0b2b2d80]{content-visibility:auto;display:block;width:100%;height:auto;-o-object-fit:cover;object-fit:cover}",""]),r.locals={},e.exports=r},505:function(e,t,n){"use strict";n.r(t);var r=n(252),c=n(157),o={components:{OrganismPreviewContainer:c.a,SpeedkitImage:r.a},data:function(){return{image:{title:"Critical - Image",source:{format:"jpg",src:"/img/pickadummy/critical.jpg",sizes:{default:"100vw",xxs:"100vw",xs:"100vw",sm:"100vw",md:"100vw",lg:"100vw",xl:"100vw",xxl:"100vw"}}}}}},l=n(152),d=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("organism-preview-container",{attrs:{id:"criticalContainer"},scopedSlots:e._u([{key:"default",fn:function(){return[n("speedkit-image",e._b({},"speedkit-image",e.image,!1))]},proxy:!0},{key:"title",fn:function(){return[n("p",[e._v("Critical - Image")])]},proxy:!0}])})}),[],!1,null,null,null).exports,h={components:{SpeedkitImage:r.a,OrganismPreviewContainer:c.a},data:function(){return{image:{title:"Lazy - Image",source:{src:"/img/pickadummy/lazy.jpg",sizes:{default:"100vw",xxs:"100vw",xs:"100vw",sm:"100vw",md:"100vw",lg:"100vw",xl:"100vw",xxl:"100vw"}}}}}},f={components:{Critical:d,Lazy:Object(l.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("organism-preview-container",{attrs:{id:"lazyContainer"},scopedSlots:e._u([{key:"default",fn:function(){return[n("speedkit-image",e._b({},"speedkit-image",e.image,!1))]},proxy:!0},{key:"title",fn:function(){return[n("p",[e._v("Lazy - Image")])]},proxy:!0}])})}),[],!1,null,null,null).exports}},v=Object(l.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("document-section",{attrs:{tag:"main"}},[n("critical",{attrs:{critical:""}}),e._v(" "),n("lazy")],1)}),[],!1,null,null,null);t.default=v.exports}}]);