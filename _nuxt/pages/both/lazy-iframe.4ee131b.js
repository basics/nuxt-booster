(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{205:function(e,t,r){var content=r(207);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(75).default)("7d9112ab",content,!0,{sourceMap:!1})},206:function(e,t,r){"use strict";var n=r(205);r.n(n).a},207:function(e,t,r){(t=r(74)(!1)).push([e.i,".preview-container{display:flex;flex-direction:column;height:100%;margin:50px 0}.preview-container:first-child{margin-top:0}.preview-container:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container{flex-direction:row}}@media (min-width:1024px){.preview-container{flex-direction:row}}.preview-container>div{flex:0 0 50%}.preview-container .preview-container__info{display:flex;align-items:center;justify-content:center;font-size:7.72947vw}@media (min-width:768px){.preview-container .preview-container__info{font-size:4.16667vw}}@media (min-width:1024px){.preview-container .preview-container__info{font-size:32px}}.preview-container .preview-container__info p{line-height:1.375;text-align:center}.preview-container .preview-container__preview{background:#eee}.preview-container .preview-container__preview>article{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:4.83092vw}.preview-container .preview-container__preview>article p{font-family:var(--font-family)}@media (min-width:768px){.preview-container .preview-container__preview>article{font-size:2.60417vw}}@media (min-width:1024px){.preview-container .preview-container__preview>article{font-size:20px}}.preview-container .preview-container__preview>figure,.preview-container .preview-container__preview>iframe{position:relative;width:100%;height:100%}.preview-container .preview-container__preview>figure img{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}",""]),e.exports=t},208:function(e,t,r){"use strict";r.r(t);var n={},o=(r(206),r(29)),component=Object(o.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"preview-container"},[t("div",{staticClass:"preview-container__preview"},[this._t("default")],2),this._v(" "),t("div",{staticClass:"preview-container__info"},[this._t("title",[t("p",[this._v("Preview Info")])])],2)])}),[],!1,null,null,null);t.default=component.exports},210:function(e,t,r){"use strict";(function(e){e.IntersectionObserver=e.IntersectionObserver||function(){function e(){}var t=e.prototype;return t.observe=function(){},t.unobserve=function(){},e}(),t.a={abstract:!0,props:{root:{type:e.HTMLElement,default:function(){return null}},rootMargin:{type:String,default:function(){return"0px"}},threshold:{type:Array,default:function(){return[0]}}},created:function(){var e,t=this;if(!this.$options.critical||!this.$attrs.critical){var r={root:(e=this).root,rootMargin:e.rootMargin,threshold:e.threshold};this.observer=new IntersectionObserver((function(e){var r=e[0];return t.onIntersect(r)}),r)}},mounted:function(){this.observer&&this.observer.observe(this.$el)},destroyed:function(){this.observer&&this.observer.disconnect()},methods:{onIntersect:function(e){e.isIntersecting&&(this.observer.unobserve(this.$el),this.triggerEnter())},triggerEnter:function(e){this.$emit("enter",e)}},render:function(){try{return this.$slots.default[0]}catch(e){throw new Error("IntersectionObserver.vue can only render one, and exactly one child component.")}}}}).call(this,r(21))},214:function(e,t,r){var content=r(229);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(75).default)("2c5ad93a",content,!0,{sourceMap:!1})},225:function(e,t,r){"use strict";var n=r(210).a,o=r(29),component=Object(o.a)(n,void 0,void 0,!1,null,null,null);t.a=component.exports},228:function(e,t,r){"use strict";var n=r(214);r.n(n).a},229:function(e,t,r){(t=r(74)(!1)).push([e.i,"",""]),e.exports=t},230:function(e,t,r){"use strict";r.r(t);var n={components:{IntersectionObserver:r(225).a},props:{src:{type:String,default:function(){return null}}},data:function(){return{lazySrc:null}},methods:{onEnter:function(e){this.lazySrc=this.src}}},o=(r(228),r(29)),component=Object(o.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("intersection-observer",{on:{enter:this.onEnter}},[t("iframe",this._b({staticClass:"lazy-iframe",attrs:{src:this.lazySrc,loading:"lazy"}},"iframe",this.$attrs,!1))])}),[],!1,null,"4ec2f79b",null);t.default=component.exports},281:function(e,t,r){"use strict";r.r(t);var n={data:function(){return{iframeA:{src:"https://grabarzundpartner.de"}}}},o=r(29),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("organism-preview-container",{attrs:{critical:""},scopedSlots:e._u([{key:"title",fn:function(){return[r("p",[e._v("Critical"),r("br"),e._v("LazyIframe")])]},proxy:!0}])},[[r("LazyIframe",e._b({},"LazyIframe",e.iframeA,!1))]],2)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{LazyIframe:r(230).default,OrganismPreviewContainer:r(208).default})}}]);