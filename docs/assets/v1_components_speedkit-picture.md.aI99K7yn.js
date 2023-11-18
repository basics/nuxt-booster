import{_ as n,o as p,c as l,k as s,a as e,t as o,R as t}from"./chunks/framework.Q6iRrerD.js";const b=JSON.parse('{"title":"SpeedkitPicture","description":"","frontmatter":{"title":"SpeedkitPicture"},"headers":[],"relativePath":"v1/components/speedkit-picture.md","filePath":"v1/components/speedkit-picture.md"}'),c={name:"v1/components/speedkit-picture.md"},r={id:"frontmatter-title",tabindex:"-1"},E=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{$frontmatter.title}}"'},"​",-1),i=t(`<p>Since the <a href="/v1/components/experimental/speedkit-picture.html"><code>SpeedkitPicture</code> (Experimental)</a> is still marked as experimental, we still offer the simplified version called <code>SpeedkitPicture</code>. Here, all resources that are generated fully automatically in the experimental module must be defined manually.</p><p>Except for the manual resource definition, all other <a href="/v1/components/experimental/speedkit-picture.html#features">features</a> of <a href="/v1/components/experimental/speedkit-picture.html"><code>SpeedkitPicture</code> (Experimental)</a> are identical.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>Without using <a href="https://image.nuxtjs.org/" target="_blank" rel="noreferrer"><code>@nuxt/image</code></a>, all <strong>sources</strong> and <strong>placeholders</strong> must be specified.</p><p>Examples for defining the resources can be found in the <a href="https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/main/example/pages/index.vue" target="_blank" rel="noreferrer">example</a> of the module.</p><div class="info custom-block"><p class="custom-block-title">Think about the optimisation of the images!</p><p>If possible, use the format <code>webp</code>, analog to the existing <code>jpg</code> files and make sure that the images are optimised.</p></div><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">speedkit-picture</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-bind</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;image&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> SpeedkitPicture </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;#speedkit/components/SpeedkitPicture&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  components: { SpeedkitPicture },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">data</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      image: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        placeholders: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            media: </span><span style="color:#9ECBFF;">&#39;(min-width: 768px)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            format: </span><span style="color:#9ECBFF;">&#39;jpg&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            url: </span><span style="color:#9ECBFF;">&#39;data:image/jpeg;base64,…&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// landscape</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            format: </span><span style="color:#9ECBFF;">&#39;jpg&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            url: </span><span style="color:#9ECBFF;">&#39;data:image/jpeg;base64,…&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// portrait</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        sources: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            media: </span><span style="color:#9ECBFF;">&#39;(min-width: 768px)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            format: </span><span style="color:#9ECBFF;">&#39;webp&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            sizes: [</span></span>
<span class="line"><span style="color:#E1E4E8;">              { width: </span><span style="color:#79B8FF;">768</span><span style="color:#E1E4E8;">, media: </span><span style="color:#9ECBFF;">&#39;(min-width: 768px)&#39;</span><span style="color:#E1E4E8;">, url: </span><span style="color:#9ECBFF;">&#39;768.webp&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">              { width: </span><span style="color:#79B8FF;">1024</span><span style="color:#E1E4E8;">, media: </span><span style="color:#9ECBFF;">&#39;(min-width: 1024px)&#39;</span><span style="color:#E1E4E8;">, url: </span><span style="color:#9ECBFF;">&#39;1024.webp&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">            ]</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            media: </span><span style="color:#9ECBFF;">&#39;(min-width: 768px)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            format: </span><span style="color:#9ECBFF;">&#39;jpg&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            sizes: [</span></span>
<span class="line"><span style="color:#E1E4E8;">              { width: </span><span style="color:#79B8FF;">768</span><span style="color:#E1E4E8;">, media: </span><span style="color:#9ECBFF;">&#39;(min-width: 768px)&#39;</span><span style="color:#E1E4E8;">, url: </span><span style="color:#9ECBFF;">&#39;768.jpg&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">              { width: </span><span style="color:#79B8FF;">1024</span><span style="color:#E1E4E8;">, media: </span><span style="color:#9ECBFF;">&#39;(min-width: 1024px)&#39;</span><span style="color:#E1E4E8;">, url: </span><span style="color:#9ECBFF;">&#39;1024.jpg&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">            ]</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            format: </span><span style="color:#9ECBFF;">&#39;webp&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            sizes: [</span></span>
<span class="line"><span style="color:#E1E4E8;">              { width: </span><span style="color:#79B8FF;">414</span><span style="color:#E1E4E8;">, media: </span><span style="color:#9ECBFF;">&#39;all&#39;</span><span style="color:#E1E4E8;">, url: </span><span style="color:#9ECBFF;">&#39;414.webp&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">            ]</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            format: </span><span style="color:#9ECBFF;">&#39;jpg&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            sizes: [</span></span>
<span class="line"><span style="color:#E1E4E8;">              { width: </span><span style="color:#79B8FF;">414</span><span style="color:#E1E4E8;">, media: </span><span style="color:#9ECBFF;">&#39;all&#39;</span><span style="color:#E1E4E8;">, url: </span><span style="color:#9ECBFF;">&#39;414.jpg&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">            ]</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        alt: </span><span style="color:#9ECBFF;">&#39;Image Alt&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&#39;Image Title&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        crossorigin: </span><span style="color:#9ECBFF;">&#39;anonymous&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">speedkit-picture</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-bind</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;image&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> SpeedkitPicture </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;#speedkit/components/SpeedkitPicture&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  components: { SpeedkitPicture },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">data</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      image: {</span></span>
<span class="line"><span style="color:#24292E;">        placeholders: [</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            media: </span><span style="color:#032F62;">&#39;(min-width: 768px)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            format: </span><span style="color:#032F62;">&#39;jpg&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            url: </span><span style="color:#032F62;">&#39;data:image/jpeg;base64,…&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// landscape</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            format: </span><span style="color:#032F62;">&#39;jpg&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            url: </span><span style="color:#032F62;">&#39;data:image/jpeg;base64,…&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// portrait</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">        sources: [</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            media: </span><span style="color:#032F62;">&#39;(min-width: 768px)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            format: </span><span style="color:#032F62;">&#39;webp&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            sizes: [</span></span>
<span class="line"><span style="color:#24292E;">              { width: </span><span style="color:#005CC5;">768</span><span style="color:#24292E;">, media: </span><span style="color:#032F62;">&#39;(min-width: 768px)&#39;</span><span style="color:#24292E;">, url: </span><span style="color:#032F62;">&#39;768.webp&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">              { width: </span><span style="color:#005CC5;">1024</span><span style="color:#24292E;">, media: </span><span style="color:#032F62;">&#39;(min-width: 1024px)&#39;</span><span style="color:#24292E;">, url: </span><span style="color:#032F62;">&#39;1024.webp&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">            ]</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            media: </span><span style="color:#032F62;">&#39;(min-width: 768px)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            format: </span><span style="color:#032F62;">&#39;jpg&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            sizes: [</span></span>
<span class="line"><span style="color:#24292E;">              { width: </span><span style="color:#005CC5;">768</span><span style="color:#24292E;">, media: </span><span style="color:#032F62;">&#39;(min-width: 768px)&#39;</span><span style="color:#24292E;">, url: </span><span style="color:#032F62;">&#39;768.jpg&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">              { width: </span><span style="color:#005CC5;">1024</span><span style="color:#24292E;">, media: </span><span style="color:#032F62;">&#39;(min-width: 1024px)&#39;</span><span style="color:#24292E;">, url: </span><span style="color:#032F62;">&#39;1024.jpg&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">            ]</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            format: </span><span style="color:#032F62;">&#39;webp&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            sizes: [</span></span>
<span class="line"><span style="color:#24292E;">              { width: </span><span style="color:#005CC5;">414</span><span style="color:#24292E;">, media: </span><span style="color:#032F62;">&#39;all&#39;</span><span style="color:#24292E;">, url: </span><span style="color:#032F62;">&#39;414.webp&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">            ]</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            format: </span><span style="color:#032F62;">&#39;jpg&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            sizes: [</span></span>
<span class="line"><span style="color:#24292E;">              { width: </span><span style="color:#005CC5;">414</span><span style="color:#24292E;">, media: </span><span style="color:#032F62;">&#39;all&#39;</span><span style="color:#24292E;">, url: </span><span style="color:#032F62;">&#39;414.jpg&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">            ]</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">        alt: </span><span style="color:#032F62;">&#39;Image Alt&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&#39;Image Title&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        crossorigin: </span><span style="color:#032F62;">&#39;anonymous&#39;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><p>All properties except <a href="/v1/components/speedkit-picture.html#sources"><code>sources</code></a> and <a href="/v1/components/speedkit-picture.html#placeholders"><code>placeholders</code></a> are identical to the <code>SpeedkitPicture</code> (Experimental).</p><p>Learn more about <a href="/v1/components/experimental/speedkit-picture.html#properties"><code>ExperimentalSpeedkitPicture</code> - Properties</a>.</p><h3 id="sources" tabindex="-1"><code>sources</code> <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;\`sources\`&quot;">​</a></h3><ul><li>Type: <code>Array</code></li></ul><p>Contains resources that are to be displayed depending on the viewport.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    media: </span><span style="color:#9ECBFF;">&#39;(min-width: 768px)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    format: </span><span style="color:#9ECBFF;">&#39;webp&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    sizes: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { width: </span><span style="color:#79B8FF;">768</span><span style="color:#E1E4E8;">, media: </span><span style="color:#9ECBFF;">&#39;(min-width: 768px)&#39;</span><span style="color:#E1E4E8;">, url: </span><span style="color:#9ECBFF;">&#39;768.webp&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { width: </span><span style="color:#79B8FF;">1024</span><span style="color:#E1E4E8;">, media: </span><span style="color:#9ECBFF;">&#39;(min-width: 1024px)&#39;</span><span style="color:#E1E4E8;">, url: </span><span style="color:#9ECBFF;">&#39;1024.webp&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    media: </span><span style="color:#9ECBFF;">&#39;(min-width: 768px)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    format: </span><span style="color:#9ECBFF;">&#39;jpg&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    sizes: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { width: </span><span style="color:#79B8FF;">768</span><span style="color:#E1E4E8;">, media: </span><span style="color:#9ECBFF;">&#39;(min-width: 768px)&#39;</span><span style="color:#E1E4E8;">, url: </span><span style="color:#9ECBFF;">&#39;768.jpg&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { width: </span><span style="color:#79B8FF;">1024</span><span style="color:#E1E4E8;">, media: </span><span style="color:#9ECBFF;">&#39;(min-width: 1024px)&#39;</span><span style="color:#E1E4E8;">, url: </span><span style="color:#9ECBFF;">&#39;1024.jpg&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    format: </span><span style="color:#9ECBFF;">&#39;webp&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    sizes: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { width: </span><span style="color:#79B8FF;">414</span><span style="color:#E1E4E8;">, media: </span><span style="color:#9ECBFF;">&#39;all&#39;</span><span style="color:#E1E4E8;">, url: </span><span style="color:#9ECBFF;">&#39;414.webp&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    format: </span><span style="color:#9ECBFF;">&#39;jpg&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    sizes: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { width: </span><span style="color:#79B8FF;">414</span><span style="color:#E1E4E8;">, media: </span><span style="color:#9ECBFF;">&#39;all&#39;</span><span style="color:#E1E4E8;">, url: </span><span style="color:#9ECBFF;">&#39;414.jpg&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    media: </span><span style="color:#032F62;">&#39;(min-width: 768px)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    format: </span><span style="color:#032F62;">&#39;webp&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    sizes: [</span></span>
<span class="line"><span style="color:#24292E;">      { width: </span><span style="color:#005CC5;">768</span><span style="color:#24292E;">, media: </span><span style="color:#032F62;">&#39;(min-width: 768px)&#39;</span><span style="color:#24292E;">, url: </span><span style="color:#032F62;">&#39;768.webp&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      { width: </span><span style="color:#005CC5;">1024</span><span style="color:#24292E;">, media: </span><span style="color:#032F62;">&#39;(min-width: 1024px)&#39;</span><span style="color:#24292E;">, url: </span><span style="color:#032F62;">&#39;1024.webp&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    media: </span><span style="color:#032F62;">&#39;(min-width: 768px)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    format: </span><span style="color:#032F62;">&#39;jpg&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    sizes: [</span></span>
<span class="line"><span style="color:#24292E;">      { width: </span><span style="color:#005CC5;">768</span><span style="color:#24292E;">, media: </span><span style="color:#032F62;">&#39;(min-width: 768px)&#39;</span><span style="color:#24292E;">, url: </span><span style="color:#032F62;">&#39;768.jpg&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      { width: </span><span style="color:#005CC5;">1024</span><span style="color:#24292E;">, media: </span><span style="color:#032F62;">&#39;(min-width: 1024px)&#39;</span><span style="color:#24292E;">, url: </span><span style="color:#032F62;">&#39;1024.jpg&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    format: </span><span style="color:#032F62;">&#39;webp&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    sizes: [</span></span>
<span class="line"><span style="color:#24292E;">      { width: </span><span style="color:#005CC5;">414</span><span style="color:#24292E;">, media: </span><span style="color:#032F62;">&#39;all&#39;</span><span style="color:#24292E;">, url: </span><span style="color:#032F62;">&#39;414.webp&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    format: </span><span style="color:#032F62;">&#39;jpg&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    sizes: [</span></span>
<span class="line"><span style="color:#24292E;">      { width: </span><span style="color:#005CC5;">414</span><span style="color:#24292E;">, media: </span><span style="color:#032F62;">&#39;all&#39;</span><span style="color:#24292E;">, url: </span><span style="color:#032F62;">&#39;414.jpg&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><p>Each source in the list describes a file format with its viewport dependent image sizes.</p><p>Property <code>sizes</code> is used to define the viewport dependent image sizes and <code>media</code> is used to display different aspect ratios depending on the viewport.</p><table><thead><tr><th>Key</th><th>Type</th><th>Required</th><th>Value</th><th>Default</th></tr></thead><tbody><tr><td><code>sizes</code></td><td><code>Array</code></td><td>yes</td><td>Describes the different image sizes.</td><td><code>[]</code></td></tr><tr><td><code>format</code></td><td><code>String</code></td><td>yes</td><td>Image format of the specified resource, e.g. <code>webp</code>, <code>jpg</code>, …</td><td></td></tr><tr><td><code>media</code></td><td><code>String</code></td><td></td><td>CSS Media Query e.g. <code>(min-width: 768px)</code></td><td></td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">TIP</p><p><code>media</code> can be used for breakpoint specific aspect ratios.</p></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">media</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;(min-width: 768px)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">format</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;webp&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">sizes</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    { width: </span><span style="color:#79B8FF;">768</span><span style="color:#E1E4E8;">, media: </span><span style="color:#9ECBFF;">&#39;(min-width: 768px)&#39;</span><span style="color:#E1E4E8;">, url: </span><span style="color:#9ECBFF;">&#39;768.webp&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    { width: </span><span style="color:#79B8FF;">1024</span><span style="color:#E1E4E8;">, media: </span><span style="color:#9ECBFF;">&#39;(min-width: 1024px)&#39;</span><span style="color:#E1E4E8;">, url: </span><span style="color:#9ECBFF;">&#39;1024.webp&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">media</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;(min-width: 768px)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">format</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;webp&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">sizes</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    { width: </span><span style="color:#005CC5;">768</span><span style="color:#24292E;">, media: </span><span style="color:#032F62;">&#39;(min-width: 768px)&#39;</span><span style="color:#24292E;">, url: </span><span style="color:#032F62;">&#39;768.webp&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    { width: </span><span style="color:#005CC5;">1024</span><span style="color:#24292E;">, media: </span><span style="color:#032F62;">&#39;(min-width: 1024px)&#39;</span><span style="color:#24292E;">, url: </span><span style="color:#032F62;">&#39;1024.webp&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{ </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">768</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">media</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;(min-width: 768px)&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">url</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;768.webp&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{ </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">768</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">media</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;(min-width: 768px)&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">url</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;768.webp&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>The size object in <code>sizes</code> describes the different image sizes for the respective breakpoints.</p><p>From the list <code>sizes</code>, the <code>srcset</code> &amp; <code>sizes</code> is generated.</p><p>More about <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/srcset" target="_blank" rel="noreferrer"><code>HTMLImageElement.srcset</code></a> &amp; <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/sizes" target="_blank" rel="noreferrer"><code>HTMLImageElement.sizes</code></a></p><p><code>url</code> and <code>width</code> are applied in <code>srcset</code> (e.g. <code>srcset=&quot;image.jpg 768w&quot;</code>).<br><code>media</code> is applied in <code>sizes</code> for media query to width (e.g. <code>sizes=&quot;(min-width: 768px) 768px&quot;</code>).</p><table><thead><tr><th>Key</th><th>Required</th><th>Value</th><th>Default</th></tr></thead><tbody><tr><td><code>url</code></td><td>yes</td><td>Absolute Path to the ressource.</td><td></td></tr><tr><td><code>width</code></td><td></td><td>Viewport width as <code>Number</code> (e.g. <code>768</code>)</td><td><code>undefined</code></td></tr><tr><td><code>media</code></td><td></td><td>CSS Media Query (e.g. <code>(min-width: 768px)</code>)</td><td><code>undefined</code></td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">Important</p><p>The <code>url</code> specification is absolute. If an alias is used (e.g. <code>@/assets/img/image.jpg</code>), the path must be resolved by <code>require</code> (e.g. <code>url: require(&#39;@/assets/img/image.jpg&#39;)</code>).</p></div><p><strong>Example</strong></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[</span></span>
<span class="line"><span style="color:#E1E4E8;">  { width: </span><span style="color:#79B8FF;">768</span><span style="color:#E1E4E8;">, media: </span><span style="color:#9ECBFF;">&#39;(min-width: 768px)&#39;</span><span style="color:#E1E4E8;">, url: </span><span style="color:#9ECBFF;">&#39;768.webp&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { width: </span><span style="color:#79B8FF;">1024</span><span style="color:#E1E4E8;">, media: </span><span style="color:#9ECBFF;">&#39;(min-width: 1024px)&#39;</span><span style="color:#E1E4E8;">, url: </span><span style="color:#9ECBFF;">&#39;1024.webp&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[</span></span>
<span class="line"><span style="color:#24292E;">  { width: </span><span style="color:#005CC5;">768</span><span style="color:#24292E;">, media: </span><span style="color:#032F62;">&#39;(min-width: 768px)&#39;</span><span style="color:#24292E;">, url: </span><span style="color:#032F62;">&#39;768.webp&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  { width: </span><span style="color:#005CC5;">1024</span><span style="color:#24292E;">, media: </span><span style="color:#032F62;">&#39;(min-width: 1024px)&#39;</span><span style="color:#24292E;">, url: </span><span style="color:#032F62;">&#39;1024.webp&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><h3 id="placeholders" tabindex="-1"><code>placeholders</code> <a class="header-anchor" href="#placeholders" aria-label="Permalink to &quot;\`placeholders\`&quot;">​</a></h3><ul><li>Type: <code>Array</code></li></ul><p>Describes the placeholders that are displayed as long as no resources have been loaded.</p><p>It is possible to define different image ratios for the placeholders via the <code>media</code> property.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Make sure that the placeholders have a width of <code>30px</code> and are optimized.</p></div><table><thead><tr><th>Key</th><th>Type</th><th>Required</th><th>Value</th></tr></thead><tbody><tr><td><code>url</code></td><td><code>String</code></td><td>yes</td><td>Url or Base64 of an image.</td></tr><tr><td><code>format</code></td><td><code>String</code></td><td>yes</td><td>Image format of the specified resource. e.g. <code>webp</code>, <code>jpg</code>, …</td></tr><tr><td><code>media</code></td><td><code>String</code></td><td></td><td>CSS Media Query e.g. <code>(min-width: 768px)</code></td></tr></tbody></table><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    media: </span><span style="color:#9ECBFF;">&#39;(min-width: 768px)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    format: </span><span style="color:#9ECBFF;">&#39;jpg&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    url: </span><span style="color:#9ECBFF;">&#39;landscape.jpg&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// base64 or url</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    format: </span><span style="color:#9ECBFF;">&#39;jpg&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    url: </span><span style="color:#9ECBFF;">&#39;portrait.jpg&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// base64 or url</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    media: </span><span style="color:#032F62;">&#39;(min-width: 768px)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    format: </span><span style="color:#032F62;">&#39;jpg&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    url: </span><span style="color:#032F62;">&#39;landscape.jpg&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// base64 or url</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    format: </span><span style="color:#032F62;">&#39;jpg&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    url: </span><span style="color:#032F62;">&#39;portrait.jpg&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// base64 or url</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><p>More on events at <a href="/v1/components/experimental/speedkit-picture.html#events"><code>SpeedkitPicture</code> (Experimental) - Events</a>.</p>`,38);function y(a,d,h,m,F,u){return p(),l("div",null,[s("h1",r,[e(o(a.$frontmatter.title)+" ",1),E]),i])}const w=n(c,[["render",y]]);export{b as __pageData,w as default};
