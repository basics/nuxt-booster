import{r as n,j as y,l as v,_ as x,o as u,c as d,m as h,p as m,w as i,b as l,u as s,a as o,d as c}from"./Cb0xn7LM.js";import{u as g}from"./B5erWdkf.js";import{P as p}from"./C7Ap0aY0.js";import"./D4PPo-XL.js";import"./BRWpFFLA.js";function w(e){const t=n(null),r=n(!1),{isCritical:a}=g();return y(async()=>{e={root:void 0,rootMargin:"0px",threshold:[0],trackVisibility:!1,delay:0,...e},a.value||await v(t.value,e).enterViewOnce(),r.value=!0}),{el:t,inView:r}}const V={props:{src:{type:String,default:null},title:{type:String,default:null},componentObserver:{type:Object,default(){return{trackVisibility:!0,delay:350}}}},emits:["load","enter"],setup(){const{el:e,inView:t}=w();return{iframe:e,inView:t}},data(){return{lazySrc:null,loaded:!1}},watch:{loaded(e){e.target.src&&this.$emit("load",e)},inView(){this.lazySrc=this.src,this.$emit("enter")}}},C=["src","title"];function S(e,t,r,a,f,B){return u(),d("iframe",h({ref:"iframe",src:f.lazySrc,class:"nuxt-booster-iframe"},e.$attrs,{title:r.title,onLoad:t[0]||(t[0]=b=>f.loaded=b)}),null,16,C)}const _=x(V,[["render",S],["__scopeId","data-v-5345b1b6"]]),$={__name:"Critical",setup(e){const t=n("https://basics.github.io/nuxt-booster/playground/");return(r,a)=>(u(),m(s(p),null,{default:i(()=>[l(s(_),{class:"test-iframe",src:t.value},null,8,["src"])]),title:i(()=>a[0]||(a[0]=[o("p",null,[c("Critical"),o("br"),c("Iframe")],-1)])),_:1}))}},z={__name:"Lazy",setup(e){const t=n("https://basics.github.io/nuxt-booster/playground/");return(r,a)=>(u(),m(s(p),{id:"lazyContainer"},{default:i(()=>[l(s(_),{class:"test-iframe",src:t.value},null,8,["src"])]),title:i(()=>a[0]||(a[0]=[o("p",null,[c("Lazy"),o("br"),c("Iframe")],-1)])),_:1}))}},P={__name:"index",setup(e){return(t,r)=>(u(),d("div",null,[l(s($),{critical:""}),l(s(z))]))}};export{P as default};
