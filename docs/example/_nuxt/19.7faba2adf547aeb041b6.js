(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{155:function(t,e,n){var r=n(8);t.exports=function(t){return r(Set.prototype.values,t)}},202:function(t,e,n){"use strict";var r=n(8),o=n(21),c=n(5);t.exports=function(){for(var t=c(this),e=o(t.add),n=0,l=arguments.length;n<l;n++)r(e,t,arguments[n]);return t}},232:function(t,e,n){"use strict";n(214)("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),n(215))},233:function(t,e,n){"use strict";n(20)({target:"Set",proto:!0,real:!0,forced:!0},{addAll:n(202)})},234:function(t,e,n){"use strict";n(20)({target:"Set",proto:!0,real:!0,forced:!0},{deleteAll:n(216)})},235:function(t,e,n){"use strict";var r=n(20),o=n(12),c=n(8),l=n(21),d=n(5),f=n(99),v=n(96);r({target:"Set",proto:!0,real:!0,forced:!0},{difference:function(t){var e=d(this),n=new(f(e,o("Set")))(e),r=l(n.delete);return v(t,(function(t){c(r,n,t)})),n}})},236:function(t,e,n){"use strict";var r=n(20),o=n(5),c=n(28),l=n(155),d=n(96);r({target:"Set",proto:!0,real:!0,forced:!0},{every:function(t){var e=o(this),n=l(e),r=c(t,arguments.length>1?arguments[1]:void 0);return!d(n,(function(t,n){if(!r(t,t,e))return n()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},237:function(t,e,n){"use strict";var r=n(20),o=n(12),c=n(8),l=n(21),d=n(5),f=n(28),v=n(99),h=n(155),m=n(96);r({target:"Set",proto:!0,real:!0,forced:!0},{filter:function(t){var e=d(this),n=h(e),r=f(t,arguments.length>1?arguments[1]:void 0),S=new(v(e,o("Set"))),w=l(S.add);return m(n,(function(t){r(t,t,e)&&c(w,S,t)}),{IS_ITERATOR:!0}),S}})},238:function(t,e,n){"use strict";var r=n(20),o=n(5),c=n(28),l=n(155),d=n(96);r({target:"Set",proto:!0,real:!0,forced:!0},{find:function(t){var e=o(this),n=l(e),r=c(t,arguments.length>1?arguments[1]:void 0);return d(n,(function(t,n){if(r(t,t,e))return n(t)}),{IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},239:function(t,e,n){"use strict";var r=n(20),o=n(12),c=n(8),l=n(21),d=n(5),f=n(99),v=n(96);r({target:"Set",proto:!0,real:!0,forced:!0},{intersection:function(t){var e=d(this),n=new(f(e,o("Set"))),r=l(e.has),h=l(n.add);return v(t,(function(t){c(r,e,t)&&c(h,n,t)})),n}})},240:function(t,e,n){"use strict";var r=n(20),o=n(8),c=n(21),l=n(5),d=n(96);r({target:"Set",proto:!0,real:!0,forced:!0},{isDisjointFrom:function(t){var e=l(this),n=c(e.has);return!d(t,(function(t,r){if(!0===o(n,e,t))return r()}),{INTERRUPTED:!0}).stopped}})},241:function(t,e,n){"use strict";var r=n(20),o=n(12),c=n(8),l=n(21),d=n(3),f=n(5),v=n(104),h=n(96);r({target:"Set",proto:!0,real:!0,forced:!0},{isSubsetOf:function(t){var e=v(this),n=f(t),r=n.has;return d(r)||(n=new(o("Set"))(t),r=l(n.has)),!h(e,(function(t,e){if(!1===c(r,n,t))return e()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},242:function(t,e,n){"use strict";var r=n(20),o=n(8),c=n(21),l=n(5),d=n(96);r({target:"Set",proto:!0,real:!0,forced:!0},{isSupersetOf:function(t){var e=l(this),n=c(e.has);return!d(t,(function(t,r){if(!1===o(n,e,t))return r()}),{INTERRUPTED:!0}).stopped}})},243:function(t,e,n){"use strict";var r=n(20),o=n(1),c=n(5),l=n(16),d=n(155),f=n(96),v=o([].join),h=[].push;r({target:"Set",proto:!0,real:!0,forced:!0},{join:function(t){var e=c(this),n=d(e),r=void 0===t?",":l(t),o=[];return f(n,h,{that:o,IS_ITERATOR:!0}),v(o,r)}})},244:function(t,e,n){"use strict";var r=n(20),o=n(12),c=n(28),l=n(8),d=n(21),f=n(5),v=n(99),h=n(155),m=n(96);r({target:"Set",proto:!0,real:!0,forced:!0},{map:function(t){var e=f(this),n=h(e),r=c(t,arguments.length>1?arguments[1]:void 0),S=new(v(e,o("Set"))),w=d(S.add);return m(n,(function(t){l(w,S,r(t,t,e))}),{IS_ITERATOR:!0}),S}})},245:function(t,e,n){"use strict";var r=n(20),o=n(0),c=n(21),l=n(5),d=n(155),f=n(96),v=o.TypeError;r({target:"Set",proto:!0,real:!0,forced:!0},{reduce:function(t){var e=l(this),n=d(e),r=arguments.length<2,o=r?void 0:arguments[1];if(c(t),f(n,(function(n){r?(r=!1,o=n):o=t(o,n,n,e)}),{IS_ITERATOR:!0}),r)throw v("Reduce of empty set with no initial value");return o}})},246:function(t,e,n){"use strict";var r=n(20),o=n(5),c=n(28),l=n(155),d=n(96);r({target:"Set",proto:!0,real:!0,forced:!0},{some:function(t){var e=o(this),n=l(e),r=c(t,arguments.length>1?arguments[1]:void 0);return d(n,(function(t,n){if(r(t,t,e))return n()}),{IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},247:function(t,e,n){"use strict";var r=n(20),o=n(12),c=n(8),l=n(21),d=n(5),f=n(99),v=n(96);r({target:"Set",proto:!0,real:!0,forced:!0},{symmetricDifference:function(t){var e=d(this),n=new(f(e,o("Set")))(e),r=l(n.delete),h=l(n.add);return v(t,(function(t){c(r,n,t)||c(h,n,t)})),n}})},248:function(t,e,n){"use strict";var r=n(20),o=n(12),c=n(21),l=n(5),d=n(99),f=n(96);r({target:"Set",proto:!0,real:!0,forced:!0},{union:function(t){var e=l(this),n=new(d(e,o("Set")))(e);return f(t,c(n.add),{that:n}),n}})},252:function(t,e,n){"use strict";n(101);var r=n(231),o=n(251),c={inheritAttrs:!1,props:{hydrate:{type:Boolean,default:!0}},render:function(t){return this.hydrate?t(o.a,{props:Object.assign({},this.$attrs,{critical:this.isCritical}),on:this.$listeners}):t(r.a,{props:{never:!0}},[t("noscript",{},[t(o.a,{props:Object.assign({},this.$attrs,{critical:this.hydrate}),on:this.$listeners})])])}},l=n(152),component=Object(l.a)(c,undefined,undefined,!1,null,null,null);e.a=component.exports},333:function(t,e,n){var content=n(462);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(154).default)("13609980",content,!0,{sourceMap:!1})},461:function(t,e,n){"use strict";n(333)},462:function(t,e,n){var r=n(153)((function(i){return i[1]}));r.push([t.i,".component-stage[data-v-1dd15698]{position:relative;max-height:100%;margin:0;overflow:hidden}.component-stage .logo[data-v-1dd15698]{position:absolute;top:0;left:50%;width:calc(96 / 16 * 1em);margin:calc(20 / 16 * 1em) calc(20 / 16 * 1em) calc(20 / 16 * 1em) calc(calc(-96 / 16 * 1em)/2)}@media (orientation:landscape){.component-stage .logo[data-v-1dd15698]{top:auto;right:0;bottom:0;left:auto}}.component-stage .claim[data-v-1dd15698]{display:block;font-size:calc(16 / 16 * 1em);line-height:2;text-transform:none}.component-stage .content[data-v-1dd15698]{display:block;font-size:calc(30 / 16 * 1em);line-height:2}@media (orientation:landscape) and (min-width:992px){.component-stage .content[data-v-1dd15698]{font-size:calc(40 / 16 * 1em)}}.component-stage .headline[data-v-1dd15698]{position:absolute;bottom:0;left:0;width:100%;padding:calc(20 / 16 * 1em) 0;margin:0;font-size:1em;color:#fff;text-align:center;background:rgba(0,0,0,.4)}@media (orientation:landscape){.component-stage .headline[data-v-1dd15698]{position:absolute;top:50px;right:0;bottom:auto;left:auto;width:auto;padding:calc(20 / 16 * 1em) calc(40 / 16 * 1em)}}",""]),r.locals={},t.exports=r},517:function(t,e,n){"use strict";n.r(e);var r=n(192),o=n(252),c={components:{SpeedkitPicture:r.a,SpeedkitImage:o.a},props:{picture:{type:Object,required:!0},image:{type:Object,default:function(){return{source:{src:"/icon.png",sizes:{default:"100vw",xxs:"100vw",xs:"100vw",sm:"100vw",md:"100vw",lg:"100vw",xl:"100vw",xxl:"100vw"}},title:"Image Title",alt:"Image Alt"}}},content:{type:String,default:function(){return"Headline"}},claim:{type:String,default:function(){return"Claim"}}}},l=(n(461),n(152)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("document-section",{staticClass:"component-stage",attrs:{level:-1}},[n("speedkit-picture",{attrs:{title:t.picture.title,alt:t.picture.alt,sources:t.picture.sources}}),t._v(" "),n("document-heading",{staticClass:"headline"},[n("span",{directives:[{name:"font",rawName:"v-font",value:[t.$getFont("Montserrat Alternates",700,"normal",{selector:".content"}),t.$getFont("Merriweather",300,"italic",{selector:".claim"})],expression:"[\n        $getFont('Montserrat Alternates', 700, 'normal', {selector: '.content'}),\n        $getFont('Merriweather', 300, 'italic', {selector: '.claim'})\n      ]"}]},[n("span",{staticClass:"content"},[t._v(t._s(t.content))]),t._v(" "),n("span",{staticClass:"claim"},[t._v(t._s(t.claim))])])]),t._v(" "),n("speedkit-image",t._b({staticClass:"logo",attrs:{"loading-spinner":null}},"speedkit-image",t.image,!1))],1)}),[],!1,null,"1dd15698",null);e.default=component.exports}}]);