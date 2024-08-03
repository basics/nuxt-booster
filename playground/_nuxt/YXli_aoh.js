const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./xgwktkNf.js","./w4FyWwUJ.js","./entry.5pszGEje.css"])))=>i.map(i=>d[i]);
var I=Object.defineProperty;var V=(t,e,a)=>e in t?I(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a;var y=(t,e,a)=>V(t,typeof e!="symbol"?e+"":e,a);import{D as $,_ as T,a as A}from"./w4FyWwUJ.js";import{u as L}from"./e4rU61uN.js";import{u as M}from"./B1f6QcLv.js";import{D as j}from"./Cz4ElJc-.js";import{_ as O}from"./DqedYbJ0.js";import{_ as b,r as c,C as g,ac as R,P as _,o as m,c as w,A as o,n as f,g as v,a as r,b as P,w as p,m as S,x as D,i as N,l as z,u as E,p as q,e as Q}from"./xgwktkNf.js";const k=new $,F=()=>({key:"vimeo",src:"https://player.vimeo.com/api/player.js",async:!0,defer:!0,onload:()=>{k.resolve(window.Vimeo)}}),B=()=>k.promise;class H{constructor(){y(this,"api");y(this,"players",[])}play(e){return this.pausePlayers(e),e.play()}pausePlayers(e){return Promise.all(this.players.filter(a=>!e||e&&a!==e).map(async a=>{!await a.getPaused()&&a.pause()}))}async createPlayer(...e){this.api=await B();const a=new this.api.Player(...e);return a.on("playing",()=>this.pausePlayers(a)),this.add(a),a}add(e){this.players.push(e)}remove(e){this.players=this.players.filter(a=>a!==e),e.destroy()}}var U={};const h=new H,Y={components:{BoosterPicture:O,DefaultButton:j},props:{autoplay:{type:Boolean,default:!1},mute:{type:Boolean,default:void 0},url:{type:String,required:!0},title:{type:String,required:!1,default:null},options:{type:Object,default(){return{}}},posterSources:{type:Array,default(){return[{src:void 0,media:"all",sizes:{default:"100vw"}}]}}},emits:["playing","ready"],async setup(t){M();const e=c([]);U.prerender||L({script:g(()=>e.value)});const{withQuery:a}=await T(async()=>{const{withQuery:l}=await import("./xgwktkNf.js").then(u=>u.al);return{withQuery:l}},__vite__mapDeps([0,1,2]),import.meta.url),s=c(null),i=c(!1),n=c(null),d=g(()=>{var l;return((l=s.value)==null?void 0:l.html.replace(/.*src="([^"]*)".*/,"$1").replace(/&amp;/g,"&"))||`https://player.vimeo.com/video/${t.videoId}`});try{const l=a("https://vimeo.com/api/oembed.json",{url:t.url,width:1920,height:1080,...t.playerOptions}),u=await fetch(l);s.value=await u.json()}catch(l){console.error(l),i.value=!0,n.value=d.value}return{playerSrc:d,videoId:new URL(t.url).pathname.replace("/",""),iframeMode:i,src:n,script:e,videoData:s}},data(){return{inert:!1,player:null,ready:!1,loading:!1,playing:!1,isTouchDevice:A()}},computed:{playerTitle(){return this.title||this.videoData&&this.videoData.title},playerOptions(){return{dnt:!0,autopause:!1,...this.options,playsinline:!0,autoplay:this.autoplay,muted:this.isTouchDevice||this.mute}},pictureDataset(){return{formats:this.$booster.targetFormats,title:this.title,sources:this.posterSources.map(t=>{var e,a;return{...t,src:t.src||((a=(e=this.videoData)==null?void 0:e.thumbnail_url)==null?void 0:a.replace("https://i.vimeocdn.com","vimeo"))}})}}},watch:{videoData(t){t&&this.autoplay&&this.onInit()},ready(){this.inert=!1}},mounted(){this.inert=!0},unmounted(){this.player&&h.remove(this.player)},methods:{onInit(){this.loading=!0,this.src=this.playerSrc,this.script=[F()],this.iframeMode&&(this.$refs.player.src=String(this.$refs.player.src))},onPlayerStateChange(t){t.playing?this.playing=!0:(t.ended||t.pause)&&(this.playing=!1),this.$emit("playing",this.playing)},async onLoad(t){!t.target.src||!this.script.length||(await B(),this.player=R(await h.createPlayer(this.$refs.player)),this.player.on("playing",()=>this.onPlayerStateChange({playing:!0})),this.player.on("pause",()=>this.onPlayerStateChange({pause:!0})),this.player.on("ended",()=>this.onPlayerStateChange({ended:!0})),await this.player.ready(),h.play(this.player),this.loading=!1,this.ready=!0,this.$emit("ready",{iframe:this.player.element,player:this.player}))}}},x={class:"player"},G=["inert","title","src"];function J(t,e,a,s,i,n){const d=_("booster-picture"),l=_("default-button");return m(),w("div",{class:N({ready:i.ready,playing:i.playing,"iframe-mode":s.iframeMode})},[o(t.$slots,"background",f(v({playing:i.playing,videoData:s.videoData})),void 0,!0),r("div",x,[o(t.$slots,"beforePlayer",{},void 0,!0),(m(),w("iframe",{ref:"player",key:s.src,inert:i.inert,title:n.playerTitle,src:s.src,allow:"autoplay; fullscreen; picture-in-picture",onLoad:e[0]||(e[0]=(...u)=>n.onLoad&&n.onLoad(...u))},null,40,G)),P(l,{"aria-label":"Play Video",onClick:n.onInit},{default:p(()=>[P(d,S({class:"poster"},n.pictureDataset,{title:n.playerTitle}),null,16,["title"]),i.loading?o(t.$slots,"loading-spinner",{key:0},void 0,!0):D("",!0),!i.ready&&!i.loading?o(t.$slots,"play",{key:1},void 0,!0):D("",!0)]),_:3},8,["onClick"]),o(t.$slots,"afterPlayer",{},void 0,!0)]),o(t.$slots,"default",f(v({playing:i.playing,videoData:s.videoData})),void 0,!0)],2)}const K=b(Y,[["render",J],["__scopeId","data-v-2224c6c4"]]),C=t=>(q("data-v-3e24882c"),t=t(),Q(),t),W=C(()=>r("div",{class:"loading-spinner"},[r("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",stroke:"#fff"},[r("g",{fill:"none","fill-rule":"evenodd"},[r("g",{transform:"translate(1 1)","stroke-width":"2"},[r("circle",{"stroke-opacity":".5",cx:"18",cy:"18",r:"18"}),r("path",{d:"M36 18c0-9.94-8.06-18-18-18"},[r("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})])])])])],-1)),X=C(()=>r("div",{class:"play"},[r("span",null,[r("svg",{viewBox:"0 0 20 20",preserveAspectRatio:"xMidYMid",focusable:"false"},[r("polygon",{class:"fill",points:"1,0 20,10 1,20"})])])],-1)),Z=Object.assign({inheritAttrs:!1},{__name:"BoosterVimeo",setup(t){return(e,a)=>(m(),z(E(K),S({class:"nuxt-booster-vimeo"},e.$attrs),{beforePlayer:p(()=>[o(e.$slots,"beforePlayer",{},void 0,!0)]),"loading-spinner":p(()=>[o(e.$slots,"loading-spinner",{},()=>[W],!0)]),play:p(()=>[o(e.$slots,"play",{},()=>[X],!0)]),default:p(s=>[o(e.$slots,"default",f(v(s)),void 0,!0)]),afterPlayer:p(()=>[o(e.$slots,"afterPlayer",{},void 0,!0)]),_:3},16))}}),le=b(Z,[["__scopeId","data-v-3e24882c"]]);export{le as D};
