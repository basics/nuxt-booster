import{a as i}from"./BCYAbyMa.js";import{C as c,y as l,z as d,o as u,l as p,w as y,A as m,d as f,t as g,al as A}from"./Blc8pwaY.js";const _={__name:"Headline",props:{tag:{type:String,default:"h1"},content:{type:String,default:"Headline"},font:{type:Object,default:void 0}},setup(a){const{$getFont:r}=i(),s=a,n=c(()=>{let t=s.font;return t?(Array.isArray(t)&&Array.isArray(t[0])||(t=[t]),[].concat(t).map(e=>(!Array.isArray(e)&&typeof e=="object"&&(e=[e.name,e.weight,e.style,e.selector]),r(...e)))):r("Quicksand",700,"normal")});return(t,e)=>{const o=l("font");return d((u(),p(A(a.tag),{class:"element-headline"},{default:y(()=>[m(t.$slots,"default",{},()=>[f(g(a.content),1)])]),_:3})),[[o,n.value]])}}};export{_};