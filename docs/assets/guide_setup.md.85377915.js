import{_ as a,o as l,c as p,k as s,a as o,t as e,Q as c}from"./chunks/framework.2d8af806.js";const g=JSON.parse('{"title":"Setup","description":"","frontmatter":{"title":"Setup"},"headers":[],"relativePath":"guide/setup.md","filePath":"guide/setup.md"}'),t={name:"guide/setup.md"},r={id:"frontmatter-title",tabindex:"-1"},E=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{$frontmatter.title}}"'},"​",-1),y=c(`<p>Check the <a href="https://nuxtjs.org/guides/configuration-glossary/configuration-modules" target="_blank" rel="noreferrer">Nuxt.js documentation</a> for more information about installing and using modules in Nuxt.js.</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><p>Install <code>nuxt-speedkit</code> as a dependency to your project:</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-R7RmV" id="tab-LkjH1u-" checked="checked"><label for="tab-LkjH1u-">Yarn</label><input type="radio" name="group-R7RmV" id="tab-bqkJXeT"><label for="tab-bqkJXeT">NPM</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nuxt-speedkit@next</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nuxt-speedkit@next</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nuxt-speedkit@next</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nuxt-speedkit@next</span></span></code></pre></div></div></div><p>Add <code>nuxt-speedkit</code> to the <code>modules</code> section of <code>nuxt.config.js</code>:</p><h3 id="nuxt-image" tabindex="-1">@nuxt/image <a class="header-anchor" href="#nuxt-image" aria-label="Permalink to &quot;@nuxt/image&quot;">​</a></h3><p><strong>Nuxt Speedkit</strong> uses the module <code>@nuxt/image</code>, if this is not already present, it will be integrated automatically.</p><p>It is necessary for the use of the components <code>SpeedkitYoutube</code> and <code>SpeedkitVimeo</code> to add aliases and domains to the <code>@nuxt/image</code> options. These are needed to retrieve the images from Youtube and Vimeo.</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-_lkAV" id="tab-cGvTlhV" checked="checked"><label for="tab-cGvTlhV">@nuxt/image</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">domains</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;img.youtube.com&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;i.vimeocdn.com&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">alias</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">youtube</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;https://img.youtube.com&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">vimeo</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;https://i.vimeocdn.com&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">domains</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&#39;img.youtube.com&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;i.vimeocdn.com&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">alias</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">youtube</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;https://img.youtube.com&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">vimeo</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;https://i.vimeocdn.com&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div></div><p>More about <code>@nuxt/image</code> module options can be found <a href="https://image.nuxtjs.org/configuration" target="_blank" rel="noreferrer">here</a>.</p><h2 id="example-configuration" tabindex="-1">Example Configuration <a class="header-anchor" href="#example-configuration" aria-label="Permalink to &quot;Example Configuration&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-BXDP8" id="tab-onLYhVd" checked="checked"><label for="tab-onLYhVd">nuxt.config.js</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">modules</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&#39;nuxt-speedkit&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">speedkit</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">detection</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">performance</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">browserSupport</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">performanceMetrics</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">device</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">hardwareConcurrency</span><span style="color:#E1E4E8;">: { </span><span style="color:#B392F0;">min</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">48</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">deviceMemory</span><span style="color:#E1E4E8;">: { </span><span style="color:#B392F0;">min</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">timing</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">fcp</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">800</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#B392F0;">dcl</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1200</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">fonts</span><span style="color:#E1E4E8;">: [{</span></span>
<span class="line"><span style="color:#E1E4E8;">      family: </span><span style="color:#9ECBFF;">&#39;Font A&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      locals: [</span><span style="color:#9ECBFF;">&#39;Font A&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      fallback: [</span><span style="color:#9ECBFF;">&#39;Arial&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;sans-serif&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      variances: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          style: </span><span style="color:#9ECBFF;">&#39;normal&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          weight: </span><span style="color:#79B8FF;">400</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          sources: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            { src: </span><span style="color:#9ECBFF;">&#39;@/assets/fonts/font-a-regular.woff&#39;</span><span style="color:#E1E4E8;">, type:</span><span style="color:#9ECBFF;">&#39;woff&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">            { src: </span><span style="color:#9ECBFF;">&#39;@/assets/fonts/font-a-regular.woff2&#39;</span><span style="color:#E1E4E8;">, type:</span><span style="color:#9ECBFF;">&#39;woff2&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">          ]</span></span>
<span class="line"><span style="color:#E1E4E8;">        }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">          style: </span><span style="color:#9ECBFF;">&#39;italic&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          weight: </span><span style="color:#79B8FF;">400</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          sources: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            { src: </span><span style="color:#9ECBFF;">&#39;@/assets/fonts/font-a-regularItalic.woff&#39;</span><span style="color:#E1E4E8;">, type:</span><span style="color:#9ECBFF;">&#39;woff&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">            { src: </span><span style="color:#9ECBFF;">&#39;@/assets/fonts/font-a-regularItalic.woff2&#39;</span><span style="color:#E1E4E8;">, type:</span><span style="color:#9ECBFF;">&#39;woff2&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">          ]</span></span>
<span class="line"><span style="color:#E1E4E8;">        }, {</span></span>
<span class="line"><span style="color:#E1E4E8;">          style: </span><span style="color:#9ECBFF;">&#39;normal&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          weight: </span><span style="color:#79B8FF;">700</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          sources: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            { src: </span><span style="color:#9ECBFF;">&#39;@/assets/fonts/font-a-700.woff&#39;</span><span style="color:#E1E4E8;">, type:</span><span style="color:#9ECBFF;">&#39;woff&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">            { src: </span><span style="color:#9ECBFF;">&#39;@/assets/fonts/font-a-700.woff2&#39;</span><span style="color:#E1E4E8;">, type:</span><span style="color:#9ECBFF;">&#39;woff2&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">          ]</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">targetFormats</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;webp&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;avif&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;jpg|jpeg|png|gif&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">componentAutoImport</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">componentPrefix</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * IntersectionObserver rootMargin for Compoennts and Assets</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">lazyOffset</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;0%&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">asset</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;0%&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">image</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">screens</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">320</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">xxs</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">480</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">xs</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">576</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">sm</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">768</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">md</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">996</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">lg</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1200</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">xl</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1367</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">xxl</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1600</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;4k&#39;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1921</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">domains</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;img.youtube.com&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;i.vimeocdn.com&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">alias</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">youtube</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;https://img.youtube.com&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">vimeo</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;https://i.vimeocdn.com&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">modules</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&#39;nuxt-speedkit&#39;</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">speedkit</span><span style="color:#24292E;">: {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">detection</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">performance</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">browserSupport</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">performanceMetrics</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">device</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">hardwareConcurrency</span><span style="color:#24292E;">: { </span><span style="color:#6F42C1;">min</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">max</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">48</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">deviceMemory</span><span style="color:#24292E;">: { </span><span style="color:#6F42C1;">min</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">timing</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">fcp</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">800</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6F42C1;">dcl</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1200</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">fonts</span><span style="color:#24292E;">: [{</span></span>
<span class="line"><span style="color:#24292E;">      family: </span><span style="color:#032F62;">&#39;Font A&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      locals: [</span><span style="color:#032F62;">&#39;Font A&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      fallback: [</span><span style="color:#032F62;">&#39;Arial&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;sans-serif&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      variances: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          style: </span><span style="color:#032F62;">&#39;normal&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          weight: </span><span style="color:#005CC5;">400</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          sources: [</span></span>
<span class="line"><span style="color:#24292E;">            { src: </span><span style="color:#032F62;">&#39;@/assets/fonts/font-a-regular.woff&#39;</span><span style="color:#24292E;">, type:</span><span style="color:#032F62;">&#39;woff&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">            { src: </span><span style="color:#032F62;">&#39;@/assets/fonts/font-a-regular.woff2&#39;</span><span style="color:#24292E;">, type:</span><span style="color:#032F62;">&#39;woff2&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">          ]</span></span>
<span class="line"><span style="color:#24292E;">        }, {</span></span>
<span class="line"><span style="color:#24292E;">          style: </span><span style="color:#032F62;">&#39;italic&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          weight: </span><span style="color:#005CC5;">400</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          sources: [</span></span>
<span class="line"><span style="color:#24292E;">            { src: </span><span style="color:#032F62;">&#39;@/assets/fonts/font-a-regularItalic.woff&#39;</span><span style="color:#24292E;">, type:</span><span style="color:#032F62;">&#39;woff&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">            { src: </span><span style="color:#032F62;">&#39;@/assets/fonts/font-a-regularItalic.woff2&#39;</span><span style="color:#24292E;">, type:</span><span style="color:#032F62;">&#39;woff2&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">          ]</span></span>
<span class="line"><span style="color:#24292E;">        }, {</span></span>
<span class="line"><span style="color:#24292E;">          style: </span><span style="color:#032F62;">&#39;normal&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          weight: </span><span style="color:#005CC5;">700</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          sources: [</span></span>
<span class="line"><span style="color:#24292E;">            { src: </span><span style="color:#032F62;">&#39;@/assets/fonts/font-a-700.woff&#39;</span><span style="color:#24292E;">, type:</span><span style="color:#032F62;">&#39;woff&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">            { src: </span><span style="color:#032F62;">&#39;@/assets/fonts/font-a-700.woff2&#39;</span><span style="color:#24292E;">, type:</span><span style="color:#032F62;">&#39;woff2&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">          ]</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      ]</span></span>
<span class="line"><span style="color:#24292E;">    }],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">targetFormats</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&#39;webp&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;avif&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;jpg|jpeg|png|gif&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">componentAutoImport</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">componentPrefix</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">     * IntersectionObserver rootMargin for Compoennts and Assets</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">lazyOffset</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;0%&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">asset</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;0%&#39;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">image</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">screens</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">default</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">320</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">xxs</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">480</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">xs</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">576</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">sm</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">768</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">md</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">996</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">lg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1200</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">xl</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1367</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">xxl</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1600</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;4k&#39;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1921</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">domains</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&#39;img.youtube.com&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;i.vimeocdn.com&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">alias</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">youtube</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;https://img.youtube.com&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">vimeo</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;https://i.vimeocdn.com&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div></div><p>See <a href="/guide/options.html">module options</a>.</p>`,13);function i(n,F,d,u,f,m){return l(),p("div",null,[s("h1",r,[o(e(n.$frontmatter.title)+" ",1),E]),y])}const h=a(t,[["render",i]]);export{g as __pageData,h as default};
