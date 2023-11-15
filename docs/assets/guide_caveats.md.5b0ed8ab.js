import{_ as a,o as e,c as l,k as s,a as p,t,Q as o}from"./chunks/framework.2d8af806.js";const _=JSON.parse('{"title":"Caveats","description":"","frontmatter":{"title":"Caveats"},"headers":[],"relativePath":"guide/caveats.md","filePath":"guide/caveats.md"}'),c={name:"guide/caveats.md"},i={id:"frontmatter-title",tabindex:"-1"},r=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{$frontmatter.title}}"'},"​",-1),d=o(`<h2 id="prevent-speedindex-of-zero-and-no-lcp" tabindex="-1">Prevent <code>SPEEDINDEX_OF_ZERO</code> and <code>NO_LCP</code> <a class="header-anchor" href="#prevent-speedindex-of-zero-and-no-lcp" aria-label="Permalink to &quot;Prevent \`SPEEDINDEX_OF_ZERO\` and \`NO_LCP\`&quot;">​</a></h2><p>The <code>window</code> event <code>nuxt-speedkit:run</code> is provided and useable to run code outside the app during initialization.</p><p>If the performance is not sufficient on the client side, this can be retrieved with the help of the event object <code>e.detail.sufficient</code>.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>A case where the event may be needed would be when the initial viewport on a website is blank and it is not displayed until the initialization is complete.</p><p>In this case, measurements with Lighthouse can lead to these errors <code>SPEEDINDEX_OF_ZERO</code> and <code>NO_LCP</code>.</p><p>In order to solve this case, it can be provided that the content of the stage can already be displayed outside of the app initialization in the case of a slow initialization.</p><p>In this case the global event <code>nuxt-speedkit:run</code> can be used. It will return an event object with <code>e.detail.sufficient</code> as value. With the help of this status you can decide whether the stage should be displayed in advance.</p><p><strong>Component Example</strong></p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;stage&quot;</span><span style="color:#E1E4E8;">&gt;…&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">useHead</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">    script: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      {</span></span>
<span class="line"><span style="color:#E1E4E8;">        key: </span><span style="color:#9ECBFF;">&#39;prevent-script&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        children: </span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#9ECBFF;">          window.addEventListener(&quot;nuxt-speedkit:run&quot;, function (e) {</span></span>
<span class="line"><span style="color:#9ECBFF;">            if (!e.detail.sufficient) {</span></span>
<span class="line"><span style="color:#9ECBFF;">              // added style class to display the content</span></span>
<span class="line"><span style="color:#9ECBFF;">              document.querySelector(&#39;.stage&#39;).classList.add(&#39;visible&#39;)</span></span>
<span class="line"><span style="color:#9ECBFF;">            }</span></span>
<span class="line"><span style="color:#9ECBFF;">          });</span></span>
<span class="line"><span style="color:#9ECBFF;">        \`</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;stage&quot;</span><span style="color:#24292E;">&gt;…&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">useHead</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">    script: [</span></span>
<span class="line"><span style="color:#24292E;">      {</span></span>
<span class="line"><span style="color:#24292E;">        key: </span><span style="color:#032F62;">&#39;prevent-script&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        children: </span><span style="color:#032F62;">\`</span></span>
<span class="line"><span style="color:#032F62;">          window.addEventListener(&quot;nuxt-speedkit:run&quot;, function (e) {</span></span>
<span class="line"><span style="color:#032F62;">            if (!e.detail.sufficient) {</span></span>
<span class="line"><span style="color:#032F62;">              // added style class to display the content</span></span>
<span class="line"><span style="color:#032F62;">              document.querySelector(&#39;.stage&#39;).classList.add(&#39;visible&#39;)</span></span>
<span class="line"><span style="color:#032F62;">            }</span></span>
<span class="line"><span style="color:#032F62;">          });</span></span>
<span class="line"><span style="color:#032F62;">        \`</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,10);function E(n,y,h,u,v,F){return e(),l("div",null,[s("h1",i,[p(t(n.$frontmatter.title)+" ",1),r]),d])}const m=a(c,[["render",E]]);export{_ as __pageData,m as default};
