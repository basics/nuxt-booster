import{P as m}from"./B3DgSW36.js";import{a as h}from"./BBYh8jlG.js";import{e as i,A as w,B as p,f as g,c as o,o as a,d as v,t as M,_ as u,l as x,F as S,x as z,s as f,q as A,r as y,w as s,a as _,b as c}from"./Beff_YD-.js";import"./BxknOI1n.js";import"./yWYTguiB.js";import"./CXlv3sYs.js";import"./D0Cl1lun.js";const B={class:"scroll-item"},C=i({__name:"ScrollItem",props:{font:{type:Object,required:!0}},setup(t){const{$getFont:r}=h();return(n,e)=>{const l=w("font");return p((a(),o("div",B,[v(M([t.font.family,t.font.weight,t.font.style].join(" - ")),1)])),[[l,g(r)(t.font.family,t.font.weight,t.font.style)]])}}}),$=u(C,[["__scopeId","data-v-8f910145"]]),V=i({__name:"ScrollContainer",props:{directionHorizontal:{type:Boolean,default:!1},items:{type:Array,required:!0}},setup(t){return(r,n)=>(a(),o("div",{class:x(["scroll-container",{"direction-horizontal":t.directionHorizontal}])},[(a(!0),o(S,null,z(t.items,(e,l)=>(a(),f($,A({key:l,class:`item item-${l}`,index:l,ref_for:!0},e),null,16,["class","index"]))),128))],2))}}),d=u(V,[["__scopeId","data-v-0f8fd29b"]]),k=i({__name:"Horizontal",setup(t){const r=y([{font:{family:"Merriweather",weight:300,style:"normal"}},{font:{family:"Merriweather",weight:300,style:"italic"}},{font:{family:"Merriweather",weight:400,style:"normal"}},{font:{family:"Merriweather",weight:400,style:"italic"}},{font:{family:"Merriweather",weight:700,style:"normal"}},{font:{family:"Merriweather",weight:700,style:"italic"}}]);return(n,e)=>(a(),f(m,null,{default:s(()=>[c(d,{id:"horizontalScroll","direction-horizontal":"",items:r.value},null,8,["items"])]),title:s(()=>e[0]||(e[0]=[_("p",null,"Horizontal Scroll - v-font",-1)])),_:1}))}}),F=i({__name:"Vertical",setup(t){const r=y([{font:{family:"Montserrat Alternates",weight:300,style:"normal"}},{font:{family:"Montserrat Alternates",weight:300,style:"italic"}},{font:{family:"Montserrat Alternates",weight:400,style:"normal"}},{font:{family:"Montserrat Alternates",weight:400,style:"italic"}},{font:{family:"Montserrat Alternates",weight:700,style:"normal"}},{font:{family:"Montserrat Alternates",weight:700,style:"italic"}}]);return(n,e)=>(a(),f(m,null,{default:s(()=>[c(d,{id:"verticalScroll",items:r.value},null,8,["items"])]),title:s(()=>e[0]||(e[0]=[_("p",null,"Vertical Scroll - v-font",-1)])),_:1}))}}),j=i({__name:"index",setup(t){return(r,n)=>(a(),o("div",null,[c(k),c(F)]))}});export{j as default};
