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
  - Schließmechanik benötigt kein Javascript.


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

Wenn der SpeedkitLayer verbaut ist, wird das Initialisieren der App gesteuert. Heißt wenn eines der Ereignisse eintritt, wird das initiale ausführen der App pausiert, erst über eine Benutzer-Interaktion wird diese wieder gestartet.

Platziert wird der Layer einmalig im Layout der Seite.
Dieser dient als Wrapper und muss anhand des [Template](/components/speedkit-layer#template) befüllt werden, [siehe Beispiel Komponente](https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/main/example/components/InfoLayer.vue).

Der Inhalt besteht aus Mitteilungen und Buttons, die im jeweiligen Ereignis eingeblendet werden.

Mitteilungen und Buttons werden mit einer `id` definiert, diese sind default per CSS auf `display: none;` gesetzt.

- e.g. `nuxt-speedkit__message__unsupported-browser` für Mitteilung
- e.g. `nuxt-speedkit__button__init-app` für Button

<alert>Für die Schließmechanik des Layers, siehe [Hide Layer](/components/speedkit-layer#hide-layer).</alert>


## Messages

Die Mitteilungen sind Elemente, die zu den jeweiligen Ereignissen eingeblendet werden.

Initial sind alle IDs auf `display: none;` gesetzt, somit ist keine Mitteilung sichtbar.  
Wenn ein Ereigniss eintritt, wird über die ID die jewelige Mitteilung per Style Attribute `display: block;` eingeblendet.

| ID                                                         | Description                                                                                |
| ---------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| <nobr>`nuxt-speedkit__message__unsupported-browser`</nobr> | Benutzer Browser wird von der [`Browserslist`](/options#browsersupport) nicht unterstützt. |
| <nobr>`nuxt-speedkit__message__outdated-device`</nobr>     | Benutzer Hardware (Anzahl Prozessor & Arbeitsspeicher) sind nicht ausreichend.             |
| <nobr>`nuxt-speedkit__message__slow-connection`</nobr>     | Verbindungsgeschwindigkeit ist zu niedrig.                                                 |

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

Die Buttons sind die Interkation Elemente für den Benutzer.
Je nach Ereignis, muss der Benutzer über diese seine Wahl treffen.

Initial sind alle IDs bis auf `nuxt-speedkit__button__init-nojs` auf `display: none;` gesetzt.
Wenn ein Ereigniss eintritt, wird über die ID der jewelige Button per Style Attribute `display: block;` eingeblendet.

| ID                                              | Description                                                                                                                                                                                  |
| ----------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <nobr>`nuxt-speedkit__button__init-nojs`</nobr> | Sichtbar bei deaktivierten Javascript, wird benötigt damit der User den Layer ausblenden kann. Benötigt die [Hide Layer](/components/speedkit-layer#hide-layer) implementation.              |
| <nobr>`nuxt-speedkit__button__init-font`</nobr> | Wird eingesetzt um dem Benutzer die Möglichkeit zu bieten nur mit aktivierten Schriften die Seite zu besuchen. Weitere Initialisierung des Javascript und laden der Bilder wird unterbunden. |
| <nobr>`nuxt-speedkit__button__init-app`</nobr>  | Dient zum aktiveren aller Features. Die initialisierung des Javascripts wird gestartet, Bilder werden geladen.                                                                               |



<alert type="info">Es wird empfohlen bei den Buttons `nuxt-speedkit__button__init-font` und `nuxt-speedkit__button__init-app` ein **Inline Click-Event** zu registrieren.<br><br>More information under [Force App initialization or Font load](/components/speedkit-layer#force-app-initialization-or-font-load)</alert>



## Force initialization (App, Font)

Für die Fälle Unsupported-Browser und nicht ausreichender Hardware, muss mit der `id` auch ein `onclick` Event gesetzt werden.

In dem Event muss die globale Variable `__NUXT_SPEEDKIT_FONT_INIT__` oder `__NUXT_SPEEDKIT_FONT_INIT__` auf `true` gesetzt werden.

Diese werden benötigt, wenn der Benutzer schon reagiert hat bevor das initiale Javascript geladen wurden ist. Nach erfolgreichem Laden des Javascripts, wird die App automatisch initialisiert.

| Variable                      | Type      | Description                                                                               | Default |
| ----------------------------- | --------- | ----------------------------------------------------------------------------------------- | ------- |
| `__NUXT_SPEEDKIT_FONT_INIT__` | `Boolean` | Wenn gesetzt, werden nur die Schriften initialisiert.                                     | `false` |
| `__NUXT_SPEEDKIT_AUTO_INIT__` | `Boolean` | Wenn gesetzt, wird nach vollständigen laden des Javascript initialisierung weitergeführt. | `false` |

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

Der Layer kann über ein `for` Attribute mit der `id` `nuxt-speedkit__speedkit-layer__close` geschlossen werden.

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
