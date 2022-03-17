__NUXT_JSONP__("/usage", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA){return {data:[{document:{slug:"usage",description:"",title:"Usage",position:13,category:"Guide",importComponents:["Ensures that components are initialized only when needed in the visible viewport.","Optimizes initialization of critical components on initial page load (critical components are initially in the visible viewport)."],developmentSandboxUrl:"https:\u002F\u002Fcodesandbox.io\u002Fembed\u002Fgithub\u002FGrabarzUndPartner\u002Fnuxt-speedkit-example\u002Ftree\u002Fmain\u002F?hidenavigation=1&theme=dark",toc:[{id:T,depth:q,text:U},{id:V,depth:q,text:W},{id:X,depth:q,text:Y},{id:Z,depth:q,text:_},{id:$,depth:q,text:aa}],body:{type:"root",children:[{type:b,tag:j,props:{},children:[{type:a,value:"The following tools are provided to optimize your webpage:"}]},{type:a,value:e},{type:b,tag:r,props:{id:T},children:[{type:b,tag:n,props:{href:"#critical-prop-for-critical-components",ariaHidden:o,tabIndex:s},children:[{type:b,tag:c,props:{className:[t,u]},children:[]}]},{type:a,value:U}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"A critical component is visible in the viewport when the web page is initially loaded. This can be communicated to the automated background process via a critical prop. The flag is passed on to all child components. This means that only the main component (organism) must be provided with it. With the help of this flag, the corresponding static resources (images & fonts) are also declared as preload tags in the page head. All other components and their associated resources, that do not have a positive critical prop, are lazy loaded on demand."}]},{type:a,value:e},{type:b,tag:z,props:{className:[A]},children:[{type:b,tag:B,props:{className:[C,I]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:a,value:"component"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,ab]},children:[{type:a,value:":critical"}]},{type:b,tag:c,props:{className:[d,ac]},children:[{type:b,tag:c,props:{className:[d,f,ad]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:D}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:D}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:af}]}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:w,props:{type:J},children:[{type:a,value:"\nIn the current version, the critical flag must be set manually on the components. Automation would be conceivable in the future. However, according to current knowledge, this would have a massive impact on deployment times when using Puppeteer or similar tools. We are still collecting ideas here. If you know of a more efficient way, please send us a feature request.\n"}]},{type:a,value:e},{type:b,tag:r,props:{id:V},children:[{type:b,tag:n,props:{href:"#font-declaration",ariaHidden:o,tabIndex:s},children:[{type:b,tag:c,props:{className:[t,u]},children:[]}]},{type:a,value:W}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"The integration of fonts is component-based directly in the Vue template. All fonts, which have been declared in "},{type:b,tag:h,props:{},children:[{type:a,value:ag}]},{type:a,value:", can be assigned directly to the corresponding HTML element or component. In addition, subselectors and media queries can be defined, which enable viewport-based declarations or rich-text declarations.\nThe cool thing about this is that it saves the additional declaration in the CSS. You no longer have to keep the template and the CSS with its corresponding selectors for fonts in sync. Yeah! This is extremely helpful, especially when it comes to theming."}]},{type:a,value:e},{type:b,tag:z,props:{className:[A]},children:[{type:b,tag:B,props:{className:[C,I]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:a,value:b}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,ab]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,ac]},children:[{type:b,tag:c,props:{className:[d,f,ad]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:D}]},{type:a,value:"$fonts.getFont(…)"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:D}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:af}]}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:b,tag:m,props:{to:"\u002Fdirectives\u002Fv-font"},children:[{type:a,value:"Learn more"}]},{type:a,value:" about directive "},{type:b,tag:h,props:{},children:[{type:a,value:ah}]},{type:a,value:E}]},{type:a,value:e},{type:b,tag:w,props:{type:ai},children:[{type:a,value:"\nFonts are no longer explicitly defined via CSS, otherwise the loading behavior of the fonts cannot be controlled and an optimized loading behavior of the page can no longer be guaranteed.\n"}]},{type:a,value:e},{type:b,tag:r,props:{id:X},children:[{type:b,tag:n,props:{href:"#import-components",ariaHidden:o,tabIndex:s},children:[{type:b,tag:c,props:{className:[t,u]},children:[]}]},{type:a,value:Y}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"Until now, components were imported either statically ("},{type:b,tag:h,props:{},children:[{type:a,value:"import component from '@\u002Fcomponent';"}]},{type:a,value:") or dynamically ("},{type:b,tag:h,props:{},children:[{type:a,value:"import('@\u002Fcomponent')"}]},{type:a,value:"). However, with these two variants, hydration cannot be controlled. As a result, all components are also initialized on initial load. "},{type:b,tag:h,props:{},children:[{type:a,value:aj}]},{type:a,value:" offers a corresponding loader for this feature request. Each async component import should be enclosed with this loader in a page or layout."}]},{type:a,value:e},{type:b,tag:"list",props:{type:"success",":items":"importComponents"},children:[{type:a,value:e}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"In the background, the module by "},{type:b,tag:n,props:{href:"https:\u002F\u002Fgithub.com\u002Fmaoberlehner\u002Fvue-lazy-hydration",rel:[ak,al,am],target:an},children:[{type:a,value:"Markus Oberlehner"}]},{type:a,value:" is used in a standardised way."}]},{type:a,value:e},{type:b,tag:z,props:{className:[A]},children:[{type:b,tag:B,props:{className:[C,"language-js"]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,k,l]},children:[{type:a,value:K}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,ao]},children:[{type:a,value:ap}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k,l]},children:[{type:a,value:aq}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:"'nuxt-speedkit\u002Fhydrate'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ar}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,k,l]},children:[{type:a,value:at}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k,l]},children:[{type:a,value:au}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:F}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,M,N]},children:[{type:a,value:av}]},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:O}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:F}]},{type:a,value:aw},{type:b,tag:c,props:{className:[d,M,N]},children:[{type:a,value:"Stage"}]},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:O}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"function"]},children:[{type:a,value:ap}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:Q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"arrow",G]},children:[{type:a,value:"=\u003E"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k,l]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:"'@\u002Fcomponents\u002Forganisms\u002FStage'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:","}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:H}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ar}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"Whether a component is in the viewport or not is determined in the background by the intersection observer. If the initialisation is to take place earlier, e.g. when scrolling, this can be adjusted accordingly via the "},{type:b,tag:h,props:{},children:[{type:a,value:"rootMargin"}]},{type:a,value:" option in the "},{type:b,tag:m,props:{to:"\u002Foptions#lazyoffset"},children:[{type:a,value:ag}]},{type:a,value:E}]},{type:a,value:e},{type:b,tag:w,props:{type:ai},children:[{type:a,value:"\nAlthough the "},{type:b,tag:h,props:{},children:[{type:a,value:"nuxt-speedkit\u002Fhydrate"}]},{type:a,value:" function can be used in any component, we recommend its explicit use only in pages and layout. Its use within components can be useful only in explicit special cases.  Here we recommend the general use of static imports.\n"}]},{type:a,value:e},{type:b,tag:w,props:{type:J},children:[{type:a,value:"\nWith "},{type:b,tag:h,props:{},children:[{type:a,value:"NODE-ENV (development)"}]},{type:a,value:", the components are included directly. "},{type:b,tag:"br",props:{},children:[]},{type:a,value:"This is relevant for the hot reload of the imported vue files.\n"}]},{type:a,value:e},{type:b,tag:r,props:{id:Z},children:[{type:b,tag:n,props:{href:"#speedkit-components",ariaHidden:o,tabIndex:s},children:[{type:b,tag:c,props:{className:[t,u]},children:[]}]},{type:a,value:_}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"In order to be able to load further static resources such as pictures, iFrames or Vimeo\u002FYoutube videos in the iFrame in a performance-optimised way, we provide the following components. The speedkit components can be imported via the namespace "},{type:b,tag:h,props:{},children:[{type:a,value:"nuxt-speedkit\u002Fcomponents"}]},{type:a,value:E}]},{type:a,value:e},{type:b,tag:"ul",props:{},children:[{type:a,value:e},{type:b,tag:p,props:{},children:[{type:b,tag:m,props:{to:"\u002Fcomponents\u002Fspeedkit-layer"},children:[{type:a,value:"SpeedkitLayer"}]}]},{type:a,value:e},{type:b,tag:p,props:{},children:[{type:b,tag:m,props:{to:"\u002Fcomponents\u002Fspeedkit-picture"},children:[{type:a,value:R}]}]},{type:a,value:e},{type:b,tag:p,props:{},children:[{type:b,tag:m,props:{to:"\u002Fcomponents\u002Fspeedkit-image"},children:[{type:a,value:"SpeedkitImage"}]}]},{type:a,value:e},{type:b,tag:p,props:{},children:[{type:b,tag:m,props:{to:"\u002Fcomponents\u002Fspeedkit-iframe"},children:[{type:a,value:"SpeedkitIframe"}]}]},{type:a,value:e},{type:b,tag:p,props:{},children:[{type:b,tag:m,props:{to:"\u002Fcomponents\u002Fspeedkit-vimeo"},children:[{type:a,value:"SpeedkitVimeo"}]}]},{type:a,value:e},{type:b,tag:p,props:{},children:[{type:b,tag:m,props:{to:"\u002Fcomponents\u002Fspeedkit-youtube"},children:[{type:a,value:"SpeedkitYoutube"}]}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:z,props:{className:[A]},children:[{type:b,tag:B,props:{className:[C,I]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:a,value:ax}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:a,value:"speedkit-picture"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ay}]},{type:a,value:ax}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:a,value:S}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]}]},{type:b,tag:c,props:{className:[d,S]},children:[{type:b,tag:c,props:{className:[d,"language-javascript"]},children:[{type:a,value:e},{type:b,tag:c,props:{className:[d,k,l]},children:[{type:a,value:K}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,ao]},children:[{type:b,tag:c,props:{className:[d,az]},children:[{type:a,value:R}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k,l]},children:[{type:a,value:aq}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:"'nuxt-speedkit\u002Fcomponents\u002FSpeedkitPicture'"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,k,l]},children:[{type:a,value:at}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k,l]},children:[{type:a,value:au}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:F}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,M,N]},children:[{type:a,value:av}]},{type:b,tag:c,props:{className:[d,G]},children:[{type:a,value:O}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:F}]},{type:a,value:aw},{type:b,tag:c,props:{className:[d,az]},children:[{type:a,value:R}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:H}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:H}]},{type:a,value:e}]}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,i]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ay}]},{type:a,value:S}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:y}]}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:w,props:{type:J},children:[{type:a,value:"\nThe speedkit components will be expanded in the future. If you have explicit wishes, please send us a feature request or directly a pull request with the corresponding feature :)\n"}]},{type:a,value:e},{type:b,tag:r,props:{id:$},children:[{type:b,tag:n,props:{href:"#example",ariaHidden:o,tabIndex:s},children:[{type:b,tag:c,props:{className:[t,u]},children:[]}]},{type:a,value:aa}]},{type:a,value:e},{type:b,tag:j,props:{},children:[{type:a,value:"You can check out a sample integration of "},{type:b,tag:h,props:{},children:[{type:a,value:aj}]},{type:a,value:" at "},{type:b,tag:n,props:{href:"https:\u002F\u002Fgithub.com\u002FGrabarzUndPartner\u002Fnuxt-custom-speedkit",rel:[ak,al,am],target:an},children:[{type:a,value:"Nuxt Speedkit Example"}]},{type:a,value:E}]},{type:a,value:e},{type:b,tag:"code-sandbox",props:{":src":"developmentSandboxUrl"},children:[{type:a,value:e}]}]},dir:"\u002Fen",path:"\u002Fen\u002Fusage",extension:".md",createdAt:aA,updatedAt:aA,to:"\u002Fusage"},prev:{title:"Options",path:"\u002Fen\u002Foptions",to:"\u002Foptions"},next:{title:"Caveats",path:"\u002Fen\u002Fcaveats",to:"\u002Fcaveats"}}],fetch:{},mutations:[]}}("text","element","span","token","\n","punctuation"," ","code","tag","p","keyword","module","nuxt-link","a","true","li",2,"h2",-1,"icon","icon-link","\u003C","alert","\n  ","\u003E","div","nuxt-content-highlight","pre","line-numbers","\"",".","{","operator","}","language-html","info","import","string","literal-property","property",":","(",")","SpeedkitPicture","script","critical-prop-for-critical-components","Critical prop for critical components","font-declaration","Font declaration","import-components","Import components","speedkit-components","Speedkit Components","example","Example","attr-name","attr-value","attr-equals","=","\u002F\u003E","nuxt.config","v-font","warning","nuxt-speedkit","nofollow","noopener","noreferrer","_blank","imports","speedkitHydrate","from",";","\n\n","export","default","components","\n    ","template","\u003C\u002F","maybe-class-name","2022-03-17T11:13:24.785Z")));