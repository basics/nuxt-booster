import{_ as a,o as n,c as t,k as s,a as o,t as l,R as p}from"./chunks/framework.Q6iRrerD.js";const g=JSON.parse('{"title":"useComponentObserver","description":"","frontmatter":{"title":"useComponentObserver"},"headers":[],"relativePath":"composables/useComponentObserver.md","filePath":"composables/useComponentObserver.md"}'),r={name:"composables/useComponentObserver.md"},c={id:"frontmatter-title",tabindex:"-1"},d=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{$frontmatter.title}}"'},"​",-1),i=p(`<h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><table><thead><tr><th>Property</th><th>Type</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td><code>root</code></td><td><code>HTMLElement</code></td><td><a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#root" target="_blank" rel="noreferrer">MDN <code>root</code></a></td><td><code>undefined</code></td></tr><tr><td><code>rootMargin</code></td><td><code>String</code></td><td><a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootMargin" target="_blank" rel="noreferrer">MDN <code>rootMargin</code></a></td><td><code>&#39;0px&#39;</code></td></tr><tr><td><code>threshold</code></td><td><code>Array</code></td><td><a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#threshold" target="_blank" rel="noreferrer">MDN <code>threshold</code></a></td><td><code>[0]</code></td></tr><tr><td><code>trackVisibility</code></td><td><code>Boolean</code></td><td><a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#trackVisibility" target="_blank" rel="noreferrer">MDN <code>trackVisibility</code></a></td><td><code>false</code></td></tr><tr><td><code>delay</code></td><td><code>Number</code></td><td><a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#delay" target="_blank" rel="noreferrer">MDN <code>delay</code></a></td><td><code>0</code></td></tr></tbody></table><h2 id="return" tabindex="-1">Return <a class="header-anchor" href="#return" aria-label="Permalink to &quot;Return&quot;">​</a></h2><table><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>el</code></td><td><code>Object</code></td><td>Component ref for tag referencing.</td></tr><tr><td><code>inView</code></td><td><code>Boolean</code></td><td>Reference that indicates whether referenced element is visible.</td></tr></tbody></table><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;target&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{visible: inView}&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    …</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> useComponentObserver </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;#speedkit/composables/componentObserver&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#FFAB70;">el</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">target</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">inView</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useComponentObserver</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  trackVisibility: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  delay: </span><span style="color:#79B8FF;">350</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;target&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{visible: inView}&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    …</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> useComponentObserver </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;#speedkit/composables/componentObserver&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#E36209;">el</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">target</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">inView</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useComponentObserver</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  trackVisibility: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  delay: </span><span style="color:#005CC5;">350</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,6);function E(e,y,h,b,m,u){return n(),t("div",null,[s("h1",c,[o(l(e.$frontmatter.title)+" ",1),d]),i])}const f=a(r,[["render",E]]);export{g as __pageData,f as default};
