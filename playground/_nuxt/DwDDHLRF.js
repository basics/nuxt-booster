var V=Object.defineProperty;var G=(t,e,s)=>e in t?V(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var g=(t,e,s)=>G(t,typeof e!="symbol"?e+"":e,s);import{a2 as H,u as C,h as Q,a8 as X,k as Y,a9 as Z,aa as M,I as K,ab as ee,ac as te,C as b,ad as ie,S as O,ae as se,U as E,af as q,ag as T,ah as re,ai as L,J as U,s as ne,aj as oe,_ as ae,E as ce,r as y,ak as de,o as le,c as ue,m as he}from"./BxUSIqFb.js";import{u as fe}from"./CLYzm8hC.js";import{u as me}from"./B_e2FeOG.js";import{t as N,b as ge}from"./BRWpFFLA.js";import{g as pe}from"./BZPTPnlw.js";function we({willPerformHydration:t,hydrate:e,onCleanup:s},i=2e3){if(!t)return;if(!H())throw new Error("useHydrateWhenIdle must be called from the setup or lifecycle hook methods.");if(!("requestIdleCallback"in window)){e();return}const r=requestIdleCallback(()=>{e()},{timeout:i});s(()=>{cancelIdleCallback(r)})}function ve({willPerformHydration:t,hydrate:e,onCleanup:s},i=["focus"]){if(!t)return;const r=H();if(!r||r.isMounted)throw new Error("useHydrateOnInteraction must be called from the setup method.");const n=C(i);Q(()=>{const o=X(r),a=o.length>1?o[0].parentElement||document:o[0],c={capture:!0,once:!1,passive:!0},u=d=>{d.stopPropagation();const h=d.composedPath&&d.composedPath()||d.path;if(!h){let l=d.target;for(;l;){if(o.includes(l)){e();return}if(l===a)return;l=l.parentElement}return}o.forEach(l=>{h.includes(l)&&e()})};n.forEach(d=>{a.addEventListener(d,u,c)}),s(()=>{n.forEach(d=>{a.removeEventListener(d,u,c)})})})}function ye({willPerformHydration:t,hydrate:e,onCleanup:s},i){if(!t)return;if(!H())throw new Error("useHydrateWhenTriggered must be called from the setup or lifecycle hook methods.");const r=Y(Z(i)?i:()=>i,n=>{n&&e()},{immediate:!0});s(r)}const A=t=>t.length===1?t[0]:t,be=K({name:"LazyHydrationWrapper",inheritAttrs:!1,suspensible:!1,props:{whenIdle:{default:!1,type:[Boolean,Number]},whenVisible:{default:!1,type:[Boolean,Object]},onInteraction:{default:!1,type:[Array,Boolean,String]},whenTriggered:{default:void 0,type:[Boolean,Object]}},emits:["hydrated"],setup(t,{slots:e,emit:s}){const i=ee();if(!i.willPerformHydration)return()=>A(e.default());if(i.onHydrated(()=>s("hydrated")),t.whenIdle&&we(i,t.whenIdle!==!0?t.whenIdle:void 0),t.whenVisible&&te(i,t.whenVisible!==!0?t.whenVisible:void 0),t.onInteraction){let r;t.onInteraction!==!0&&(r=b(()=>Array.isArray(t.onInteraction)?t.onInteraction:[t.onInteraction]).value),ve(i,r)}return t.whenTriggered!==void 0&&ye(i,ie(t,"whenTriggered")),()=>A(e.default())}}),it=M(be);function Ie(t){return new URL(window.location.href)}async function _e(t,e){return await Se(e).catch(i=>(console.error("Failed to get image meta for "+e,i+""),{width:0,height:0,ratio:0}))}async function Se(t){if(typeof Image>"u")throw new TypeError("Image not supported");return new Promise((e,s)=>{const i=new Image;i.onload=()=>{const r={width:i.width,height:i.height,ratio:i.width/i.height};e(r)},i.onerror=r=>s(r),i.src=t})}function R(t){return e=>e?t[e]||e:t.missingValue}function $e({formatter:t,keyMap:e,joinWith:s="/",valueMap:i}={}){t||(t=(n,o)=>`${n}=${o}`),e&&typeof e!="function"&&(e=R(e));const r=i||{};return Object.keys(r).forEach(n=>{typeof r[n]!="function"&&(r[n]=R(r[n]))}),(n={})=>Object.entries(n).filter(([a,c])=>typeof c<"u").map(([a,c])=>{const u=r[a];return typeof u=="function"&&(c=u(n[a])),a=typeof e=="function"?e(a):a,t(a,c)}).join(s)}function W(t=""){if(typeof t=="number")return t;if(typeof t=="string"&&t.replace("px","").match(/^\d+$/g))return Number.parseInt(t,10)}function xe(t=""){if(t===void 0||!t.length)return[];const e=new Set;for(const s of t.split(" ")){const i=Number.parseInt(s.replace("x",""));i&&e.add(i)}return Array.from(e)}function ze(t){if(t.length===0)throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)")}function We(t){const e={};if(typeof t=="string")for(const s of t.split(/[\s,]+/).filter(i=>i)){const i=s.split(":");i.length!==2?e["1px"]=i[0].trim():e[i[0].trim()]=i[1].trim()}else Object.assign(e,t);return e}function Me(t){const e={options:t},s=(r,n={})=>D(e,r,n),i=(r,n={},o={})=>s(r,{...o,modifiers:T(n,o.modifiers||{})}).url;for(const r in t.presets)i[r]=(n,o,a)=>i(n,o,{...t.presets[r],...a});return i.options=t,i.getImage=s,i.getMeta=(r,n)=>Oe(e,r,n),i.getSizes=(r,n)=>je(e,r,n),e.$img=i,i}async function Oe(t,e,s){const i=D(t,e,{...s});return typeof i.getMeta=="function"?await i.getMeta():await _e(t,i.url)}function D(t,e,s){var u,d;if(e&&typeof e!="string")throw new TypeError(`input must be a string (received ${typeof e}: ${JSON.stringify(e)})`);if(!e||e.startsWith("data:"))return{url:e};const{provider:i,defaults:r}=Ee(t,s.provider||t.options.provider),n=He(t,s.preset);if(e=O(e)?e:se(e),!i.supportsAlias)for(const h in t.options.alias)e.startsWith(h)&&(e=E(t.options.alias[h],e.substr(h.length)));if(i.validateDomains&&O(e)){const h=q(e).host;if(!t.options.domains.find(l=>l===h))return{url:e}}const o=T(s,n,r);o.modifiers={...o.modifiers};const a=o.modifiers.format;(u=o.modifiers)!=null&&u.width&&(o.modifiers.width=W(o.modifiers.width)),(d=o.modifiers)!=null&&d.height&&(o.modifiers.height=W(o.modifiers.height));const c=i.getImage(e,o,t);return c.format=c.format||a||"",c}function Ee(t,e){const s=t.options.providers[e];if(!s)throw new Error("Unknown provider: "+e);return s}function He(t,e){if(!e)return{};if(!t.options.presets[e])throw new Error("Unknown preset: "+e);return t.options.presets[e]}function je(t,e,s){var _,S,$,x,z;const i=W((_=s.modifiers)==null?void 0:_.width),r=W((S=s.modifiers)==null?void 0:S.height),n=We(s.sizes),o=($=s.densities)!=null&&$.trim()?xe(s.densities.trim()):t.options.densities;ze(o);const a=i&&r?r/i:0,c=[],u=[];if(Object.keys(n).length>=1){for(const f in n){const w=B(f,String(n[f]),r,a,t);if(w!==void 0){c.push({size:w.size,screenMaxWidth:w.screenMaxWidth,media:`(max-width: ${w.screenMaxWidth}px)`});for(const v of o)u.push({width:w._cWidth*v,src:P(t,e,s,w,v)})}}Le(c)}else for(const f of o){const w=Object.keys(n)[0];let v=B(w,String(n[w]),r,a,t);v===void 0&&(v={size:"",screenMaxWidth:0,_cWidth:(x=s.modifiers)==null?void 0:x.width,_cHeight:(z=s.modifiers)==null?void 0:z.height}),u.push({width:f,src:P(t,e,s,v,f)})}Ne(u);const d=u[u.length-1],h=c.length?c.map(f=>`${f.media?f.media+" ":""}${f.size}`).join(", "):void 0,l=h?"w":"x",p=u.map(f=>`${f.src} ${f.width}${l}`).join(", ");return{sizes:h,srcset:p,src:d==null?void 0:d.src}}function B(t,e,s,i,r){const n=r.options.screens&&r.options.screens[t]||Number.parseInt(t),o=e.endsWith("vw");if(!o&&/^\d+$/.test(e)&&(e=e+"px"),!o&&!e.endsWith("px"))return;let a=Number.parseInt(e);if(!n||!a)return;o&&(a=Math.round(a/100*n));const c=i?Math.round(a*i):s;return{size:e,screenMaxWidth:n,_cWidth:a,_cHeight:c}}function P(t,e,s,i,r){return t.$img(e,{...s.modifiers,width:i._cWidth?i._cWidth*r:void 0,height:i._cHeight?i._cHeight*r:void 0},s)}function Le(t){var s;t.sort((i,r)=>i.screenMaxWidth-r.screenMaxWidth);let e=null;for(let i=t.length-1;i>=0;i--){const r=t[i];r.media===e&&t.splice(i,1),e=r.media}for(let i=0;i<t.length;i++)t[i].media=((s=t[i+1])==null?void 0:s.media)||""}function Ne(t){t.sort((s,i)=>s.width-i.width);let e=null;for(let s=t.length-1;s>=0;s--){const i=t[s];i.width===e&&t.splice(s,1),e=i.width}}const Ae=$e({keyMap:{format:"f",fit:"fit",width:"w",height:"h",resize:"s",quality:"q",background:"b"},joinWith:"&",formatter:(t,e)=>L(t)+"_"+L(e)}),Re=(t,{modifiers:e={},baseURL:s}={},i)=>{e.width&&e.height&&(e.resize=`${e.width}x${e.height}`,delete e.width,delete e.height);const r=Ae(e)||"_";return s||(s=E(i.options.nuxt.baseURL,"/_ipx")),{url:E(s,r,re(t))}},Be=!0,Pe=!0,ke=Object.freeze(Object.defineProperty({__proto__:null,getImage:Re,supportsAlias:Pe,validateDomains:Be},Symbol.toStringTag,{value:"Module"})),F={screens:{xs:576,sm:768,md:996,lg:1200,xl:1367,xxl:1600,"2xl":1536,default:320,xxs:480,"4k":1921},presets:{},provider:"ipxStatic",domains:["picsum.photos","img.youtube.com","i.vimeocdn.com","i.pickadummy.com"],alias:{"/picsum":"https://picsum.photos","/youtube":"https://img.youtube.com","/vimeo":"https://i.vimeocdn.com","/pickadummy":"https://i.pickadummy.com"},densities:[1,2],format:["webp"]};F.providers={ipxStatic:{provider:ke,defaults:{}}};const Ce=()=>{const t=ne(),e=U();return e.$img||e._img||(e._img=Me({...F,nuxt:{baseURL:t.app.baseURL}}))};function qe(t){return["anonymous","use-credentials"].includes(t)}const Te=["avif","webp","png","jpg","gif"],Ue="jpg",De=t=>{const{pathname:e}=q(t),s=/[.]/.exec(e)&&/[^.]+$/.exec(e)[0];return Te.includes(s)?s:Ue};async function Fe(t,e,s){window.Image?t=t.modify({src:e}):t=t.modify({src:O(e)?e:oe(e,Ie().origin)});const{width:i,height:r}=await s.getImageSize(t.src);return t.modify({width:i,height:r})}class I{constructor({src:e,sizes:s,width:i,height:r,media:n="all",quality:o=70,format:a=null,preload:c=!1,modifiers:u={},provider:d=void 0,preset:h=void 0,densities:l=void 0}){g(this,"src",null);g(this,"sizes",null);g(this,"media",null);g(this,"width",null);g(this,"height",null);g(this,"format",null);g(this,"quality",null);g(this,"preload",!1);g(this,"modifiers",{});g(this,"provider");g(this,"preset");g(this,"densities");this.src=e,this.sizes=s,this.media=n,this.width=i,this.height=r,this.format=Je(e,a),this.quality=o,this.preload=c,this.modifiers=u,this.provider=d,this.preset=h,this.densities=l}get key(){return N(JSON.stringify(this.toJSON()))}get ratio(){return this.width/this.height}get className(){return`image-${N(Ve(this.src))}`}get style(){return`
      @supports (aspect-ratio: 1) {
        @media ${this.media} { .${this.className} { aspect-ratio: ${this.width} / ${this.height}; } }
      }
    `}getModifiers(){return{...this.modifiers,format:this.format,quality:this.quality}}getOptions(e){return{provider:this.provider,preset:this.preset,densities:this.densities||e.densities}}getMeta(e,s){return Fe(new I({...this.toJSON()}),e,s)}getPreload(e,s,i){const r={rel:"preload",as:"image",imagesrcset:e,imagesizes:s,media:this.media};return i&&(r.crossorigin=i),r}modify(e){return new I({...this.toJSON(),...e})}toJSON(){return{src:this.src,sizes:this.sizes,media:this.media,width:this.width,height:this.height,format:this.format,quality:this.quality,preload:this.preload,modifiers:this.modifiers,provider:this.provider,preset:this.preset,densities:this.densities}}static create(...e){return new this(...e)}}function Je(t,e){const s=De(t);return e!=null&&e.includes(s)?s:e||s}function Ve(t){if(t.startsWith("/"))return t;const e=new URL(t);return e.pathname+e.search+e.hash}var k={};const Ge=["srcset","sizes","width","height","title","alt","loading","decoding","crossorigin"],Qe=Object.assign({inheritAttrs:!1},{__name:"Base",props:{source:{type:[I,Object],default:null},title:{type:String,required:!0},alt:{type:String,default:null},crossorigin:{type:[Boolean,String],default(){return null},validator:qe}},emits:["load"],async setup(t,{emit:e}){let s,i;const r=ce(),n=t,o=e,a=Ce(),c=U().$booster,{isCritical:u}=fe(),d=y(!0),h=y(null),l=y(null),p=y(null),_=y(null),S=y(null),$=b(()=>pe(n.crossorigin||c.crossorigin)),x=b(()=>{var m;return[{loading:d.value}].concat((m=p.value)==null?void 0:m.className)}),z=b(()=>{var m;return r.width||((m=h.value)==null?void 0:m.width)}),f=b(()=>{var m;return r.height||((m=h.value)==null?void 0:m.height)}),w=b(()=>u.value?"eager":"lazy"),v=b(()=>!n.source||new I(n.source).format!=="svg"?"async":"sync"),J=m=>{d.value=!1,o("load",m.target)};if(n.source){p.value=M(new I(n.source)),l.value=a.getSizes(p.value.src,{sizes:p.value.sizes,modifiers:p.value.getModifiers(),...p.value.getOptions(c)}),_.value=l.value.srcset||l.value.src,S.value=l.value.sizes;const m=y({});me(()=>m.value);try{h.value=M(([s,i]=de(()=>p.value.getMeta(l.value.src,c)),s=await s,i(),s))}catch(j){console.error(j)}m.value={style:[h.value&&ge(p.value)].filter(Boolean),link:[!(!l.value||!u.value)&&k.prerender&&p.value.getPreload(l.value.srcset,l.value.sizes,$.value)].filter(Boolean),noscript:[k.prerender&&{key:"img-nojs",children:"<style>img { content-visibility: unset !important; }</style>"}].filter(Boolean)}}else d.value=!1;return(m,j)=>(le(),ue("img",he(C(r),{srcset:_.value,sizes:S.value,width:z.value,height:f.value,class:["nuxt-booster-image",x.value],title:t.title,alt:t.alt||t.title,loading:w.value,decoding:v.value,crossorigin:$.value,onLoad:J}),null,16,Ge))}}),st=ae(Qe,[["__scopeId","data-v-84c10221"]]);export{st as B,it as L,I as S,qe as c,Ve as n,Ce as u};
