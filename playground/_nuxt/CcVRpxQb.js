import{_ as p,y as V,z as y,u as o,o as e,c as a,F as g,q as f,b as _,w as x,d as w,t as B,m as M,r as L,h as C,C as H,B as P,k as v,a as n,l as $,x as z,a3 as I,n as N,g as F}from"./gz2cQ8nl.js";import{_ as A}from"./v-HJKO1g.js";import{_ as D}from"./Dvuc6q2a.js";import{a as j}from"./ritn7p2c.js";import"./Br1aF9V_.js";import"./6KmQOssu.js";const E={__name:"LinkList",props:{items:{type:Array,default(){return[{title:"Link 1."},{title:"Link 2."},{title:"Link 3."}]}}},setup(t){const{$getFont:s}=j();return(l,u)=>{const i=D,r=V("font");return y((e(),a("ul",null,[(e(!0),a(g,null,f(t.items,(c,m)=>(e(),a("li",{key:m},[_(i,M({ref_for:!0},c),{default:x(()=>[w(B(c.title),1)]),_:2},1040)]))),128))])),[[r,o(s)("Quicksand",400,"normal")]])}}},O=p(E,[["__scopeId","data-v-659cbe2a"]]),R={class:"menu"},S=["checked"],q=["inert"],Q=["aria-label"],T=I('<label for="menuControl" class="toggle" aria-labelledby="menuButton" data-v-c2272da0><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" data-v-c2272da0><g id="open" data-v-c2272da0><g data-v-c2272da0><path d="M0 10h120v16.67H0z" data-v-c2272da0></path><path d="M0 93.33h120V110H0z" data-v-c2272da0></path></g></g><g id="close" data-v-c2272da0><path d="M0 51.67h120v16.67H0z" data-v-c2272da0></path><path d="M0 51.67h120v16.67H0z" data-v-c2272da0></path></g></svg></label>',1),G={__name:"PageHeaderMenu",props:{modelValue:{type:Boolean,default:!1},lists:{type:Array,default(){return[{headline:"Preview",links:[{title:"Item",to:"/"}]}]}}},emits:["update:modelValue"],setup(t,{emit:s}){const l=t,u=L(!1);C(()=>{u.value=!0});const i=H(()=>u.value&&!l.modelValue),r=s,c=P();v(()=>l.modelValue,d=>document.documentElement.classList.toggle("js-menu-open",d)),v(()=>c.path,()=>r("update:modelValue",!1),{deep:!0,immediate:!0});const m=d=>{r("update:modelValue",d.target.checked)};return(d,W)=>(e(),a("div",R,[n("input",{id:"menuControl",type:"checkbox",name:"menuControl",checked:t.modelValue,onInput:m},null,40,S),n("div",{class:"content","aria-label":"Menu",inert:o(i)},[n("label",{id:"menuButton",for:"menuControl","aria-label":`${t.modelValue?"Open":"Close"} Menu`},null,8,Q),n("div",null,[n("div",null,[n("nav",null,[(e(!0),a(g,null,f(t.lists,({headline:h,links:k},b)=>(e(),a("div",{key:b},[h?(e(),$(o(A),{key:0,tag:"span",class:"headline",type:"menu",content:h},null,8,["content"])):z("",!0),_(o(O),{items:k,"aria-label":"Menu"},null,8,["items"])]))),128))])])])],8,q),T]))}},J=p(G,[["__scopeId","data-v-c2272da0"]]),K={class:"page-header"},U=Object.assign({inheritAttrs:!1},{__name:"PageHeader",setup(t){return(s,l)=>(e(),a("header",K,[_(o(J),N(F(s.$attrs)),null,16)]))}}),ne=p(U,[["__scopeId","data-v-087be47b"]]);export{ne as default};
