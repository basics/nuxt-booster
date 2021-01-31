---
title: SpeedkitLayer
description: ''
position: 10
category: Components
---

[view source](https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/main/lib/components/SpeedkitLayer.vue)

Der SpeedkitLayer wird verwendet wenn einer der [Performance Einstellungen](/setup/#performance) zutrifft.
## Usage

1. Use style class `nuxt-speedkit__speedkit-layer__button` for click handler.
2. Add `onclick` event for click before JS loaded.

[Click Handler Registration](https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/68d9211263e91fe5d883d9b8be70493685e533cf/lib/entry.js#L18)

```html
<speedkit-layer>
  <div>
    <p>Layer info text…</p>
    <button
      onclick="window.__NUXT_SPEEDKIT_AUTO_INIT__ = true;"
      class="nuxt-speedkit__speedkit-layer__button"
    >
      OK
    </button>
  </div>
</speedkit-layer>
```

## Properties


| Property      | Type      | Description                                      | Default |
| ------------- | --------- | ------------------------------------------------ | ------- |
| `hide`        | `Boolean` | CSS Media Query (e.g. `(min-width: 768px)`)      | `env`   |
| `ignoreNoSsr` | `Boolean` | CSS Selector (e.g. `element, .elm, .elm:before`) | `env`   |

`process.env.NUXT_SPEEDKIT_IGNORE_PERFORMANCE` ist the default value for `hide` and `ignoreNoSsr`.


