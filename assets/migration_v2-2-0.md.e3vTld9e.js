import{_ as e,c as d,j as t,a as r,t as s,W as c,o as a}from"./chunks/framework.DAQBv1cP.js";const f=JSON.parse('{"title":"Migrate from v2.0.13 to v2.2.0","description":"","frontmatter":{"title":"Migrate from v2.0.13 to v2.2.0"},"headers":[],"relativePath":"migration/v2-2-0.md","filePath":"migration/v2-2-0.md"}'),n={name:"migration/v2-2-0.md"},i={id:"frontmatter-title",tabindex:"-1"},b=t("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{$frontmatter.title}}"'},"​",-1),u=c('<p>With the change to version <code>2.2.0</code> there are the following changes:</p><h2 id="package-structure" tabindex="-1">Package Structure <a class="header-anchor" href="#package-structure" aria-label="Permalink to &quot;Package Structure&quot;">​</a></h2><p>Package structure was updated.</p><p>Everything in the folder <code>runtime</code> is available with the alias <code>#booster</code>.</p><h2 id="general" tabindex="-1">General <a class="header-anchor" href="#general" aria-label="Permalink to &quot;General&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Old Path</th><th>New Path</th></tr></thead><tbody><tr><td><code>nuxt-booster/hydrate</code></td><td><code>#booster/hyrdate</code></td></tr></tbody></table><h2 id="components" tabindex="-1">Components <a class="header-anchor" href="#components" aria-label="Permalink to &quot;Components&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Old Path</th><th>New Path</th></tr></thead><tbody><tr><td><code>nuxt-booster/components/abstracts/ComponentObserver</code></td><td><code>#booster/components/abstracts/ComponentObserver</code></td></tr><tr><td><code>nuxt-booster/components/abstracts/OnlySsr</code></td><td><code>#booster/components/abstracts/OnlySsr</code></td></tr><tr><td><code>nuxt-booster/components/GoogleLighthouse</code></td><td><code>#booster/components/GoogleLighthouse</code></td></tr><tr><td><code>nuxt-booster/components/BoosterImage</code></td><td><code>#booster/components/BoosterImage</code></td></tr><tr><td><code>nuxt-booster/components/BoosterPicture</code></td><td><code>#booster/components/BoosterPicture</code></td></tr><tr><td><code>nuxt-booster/components/BoosterVimeo</code></td><td><code>#booster/components/BoosterVimeo</code></td></tr><tr><td><code>nuxt-booster/components/BoosterYoutube</code></td><td><code>#booster/components/BoosterYoutube</code></td></tr><tr><td><code>nuxt-booster/components/BoosterIframe</code></td><td><code>#booster/components/BoosterIframe</code></td></tr><tr><td><code>nuxt-booster/components/BoosterImage</code></td><td><code>#booster/components/BoosterImage</code></td></tr><tr><td><code>nuxt-booster/components/BoosterLayer</code></td><td><code>#booster/components/BoosterLayer</code></td></tr><tr><td><code>nuxt-booster/components/BoosterPicture</code></td><td><code>#booster/components/BoosterPicture</code></td></tr><tr><td><code>nuxt-booster/components/BoosterVimeo</code></td><td><code>#booster/components/BoosterVimeo</code></td></tr><tr><td><code>nuxt-booster/components/BoosterYoutube</code></td><td><code>#booster/components/BoosterYoutube</code></td></tr></tbody></table><h2 id="utils" tabindex="-1">Utils <a class="header-anchor" href="#utils" aria-label="Permalink to &quot;Utils&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Old Path</th><th>New Path</th></tr></thead><tbody><tr><td><code>nuxt-booster/utils</code></td><td><code>#booster/utils</code></td></tr><tr><td><code>nuxt-booster/utils/base64</code></td><td><code>#booster/utils/base64</code></td></tr><tr><td><code>nuxt-booster/utils/browser</code></td><td><code>#booster/utils/browser</code></td></tr><tr><td><code>nuxt-booster/utils/description</code></td><td><code>#booster/utils/description</code></td></tr><tr><td><code>nuxt-booster/utils/lighthouse</code></td><td><code>#booster/utils/lighthouse</code></td></tr><tr><td><code>nuxt-booster/utils/mimeType</code></td><td><code>#booster/utils/mimeType</code></td></tr><tr><td><code>nuxt-booster/utils/performance</code></td><td><code>#booster/utils/performance</code></td></tr><tr><td><code>nuxt-booster/utils/placeholder</code></td><td><code>#booster/utils/placeholder</code></td></tr><tr><td><code>nuxt-booster/utils/string</code></td><td><code>#booster/utils/string</code></td></tr><tr><td><code>nuxt-booster/utils/support</code></td><td><code>#booster/utils/support</code></td></tr></tbody></table>',10);function l(o,h,m,p,x,g){return a(),d("div",null,[t("h1",i,[r(s(o.$frontmatter.title)+" ",1),b]),u])}const B=e(n,[["render",l]]);export{f as __pageData,B as default};