import{u as C}from"./BCYAbyMa.js";import{r as s,h as V,j as k,_ as B,k as d,o as _,c as b,m as $,l as v,w as o,b as c,u as n,a as i,d as u}from"./Blc8pwaY.js";import{P as y}from"./CluraazB.js";import"./BRWpFFLA.js";import"./DtMZnCtO.js";function I(e){const t=s(null),r=s(!1),{isCritical:a}=C();return V(async()=>{e={root:void 0,rootMargin:"0px",threshold:[0],trackVisibility:!1,delay:0,...e},a.value||await k(t.value,e).enterViewOnce(),r.value=!0}),{el:t,inView:r}}const O=["src","title"],S={__name:"BoosterIframe",props:{src:{type:String,default:null},title:{type:String,default:null},componentObserver:{type:Object,default(){return{trackVisibility:!0,delay:350}}}},emits:["load","enter"],setup(e,{emit:t}){const r=e,a=t,f=s(null),m=s(!1);d(m,l=>{l.target.src&&a("load",l)});const{el:x,inView:g}=I();return d(g,()=>{f.value=r.src,a("enter")}),(l,p)=>(_(),b("iframe",$({ref_key:"iframe",ref:x,src:f.value,class:"nuxt-booster-iframe"},l.$attrs,{title:e.title,onLoad:p[0]||(p[0]=w=>m.value=w)}),null,16,O))}},h=B(S,[["__scopeId","data-v-7c75a63b"]]),z=i("p",null,[u("Critical"),i("br"),u("Iframe")],-1),L={__name:"Critical",setup(e){const t=s("https://basics.github.io/nuxt-booster/playground/");return(r,a)=>(_(),v(n(y),null,{default:o(()=>[c(n(h),{class:"test-iframe",src:t.value},null,8,["src"])]),title:o(()=>[z]),_:1}))}},N=i("p",null,[u("Lazy"),i("br"),u("Iframe")],-1),P={__name:"Lazy",setup(e){const t=s("https://basics.github.io/nuxt-booster/playground/");return(r,a)=>(_(),v(n(y),{id:"lazyContainer"},{default:o(()=>[c(n(h),{class:"test-iframe",src:t.value},null,8,["src"])]),title:o(()=>[N]),_:1}))}},q={__name:"index",setup(e){return(t,r)=>(_(),b("div",null,[c(n(L),{critical:""}),c(n(P))]))}};export{q as default};