---
title: Caveats
---
# {{$frontmatter.title}}

## Prevent `SPEEDINDEX_OF_ZERO` and `NO_LCP`

The `window` event `nuxt-booster:run` is provided and useable to run code outside the app during initialization.

If the performance is not sufficient on the client side, this can be retrieved with the help of the event object `e.detail.sufficient`.

### Example

A case where the event may be needed would be when the initial viewport on a website is blank and it is not displayed until the initialization is complete.

In this case, measurements with Lighthouse can lead to these errors `SPEEDINDEX_OF_ZERO` and `NO_LCP`.

In order to solve this case, it can be provided that the content of the stage can already be displayed outside of the app initialization in the case of a slow initialization.

In this case the global event `nuxt-booster:run` can be used. It will return an event object with `e.detail.sufficient` as value. With the help of this status you can decide whether the stage should be displayed in advance.

**Component Example**

```html
<template>
  <div class="stage">…</div>
</template>

<script setup>

  useHead({
    script: [
      {
        key: 'prevent-script',
        children: `
          window.addEventListener("nuxt-booster:run", function (e) {
            if (!e.detail.sufficient) {
              // added style class to display the content
              document.querySelector('.stage').classList.add('visible')
            }
          });
        `
      }
    ]
  })

</script>
```

## Usage of UI frameworks (Vuetify, Quasar)

If you use a UI framework such as Vuetify or Quasar, certain modifications must be made:

- Font loading
- Icon loading

### Font loading

Most UI frameworks use their own fonts.

The problem here is that the fonts are not loaded correctly.
This can have a negative impact on performance values.

To prevent this, the use of `font-family` should be identified for each framework component.  
This definition is then modified `$getFont` and `unset` value for  `font-family`, `font-weight`, `font-style`.  
This suppresses the automatic loading of the font.

### Icon loading

Similar to fonts, icons are also initially loaded as fonts by most UI frameworks.

They must be replaced by SVG icons in order to improve the performance values.

**SVG Integration:**

- <https://vuetifyjs.com/en/components/icons/#mdi-svg>
- <https://quasar.dev/vue-components/icon#svg-icons>

#### Quasar Example with Font and Icon

```vue
<template>
  <q-btn :icon="matSettings" v-font="$getFont('CustomFont', 500, 'normal')" />
</template>

<script setup>
import { QBtn } from 'quasar';
import { matSettings } from '@quasar/extras/material-icons';
import { useBoosterFonts } from '#booster';

const { $getFont } = useBoosterFonts()

</script>

<style scoped>

.q-btn {
  font-family: unset;
  font-weight: unset;
  font-style: unset;
}

</style>

```

These were two examples that should be taken into account when using UI frameworks.
However, depending on the framework, further adjustments may also be necessary.
