var h=Object.defineProperty;var C=(e,t,i)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var l=(e,t,i)=>C(e,typeof t!="symbol"?t+"":t,i);import{a as p,t as m}from"./CP0yG-nE.js";import{a5 as y,r as v,a8 as d,G as x,a9 as b,v as N,K,aa as j,N as D,ab as F}from"./-PVpcgK8.js";const g=Symbol("criticalContext");function A(e={}){const t=y(),{critical:i}={critical:void 0,...e},r=v("critical"in t?t.critical===""||String(t.critical)==="true":i),s=d(g,r.value||!1),n=x(()=>typeof r.value=="boolean"?r.value:s);return b(g,n.value||i),{isCritical:n}}class B{constructor(){l(this,"list");this.list=[]}getKey(){return f(JSON.stringify(this.list.map(t=>t.getKey())))}add(t){const i={name:"data-font",value:`${f(JSON.stringify(t.map(r=>r.getKey())))}`};return this.list=[...this.list,...t.map(r=>(r.setRootSelector(i),r))],i}getPreloadDescriptions(t,i="anonymous"){return Array.from(this.list.reduce((r,s)=>r,new Map).values())}getStyleDescriptions(t){return S([p(this.list.map(i=>i.getCSSText(t)).join(" "),!1,this.getKey())])}getNoScriptStyleDescriptions(){return S([p(this.list.map(t=>t.getNoScriptCSSText()).join(" "),!0,this.getKey())])}get size(){return this.list.length}toJSON(){return{list:this.list.map(t=>t.toJSON())}}}function f(e){return m(e).padStart(9,"-")}function S(e){return e.filter(t=>t.key!=="0")}function J(){const{booster:e}=N().public;return e}function R(e={}){const{isCritical:t}=A(e),i=J(),r=K(),s=j(new B);try{const o=r.$booster.head.push({fontCollection:s,isCritical:t.value,options:i});D(()=>F(()=>o.dispose()))}catch(o){console.error(o)}function n(o,c,a,u){return typeof o=="object"&&(u=o.options,a=o.style,c=o.weight,o=o.family),{runtimeConfig:i,isCritical:t.value,fontCollection:s,definition:r.$booster.getFont(o,c,a,u)}}return{isCritical:t,$getFont:n}}export{R as a,A as u};
