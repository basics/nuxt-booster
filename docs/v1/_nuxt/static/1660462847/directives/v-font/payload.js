__NUXT_JSONP__("/directives/v-font", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a_,a$,ba,bb,bc,bd,be,bf,bg,bh,bi,bj,bk,bl,bm,bn,bo){return {data:[{document:{slug:q,description:"",title:q,position:20,category:"Directives",solutions:["don't use WebFonts that have to be loaded","use another optimized font","reduce the number of used fonts","embed the fonts via Base64"],toc:[{id:av,depth:U,text:aw},{id:ax,depth:U,text:ab},{id:ay,depth:U,text:F},{id:V,depth:W,text:V},{id:az,depth:U,text:aA},{id:aB,depth:W,text:aC},{id:aD,depth:W,text:aE},{id:aF,depth:U,text:aG},{id:aH,depth:W,text:aI},{id:aJ,depth:W,text:aK}],body:{type:"root",children:[{type:b,tag:m,props:{},children:[{type:a,value:"Fonts are the great mystery on the Internet. For more complex designs it is not uncommon that more than 6 font files have to be loaded. It would be desirable if there were many more variable fonts, but the reality is usually different. Often, developers are forced to register tens of fonts with different font styles. So it can happen that the website needs a total of 12 font files, which have to be loaded initially to achieve the right visual result on the whole page."}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"This is really a performance problem. If you look for solutions, you like to hear"}]},{type:a,value:f},{type:b,tag:"list",props:{":items":"solutions",type:aL},children:[{type:a,value:f}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"In the internet you can find some articles about font loading. But most of them are more than 3 years old. So not much new has happened on that front. A nice and recommendable list of different strategies can be found at "},{type:b,tag:r,props:{href:"https:\u002F\u002Fgithub.com\u002Fzachleat\u002Fweb-font-loading-recipes",rel:[ah,ai,aj],target:ak},children:[{type:a,value:"web-font-loading-recipes"}]},{type:a,value:" or\n"},{type:b,tag:r,props:{href:"https:\u002F\u002Fwww.zachleat.com\u002Fweb\u002Fcomprehensive-webfonts\u002F",rel:[ah,ai,aj],target:ak},children:[{type:a,value:"comprehensive-webfonts"}]},{type:a,value:". From this it can be deduced that there is still no universal solution to the problem. However, it is possible to approach the issue very efficiently by using a preload strategy and setting classes accordingly. However, this does not make the handling of the fonts any easier. On the one hand, the preloads have to be defined per page and on the other hand, the CSS in the respective component has to be activated with the corresponding font declaration per class on demand. This is manageable for smaller projects in a 1 person team. But if several people are working in parallel, it can quickly become a horror trip. This will inevitably lead to the fact that the approach will not be accepted by the team in the long run and the optimization will be optimized out of the project in the long run."}]},{type:a,value:f},{type:b,tag:al,props:{type:aL},children:[{type:a,value:"\nA few words about Google Fonts: If possible, the FontFaces should always be included directly as Woff\u002FWoff2 files via inline style. The loading mechanism via external CSS file, as it is the case with Google Fonts, creates an additional network roundtrip, which delays the loading of the actual font files.\n"}]},{type:a,value:f},{type:b,tag:X,props:{id:av},children:[{type:b,tag:r,props:{href:"#solution",ariaHidden:y,tabIndex:z},children:[{type:b,tag:c,props:{className:[A,B]},children:[]}]},{type:a,value:aw}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"The strategy mentioned above makes sense, but is hardly implementable with the current tools. For this reason, we are introducing Directive "},{type:b,tag:g,props:{},children:[{type:a,value:q}]},{type:a,value:", which takes care of the outlined behavior in a fully automated way and thus represents a truly relevant solution even on larger projects."}]},{type:a,value:f},{type:b,tag:X,props:{id:ax},children:[{type:b,tag:r,props:{href:"#usage",ariaHidden:y,tabIndex:z},children:[{type:b,tag:c,props:{className:[A,B]},children:[]}]},{type:a,value:ab}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"The directive "},{type:b,tag:g,props:{},children:[{type:a,value:q}]},{type:a,value:" is used to integrate the fonts defined in the "},{type:b,tag:E,props:{to:"\u002Foptions#fonts"},children:[{type:a,value:"module options"}]},{type:a,value:" into the website."}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"To do this, the respective font must be retrieved via the "},{type:b,tag:g,props:{},children:[{type:a,value:F}]},{type:a,value:" method contained in the component scope (e.g. "},{type:b,tag:g,props:{},children:[{type:a,value:"this"}]},{type:a,value:am}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"Fonts are specified by "},{type:b,tag:g,props:{},children:[{type:a,value:aM}]},{type:a,value:L},{type:b,tag:g,props:{},children:[{type:a,value:aN}]},{type:a,value:" and "},{type:b,tag:g,props:{},children:[{type:a,value:aO}]},{type:a,value:" and can be limited to elements and viewports via the options ("},{type:b,tag:g,props:{},children:[{type:a,value:M}]},{type:a,value:L},{type:b,tag:g,props:{},children:[{type:a,value:N}]},{type:a,value:am}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"Normally the directive activates the fonts only when the viewport is reached.\nIt is recommended to use the property "},{type:b,tag:g,props:{},children:[{type:a,value:"critical"}]},{type:a,value:" for components that are already initially contained in the viewport."}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"With critical component the fonts are preloaded and are initially active.\nMore information on critical components can be found "},{type:b,tag:E,props:{to:"\u002Fusage#critical-prop-for-critical-components"},children:[{type:a,value:aP}]},{type:a,value:aQ}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"For multiple fonts, a list ("},{type:b,tag:g,props:{},children:[{type:a,value:"Array"}]},{type:a,value:") can be passed."}]},{type:a,value:f},{type:b,tag:n,props:{className:[G]},children:[{type:b,tag:H,props:{className:[I,O]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,P]},children:[{type:a,value:"\u003C!-- single definition --\u003E"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:aR}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:b,tag:c,props:{className:[d,e,w]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:aS},{type:b,tag:c,props:{className:[d,P]},children:[{type:a,value:"\u003C!-- multiple definitions --\u003E"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:aR}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:b,tag:c,props:{className:[d,e,w]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"[\n  $getFont(…),\n  $getFont(…)\n]"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:al,props:{type:aT},children:[{type:a,value:"\nCurrently the use of \n"},{type:b,tag:g,props:{},children:[{type:a,value:q}]},{type:a,value:"\n on components or in combination with \n"},{type:b,tag:g,props:{},children:[{type:a,value:"v-html\u002Fv-text"}]},{type:a,value:"\n directives is not possible. Caused is a bug in the Vue SSR, directive is not applied.\n"},{type:b,tag:Z,props:{},children:[]},{type:a,value:f},{type:b,tag:Z,props:{},children:[]},{type:a,value:"\nRead more in the Issue: \n"},{type:b,tag:r,props:{href:"https:\u002F\u002Fgithub.com\u002Fvuejs\u002Fvue\u002Fissues\u002F10733",rel:[ah,ai,aj],target:ak},children:[{type:a,value:"vue-server-renderer: directive not applied to imported component"}]},{type:a,value:"\n.\n"},{type:b,tag:Z,props:{},children:[]},{type:a,value:f},{type:b,tag:Z,props:{},children:[]},{type:a,value:"\nAs long as this error exists, you can look \n"},{type:b,tag:E,props:{to:"\u002Fdirectives\u002Fv-font#workarounds"},children:[{type:b,tag:_,props:{},children:[{type:a,value:aP}]}]},{type:a,value:"\n for workarounds.\n\n"}]},{type:a,value:f},{type:b,tag:X,props:{id:ay},children:[{type:b,tag:r,props:{href:"#getfont",ariaHidden:y,tabIndex:z},children:[{type:b,tag:c,props:{className:[A,B]},children:[]}]},{type:b,tag:g,props:{},children:[{type:a,value:F}]}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:F}]},{type:a,value:" is included as a plugin and can be accessed via any component scope."}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"Is used in the "},{type:b,tag:g,props:{},children:[{type:a,value:q}]},{type:a,value:" directive and creates the relevant font definition."}]},{type:a,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:b,tag:aU,props:{},children:[{type:b,tag:aV,props:{},children:[{type:b,tag:J,props:{},children:[{type:b,tag:C,props:{},children:[{type:a,value:aW}]},{type:b,tag:C,props:{},children:[{type:a,value:aX}]},{type:b,tag:C,props:{},children:[{type:a,value:aY}]},{type:b,tag:C,props:{},children:[{type:a,value:aZ}]},{type:b,tag:C,props:{},children:[{type:a,value:a_}]}]}]},{type:b,tag:a$,props:{},children:[{type:b,tag:J,props:{},children:[{type:b,tag:j,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:aM}]}]},{type:b,tag:j,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:$}]}]},{type:b,tag:j,props:{},children:[{type:a,value:"yes"}]},{type:b,tag:j,props:{},children:[{type:a,value:"Font-Family e.g. "},{type:b,tag:g,props:{},children:[{type:a,value:"Custom Font"}]}]},{type:b,tag:j,props:{},children:[]}]},{type:b,tag:J,props:{},children:[{type:b,tag:j,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:aN}]}]},{type:b,tag:j,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:$}]},{type:a,value:L},{type:b,tag:g,props:{},children:[{type:a,value:"Number"}]}]},{type:b,tag:j,props:{},children:[]},{type:b,tag:j,props:{},children:[{type:a,value:"Font-Style e.g. "},{type:b,tag:g,props:{},children:[{type:a,value:an}]},{type:a,value:L},{type:b,tag:g,props:{},children:[{type:a,value:"italic"}]}]},{type:b,tag:j,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:ao}]}]}]},{type:b,tag:J,props:{},children:[{type:b,tag:j,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:aO}]}]},{type:b,tag:j,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:$}]}]},{type:b,tag:j,props:{},children:[]},{type:b,tag:j,props:{},children:[{type:a,value:"Font-Weight e.g. "},{type:b,tag:g,props:{},children:[{type:a,value:ao}]},{type:a,value:L},{type:b,tag:g,props:{},children:[{type:a,value:an}]}]},{type:b,tag:j,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:an}]}]}]},{type:b,tag:J,props:{},children:[{type:b,tag:j,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:V}]}]},{type:b,tag:j,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"Object"}]}]},{type:b,tag:j,props:{},children:[]},{type:b,tag:j,props:{},children:[{type:a,value:"Media & Selector Options "},{type:b,tag:E,props:{to:"\u002Fdirectives\u002Fv-font#options"},children:[{type:a,value:"see more"}]}]},{type:b,tag:j,props:{},children:[]}]}]}]},{type:a,value:f},{type:b,tag:aa,props:{id:V},children:[{type:b,tag:r,props:{href:"#options",ariaHidden:y,tabIndex:z},children:[{type:b,tag:c,props:{className:[A,B]},children:[]}]},{type:a,value:V}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"Each definition can be modified in its behaviour via the options.\nWith the property "},{type:b,tag:g,props:{},children:[{type:a,value:M}]},{type:a,value:", the call of the font definition can be made dependent on the viewport."},{type:b,tag:Z,props:{},children:[]},{type:a,value:"\nThe property "},{type:b,tag:g,props:{},children:[{type:a,value:N}]},{type:a,value:" can be used to limit the font to elements (e.g. "},{type:b,tag:g,props:{},children:[{type:a,value:c}]},{type:a,value:L},{type:b,tag:g,props:{},children:[{type:a,value:".class"}]},{type:a,value:am}]},{type:a,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:b,tag:aU,props:{},children:[{type:b,tag:aV,props:{},children:[{type:b,tag:J,props:{},children:[{type:b,tag:C,props:{},children:[{type:a,value:aW}]},{type:b,tag:C,props:{},children:[{type:a,value:aX}]},{type:b,tag:C,props:{},children:[{type:a,value:aY}]},{type:b,tag:C,props:{},children:[{type:a,value:aZ}]},{type:b,tag:C,props:{},children:[{type:a,value:a_}]}]}]},{type:b,tag:a$,props:{},children:[{type:b,tag:J,props:{},children:[{type:b,tag:j,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:M}]}]},{type:b,tag:j,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:$}]}]},{type:b,tag:j,props:{},children:[]},{type:b,tag:j,props:{},children:[{type:a,value:"CSS Media Query e.g. "},{type:b,tag:g,props:{},children:[{type:a,value:"(min-width: 768px)"}]}]},{type:b,tag:j,props:{},children:[]}]},{type:b,tag:J,props:{},children:[{type:b,tag:j,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:N}]}]},{type:b,tag:j,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:$}]}]},{type:b,tag:j,props:{},children:[]},{type:b,tag:j,props:{},children:[{type:a,value:"CSS Selector e.g. "},{type:b,tag:g,props:{},children:[{type:a,value:"element, .elm, .elm:before"}]}]},{type:b,tag:j,props:{},children:[]}]}]}]},{type:a,value:f},{type:b,tag:al,props:{type:aT},children:[{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"link"}]},{type:a,value:"\n Tag is not supported orientation media query. e.g. \n"},{type:b,tag:g,props:{},children:[{type:a,value:"(orientation: portrait)"}]},{type:a,value:"\n.\nThis has an effect on prefetches and preloads.\n\n"}]},{type:a,value:f},{type:b,tag:n,props:{className:[G]},children:[{type:b,tag:H,props:{className:[I,ba]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ac}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,Q,R]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:T}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:ap}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,Q,R]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:T}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"'element, .elm, .elm:before'"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ad}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:X,props:{id:az},children:[{type:b,tag:r,props:{href:"#examples",ariaHidden:y,tabIndex:z},children:[{type:b,tag:c,props:{className:[A,B]},children:[]}]},{type:a,value:aA}]},{type:a,value:f},{type:b,tag:aa,props:{id:aB},children:[{type:b,tag:r,props:{href:"#basic-usage",ariaHidden:y,tabIndex:z},children:[{type:b,tag:c,props:{className:[A,B]},children:[]}]},{type:a,value:aC}]},{type:a,value:f},{type:b,tag:n,props:{className:[G]},children:[{type:b,tag:H,props:{className:[I,O]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:bb}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:b,tag:c,props:{className:[d,e,w]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"$getFont("},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:bc}]},{type:a,value:"Font Family"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:bc}]},{type:a,value:", 700)"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:"Headline"},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:bb}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:aa,props:{id:aD},children:[{type:b,tag:r,props:{href:"#advanced-usage",ariaHidden:y,tabIndex:z},children:[{type:b,tag:c,props:{className:[A,B]},children:[]}]},{type:a,value:aE}]},{type:a,value:f},{type:b,tag:n,props:{className:[G]},children:[{type:b,tag:H,props:{className:[I,ba]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"["}]},{type:a,value:"\n  \n  "},{type:b,tag:c,props:{className:[d,P]},children:[{type:a,value:"\u002F\u002F Font wird auf alles angewendet"}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,ae]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"'Font Family A'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:aq},{type:b,tag:c,props:{className:[d,P]},children:[{type:a,value:"\u002F\u002F Font wird auf `b` und `strong` Tags angwendet"}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,ae]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,as]},children:[{type:a,value:bd}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:at}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ac}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,Q,R]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:T}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:be}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:aq},{type:b,tag:c,props:{className:[d,P]},children:[{type:a,value:"\u002F\u002F Font erscheint erst ab Viewport `\u003E768px`"}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,ae]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,as]},children:[{type:a,value:ao}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:at}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ac}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,Q,R]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:T}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:ap}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:aq},{type:b,tag:c,props:{className:[d,P]},children:[{type:a,value:"\u002F\u002F Font wird auf `b` und `strong` Tags angwendet und erscheint erst ab Viewport `\u003E768px`"}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,ae]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,as]},children:[{type:a,value:bd}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:at}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ac}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,Q,R]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:T}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:be}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,Q,R]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:T}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:ap}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ag}]},{type:a,value:aS},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"]"}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:X,props:{id:aF},children:[{type:b,tag:r,props:{href:"#workarounds",ariaHidden:y,tabIndex:z},children:[{type:b,tag:c,props:{className:[A,B]},children:[]}]},{type:a,value:aG}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"Workarounds are used to work around a bug in the Vue SSR, read more in "},{type:b,tag:E,props:{to:"\u002Fdirectives\u002Fv-font#usage"},children:[{type:a,value:ab}]},{type:a,value:aQ}]},{type:a,value:f},{type:b,tag:aa,props:{id:aH},children:[{type:b,tag:r,props:{href:"#use-component",ariaHidden:y,tabIndex:z},children:[{type:b,tag:c,props:{className:[A,B]},children:[]}]},{type:a,value:aI}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:b,tag:_,props:{},children:[{type:b,tag:c,props:{style:bf},children:[{type:a,value:bg}]}]}]},{type:a,value:f},{type:b,tag:n,props:{className:[G]},children:[{type:b,tag:H,props:{className:[I,O]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:E}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:bh}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:b,tag:c,props:{className:[d,e,w]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:bi},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:b,tag:c,props:{className:[d,e,w]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:bj},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:b,tag:_,props:{},children:[{type:b,tag:c,props:{style:bk},children:[{type:a,value:bl}]}]}]},{type:a,value:f},{type:b,tag:n,props:{className:[G]},children:[{type:b,tag:H,props:{className:[I,O]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:E}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:bh}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:b,tag:c,props:{className:[d,e,w]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:bi},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:c}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:b,tag:c,props:{className:[d,e,w]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:bj},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:c}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:aa,props:{id:aJ},children:[{type:b,tag:r,props:{href:"#use-v-htmlv-text",ariaHidden:y,tabIndex:z},children:[{type:b,tag:c,props:{className:[A,B]},children:[]}]},{type:a,value:aK}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:b,tag:_,props:{},children:[{type:b,tag:c,props:{style:bf},children:[{type:a,value:bg}]}]}]},{type:a,value:f},{type:b,tag:n,props:{className:[G]},children:[{type:b,tag:H,props:{className:[I,O]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:n}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:b,tag:c,props:{className:[d,e,w]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:bm}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:b,tag:c,props:{className:[d,e,w]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:bn},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:bo}]}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:b,tag:_,props:{},children:[{type:b,tag:c,props:{style:bk},children:[{type:a,value:bl}]}]}]},{type:a,value:f},{type:b,tag:n,props:{className:[G]},children:[{type:b,tag:H,props:{className:[I,O]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:n}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:b,tag:c,props:{className:[d,e,w]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:n}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:bm}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:b,tag:c,props:{className:[d,e,w]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:bn},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:bo}]}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]}]},{type:a,value:f}]}]}]}]},dir:"\u002Fen\u002Fdirectives",path:"\u002Fen\u002Fdirectives\u002Fv-font",extension:".md",createdAt:"2022-08-14T07:39:43.968Z",updatedAt:"2022-08-14T07:39:43.972Z",to:"\u002Fdirectives\u002Fv-font"},prev:{title:ab,path:"\u002Fen\u002Fusage",to:"\u002Fusage"},next:{title:"SpeedkitLayer",path:"\u002Fen\u002Fcomponents\u002Fspeedkit-layer",to:"\u002Fcomponents\u002Fspeedkit-layer"}}],fetch:{},mutations:[]}}("text","element","span","token","punctuation","\n","code","tag"," ","td","\"","\u003E","p","div","\u003C",",","v-font","a","\n  ","string","attr-name","attr-value","attr-equals","=","true",-1,"icon","icon-link","th","\u003C\u002F","nuxt-link","$getFont","nuxt-content-highlight","pre","line-numbers","tr","template",", ","media","selector","language-html","comment","literal-property","property","operator",":",2,"options",3,"h2","$getFont(…)","br","strong","String","h3","Usage","{","}","function","(",")","nofollow","noopener","noreferrer","_blank","alert",").","normal","400","'(min-width: 768px)'","\n\n  ","'Font Family B'","number","'normal'","\n    ","solution","Solution","usage","getfont","examples","Examples","basic-usage","Basic Usage","advanced-usage","Advanced Usage","workarounds","Workarounds","use-component","Use component","use-v-htmlv-text","Use v-html\u002Fv-text","info","family","weight","style","here",".","node","\n\n","danger","table","thead","Key","Type","Requried","Description","Default","tbody","language-js","h1","'","700","'b, strong'","color: red;","Bad","to","\u002F","Back","color: green;","Good","v-html","…","\u002F\u003E")));