---
title: Caveats
description: ''
position: 14
category: Guide
---
## `v-font` and custom head

When a `v-font` directive is called in a component with a custom head, the directive specific head settings must be applied in the `head`.

The method `this.$speedkit.head(headAddition)` is provided, it queries the required `head` settings and returns them.

By passing the `headAddition` argument, additional head settings can be applied.

<alert type="warning">`$speedkit.head()` is only available in vue component scope.</alert>

#### Example:

````html
<template>
  <span v-font="$getFont(…)"></span>
</template>

<script>
  export default {
    head () {
      return this.$speedkit.head({
        link: […],
        style: […],
        noscript: [
          { hid: 'critical-css', innerHTML: '<style> … </style>' }
        ],
        __dangerouslyDisableSanitizers: [
          'noscript'
        ]
      });
    }
  }
</script>
````
