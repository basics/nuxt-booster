---
title: Caveats
---
# {{$frontmatter.title}}

## Prevent `SPEEDINDEX_OF_ZERO` and `NO_LCP`

The `window` event `nuxt-speedkit:run` is provided and useable to run code outside the app during initialization.

If the performance is not sufficient on the client side, this can be retrieved with the help of the event object `e.detail.sufficient`.

### Example

A case where the event may be needed would be when the initial viewport on a website is blank and it is not displayed until the initialization is complete.

In this case, measurements with Lighthouse can lead to these errors `SPEEDINDEX_OF_ZERO` and `NO_LCP`.

In order to solve this case, it can be provided that the content of the stage can already be displayed outside of the app initialization in the case of a slow initialization.

In this case the global event `nuxt-speedkit:run` can be used. It will return an event object with `e.detail.sufficient` as value. With the help of this status you can decide whether the stage should be displayed in advance.

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
          window.addEventListener("nuxt-speedkit:run", function (e) {
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
