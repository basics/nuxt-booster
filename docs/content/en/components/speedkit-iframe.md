---
title: SpeedkitIframe
description: ''
position: 12
category: Components
features:
  - Lazy Load Integration

---

[view source](https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/main/lib/components/SpeedkitIframe.vue)

```html
<speedkit-iframe src="…" />
```

`SpeedkitIframe` ersetzt den Einsatz eines nativen `<iframe>` Elements.

## Features

<list :items="features"></list>

## Properties

Use native attributes to configure [iframe](https://www.w3schools.com/tags/tag_iframe.asp) (eg. `<iframe>`).
## Events

```html
<speedkit-iframe 
  @load="console.log('Loaded!')" 
  @enter="console.log('Viewport!')" 
/>
```

### `load`

Tritt ein wenn Iframe fertig geladen hat.

### `enter`

Tritt ein wenn Komponente sich im Viewport befindet.

