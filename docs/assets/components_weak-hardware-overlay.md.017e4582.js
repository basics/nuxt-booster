import{_ as n,o as l,c as p,k as s,a as e,t as o,Q as t}from"./chunks/framework.2d8af806.js";const k=JSON.parse('{"title":"WeakHardwareOverlay","description":"","frontmatter":{"title":"WeakHardwareOverlay"},"headers":[],"relativePath":"components/weak-hardware-overlay.md","filePath":"components/weak-hardware-overlay.md"}'),r={name:"components/weak-hardware-overlay.md"},c={id:"frontmatter-title",tabindex:"-1"},E=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{$frontmatter.title}}"'},"​",-1),y=t(`<p>The <code>WeakHardwareOverlay</code> is used in components that are affected by the SpeedkitLayer event <code>Weak Hardware</code>. (<em>Example: Component requires the execution of <code>mounted</code> for functionality.</em>)</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>The <strong>performance issue event</strong> occurs when initialization determines that the client is overloaded with execution and the user has confirmed the <code>#nuxt-speedkit-button-init-reduced-view</code> button in the SpeedkitLayer.</p><ul><li><a href="/components/speedkit-layer.html#buttons">Learn more about SpeedkitLayer interactions)</a></li></ul></div><p>Basically, the overlay is used to make content visible when the <code>Weak Hardware</code> has occurred, if this does not occur, the overlay is not visible.</p><p>It is recommended to include an interaction element in the overlay that allows the user to switch to the normal state. For this the interaction element must get the ID <code>nuxt-speedkit-button-init-app</code> and reacts on <code>click</code> with the initialization of the app.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><p>Example of defining a custom <code>WeakHardwareOverlay</code> component and placing it in a target component that is affected by the <code>Weak Hardware</code> event.</p><h3 id="customize-overlay" tabindex="-1">Customize Overlay <a class="header-anchor" href="#customize-overlay" aria-label="Permalink to &quot;Customize Overlay&quot;">​</a></h3><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-pAvS5" id="tab-zWl4gND" checked="checked"><label for="tab-zWl4gND">@/components/WeakHardwareOverlay.vue</label></div><div class="blocks"><div class="language-vue vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">speedkit-weak-hardware-overlay</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    To improve your experience, extensive features have been disabled.&lt;</span><span style="color:#85E89D;">br</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">id</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;nuxt-speedkit-button-init-app&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">     Click here to enable them.</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">speedkit-weak-hardware-overlay</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> SpeedkitWeakHardwareOverlay </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;nuxt-speedkit/components/WeakHardwareOverlay&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  components: { SpeedkitWeakHardwareOverlay }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;postcss&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">.nuxt-speedkit-weak-hardware-overlay {</span></span>
<span class="line"><span style="color:#E1E4E8;">  position: absolute;</span></span>
<span class="line"><span style="color:#E1E4E8;">  top: 0;</span></span>
<span class="line"><span style="color:#E1E4E8;">  left: 0;</span></span>
<span class="line"><span style="color:#E1E4E8;">  width: 100%;</span></span>
<span class="line"><span style="color:#E1E4E8;">  height: 100%;</span></span>
<span class="line"><span style="color:#E1E4E8;">  background: rgb(0 0 0 / 60%);</span></span>
<span class="line"><span style="color:#E1E4E8;">  backdrop-filter: blur(em(2px));</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">speedkit-weak-hardware-overlay</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    To improve your experience, extensive features have been disabled.&lt;</span><span style="color:#22863A;">br</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">id</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;nuxt-speedkit-button-init-app&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">     Click here to enable them.</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">speedkit-weak-hardware-overlay</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> SpeedkitWeakHardwareOverlay </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;nuxt-speedkit/components/WeakHardwareOverlay&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  components: { SpeedkitWeakHardwareOverlay }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;postcss&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">.nuxt-speedkit-weak-hardware-overlay {</span></span>
<span class="line"><span style="color:#24292E;">  position: absolute;</span></span>
<span class="line"><span style="color:#24292E;">  top: 0;</span></span>
<span class="line"><span style="color:#24292E;">  left: 0;</span></span>
<span class="line"><span style="color:#24292E;">  width: 100%;</span></span>
<span class="line"><span style="color:#24292E;">  height: 100%;</span></span>
<span class="line"><span style="color:#24292E;">  background: rgb(0 0 0 / 60%);</span></span>
<span class="line"><span style="color:#24292E;">  backdrop-filter: blur(em(2px));</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></div></div><h3 id="usage-overlay" tabindex="-1">Usage Overlay <a class="header-anchor" href="#usage-overlay" aria-label="Permalink to &quot;Usage Overlay&quot;">​</a></h3><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-R2S0Q" id="tab-mrZ-YBE" checked="checked"><label for="tab-mrZ-YBE">@/components/Player.vue</label></div><div class="blocks"><div class="language-vue vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;player&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">/</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">weak-hardware-overlay</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> WeakHardwareOverlay </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/components/WeakHardwareOverlay&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  components: { WeakHardwareOverlay },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">mounted</span><span style="color:#E1E4E8;"> () {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.player </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Player</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.$refs.player)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;postcss&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">.nuxt-speedkit-performance-issue-overlay {</span></span>
<span class="line"><span style="color:#E1E4E8;">  position: absolute;</span></span>
<span class="line"><span style="color:#E1E4E8;">  top: 0;</span></span>
<span class="line"><span style="color:#E1E4E8;">  left: 0;</span></span>
<span class="line"><span style="color:#E1E4E8;">  width: 100%;</span></span>
<span class="line"><span style="color:#E1E4E8;">  height: 100%;</span></span>
<span class="line"><span style="color:#E1E4E8;">  background: rgb(0 0 0 / 60%);</span></span>
<span class="line"><span style="color:#E1E4E8;">  backdrop-filter: blur(2px);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;player&quot;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">/</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">weak-hardware-overlay</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> WeakHardwareOverlay </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/components/WeakHardwareOverlay&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  components: { WeakHardwareOverlay },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">mounted</span><span style="color:#24292E;"> () {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.player </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Player</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.$refs.player)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;postcss&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">.nuxt-speedkit-performance-issue-overlay {</span></span>
<span class="line"><span style="color:#24292E;">  position: absolute;</span></span>
<span class="line"><span style="color:#24292E;">  top: 0;</span></span>
<span class="line"><span style="color:#24292E;">  left: 0;</span></span>
<span class="line"><span style="color:#24292E;">  width: 100%;</span></span>
<span class="line"><span style="color:#24292E;">  height: 100%;</span></span>
<span class="line"><span style="color:#24292E;">  background: rgb(0 0 0 / 60%);</span></span>
<span class="line"><span style="color:#24292E;">  backdrop-filter: blur(2px);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></div></div>`,10);function i(a,d,u,h,v,m){return l(),p("div",null,[s("h1",c,[e(o(a.$frontmatter.title)+" ",1),E]),y])}const b=n(r,[["render",i]]);export{k as __pageData,b as default};
