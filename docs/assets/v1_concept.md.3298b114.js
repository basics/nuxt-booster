import{_ as o,o as i,c as a,k as e,a as s,t as n,Q as r}from"./chunks/framework.2d8af806.js";const b=JSON.parse('{"title":"Concept","description":"","frontmatter":{"title":"Concept"},"headers":[],"relativePath":"v1/concept.md","filePath":"v1/concept.md"}'),c={name:"v1/concept.md"},d={id:"frontmatter-title",tabindex:"-1"},l=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{$frontmatter.title}}"'},"​",-1),h=r('<p><code>nuxt-speedkit</code> is used to increase the initial loading performance of the website.<br> For this purpose, various tools are provided that optimise the loading and initialisation of resources (<code>images</code>, <code>fonts</code>) and components automatically and on demand.</p><p>This has the following impact:</p><p type="success"><strong>1. Reduced initial download of the web page</strong> ::list</p><ul><li>only the critical viewport resources will be loaded</li><li>all other resources will be loaded on demand, e.g. when scrolling. ::</li></ul><p><strong>2. Reduction of timing metrics</strong></p><ul><li>FCP</li><li>TTI</li><li>TBT</li></ul><p>The module recognises the critical resources (<code>images</code>, <code>fonts</code>, <code>javascript</code>) for the initial load and preloads them when the page is called up directly. However, if an impairment of the UX is detected during the initialisation phase due to the following factors:</p><ul><li>no Javascript enabled</li><li>reduced bandwidth</li><li>weak hardware</li><li>unsupported browser</li></ul><p>the further initialisation process is paused and the user is given the decision whether to load the website completely (incl. Javascript) or to have only the static content (<code>HTML</code>, <code>CSS</code>, <code>images</code> and <code>fonts</code>) displayed. Through this loading behaviour, a correspondingly high performance score can be achieved even with a low bandwidth, as specified by the lighthouse test, for example. For the user, on the other hand, it becomes transparent why there may be delays in the display of complex components or static resources in the further course of the website visit.</p><p>For this reason, this module can only be used with NuxtJS, as this requires static HTML in order to continue to display the full content to the user despite uninitialised Javascript.</p>',10);function p(t,u,m,f,_,g){return i(),a("div",null,[e("h1",d,[s(n(t.$frontmatter.title)+" ",1),l]),h])}const v=o(c,[["render",p]]);export{b as __pageData,v as default};
