(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{256:function(t,e,n){"use strict";n(127);var r,o=n(221),c=n(39),l=(n(77),n(210),n(130),n(55),n(131),n(128),n(76),n(272),n(273),n(274),n(275),n(276),n(277),n(278),n(279),n(280),n(281),n(282),n(283),n(284),n(285),n(286),n(287),n(288),n(129),n(208),n(241),n(223),n(289)),h=n(257),d=n(83),f=n(22),m=n(57),y=(n(358),n(215),n(253),n(218),n(222),n(214),n(264)),j=n.n(y),O=n(262),v=n(226),w=j()(),k=Object(m.a)("list"),x=Object(m.a)("sort");r=Symbol.iterator;var S=function(){function t(t,e){void 0===e&&(e={}),Object.defineProperty(this,k,{writable:!0,value:[]}),Object.defineProperty(this,x,{writable:!0,value:!1}),e=e||{},Object(f.a)(this,x)[x]=e.sort||!1,Object(f.a)(this,k)[k]=Object(f.a)(this,k)[k].concat(Array.from(t||Object(f.a)(this,k)[k]).map((function(t){return new O.a(t)})))}var e=t.prototype;return e[r]=function(){return Object(f.a)(this,k)[k].values()},e.getFormats=function(t,e,n){return this.sorted.reduce((function(r,source){return r.concat(t.map((function(t){return source.modify({format:t,preload:t.includes(e)&&n})})))}),[])},e.getMeta=function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(n,r){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(this.sorted.map((function(source){var t,e=n.getSizes(source.src,Object.assign({sizes:source.sizes,modifiers:source.getModifiers()},source.getOptions()));return source.getMeta(e.src,null==r||null==(t=r.nuxt)?void 0:t._img)})));case 2:return o=e.sent,e.abrupt("return",new t(o));case 4:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}(),e.toJSON=function(){return Object(f.a)(this,k)[k]},t.create=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return Object(h.a)(this,e)},Object(d.a)(t,[{key:"key",get:function(){return Object(f.a)(this,k)[k].map((function(source){return source.key})).join("-")}},{key:"list",get:function(){return Object(f.a)(this,k)[k]}},{key:"sorted",get:function(){return Object(f.a)(this,x)[x]?Object(f.a)(this,k)[k].sort((function(a,b){return w(a.media,b.media)})):Object(f.a)(this,k)[k]}},{key:"style",get:function(){var t=this;return Object(f.a)(this,k)[k].map((function(e){var n=e.media,r=e.width,o=e.height,c=e.style;return"\n      @media "+n+" { ."+t.className+"::before { padding-top: calc((1 / ("+r+" / "+o+")) * 100%); } }\n      @supports (aspect-ratio: 1) {\n        @media "+n+" { ."+t.className+" { aspect-ratio: "+r+" / "+o+"; } }\n      }\n      "+c+"\n    "})).reverse().join(" ")}},{key:"className",get:function(){return"picture-"+Object(v.a)(this.sorted.map((function(t){return t.src})).join(","))}},{key:"classNames",get:function(){return{picture:this.className,image:Object(f.a)(this,k)[k].map((function(source){return source.className}))}}}]),t}(),N=n(255),z=(n(227),n(228),n(229),n(230),n(231),n(232),n(233),n(234),n(235),n(236),n(237),n(238),n(239),n(240),n(271)),$=new Map([["jpg","jpeg"]]),_={props:{source:{type:O.a,required:!0},crossorigin:{type:[Boolean,String],default:function(){return this.$speedkit.crossorigin},validator:function(t){return["anonymous","use-credentials","",!0,!1].includes(t)}}},data:function(){return{config:null}},fetchKey:function(t){var e="source-"+this.source.key;return e+"-"+t(e)},fetch:function(){this.config=this.$img.getSizes(this.source.src,Object.assign({sizes:this.source.sizes,modifiers:this.source.getModifiers()},this.source.getOptions()))},head:function(){var t=new O.a(this.source);return this.config&&t.preload?{link:[t.getPreload(this.config.srcset,this.config.sizes,Object(z.a)(this.crossorigin))]}:{}},computed:{srcset:function(){return this.config.srcset||this.config.src},type:function(){return"image/"+($.get(this.source.format)||this.source.format)}}},P=n(194),M=Object(P.a)(_,(function(){var t=this;return(0,t._self._c)("source",{attrs:{srcset:t.srcset,sizes:t.config.sizes,media:t.source.media,type:t.type}})}),[],!1,null,null,null).exports,L=["avif","webp","png","jpg","gif"],R={components:{PictureSource:M,BaseImage:l.a},props:{sources:{type:[Array,S],required:!0},formats:{type:Array,default:function(){return this.$speedkit.targetFormats}},loadingSpinner:{type:N.a,default:void 0},title:{type:String,default:null},alt:{type:String,default:null},crossorigin:{type:[Boolean,String],default:function(){return this.$speedkit.crossorigin},validator:function(t){return["anonymous","use-credentials","",!0,!1].includes(t)}},sortSources:{type:Boolean,default:!0}},data:function(){return{metaSources:{},classNames:{}}},fetch:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$nuxt.context.ssrContext,e.next=3,t.sourceList.getMeta(t.$img,n);case 3:t.metaSources=e.sent,t.classNames=t.metaSources.classNames;case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{style:this.style}},fetchKey:function(t){var e="picture-"+this.sourceList.key;return e+"-"+t(e)},computed:{sourceList:function(){return S.create(this.sources,{sort:this.sortSources})},formatSources:function(){var t=this,e=Array.from(new Set(L.map((function(e){return t.formats.find((function(t){return t.includes(e)}))})))).filter(Boolean),n=L.find((function(e){return t.formats.find((function(t){return t.includes(e)}))}));return this.sourceList.getFormats(e,n,this.isCritical)},style:function(){if(!this.metaSources)return[];var t=this.metaSources.length&&new S(this.metaSources)||this.metaSources;return[{hid:this.classNames.picture,type:"text/css",cssText:t.style}]}},methods:{onLoad:function(t){this.$emit("load",t)}}},C=(n(480),Object(P.a)(R,(function(){var t=this,e=t._self._c;return e("picture",{staticClass:"nuxt-speedkit-picture",class:t.classNames.picture},[t._l(t.formatSources,(function(source){return e("picture-source",{key:source.key,attrs:{source:source,crossorigin:t.crossorigin}})})),t._v(" "),e("base-image",{class:t.classNames.image,attrs:{title:t.title,alt:t.alt,"loading-spinner":t.loadingSpinner,crossorigin:t.crossorigin,width:"0",height:"0"},on:{load:t.onLoad}})],2)}),[],!1,null,"37b1c120",null).exports),A={inheritAttrs:!1,props:{hydrate:{type:Boolean,default:!0}},render:function(t){return this.hydrate?t(C,{props:Object.assign({},this.$attrs,{critical:this.isCritical}),on:this.$listeners}):t(o.a,{props:{never:!0}},[t("noscript",{class:"nuxt-speedkit-picture-noscript"},[t(C,{props:Object.assign({},this.$attrs,{critical:this.hydrate}),on:this.$listeners})])])}},B=Object(P.a)(A,undefined,undefined,!1,null,null,null);e.a=B.exports},262:function(t,e,n){"use strict";n.d(e,"a",(function(){return z}));var r=n(257),o=n(83),c=n(22),l=n(57),h=(n(127),n(253),n(210),n(223),n(300)),d=n(226),f=Object(l.a)("src"),m=Object(l.a)("sizes"),y=Object(l.a)("media"),j=Object(l.a)("width"),O=Object(l.a)("height"),v=Object(l.a)("format"),w=Object(l.a)("quality"),k=Object(l.a)("preload"),x=Object(l.a)("modifiers"),S=Object(l.a)("provider"),N=Object(l.a)("preset"),z=function(){function t(t){var e=t.src,n=t.sizes,r=t.width,o=t.height,l=t.media,h=void 0===l?"all":l,d=t.quality,z=void 0===d?70:d,$=t.format,_=void 0===$?null:$,P=t.preload,M=void 0!==P&&P,L=t.modifiers,R=void 0===L?{}:L,C=t.provider,A=void 0===C?void 0:C,B=t.preset,J=void 0===B?void 0:B;Object.defineProperty(this,f,{writable:!0,value:null}),Object.defineProperty(this,m,{writable:!0,value:null}),Object.defineProperty(this,y,{writable:!0,value:null}),Object.defineProperty(this,j,{writable:!0,value:null}),Object.defineProperty(this,O,{writable:!0,value:null}),Object.defineProperty(this,v,{writable:!0,value:null}),Object.defineProperty(this,w,{writable:!0,value:null}),Object.defineProperty(this,k,{writable:!0,value:!1}),Object.defineProperty(this,x,{writable:!0,value:{}}),Object.defineProperty(this,S,{writable:!0,value:void 0}),Object.defineProperty(this,N,{writable:!0,value:void 0}),Object(c.a)(this,f)[f]=e,Object(c.a)(this,m)[m]=n,Object(c.a)(this,y)[y]=h,Object(c.a)(this,j)[j]=r,Object(c.a)(this,O)[O]=o,Object(c.a)(this,v)[v]=_,Object(c.a)(this,w)[w]=z,Object(c.a)(this,k)[k]=M,Object(c.a)(this,x)[x]=R,Object(c.a)(this,S)[S]=A,Object(c.a)(this,N)[N]=J}var e=t.prototype;return e.getModifiers=function(){return Object.assign({},this.modifiers,{format:this.format,quality:this.quality})},e.getOptions=function(){return{provider:this.provider,preset:this.preset}},e.getMeta=function(e,n){return Object(h.b)(new t(Object.assign({},this.toJSON())),e,n)},e.getPreload=function(t,e,n){var r={rel:"preload",as:"image",imagesrcset:t,imagesizes:e,media:this.media};return n&&(r.crossorigin=n),r},e.modify=function(e){return new t(Object.assign({},this.toJSON(),e))},e.toJSON=function(){return{src:Object(c.a)(this,f)[f],sizes:Object(c.a)(this,m)[m],media:Object(c.a)(this,y)[y],width:Object(c.a)(this,j)[j],height:Object(c.a)(this,O)[O],format:Object(c.a)(this,v)[v],quality:Object(c.a)(this,w)[w],preload:Object(c.a)(this,k)[k],modifiers:Object(c.a)(this,x)[x],provider:Object(c.a)(this,S)[S],preset:Object(c.a)(this,N)[N]}},t.create=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return Object(r.a)(this,e)},Object(o.a)(t,[{key:"key",get:function(){return Object(d.a)(JSON.stringify(this.toJSON()))}},{key:"src",get:function(){return Object(c.a)(this,f)[f]}},{key:"sizes",get:function(){return Object(c.a)(this,m)[m]}},{key:"media",get:function(){return Object(c.a)(this,y)[y]}},{key:"width",get:function(){return Object(c.a)(this,j)[j]}},{key:"height",get:function(){return Object(c.a)(this,O)[O]}},{key:"ratio",get:function(){return Object(c.a)(this,j)[j]/Object(c.a)(this,O)[O]}},{key:"format",get:function(){var t,e=Object(h.a)(Object(c.a)(this,f)[f]);return null!=(t=Object(c.a)(this,v)[v])&&t.includes(e)?e:Object(c.a)(this,v)[v]||e}},{key:"quality",get:function(){return Object(c.a)(this,w)[w]}},{key:"preload",get:function(){return Object(c.a)(this,k)[k]}},{key:"modifiers",get:function(){return Object(c.a)(this,x)[x]}},{key:"provider",get:function(){return Object(c.a)(this,S)[S]}},{key:"preset",get:function(){return Object(c.a)(this,N)[N]}},{key:"className",get:function(){return"image-"+Object(d.a)(this.src)}},{key:"style",get:function(){return"\n      @supports (aspect-ratio: 1) {\n        @media "+this.media+" { ."+this.className+" { aspect-ratio: "+this.width+" / "+this.height+"; } }\n      }\n    "}}]),t}()},263:function(t,e,n){var content=n(302);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(199).default)("6c4d8313",content,!0,{sourceMap:!1})},271:function(t,e,n){"use strict";function r(t,e){return t=void 0===(t=!0===t?"anonymous":t)?e||"anonymous":t}n.d(e,"a",(function(){return r}))},289:function(t,e,n){"use strict";n(127);var r=n(39),o=(n(77),n(210),n(215),n(130),n(55),n(271)),c=n(262),l=n(255),h={inheritAttrs:!1,props:{source:{type:[c.a,Object],default:null},title:{type:String,required:!0},alt:{type:String,default:null},crossorigin:{type:[Boolean,String],default:function(){return this.$speedkit.crossorigin},validator:function(t){return["anonymous","use-credentials","",!0,!1].includes(t)}},loadingSpinner:{type:l.a,default:function(){return this.$speedkit.loader()}}},data:function(){return{className:null,loading:!0,config:null,meta:null}},fetchKey:function(t){var e,n;this.source?e="image-"+(null==(n=new c.a(this.source))?void 0:n.key):e="image";return e+"-"+t(e)},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,source,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.source){e.next=8;break}return source=new c.a(t.source),t.config=t.$img.getSizes(source.src,Object.assign({sizes:source.sizes,modifiers:source.getModifiers()},source.getOptions())),r=t.$nuxt.context.ssrContext,e.next=6,source.getMeta(t.config.src,(null==r||null==(n=r.nuxt)?void 0:n._img)||{});case 6:t.meta=e.sent,t.className=t.meta.className;case 8:case"end":return e.stop()}}),e)})))()},head:function(){return{style:this.style,link:this.preload,noscript:[{hid:"img-nojs",innerHTML:"<style>img { content-visibility: unset !important; }</style>"}],__dangerouslyDisableSanitizers:["noscript"]}},computed:{classNames:function(){var t=[{loading:this.loading}].concat(this.className);return this.loadingSpinner&&t.push(this.loadingSpinner.className),t},srcset:function(){var t,e;return(null==(t=this.config)?void 0:t.srcset)||(null==(e=this.config)?void 0:e.src)},sizes:function(){var t;return null==(t=this.config)?void 0:t.sizes},width:function(){var t;return this.$attrs.width||(null==(t=this.meta)?void 0:t.width)},height:function(){var t;return this.$attrs.height||(null==(t=this.meta)?void 0:t.height)},loadingMode:function(){return this.isCritical?"eager":"lazy"},decodingMode:function(){return this.source&&"svg"===new c.a(this.source).format?"sync":"async"},style:function(){return[this.loadingSpinner&&{hid:this.loadingSpinner.className,type:"text/css",cssText:this.loadingSpinner.style},this.meta&&{hid:this.className,type:"text/css",cssText:new c.a(this.meta).style}].filter(Boolean)},preload:function(){return this.config&&this.isCritical?[new c.a(this.source).getPreload(this.config.srcset,this.config.sizes,Object(o.a)(this.crossorigin))]:[]}},mounted:function(){this.loading=!this.$el.complete},methods:{getCrossorigin:o.a,onLoad:function(t){this.loading=!1,this.$emit("load",t.target.currentSrc)}}},d=(n(301),n(194)),component=Object(d.a)(h,(function(){var t=this;return(0,t._self._c)("img",t._g(t._b({staticClass:"nuxt-speedkit-image",class:t.classNames,attrs:{srcset:t.srcset,sizes:t.sizes,width:t.width,height:t.height,title:t.title,alt:t.alt||t.title,loading:t.loadingMode,decoding:t.decodingMode,crossorigin:t.getCrossorigin(t.crossorigin)}},"img",t.$attrs,!1),Object.assign({},t.$listeners,{load:t.onLoad})))}),[],!1,null,"ccf88e48",null);e.a=component.exports},300:function(t,e,n){"use strict";(function(t,r){n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return d}));var o=n(39),c=(n(77),n(78),n(210),n(225),n(241),n(55),n(252),n(259),n(269),n(219)),l=["avif","webp","png","jpg","gif"],h=function(t){var e=Object(c.parseURL)(t).pathname,n=/[.]/.exec(e)&&/[^.]+$/.exec(e)[0];return l.includes(n)?n:"jpg"},d=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(source,n,o){var l,h,d,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.Image?source=source.modify({src:n}):(l=n,Object.entries(o||{}).length&&(l=Object.entries(o||{}).find((function(t){return t[1].endsWith(l)}))[0]),source=source.modify({src:Object(c.hasProtocol)(l)?l:Object(c.withBase)(l,r.env.NUXT_SPEEDKIT_INTERAL_URL)})),e.next=3,t.nuxtSpeedkit_getImageSize(source.src);case 3:return h=e.sent,d=h.width,f=h.height,e.abrupt("return",source.modify({width:d,height:f}));case 7:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()}).call(this,n(40),n(137))},301:function(t,e,n){"use strict";n(263)},302:function(t,e,n){var r=n(198)((function(i){return i[1]}));r.push([t.i,".nuxt-speedkit-image[data-v-ccf88e48]{content-visibility:auto;display:block;height:auto;-o-object-fit:cover;object-fit:cover;width:100%}",""]),r.locals={},t.exports=r},360:function(t,e,n){var content=n(481);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(199).default)("6a3cb654",content,!0,{sourceMap:!1})},480:function(t,e,n){"use strict";n(360)},481:function(t,e,n){var r=n(198)((function(i){return i[1]}));r.push([t.i,'.nuxt-speedkit-picture[data-v-37b1c120]{box-sizing:border-box;display:block;position:relative;width:100%}.nuxt-speedkit-picture img[data-v-37b1c120]{bottom:0;box-sizing:border-box;left:0;position:absolute;right:0;top:0}.nuxt-speedkit-picture[data-v-37b1c120]:before{box-sizing:border-box;content:"";display:block;position:relative}@supports (aspect-ratio:1){.nuxt-speedkit-picture[data-v-37b1c120]{position:unset}.nuxt-speedkit-picture img[data-v-37b1c120]{bottom:unset;left:unset;position:unset;right:unset;top:unset}.nuxt-speedkit-picture[data-v-37b1c120]:before{display:none}}',""]),r.locals={},t.exports=r}}]);