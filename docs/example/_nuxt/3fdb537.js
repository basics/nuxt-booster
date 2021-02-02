(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{348:function(t,e,r){"use strict";(function(t){r(39),r(87),r(218),r(38);var n=r(6),o=r(532);e.a={props:{statsMetric:{type:String,default:function(){return"performance"}}},data:function(){return{url:"",stats:Object(o.b)()}},computed:{style:function(){return{"--color-status":this.color,"--radian":45*this.radian,"--duration":1e3/(2*Math.PI)*this.radian+"ms"}},stateClasses:function(){return{pending:this.stats.isPending(),fail:this.stats.isFailed(),ready:this.stats.isReady()}},title:function(){return("\n        Performance: "+100*this.stats.getScoreOfMetric("performance")+"\n        SEO: "+100*this.stats.getScoreOfMetric("seo")+"\n        Accessibility: "+100*this.stats.getScoreOfMetric("accessibility")+"\n        Best Practices: "+100*this.stats.getScoreOfMetric("best-practices")+"\n      ").trim().replace(/( )+/g,"$1")},score:function(){return this.stats.getScoreOfMetric(this.statsMetric)},radian:function(){return 2*Math.PI*(1-this.score)},color:function(){return this.stats.getStateColorByMetric(this.statsMetric)},reportUrl:function(){return"https://lighthouse-dot-webdotdevsite.appspot.com/lh/html?url="+t.encodeURI(this.url)}},watch:{$route:function(t,e){"lh"in this.$route.query&&this.getMetrics()}},mounted:function(){this.getMetrics()},methods:{getMetrics:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.stats=Object(o.b)(),r.prev=1,r.next=4,Object(o.a)(t.location.href);case 4:e.stats=r.sent,e.url=e.stats.data.lhr.requestedUrl,r.next=12;break;case 8:r.prev=8,r.t0=r.catch(1),e.stats=r.t0,e.url="";case 12:case"end":return r.stop()}}),r,null,[[1,8]])})))()}}}}).call(this,r(14))},382:function(t,e,r){var content=r(514);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("69d268cb",content,!0,{sourceMap:!1})},513:function(t,e,r){"use strict";r(382)},514:function(t,e,r){var n=r(12)(!1);n.push([t.i,".nuxt-speedkit__lighthouse[data-v-5bc5000d]{--pi:3.14159265358979;--score:0;position:fixed;top:0;right:0;z-index:1;display:block;width:60px;font-family:Arial,Helvetica,sans-serif;text-align:center;pointer-events:none;background-color:#fff}.nuxt-speedkit__lighthouse.ready[data-v-5bc5000d]{pointer-events:all}.nuxt-speedkit__lighthouse>svg[data-v-5bc5000d]{display:block;width:50px;height:50px;margin:5px}.nuxt-speedkit__lighthouse>svg circle[data-v-5bc5000d]{fill:transparent;stroke:var(--color-status);stroke-width:10;transform:rotate(-90deg);transform-origin:50%}.nuxt-speedkit__lighthouse>svg circle.pending[data-v-5bc5000d]{stroke-dasharray:calc(var(--pi)*1.35*45);stroke-dashoffset:calc(var(--pi)*2*45);-webkit-animation:rotating-data-v-5bc5000d 1s linear infinite;animation:rotating-data-v-5bc5000d 1s linear infinite}.nuxt-speedkit__lighthouse>svg circle.ready[data-v-5bc5000d]{fill:var(--color-status);fill-opacity:.1;stroke-dasharray:calc(var(--pi)*2*45);stroke-dashoffset:calc(var(--pi)*2*45);-webkit-animation:stroke-data-v-5bc5000d var(--duration) ease-out forwards;animation:stroke-data-v-5bc5000d var(--duration) ease-out forwards}.nuxt-speedkit__lighthouse>svg line[data-v-5bc5000d]{stroke:var(--color-status);stroke-width:10}.nuxt-speedkit__lighthouse>svg text[data-v-5bc5000d]{font-size:32px;fill:var(--color-status)}.nuxt-speedkit__lighthouse span[data-v-5bc5000d]{font-size:12px;text-decoration:underline}.nuxt-speedkit__lighthouse span svg[data-v-5bc5000d]{display:inline;width:12px;height:12px;margin-left:3px}@-webkit-keyframes stroke-data-v-5bc5000d{to{stroke-dashoffset:var(--radian)}}@keyframes stroke-data-v-5bc5000d{to{stroke-dashoffset:var(--radian)}}@-webkit-keyframes rotating-data-v-5bc5000d{to{transform:rotate(270deg)}}@keyframes rotating-data-v-5bc5000d{to{transform:rotate(270deg)}}",""]),t.exports=n},532:function(t,e,r){"use strict";r.d(e,"a",(function(){return y})),r.d(e,"b",(function(){return m}));r(10),r(38);var n=r(6),o=(r(219),r(131),r(36),r(112),r(37),r(113),r(114),r(115),r(116),r(117),r(118),r(119),r(120),r(121),r(122),r(123),r(124),r(125),r(42),Symbol("ready")),c=Symbol("fail"),l=Symbol("pending"),d=new Map([[o,{pass:"#0CCE6B",average:"#FFA400",fail:"#FF4E42"}],[c,"#FF4E42"],[l,"#BDBDBD"]]),h=function(){function t(t,data){this.state=t,this.data=data||{lhrSlim:[]}}var e=t.prototype;return e.isPending=function(){return this.state===l},e.isFailed=function(){return this.state===c},e.isReady=function(){return this.state===o},e.getScoreOfMetric=function(t){return(this.data.lhrSlim.find((function(e){return e.id===t}))||{score:-1}).score},e.getStateColorByMetric=function(t){switch(this.state){case o:return(e=this.getScoreOfMetric(t))>=.9?d.get(o).pass:e>=.5?d.get(o).average:d.get(o).fail;case c:return d.get(c);default:return d.get(l)}var e},t}();var f=function(t){var e,r;function n(){return t.apply(this,arguments)||this}return r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,n}(h),v=null;function y(t){return fetch("https://lighthouse-dot-webdotdevsite.appspot.com/lh/newaudit",{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({replace:!0,save:!0,url:t}),signal:w()}).then(k).catch((function(t){if(t.state)return t;throw m()}))}function m(){return new f(l)}function w(){return v&&v.abort(),(v=new AbortController).signal}function k(t){return x.apply(this,arguments)}function x(){return(x=Object(n.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.ok){t.next=2;break}throw new f(c);case 2:return t.t0=h,t.t1=o,t.next=6,e.json();case 6:return t.t2=t.sent,t.abrupt("return",new t.t0(t.t1,t.t2));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},550:function(t,e,r){"use strict";r.r(e);var n=r(348).a,o=(r(513),r(4)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"nuxt-speedkit__lighthouse",class:{ready:t.stats.isReady()},style:t.style,attrs:{href:t.reportUrl,target:"_blank",title:t.title}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 100 100"}},[r("circle",{class:t.stateClasses,attrs:{cx:"50",cy:"50",r:"45"}}),t._v(" "),t.stats.isFailed()?r("line",{attrs:{x1:"18",y1:"18",x2:"82",y2:"82"}}):t._e(),t._v(" "),t.stats.isReady()?r("text",{attrs:{x:"50",y:"50","text-anchor":"middle","alignment-baseline":"central"}},[t._v("\n      "+t._s(Math.round(100*t.score))+"\n    ")]):t._e()]),t._v(" "),t.stats.isReady()?r("span",[t._v("\n    Report"),r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}})])]):t._e()])}),[],!1,null,"5bc5000d",null);e.default=component.exports}}]);