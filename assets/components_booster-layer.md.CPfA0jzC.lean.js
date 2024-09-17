import{_ as p,B as k,c as r,j as s,a as e,t as o,U as l,G as t,w as n,o as d}from"./chunks/framework.Dm77tz8r.js";const D=JSON.parse('{"title":"BoosterLayer","description":"","frontmatter":{"title":"BoosterLayer"},"headers":[],"relativePath":"components/booster-layer.md","filePath":"components/booster-layer.md"}'),E={name:"components/booster-layer.md"},g={id:"frontmatter-title",tabindex:"-1"},u={tabindex:"0"},y={tabindex:"0"};function c(h,i,b,m,F,f){const a=k("nobr");return d(),r("div",null,[s("h1",g,[e(o(h.$frontmatter.title)+" ",1),i[0]||(i[0]=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{$frontmatter.title}}"'},"​",-1))]),i[17]||(i[17]=l('<p>If the BoosterLayer is implemented, the javascript initialisation is automatically monitored. If one of the events</p><ul><li>✅ reduced bandwidth</li><li>✅ weak hardware</li><li>✅ unsupported browser</li></ul><p>occurs, the process is paused and only continued or cancelled after a user interaction in the layer.</p><p>The layer is placed once in the layout (e.g. <code>layouts/default.vue</code>). The included BoosterLayer serves as a wrapper and must be filled according to the <a href="/nuxt-booster/components/booster-layer.html#template">template</a>, see <a href="https://github.com/basics/nuxt-booster/blob/main/example/components/InfoLayer.vue" target="_blank" rel="noreferrer">example component</a>.</p><p>The content contains messages and buttons that are displayed in the respective event. Messages and buttons are defined with an <code>id</code>, these are set to <code>display: none;</code> by default via CSS.</p><ul><li>e.g. <code>nuxt-booster-message-unsupported-browser</code> for message</li><li>e.g. <code>nuxt-booster-button-init-app</code> for button</li></ul><div class="info custom-block"><p class="custom-block-title">INFO</p><p>For the closing mechanism of the layer, see <a href="/nuxt-booster/components/booster-layer.html#hide-layer">Hide Layer</a>.</p></div><h2 id="messages" tabindex="-1">Messages <a class="header-anchor" href="#messages" aria-label="Permalink to &quot;Messages&quot;">​</a></h2><p>The messages are elements that are displayed for the relevant events.</p><p>Initially, all IDs are set to <code>display: none;</code>, so no message is visible.<br> When an event is triggered, the relevant message is displayed via the ID using the style attribute <code>display: block;</code>.</p>',10)),s("table",u,[i[9]||(i[9]=s("thead",null,[s("tr",null,[s("th",null,"ID"),s("th",null,"Description")])],-1)),s("tbody",null,[s("tr",null,[s("td",null,[t(a,null,{default:n(()=>i[1]||(i[1]=[s("code",null,"nuxt-booster-message-nojs",-1)])),_:1})]),i[2]||(i[2]=s("td",null,"Javascript is disabled.",-1))]),s("tr",null,[s("td",null,[t(a,null,{default:n(()=>i[3]||(i[3]=[s("code",null,"nuxt-booster-message-reduced-bandwidth",-1)])),_:1})]),i[4]||(i[4]=s("td",null,"Connection bandwidth is too low.",-1))]),s("tr",null,[s("td",null,[t(a,null,{default:n(()=>i[5]||(i[5]=[s("code",null,"nuxt-booster-message-weak-hardware",-1)])),_:1})]),i[6]||(i[6]=s("td",null,"User hardware are not sufficient.",-1))]),s("tr",null,[s("td",null,[t(a,null,{default:n(()=>i[7]||(i[7]=[s("code",null,"nuxt-booster-message-unsupported-browser",-1)])),_:1})]),i[8]||(i[8]=s("td",null,[e("User Browser is not supported by "),s("a",{href:"/nuxt-booster/guide/options.html#browsersupport"},[s("code",null,"Browserslist")]),e(".")],-1))])])]),i[18]||(i[18]=l(`<p><strong>Example</strong></p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- initial --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;nuxt-booster-message-unsupported-browser&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Your browser is not supported!</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- active --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;nuxt-booster-message-unsupported-browser&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;display: block;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Your browser is not supported!</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="buttons" tabindex="-1">Buttons <a class="header-anchor" href="#buttons" aria-label="Permalink to &quot;Buttons&quot;">​</a></h2><p>The buttons are interaction elements for the user with which he can make his choice at the relevant event.</p><p>Initially, all IDs except for <code>nuxt-booster-button-nojs</code> are set to <code>display: none;</code>. When an event is triggered, the relevant button is displayed via the ID using the style attribute <code>display: block;</code>.</p>`,5)),s("table",y,[i[16]||(i[16]=s("thead",null,[s("tr",null,[s("th",null,"Selector"),s("th",null,"Description")])],-1)),s("tbody",null,[s("tr",null,[s("td",null,[t(a,null,{default:n(()=>i[10]||(i[10]=[s("code",null,".nuxt-booster-button-init-nojs",-1)])),_:1})]),i[11]||(i[11]=s("td",null,[e("Visible when javascript is disabled, needed so that the user can hide the layer. Requires the "),s("a",{href:"/nuxt-booster/components/booster-layer.html#hide-layer"},"Hide Layer"),e(" implementation.")],-1))]),s("tr",null,[s("td",null,[t(a,null,{default:n(()=>i[12]||(i[12]=[s("code",null,".nuxt-booster-button-init-reduced-view",-1)])),_:1})]),i[13]||(i[13]=s("td",null,"Is used to offer the user the possibility to visit the page only with activated fonts and images. Other initialisations of the Javascript are prevented.",-1))]),s("tr",null,[s("td",null,[t(a,null,{default:n(()=>i[14]||(i[14]=[s("code",null,".nuxt-booster-button-init-app",-1)])),_:1})]),i[15]||(i[15]=s("td",null,"Activates all features. The initialisation of the JavaScript is started, images are loaded.",-1))])])]),i[19]||(i[19]=l(`<div class="info custom-block"><p class="custom-block-title">INFO</p><p>It is recommended to register an <strong>Inline Click-Event</strong> for the buttons <code>.nuxt-booster-button-init-reduced-view</code> and <code>.nuxt-booster-button-init-app</code>.<br><br>More information under <a href="/nuxt-booster/components/booster-layer.html#force-app-initialization">Force App initialization</a></p></div><h2 id="hide-layer" tabindex="-1">Hide Layer <a class="header-anchor" href="#hide-layer" aria-label="Permalink to &quot;Hide Layer&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">label</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;nuxt-booster-layer-close&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  Close Layer</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>The layer can be closed via a <code>for</code> attribute with the <code>id</code> <code>nuxt-booster-layer-close</code>.</p><ul><li>✅ Closing mechanics does not require javascript.</li></ul><h2 id="template" tabindex="-1">Template <a class="header-anchor" href="#template" aria-label="Permalink to &quot;Template&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">booster-layer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Sorry, but you will have a limited user experience due to a…&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ul</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;padding: 0; list-style: none;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      &lt;!-- Displayed when javascript is disabled. --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;nuxt-booster-message-nojs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        disabled javascript</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      &lt;!-- Displayed when browser does not support. --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;nuxt-booster-message-unsupported-browser&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        outdated browser</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      &lt;!-- Displayed when connection bandwidth is too low. --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;nuxt-booster-message-reduced-bandwidth&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        reduced-bandwidth</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      &lt;!-- Displayed when user hardware are not sufficient.  --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;nuxt-booster-message-weak-hardware&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        weak hardware</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      &lt;!-- Displayed when the user batteries are not sufficient.  --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;nuxt-booster-message-low-battery&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        low battery</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">ul</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    &lt;!-- Button to hide the layer with no javascript --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;nuxt-booster-button-init-nojs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">label</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;nuxt-booster-layer-close&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Apply without js</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    &lt;!-- Button for use without javascript and with fonts --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;nuxt-booster-button-init-reduced-view&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">label</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;nuxt-booster-layer-close&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        Apply without scripts</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    &lt;!-- Button for activate javascript by bad connection or browser support --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;nuxt-booster-button-init-app&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      Apply with all Features</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">booster-layer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="force-app-initialization" tabindex="-1">Force App initialization <a class="header-anchor" href="#force-app-initialization" aria-label="Permalink to &quot;Force App initialization&quot;">​</a></h2><p>Set the global variable <code>__NUXT_BOOSTER_AUTO_INIT__</code> to <code>true</code> to force the initialization of the app.</p><table tabindex="0"><thead><tr><th>Variable</th><th>Type</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code>__NUXT_BOOSTER_AUTO_INIT__</code></td><td><code>Boolean</code></td><td>If set, initialisation continues after the javascript has been fully loaded.</td><td><code>false</code></td></tr></tbody></table>`,10))])}const A=p(E,[["render",c]]);export{D as __pageData,A as default};
