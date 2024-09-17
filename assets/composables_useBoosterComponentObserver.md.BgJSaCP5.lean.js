import{_ as i,c as a,j as s,a as n,t as r,U as l,o as d}from"./chunks/framework.Dm77tz8r.js";const b=JSON.parse('{"title":"useBoosterComponentObserver","description":"","frontmatter":{"title":"useBoosterComponentObserver"},"headers":[],"relativePath":"composables/useBoosterComponentObserver.md","filePath":"composables/useBoosterComponentObserver.md"}'),o={name:"composables/useBoosterComponentObserver.md"},h={id:"frontmatter-title",tabindex:"-1"};function p(e,t,k,c,E,g){return d(),a("div",null,[s("h1",h,[n(r(e.$frontmatter.title)+" ",1),t[0]||(t[0]=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{$frontmatter.title}}"'},"​",-1))]),t[1]||(t[1]=l(`<h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Property</th><th>Type</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td><code>root</code></td><td><code>HTMLElement</code></td><td><a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#root" target="_blank" rel="noreferrer">MDN <code>root</code></a></td><td><code>undefined</code></td></tr><tr><td><code>rootMargin</code></td><td><code>String</code></td><td><a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#rootMargin" target="_blank" rel="noreferrer">MDN <code>rootMargin</code></a></td><td><code>&#39;0px&#39;</code></td></tr><tr><td><code>threshold</code></td><td><code>Array</code></td><td><a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#threshold" target="_blank" rel="noreferrer">MDN <code>threshold</code></a></td><td><code>[0]</code></td></tr><tr><td><code>trackVisibility</code></td><td><code>Boolean</code></td><td><a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#trackVisibility" target="_blank" rel="noreferrer">MDN <code>trackVisibility</code></a></td><td><code>false</code></td></tr><tr><td><code>delay</code></td><td><code>Number</code></td><td><a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#delay" target="_blank" rel="noreferrer">MDN <code>delay</code></a></td><td><code>0</code></td></tr></tbody></table><h2 id="return" tabindex="-1">Return <a class="header-anchor" href="#return" aria-label="Permalink to &quot;Return&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Property</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>el</code></td><td><code>Object</code></td><td>Component ref for tag referencing.</td></tr><tr><td><code>inView</code></td><td><code>Boolean</code></td><td>Reference that indicates whether referenced element is visible.</td></tr></tbody></table><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;target&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> :class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;{visible: inView}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    …</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">el</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">target</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">inView</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useBoosterComponentObserver</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  trackVisibility: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  delay: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">350</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,6))])}const m=i(o,[["render",p]]);export{b as __pageData,m as default};
