---
title: v-font
description: ''
position: 6
category: Directives
---

For using the `v-font` directive, you can use `$getFont` to register a font on the current node.  
By multiple Fonts Variants you can set a array.

**Single Variance**
```html 
<node v-font="$getFont(…)">…
```

**Multiple Variance**
```html 
<node v-font="[$getFont(…).bySelector('b,strong'), $getFont(…).bySelector('i')]">…
```

When registering the font with $getFont, a font object is returned.  
This can be used to restrict the font to selectors (`bySelector`) or set as critical (`isCritical`).


### $getFont (family, weight = 400, style = 'normal')

**Parameters**

| Property | Value                           | Default    |
| -------- | ------------------------------- | ---------- |
| family   | Font-Family (eg. `Custom Font`) | *required* |
| weight   | Font-Weight (eg. `700`)         | `400`      |
| style    | Font-Style (eg. `italic`)       | `normal`   |


`$getFont` returns a `FontObject`, with these can be used for other operations.


### `FontObject` Methods

#### isCritical()

**Return:** `FontObject`

Sets the font as critical. Use critical for Font, that you see in the initial viewport.  
Other fonts load by lazyload, when show in viewport.

```html 
<node v-font="$getFont(…).isCritical()">…
```

#### addMedia(...media)

> ⚠️ Font preload not supported orientation media query. e.g. `(orientation: portrait)`

Font load and show by current CSS Media Query.

Ideal for Viewport optimized font load.

```html 
<node v-font="$getFont(…).isCritical().addMedia('(min-width: 992px)')">…
```


#### bySelector(selector)

> ⚠️ Order must be respected when using selectors. [CSS Specificity ](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)

**Return:** `FontObject`

Defines css selectors to which the font should be applied. 

```html 
<node v-font="$getFont(…).bySelector('strong')">…
```

OR operators can be defined by string or array.

```html 
<!-- String -->
<node v-font="$getFont(…).bySelector('strong,i')">…

<!-- Array -->
<node v-font="$getFont(…).bySelector('strong', 'i')">…
```

