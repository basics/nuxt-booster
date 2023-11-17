import{_ as a,o as l,c as p,k as s,a as e,t as o,Q as t}from"./chunks/framework.2d8af806.js";const b=JSON.parse('{"title":"Caveats","description":"","frontmatter":{"title":"Caveats"},"headers":[],"relativePath":"v2/guide/caveats.md","filePath":"v2/guide/caveats.md"}'),c={name:"v2/guide/caveats.md"},r={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{$frontmatter.title}}"'},"​",-1),E=t(`<h2 id="v-font-and-custom-head" tabindex="-1"><code>v-font</code> and custom head <a class="header-anchor" href="#v-font-and-custom-head" aria-label="Permalink to &quot;\`v-font\` and custom head&quot;">​</a></h2><p>When a <code>v-font</code> directive is called in a component with a custom head, the directive specific head settings must be applied in the <code>head</code>.</p><p>The method <code>this.$speedkit.head(headAddition)</code> is provided, it queries the required <code>head</code> settings and returns them.</p><p>By passing the <code>headAddition</code> argument, additional head settings can be applied.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p><code>$speedkit.head()</code> is only available in vue component scope.</p></div><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-font</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;$getFont(…)&quot;</span><span style="color:#E1E4E8;">&gt;&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">head</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$speedkit.</span><span style="color:#B392F0;">head</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">        link: […],</span></span>
<span class="line"><span style="color:#E1E4E8;">        style: […],</span></span>
<span class="line"><span style="color:#E1E4E8;">        noscript: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          { hid: </span><span style="color:#9ECBFF;">&#39;critical-css&#39;</span><span style="color:#E1E4E8;">, innerHTML: </span><span style="color:#9ECBFF;">&#39;&lt;style&gt; … &lt;/style&gt;&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        __dangerouslyDisableSanitizers: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;noscript&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">      });</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-font</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;$getFont(…)&quot;</span><span style="color:#24292E;">&gt;&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">head</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$speedkit.</span><span style="color:#6F42C1;">head</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">        link: […],</span></span>
<span class="line"><span style="color:#24292E;">        style: […],</span></span>
<span class="line"><span style="color:#24292E;">        noscript: [</span></span>
<span class="line"><span style="color:#24292E;">          { hid: </span><span style="color:#032F62;">&#39;critical-css&#39;</span><span style="color:#24292E;">, innerHTML: </span><span style="color:#032F62;">&#39;&lt;style&gt; … &lt;/style&gt;&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">        __dangerouslyDisableSanitizers: [</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;noscript&#39;</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">      });</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h3 id="issues" tabindex="-1">Issues <a class="header-anchor" href="#issues" aria-label="Permalink to &quot;Issues&quot;">​</a></h3><ul><li><a href="https://github.com/nuxt/vue-meta/issues/695" target="_blank" rel="noreferrer">https://github.com/nuxt/vue-meta/issues/695</a></li></ul><h2 id="browser-compatibility" tabindex="-1">Browser compatibility <a class="header-anchor" href="#browser-compatibility" aria-label="Permalink to &quot;Browser compatibility&quot;">​</a></h2><p>You can use <code>nuxt-speedkit</code> with <strong>Internet Explorer 11</strong> browser.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Note that there is no optimization based on preloads in IE 11.</p></div><p>You need the following polyfills:</p><ul><li><a href="https://www.npmjs.com/package/object-fit-images" target="_blank" rel="noreferrer"><code>object-fit-images</code></a></li><li><a href="https://www.npmjs.com/package/picturefill" target="_blank" rel="noreferrer"><code>picturefill</code></a></li><li><a href="https://www.npmjs.com/package/intersection-observer" target="_blank" rel="noreferrer"><code>intersection-observer</code></a></li></ul><p>The PostCSS Plugin <a href="https://github.com/ronik-design/postcss-object-fit-images" target="_blank" rel="noreferrer"><code>postcss-object-fit-images</code></a> and following <code>build.transpile</code> entries for <code>@nuxt/image</code>:</p><ul><li><code>@nuxt/image</code></li><li><code>image-meta</code></li></ul><p>For the polyfills, it is recommended to integrate them as a <a href="https://nuxtjs.org/docs/2.x/directory-structure/plugins" target="_blank" rel="noreferrer">plugin</a>, polyfills loading must follow a specific order.</p><p>You can see a example with live demo at <a href="https://github.com/GrabarzUndPartner/nuxt-speedkit-example" target="_blank" rel="noreferrer">Nuxt Speedkit Example</a>.</p><h3 id="example-1" tabindex="-1">Example <a class="header-anchor" href="#example-1" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-0hC1l" id="tab-zAw2-g1" checked="checked"><label for="tab-zAw2-g1">plugins/polyfills.js</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">polyfills</span><span style="color:#E1E4E8;"> (){</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;IntersectionObserver&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> global)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;intersection-observer&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;objectFit&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> document.documentElement.style)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;object-fit-images&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;HTMLPictureElement&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> global </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;picturefill&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> global)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;picturefill&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;picturefill/dist/plugins/mutation/pf.mutation.js&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">polyfills</span><span style="color:#E1E4E8;"> ();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">polyfills</span><span style="color:#24292E;"> (){</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;IntersectionObserver&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> global)) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;intersection-observer&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;objectFit&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> document.documentElement.style)) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;object-fit-images&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;HTMLPictureElement&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> global </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;picturefill&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> global)) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;picturefill&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;picturefill/dist/plugins/mutation/pf.mutation.js&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">polyfills</span><span style="color:#24292E;"> ();</span></span></code></pre></div></div></div><br><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-k32fQ" id="tab-Vd7YJcl" checked="checked"><label for="tab-Vd7YJcl">nuxt.config.js</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">build</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">transpile</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;@nuxt/image&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;image-meta&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">postcss</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">plugins</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;postcss-object-fit-images&#39;</span><span style="color:#E1E4E8;">: {}</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">plugins</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    { src: </span><span style="color:#9ECBFF;">&quot;@/plugins/polyfills.js&quot;</span><span style="color:#E1E4E8;">, mode: </span><span style="color:#9ECBFF;">&quot;client&quot;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">build</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">transpile</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&#39;@nuxt/image&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;image-meta&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">postcss</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">plugins</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;postcss-object-fit-images&#39;</span><span style="color:#24292E;">: {}</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">plugins</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    { src: </span><span style="color:#032F62;">&quot;@/plugins/polyfills.js&quot;</span><span style="color:#24292E;">, mode: </span><span style="color:#032F62;">&quot;client&quot;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div></div><h2 id="prevent-speedindex-of-zero-and-no-lcp" tabindex="-1">Prevent <code>SPEEDINDEX_OF_ZERO</code> and <code>NO_LCP</code> <a class="header-anchor" href="#prevent-speedindex-of-zero-and-no-lcp" aria-label="Permalink to &quot;Prevent \`SPEEDINDEX_OF_ZERO\` and \`NO_LCP\`&quot;">​</a></h2><p>The <code>window</code> event <code>nuxt-speedkit:run</code> is provided and useable to run code outside the app during initialization.</p><p>If the performance is not sufficient on the client side, this can be retrieved with the help of the event object <code>e.detail.sufficient</code>.</p><h3 id="example-2" tabindex="-1">Example <a class="header-anchor" href="#example-2" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>A case where the event may be needed would be when the initial viewport on a website is blank and it is not displayed until the initialization is complete.</p><p>In this case, measurements with Lighthouse can lead to these errors <code>SPEEDINDEX_OF_ZERO</code> and <code>NO_LCP</code>.</p><p>In order to solve this case, it can be provided that the content of the stage can already be displayed outside of the app initialization in the case of a slow initialization.</p><p>In this case the global event <code>nuxt-speedkit:run</code> can be used. It will return an event object with <code>e.detail.sufficient</code> as value. With the help of this status you can decide whether the stage should be displayed in advance.</p><p><strong>Component Example</strong></p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;stage&quot;</span><span style="color:#E1E4E8;">&gt;…&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">head</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        script: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            hid: </span><span style="color:#9ECBFF;">&#39;prevent-script&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            innerHTML: </span><span style="color:#9ECBFF;">\`</span></span>
<span class="line"><span style="color:#9ECBFF;">              window.addEventListener(&quot;nuxt-speedkit:run&quot;, function (e) {</span></span>
<span class="line"><span style="color:#9ECBFF;">                if (!e.detail.sufficient) {</span></span>
<span class="line"><span style="color:#9ECBFF;">                  // added style class to display the content</span></span>
<span class="line"><span style="color:#9ECBFF;">                  document.querySelector(&#39;.stage&#39;).classList.add(&#39;visible&#39;)</span></span>
<span class="line"><span style="color:#9ECBFF;">                }</span></span>
<span class="line"><span style="color:#9ECBFF;">              });</span></span>
<span class="line"><span style="color:#9ECBFF;">            \`</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        __dangerouslyDisableSanitizers: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&#39;script&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  };</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;stage&quot;</span><span style="color:#24292E;">&gt;…&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">head</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        script: [</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            hid: </span><span style="color:#032F62;">&#39;prevent-script&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            innerHTML: </span><span style="color:#032F62;">\`</span></span>
<span class="line"><span style="color:#032F62;">              window.addEventListener(&quot;nuxt-speedkit:run&quot;, function (e) {</span></span>
<span class="line"><span style="color:#032F62;">                if (!e.detail.sufficient) {</span></span>
<span class="line"><span style="color:#032F62;">                  // added style class to display the content</span></span>
<span class="line"><span style="color:#032F62;">                  document.querySelector(&#39;.stage&#39;).classList.add(&#39;visible&#39;)</span></span>
<span class="line"><span style="color:#032F62;">                }</span></span>
<span class="line"><span style="color:#032F62;">              });</span></span>
<span class="line"><span style="color:#032F62;">            \`</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">        __dangerouslyDisableSanitizers: [</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&#39;script&#39;</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">      };</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  };</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,32);function y(n,d,u,h,g,F){return l(),p("div",null,[s("h1",r,[e(o(n.$frontmatter.title)+" ",1),i]),E])}const f=a(c,[["render",y]]);export{b as __pageData,f as default};
