import{_ as n,o as t,c as o,k as s,a as l,t as p,R as e}from"./chunks/framework.Q6iRrerD.js";const b=JSON.parse('{"title":"useFont","description":"","frontmatter":{"title":"useFont"},"headers":[],"relativePath":"composables/useFont.md","filePath":"composables/useFont.md"}'),c={name:"composables/useFont.md"},r={id:"frontmatter-title",tabindex:"-1"},E=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{$frontmatter.title}}"'},"​",-1),y=e(`<h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><table><thead><tr><th>Property</th><th>Type</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td><code>critical</code></td><td><code>Boolean</code></td><td>Override critical from component.</td><td>inherit from component</td></tr></tbody></table><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">$getFont</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useFonts</span><span style="color:#E1E4E8;">({critical: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">$getFont</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useFonts</span><span style="color:#24292E;">({critical: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">});</span></span></code></pre></div><h2 id="return" tabindex="-1">Return <a class="header-anchor" href="#return" aria-label="Permalink to &quot;Return&quot;">​</a></h2><table><thead><tr><th>Property</th><th>Description</th></tr></thead><tbody><tr><td><code>isCritical</code></td><td></td></tr><tr><td><code>$getFont</code></td><td></td></tr></tbody></table><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-font</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;$getFont(…)&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> useFonts </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;#speedkit/composables/fonts&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">$getFont</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useFonts</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-font</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;$getFont(…)&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> useFonts </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;#speedkit/composables/fonts&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">$getFont</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useFonts</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,7);function i(a,d,h,u,F,m){return t(),o("div",null,[s("h1",r,[l(p(a.$frontmatter.title)+" ",1),E]),y])}const _=n(c,[["render",i]]);export{b as __pageData,_ as default};
