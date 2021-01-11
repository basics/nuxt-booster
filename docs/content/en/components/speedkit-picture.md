---
title: Lazy Picture
description: ''
position: 10
category: Components
---

[view source](https://github.com/GrabarzUndPartner/lazy-resources/blob/master/lib/components/SpeedkitPicture.vue)

Use native attributes to configure [picture](https://www.w3schools.com/tags/tag_picture.asp) (eg. `<picture>`).

```html
<speedkit-picture src="…" />
```

#### Properties


```js
{
  alt: '…', // Image alt
  title: '…', // Image Title    
  sources: [
    {
      // srcset can be filled with additional objects for different densities. 
      srcset: [
      {
        url: '…', // File path
        density: undefined// Value for density eg. 1x, 2x, by default not set.
      }
      ],
      type: // mimetype
    }
  ]
}
```
