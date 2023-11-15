import{_ as a,o,c as l,k as s,a as t,t as e,Q as p}from"./chunks/framework.2d8af806.js";const v=JSON.parse('{"title":"v-font","description":"","frontmatter":{"title":"v-font"},"headers":[],"relativePath":"v2/directives/v-font.md","filePath":"v2/directives/v-font.md"}'),c={name:"v2/directives/v-font.md"},r={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{$frontmatter.title}}"'},"​",-1),E=p(`<p>The directive <code>v-font</code> is used to integrate the fonts defined in the <a href="/v2/guide/options.html#fonts">module options</a> into the website.</p><p>To do this, the respective font must be retrieved via the <code>$getFont</code> method contained in the component scope (e.g. <code>this</code>).</p><p>Fonts are specified by <code>family</code>, <code>weight</code> and <code>style</code> and can be limited to elements and viewports via the options (<code>media</code>, <code>selector</code>).</p><p>Normally the directive activates the fonts only when the viewport is reached. It is recommended to use the property <code>critical</code> for components that are already initially contained in the viewport.</p><p>With critical component the fonts are preloaded and are initially active.<br> More information on critical components can be found <a href="/v2/guide/usage.html#critical-prop-for-critical-components">here</a>.</p><p>For multiple fonts, a list (<code>Array</code>) can be passed.</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- single definition --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">element</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-font</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;$getFont(…)&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- multiple definitions --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">element</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-font</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;[</span></span>
<span class="line"><span style="color:#9ECBFF;">  $getFont(…),</span></span>
<span class="line"><span style="color:#9ECBFF;">  $getFont(…)</span></span>
<span class="line"><span style="color:#9ECBFF;">]&quot;</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- single definition --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">element</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-font</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;$getFont(…)&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- multiple definitions --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">element</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-font</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;[</span></span>
<span class="line"><span style="color:#032F62;">  $getFont(…),</span></span>
<span class="line"><span style="color:#032F62;">  $getFont(…)</span></span>
<span class="line"><span style="color:#032F62;">]&quot;</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>Currently it is not possible to use v-font in combination with v-html/v-text directives. The reason is a bug in Vue SSR, the directive is not applied. As long as this error exists, you can look <a href="/v2/directives/v-font.html#workarounds"><strong>here</strong></a> for workarounds.<br>Read more: <a href="https://github.com/vuejs/vue/issues/10733" target="_blank" rel="noreferrer">vue-server-renderer: directive not applied to imported component</a>.</p></div><h2 id="getfont-family-weight-style-options" tabindex="-1"><code>$getFont(family, [weight, style, options])</code> <a class="header-anchor" href="#getfont-family-weight-style-options" aria-label="Permalink to &quot;\`$getFont(family, [weight, style, options])\`&quot;">​</a></h2><p><code>$getFont</code> is included as a plugin and can be accessed via any component scope.<br> Use <code>$getFont</code> in the <code>v-font</code> directive and create the relevant font definition.</p><table><thead><tr><th>Key</th><th>Type</th><th>Requried</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code>family</code></td><td><code>String</code></td><td>yes</td><td>Font-Family e.g. <code>Custom Font</code></td><td></td></tr><tr><td><code>weight</code></td><td><code>String</code>, <code>Number</code></td><td></td><td>Font-Style e.g. <code>normal</code>, <code>italic</code></td><td><code>400</code></td></tr><tr><td><code>style</code></td><td><code>String</code></td><td></td><td>Font-Weight e.g. <code>400</code>, <code>normal</code></td><td><code>normal</code></td></tr><tr><td><code>options</code></td><td><code>Object</code></td><td></td><td>Media &amp; Selector Options <a href="/v2/directives/v-font.html#options">see more</a></td><td></td></tr></tbody></table><h3 id="options" tabindex="-1">options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;options&quot;">​</a></h3><p>Each definition can be modified in its behaviour via the options.<br> With the property <code>media</code>, the call of the font definition can be made dependent on the viewport. The property <code>selector</code> can be used to limit the font to elements (e.g. <code>span</code>, <code>.class</code>).</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">media</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;(min-width: 768px)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">selector</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;element, .elm, .elm:before&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">media</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;(min-width: 768px)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">selector</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;element, .elm, .elm:before&#39;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><table><thead><tr><th>Key</th><th>Type</th><th>Requried</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code>media</code></td><td><code>String</code></td><td></td><td>CSS Media Query e.g. <code>(min-width: 768px)</code></td><td></td></tr><tr><td><code>selector</code></td><td><code>String</code></td><td></td><td>CSS Selector e.g. <code>element, .elm, .elm:before</code></td><td></td></tr></tbody></table><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><h3 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to &quot;Basic Usage&quot;">​</a></h3><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">element</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-font</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;$getFont(&#39;Font Family&#39;, 700)&quot;</span><span style="color:#E1E4E8;">&gt;Text…&lt;/</span><span style="color:#FDAEB7;font-style:italic;">element</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">element</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-font</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;$getFont(&#39;Font Family&#39;, 700)&quot;</span><span style="color:#24292E;">&gt;Text…&lt;/</span><span style="color:#B31D28;font-style:italic;">element</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h3 id="advanced-usage" tabindex="-1">Advanced Usage <a class="header-anchor" href="#advanced-usage" aria-label="Permalink to &quot;Advanced Usage&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Font wird auf alles angewendet</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">$getFont</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Font Family A&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Font wird auf \`b\` und \`strong\` Tags angwendet</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">$getFont</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Font Family B&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">700</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;normal&#39;</span><span style="color:#E1E4E8;">, { selector: </span><span style="color:#9ECBFF;">&#39;b, strong&#39;</span><span style="color:#E1E4E8;"> }),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Font erscheint erst ab Viewport \`&gt;768px\`</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">$getFont</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Font Family B&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">400</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;normal&#39;</span><span style="color:#E1E4E8;">, { media: </span><span style="color:#9ECBFF;">&#39;(min-width: 768px)&#39;</span><span style="color:#E1E4E8;"> }),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// Font wird auf \`b\` und \`strong\` Tags angwendet und erscheint erst ab Viewport \`&gt;768px\`</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">$getFont</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Font Family B&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">700</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;normal&#39;</span><span style="color:#E1E4E8;">, { selector: </span><span style="color:#9ECBFF;">&#39;b, strong&#39;</span><span style="color:#E1E4E8;">, media: </span><span style="color:#9ECBFF;">&#39;(min-width: 768px)&#39;</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Font wird auf alles angewendet</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">$getFont</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Font Family A&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Font wird auf \`b\` und \`strong\` Tags angwendet</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">$getFont</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Font Family B&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">700</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;normal&#39;</span><span style="color:#24292E;">, { selector: </span><span style="color:#032F62;">&#39;b, strong&#39;</span><span style="color:#24292E;"> }),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Font erscheint erst ab Viewport \`&gt;768px\`</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">$getFont</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Font Family B&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">400</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;normal&#39;</span><span style="color:#24292E;">, { media: </span><span style="color:#032F62;">&#39;(min-width: 768px)&#39;</span><span style="color:#24292E;"> }),</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// Font wird auf \`b\` und \`strong\` Tags angwendet und erscheint erst ab Viewport \`&gt;768px\`</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">$getFont</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Font Family B&#39;</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">700</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;normal&#39;</span><span style="color:#24292E;">, { selector: </span><span style="color:#032F62;">&#39;b, strong&#39;</span><span style="color:#24292E;">, media: </span><span style="color:#032F62;">&#39;(min-width: 768px)&#39;</span><span style="color:#24292E;"> })</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">]</span></span></code></pre></div><h2 id="workarounds" tabindex="-1">Workarounds <a class="header-anchor" href="#workarounds" aria-label="Permalink to &quot;Workarounds&quot;">​</a></h2><p>Workarounds to prevent bugs with default nuxt components and directives, read more in <a href="/v2/directives/v-font.html#usage">Usage</a>.</p><h3 id="use-component" tabindex="-1">Use component <a class="header-anchor" href="#use-component" aria-label="Permalink to &quot;Use component&quot;">​</a></h3><p><strong><span style="color:red;">Bad</span></strong></p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">nuxt-link</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">to</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;/&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-font</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;$getFont(…)&quot;</span><span style="color:#E1E4E8;">&gt;Back&lt;/</span><span style="color:#85E89D;">nuxt-link</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">nuxt-link</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">to</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;/&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-font</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;$getFont(…)&quot;</span><span style="color:#24292E;">&gt;Back&lt;/</span><span style="color:#22863A;">nuxt-link</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p><strong><span style="color:green;">Good</span></strong></p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">nuxt-link</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">to</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;/&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-font</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;$getFont(…)&quot;</span><span style="color:#E1E4E8;">&gt;Back&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">nuxt-link</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">nuxt-link</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">to</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;/&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-font</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;$getFont(…)&quot;</span><span style="color:#24292E;">&gt;Back&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">nuxt-link</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h3 id="use-v-html-v-text" tabindex="-1">Use v-html/v-text <a class="header-anchor" href="#use-v-html-v-text" aria-label="Permalink to &quot;Use v-html/v-text&quot;">​</a></h3><p><strong><span style="color:red;">Bad</span></strong></p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-font</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;$getFont(…)&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-html</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;…&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">/</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-font</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;$getFont(…)&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-html</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;…&quot;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">/</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><p><strong><span style="color:green;">Good</span></strong></p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-font</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;$getFont(…)&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-html</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;…&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">/</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-font</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;$getFont(…)&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-html</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;…&quot;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">/</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,32);function y(n,d,h,g,F,u){return o(),l("div",null,[s("h1",r,[t(e(n.$frontmatter.title)+" ",1),i]),E])}const f=a(c,[["render",y]]);export{v as __pageData,f as default};
