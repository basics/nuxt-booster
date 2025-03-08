var W=Object.defineProperty;var X=(s,e,a)=>e in s?W(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a;var b=(s,e,a)=>X(s,typeof e!="symbol"?e+"":e,a);import{u as Z,D as ee}from"./CrP7iZy6.js";import{D as ae,a as te}from"./CWdewKh6.js";import{_ as se}from"./BSHmMguQ.js";import{e as R,r,G as y,l as re,ad as le,u as oe,ae as ue,ac as U,q as G,c as M,o as k,D as o,a as l,n as B,g as N,b as Y,w as m,A as j,s as T,m as ne,ab as ie,_ as V,v as pe}from"./RST-GrFH.js";import{u as ce}from"./BNcC8O_e.js";const q=new ae;var c=(s=>(s[s.PLAYING=0]="PLAYING",s[s.ENDED=1]="ENDED",s[s.PAUSE=2]="PAUSE",s))(c||{});const ve=()=>({key:"vimeo",src:"https://player.vimeo.com/api/player.js",async:!0,defer:!0,onload:()=>{q.resolve(window.Vimeo)}}),z=()=>q.promise;class de{constructor(){b(this,"api");b(this,"players",[])}play(e){return this.pausePlayers(e),e.play()}pausePlayers(e){return Promise.all(this.players.filter(a=>!e||e&&a!==e).map(async a=>{await a.getPaused()||a.pause()}))}async createPlayer(e){this.api=await z();const a=new this.api.Player(e);return a.on("playing",()=>this.pausePlayers(a)),this.add(a),a}add(e){this.players.push(e)}remove(e){this.players=this.players.filter(a=>a!==e),e.destroy()}}const O={url:{type:String,required:!0},autoplay:{type:Boolean,default:!1},mute:{type:Boolean,default:void 0},title:{type:String,required:!1,default:null},options:{type:Object,default(){return{}}},posterSources:{type:Array,default(){return[{src:void 0,media:"all",sizes:{default:"100vw"}}]}}};var fe={};const me={class:"player"},ye=["inert","title","src"],he=R({__name:"Base",props:O,emits:["ready","playing"],async setup(s,{emit:e}){let a,v;ce();const F=Z(),_=new de,P=r(!1),u=r(void 0),d=r(void 0),h=r(!1),g=r(!1),f=r(!1),H=r(te()),n=s,C=e,D=r([]),p=r(),$=r(!1),w=r(),Q=r(new URL(n.url||"").pathname.replace("/","")),I=y(()=>n.title||p.value&&p.value.title),x=y(()=>({dnt:!0,autopause:!1,...n.options,playsinline:!0,autoplay:n.autoplay,muted:H.value||n.mute})),J=y(()=>({formats:F.targetFormats,title:n.title,sources:n.posterSources.map(t=>{var i,L;return{...t,src:t.src||((L=(i=p.value)==null?void 0:i.thumbnail_url)==null?void 0:L.replace("https://i.vimeocdn.com","vimeo"))||""}})}));re(()=>{P.value=!0}),le(()=>{u.value&&_.remove(u.value)}),fe.prerender||oe({script:y(()=>D.value)});const A=y(()=>{var t;return((t=p.value)==null?void 0:t.html.replace(/.*src="([^"]*)".*/,"$1").replace(/&amp;/g,"&"))||`https://player.vimeo.com/video/${Q.value}`});try{const t=ue("https://vimeo.com/api/oembed.json",{url:n.url,width:1920,height:1080,...x.value}),i=([a,v]=U(()=>fetch(t)),a=await a,v(),a);p.value=([a,v]=U(()=>i.json()),a=await a,v(),a)}catch(t){console.error(t),$.value=!0,w.value=A.value}G(()=>p.value,t=>{t&&n.autoplay&&S()}),G(()=>h.value,()=>{P.value=!1});function S(){g.value=!0,w.value=A.value,D.value=[ve()],$.value&&d.value&&(d.value.src=String(d.value.src))}function E(t){t===c.PLAYING?f.value=!0:(t===c.ENDED||t===c.PAUSE)&&(f.value=!1),C("playing",f.value)}async function K(t){const i=t.target;!(i!=null&&i.src)||!D.value.length||(await z(),d.value&&(u.value=ie(await _.createPlayer(d.value)),u.value.on("playing",()=>E(c.PLAYING)),u.value.on("pause",()=>E(c.PAUSE)),u.value.on("ended",()=>E(c.ENDED)),await u.value.ready(),_.play(u.value),g.value=!1,h.value=!0,C("ready",{iframe:u.value.element,player:u.value})))}return(t,i)=>(k(),M("div",{class:ne({ready:h.value,playing:f.value,"iframe-mode":$.value})},[o(t.$slots,"background",B(N({playing:f.value,videoData:p.value})),void 0,!0),l("div",me,[o(t.$slots,"beforePlayer",{},void 0,!0),(k(),M("iframe",{ref_key:"playerEl",ref:d,key:w.value,inert:P.value,title:I.value,src:w.value,allow:"autoplay; fullscreen; picture-in-picture",onLoad:K},null,40,ye)),Y(ee,{"aria-label":"Play Video",onClick:S},{default:m(()=>[Y(se,T({class:"poster"},J.value,{title:I.value}),null,16,["title"]),g.value?o(t.$slots,"loading-spinner",{key:0},void 0,!0):j("",!0),!h.value&&!g.value?o(t.$slots,"play",{key:1},void 0,!0):j("",!0)]),_:3}),o(t.$slots,"afterPlayer",{},void 0,!0)]),o(t.$slots,"default",B(N({playing:f.value,videoData:p.value})),void 0,!0)],2))}}),ge=V(he,[["__scopeId","data-v-ea2c9c86"]]),we=R({__name:"BoosterVimeo",props:O,setup(s){return(e,a)=>(k(),pe(ge,T({class:"nuxt-booster-vimeo"},e.$props),{beforePlayer:m(()=>[o(e.$slots,"beforePlayer",{},void 0,!0)]),"loading-spinner":m(()=>[o(e.$slots,"loading-spinner",{},()=>[a[0]||(a[0]=l("div",{class:"loading-spinner"},[l("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",stroke:"#fff"},[l("g",{fill:"none","fill-rule":"evenodd"},[l("g",{transform:"translate(1 1)","stroke-width":"2"},[l("circle",{"stroke-opacity":".5",cx:"18",cy:"18",r:"18"}),l("path",{d:"M36 18c0-9.94-8.06-18-18-18"},[l("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})])])])])],-1))],!0)]),play:m(()=>[o(e.$slots,"play",{},()=>[a[1]||(a[1]=l("div",{class:"play"},[l("span",null,[l("svg",{viewBox:"0 0 20 20",preserveAspectRatio:"xMidYMid",focusable:"false"},[l("polygon",{class:"fill",points:"1,0 20,10 1,20"})])])],-1))],!0)]),default:m(v=>[o(e.$slots,"default",B(N(v)),void 0,!0)]),afterPlayer:m(()=>[o(e.$slots,"afterPlayer",{},void 0,!0)]),_:3},16))}}),ke=V(we,[["__scopeId","data-v-44e7172c"]]);export{ke as D};
