---
title: LoadingSpinner
---

# {{title}}

Path: `#speedkit/components/SpeedkitImage/classes/LoadingSpinner.js`

The LoadingSpinner instance describes the visual appearance of the loading state in the [`SpeedkitImage`](/components/speedkit-image). This can be defined globally via the module settings or at the specific components.

````js
new LoadingSpinner({dataUri, size, backgroundColor});
````

### dataUri

- Type: `String`

Defines the source of the loader. (e.g. `@/assets/spinner/three-circles.svg`)

### size

- Type: `String`

Defines the size of the loader. Use css `background-size` definition. (e.g. `100px`)

### backgroundColor

- Type: `String`

Defines the background color of the loader. Use css `color` definition. (e.g. `#fff`)
