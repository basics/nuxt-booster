---
title: BoosterLayer
---

# {{$frontmatter.title}}

If the BoosterLayer is implemented, the javascript initialisation is automatically monitored. If one of the events

- ✅ reduced bandwidth
- ✅ weak hardware
- ✅ unsupported browser

occurs, the process is paused and only continued or cancelled after a user interaction in the layer.

The layer is placed once in the layout (e.g. `layouts/default.vue`).
The included BoosterLayer serves as a wrapper and must be filled according to the [template](/components/booster-layer#template), see [example component](https://github.com/basics/nuxt-booster/blob/main/example/components/InfoLayer.vue).

The content contains messages and buttons that are displayed in the respective event.
Messages and buttons are defined with an `id`, these are set to `display: none;` by default via CSS.

- e.g. `nuxt-booster-message-unsupported-browser` for message
- e.g. `nuxt-booster-button-init-app` for button

::: info
For the closing mechanism of the layer, see [Hide Layer](/components/booster-layer#hide-layer).
:::

## Messages

The messages are elements that are displayed for the relevant events.

Initially, all IDs are set to `display: none;`, so no message is visible.  
When an event is triggered, the relevant message is displayed via the ID using the style attribute `display: block;`.

| ID                                                       | Description                                                                 |
| -------------------------------------------------------- | --------------------------------------------------------------------------- |
| <nobr>`nuxt-booster-message-nojs`</nobr>                | Javascript is disabled.                                                     |
| <nobr>`nuxt-booster-message-reduced-bandwidth`</nobr>   | Connection bandwidth is too low.                                            |
| <nobr>`nuxt-booster-message-weak-hardware`</nobr>       | User hardware are not sufficient.                                           |
| <nobr>`nuxt-booster-message-unsupported-browser`</nobr> | User Browser is not supported by [`Browserslist`](/guide/options#browsersupport). |

**Example**

````html
<!-- initial -->
<div id="nuxt-booster-message-unsupported-browser">
  Your browser is not supported!
</div>

<!-- active -->
<div id="nuxt-booster-message-unsupported-browser" style="display: block;">
  Your browser is not supported!
</div>
````

## Buttons

The buttons are interaction elements for the user with which he can make his choice at the relevant event.

Initially, all IDs except for `nuxt-booster-button-nojs` are set to `display: none;`.
When an event is triggered, the relevant button is displayed via the ID using the style attribute `display: block;`.

| Selector                                                    | Description                                                                                                                                                       |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <nobr>`.nuxt-booster-button-init-nojs`</nobr>         | Visible when javascript is disabled, needed so that the user can hide the layer. Requires the [Hide Layer](/components/booster-layer#hide-layer) implementation. |
| <nobr>`.nuxt-booster-button-init-reduced-view`</nobr> | Is used to offer the user the possibility to visit the page only with activated fonts and images. Other initialisations of the Javascript are prevented.          |
| <nobr>`.nuxt-booster-button-init-app`</nobr>          | Activates all features. The initialisation of the JavaScript is started, images are loaded.                                                                       |

::: info
It is recommended to register an **Inline Click-Event** for the buttons `.nuxt-booster-button-init-reduced-view` and `.nuxt-booster-button-init-app`.<br><br>More information under [Force App initialization](/components/booster-layer#force-app-initialization)
:::

## Hide Layer

````html
<label for="nuxt-booster-layer-close">
  Close Layer
</label>
````

The layer can be closed via a `for` attribute with the `id` `nuxt-booster-layer-close`.

- ✅ Closing mechanics does not require javascript.

## Template

````html
<booster-layer>
  <div>
    <p>Sorry, but you will have a limited user experience due to a…</p>

    <ul style="padding: 0; list-style: none;">
      <!-- Displayed when javascript is disabled. -->
      <li id="nuxt-booster-message-nojs">
        disabled javascript
      </li>
      <!-- Displayed when browser does not support. -->
      <li id="nuxt-booster-message-unsupported-browser">
        outdated browser
      </li>
      <!-- Displayed when connection bandwidth is too low. -->
      <li id="nuxt-booster-message-reduced-bandwidth">
        reduced-bandwidth
      </li>
      <!-- Displayed when user hardware are not sufficient.  -->
      <li id="nuxt-booster-message-weak-hardware">
        weak hardware
      </li>
      <!-- Displayed when the user batteries are not sufficient.  -->
      <li id="nuxt-booster-message-low-battery">
        low battery
      </li>
    </ul>

    <!-- Button to hide the layer with no javascript -->
    <button class="nuxt-booster-button-init-nojs">
      <label for="nuxt-booster-layer-close">
        Apply without js
      </label>
    </button>

    <!-- Button for use without javascript and with fonts -->
    <button class="nuxt-booster-button-init-reduced-view">
      <label for="nuxt-booster-layer-close">
        Apply without scripts
      </label>
    </button>

    <!-- Button for activate javascript by bad connection or browser support -->
    <button class="nuxt-booster-button-init-app">
      Apply with all Features
    </button>
  </div>
</booster-layer>
````

## Force App initialization

Set the global variable `__NUXT_BOOSTER_AUTO_INIT__` to `true` to force the initialization of the app.

| Variable                      | Type      | Description                                                                  | Default |
| ----------------------------- | --------- | ---------------------------------------------------------------------------- | ------- |
| `__NUXT_BOOSTER_AUTO_INIT__` | `Boolean` | If set, initialisation continues after the javascript has been fully loaded. | `false` |
