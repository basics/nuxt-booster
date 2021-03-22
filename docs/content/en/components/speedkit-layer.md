---
title: SpeedkitLayer
description: ''
position: 30
category: Components

solutions:
  - reduced bandwidth
  - weak hardware
  - unsupported browser

hideLayerFeatures:
  - Closing mechanics does not require javascript.


---

The loading behavior of webpages based on nuxtjs is designed in such a way that all necessary Javascript resources are preloaded and directly initialized with the initial load of the page. However, this behavior creates a negative impact on the Lighthouse Performance Score (TTI) for larger pages that have an increased initial load of additional resources, such as fonts, images, plugins, modules (nuxt-i18n, ...). 

## Excursus

The Lighthouse Test is not a tool to make a general statement about the quality of a website programming. Lighthouse rather tries to map a metric for the usability of a page from the user's point of view. This includes accessibility, best practices, SEO and of course performance. 

This last point is often misinterpreted by developers. If you want to implement features that increase usability for the user (interactions/more complex animations, ...), this will always have an impact on performance in the Lighthouse Test for larger website projects, as the corresponding Javascript must be loaded for this. Finally, Lighthouse does also not rate the design, but the accessibility (size of click areas, etc.) of a website.
You should therefore not ask yourself the following question: "How can I fully optimize my JavaScript to achieve a Lighthouse score of 100/100?". You have to ask yourself much more the question: "What is especially important to a user with low bandwidth or weak hardware on my site?".

The answer to this is relatively simple: the site must first and foremost work and you must be able to get to the information you need quickly.

No more and no less.

The user doesn't need any fancy slider animations and parallax effects that can only be implemented with certain libraries. Or a softload mechanism to get to more pages in a more elegant and animated way, but which initially needs an increased amount of javascript logic. All he wants is that information is retrievable reasonably fast and he can click through the presence. Among other things, he doesn't need full retina images, which simply take a long time to load with 3G.

## Solution

For this reason, we pause the initialization of the javascript in the following cases:

<list :items="solutions" type="info"></list>
 
In these cases, a layer will be displayed that allows the user to decide whether he wants to initialize the full experience and download further resources despite the physical impairment or whether he wants to visit the website with a reduced UX (without Javascript).
The layer is also displayed with a corresponding message when Javascript is deactivated.

[Learn more in Concept.](/concept)
## Usage

If the SpeedkitLayer is implemented, the javascript initialisation is automatically monitored. If one of the events described above occurs, the process is paused and only continued or cancelled after a user interaction in the layer.

The layer is placed once in the layout (e.g. `layouts/default.vue`). 
The included SpeedkitLayer serves as a wrapper and must be filled according to the [template](/components/speedkit-layer#template), see [example component](https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/main/example/components/InfoLayer.vue).

The content contains messages and buttons that are displayed in the respective event.
Messages and buttons are defined with an `id`, these are set to `display: none;` by default via CSS.

- e.g. `nuxt-speedkit__message__unsupported-browser` for message
- e.g. `nuxt-speedkit__button__init-app` for button

<alert>For the closing mechanism of the layer, see [Hide Layer](/components/speedkit-layer#hide-layer).</alert>

## Messages

The messages are elements that are displayed for the relevant events.

Initially, all IDs are set to `display: none;`, so no message is visible.  
When an event is triggered, the relevant message is displayed via the ID using the style attribute `display: block;`.
	
| ID                                                         | Description                                                                 |
| ---------------------------------------------------------- | --------------------------------------------------------------------------- |
| <nobr>`nuxt-speedkit__message__unsupported-browser`</nobr> | User Browser is not supported by [`Browserslist`](/options#browsersupport). |
| <nobr>`nuxt-speedkit__message__outdated-device`</nobr>     | User hardware (number of processor & RAM) are not sufficient.               |
| <nobr>`nuxt-speedkit__message__slow-connection`</nobr>     | Connection speed is too low.                                                |

**Example**
```html
<!-- initial -->
<div id="nuxt-speedkit__message__unsupported-browser">
  Your browser is not supported!
</div>

<!-- active -->
<div id="nuxt-speedkit__message__unsupported-browser" style="display: block;">
  Your browser is not supported!
</div>
```

## Buttons

The buttons are interaction elements for the user with which he can make his choice at the relevant event.

Initially, all IDs except for `nuxt-speedkit__button__init-nojs` are set to `display: none;`.
When an event is triggered, the relevant button is displayed via the ID using the style attribute `display: block;`.

| ID                                              | Description                                                                                                                                                               |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <nobr>`nuxt-speedkit__button__init-nojs`</nobr> | Visible when javascript is disabled, needed so that the user can hide the layer. Requires the [Hide Layer](/components/speedkit-layer#hide-layer) implementation.         |
| <nobr>`nuxt-speedkit__button__init-font`</nobr> | Is used to offer the user the possibility to visit the page only with activated fonts. Other initialisations of the Javascript and loading of the pictures are prevented. |
| <nobr>`nuxt-speedkit__button__init-app`</nobr>  | Activates all features. The initialisation of the JavaScript is started, images are loaded.                                                                               |




<alert type="info">It is recommended to register an **Inline Click-Event** for the buttons `nuxt-speedkit__button__init-font` and `nuxt-speedkit__button__init-app`.<br><br>More information under [Force App initialization or Font load](/components/speedkit-layer#force-app-initialization-or-font-load)</alert>



## Force initialization (App, Font)

For Unsupported-Browser and Insufficient Hardware events, an `onclick` event must also be set with the `id`.

In the event, the global variable `__NUXT_SPEEDKIT_FONT_INIT__` or `__NUXT_SPEEDKIT_FONT_INIT__` must be set to `true`.

These are needed if the user has already reacted before the initial Javascript has been loaded. After the javascript has been successfully loaded, the app is automatically initialised.

| Variable                      | Type      | Description                                                                  | Default |
| ----------------------------- | --------- | ---------------------------------------------------------------------------- | ------- |
| `__NUXT_SPEEDKIT_FONT_INIT__` | `Boolean` | If set, only the fonts are initialised.                                      | `false` |
| `__NUXT_SPEEDKIT_AUTO_INIT__` | `Boolean` | If set, initialisation continues after the javascript has been fully loaded. | `false` |

**Example**

```html
<button
  id="nuxt-speedkit__button__init-font"
  onclick="window.__NUXT_SPEEDKIT_FONT_INIT__ = true;"
  >…</button>

<button
  id="nuxt-speedkit__button__init-app"
  onclick="window.__NUXT_SPEEDKIT_AUTO_INIT__ = true;"
  >…</button>
```

## Hide Layer

```html
<label for="nuxt-speedkit__speedkit-layer__close">
  Close Layer
</label>
```

The layer can be closed via a `for` attribute with the `id` `nuxt-speedkit__speedkit-layer__close`.

<list :items="hideLayerFeatures"></list>

## Template

```html
<speedkit-layer>
  <div>

    <p>Sorry, but you will have a limited user experience due to a…</p>

    <ul style="padding: 0; list-style: none;">
      <!-- Displayed when javascript is disabled. -->
      <li id="nuxt-speedkit__message__nojs">
        disabled javascript
      </li>
      <!-- Displayed when browser does not support. -->
      <li id="nuxt-speedkit__message__unsupported-browser">
        outdated browser
      </li>
      <!-- Displayed when user hardware is not sufficient. -->
      <li id="nuxt-speedkit__message__outdated-device">
        outdated device
      </li>
      <!-- Displayed when connection is too slow. -->
      <li id="nuxt-speedkit__message__slow-connection">
        slow connection
      </li>
    </ul>

    <!-- Button to hide the layer with no javascript -->
    <button id="nuxt-speedkit__button__init-nojs">
      <label for="nuxt-speedkit__speedkit-layer__close">
        Apply without js
      </label>
    </button>

    <!-- Button for use without javascript and with fonts -->
    <button id="nuxt-speedkit__button__init-font" onclick="window.__NUXT_SPEEDKIT_FONT_INIT__ = true;">
      <label for="nuxt-speedkit__speedkit-layer__close">
        Apply with Fonts
      </label>
    </button>

    <!-- Button for activate javascript by bad connection or browser support -->
    <button id="nuxt-speedkit__button__init-app" onclick="window.__NUXT_SPEEDKIT_AUTO_INIT__ = true;">
      Apply with all Features
    </button>

  </div>
</speedkit-layer>
```
