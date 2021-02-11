---
title: SpeedkitLayer
description: ''
position: 10
category: Components

events:
  - javascript is disabled
  - browser does not support
  - user hardware is not sufficient
  - connection is too slow


---

[view source](https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/main/lib/components/SpeedkitLayer.vue)

Der SpeedkitLayer wird verwendet, als Hinweis für den Benutzer wenn folgende Ereignisse eintreten:

<list :items="events" type="info"></list>

## Usage

Wenn der SpeedkitLayer verbaut ist, wird das Initialisieren der App gesteuert. Heißt wenn eines der Ereignisse eintritt, wird das ausführen der App, erst wieder über eine Benutzer-Interaktion gestartet.

Platziert wird der Layer einmalig im Layout der Seite. Dieser dient als Wrapper und muss anhand des [Default Templates](#) befüllt werden, [siehe Beispiel](https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/main/example/components/InfoLayer.vue).

Der Inhalt besteht aus Mitteilungen und Buttons, die im jeweiligen Ereignis eingeblendet werden.

Mitteilungen und Buttons werden mit einer ID definiert, diese sind default per CSS auf `display: none;` gesetzt.

- e.g. `nuxt-speedkit__message__unsupported-browser` für Mitteilung
- e.g. `nuxt-speedkit__button__init-app` für Button

<alert>Für die Schließmechanik des Layers, [siehe Hide Layer](/components/speedkit-layer#hide-layer).</alert>


## Mitteilungen

Die Mitteilungen sind Elemente (Container), diese werden in den jeweiligen Ereignissen eingeblendet.

**Example**
```html 
<div id="nuxt-speedkit__message__unsupported-browser">
  Your browser is not supported!
</div>
```


### `nuxt-speedkit__message__unsupported-browser`

Browser wird nicht unterstützt         
### `nuxt-speedkit__message__outdated-device`

Benutzer Hardware ist nicht ausreichend
### `nuxt-speedkit__message__slow-connection`

connection is too slow                 

## Buttons

Die Buttons sind die Interkation Elemente für den Benutzer.  
Je nach Ereignis, muss der Benutzer dort seine Wahl treffen.
### `nuxt-speedkit__button__init-nojs`

Sichtbar bei deaktivierten Javascript, wird benötigt damit der User den Layer ausblenden kann.  
Benötigt die [Hide Layer](/components/speedkit-layer#hide-layer) implementation.

### `nuxt-speedkit__button__init-font`

Wird eingesetzt um dem Benutzer die Möglichkeit zu bieten nur mit aktivierten Schriften die Seite zu besuchen. Weitere initialisierung des Javascript und laden der Bilder wird unterbunden.

Sichtbar bei Unsupported-Browser und nicht ausreichender Hardware.

Besitzt ein auf die ID registrierten `click` Handler.
### `nuxt-speedkit__button__init-app`

Dient zum aktiveren aller Features. Die initialisierung des Javascripts wird gestartet, Bilder werden geladen.

Sichtbar bei Unsupported-Browser und nicht ausreichender Hardware.

Besitzt ein auf ID registrierten `click` Handler.
## Force App initialization or Font load

Für die Fälle Unsupported-Browser und nicht ausreichender Hardware, muss mit der ID auch ein `onclick` Event gesetzt werden.

In dem Event muss die globale Variable `__NUXT_SPEEDKIT_FONT_INIT__` oder `__NUXT_SPEEDKIT_FONT_INIT__` auf `true` gesetzt werden.

Diese werden benötigt, wenn der Benutzer schon reagiert hat bevor das initiale Javascript geladen wurden ist. Nach erfolgreichem Laden des Javascripts, wird die App automatisch initialisiert.


### `__NUXT_SPEEDKIT_FONT_INIT__`

Wird gesetzt wenn nur Schriften angezeigt werden.

### `__NUXT_SPEEDKIT_AUTO_INIT__`

Wird gesetzt wenn App initialisiert wird.


```html
<!-- Button for use without javascript and with fonts -->
<button 
  id="nuxt-speedkit__button__init-font" 
  onclick="window.__NUXT_SPEEDKIT_FONT_INIT__ = true;"
  >…</button>

<!-- Button for activate javascript by bad connection or browser support -->
<button 
  id="nuxt-speedkit__button__init-app" 
  onclick="window.__NUXT_SPEEDKIT_AUTO_INIT__ = true;"
  >…</button>
```

## Hide Layer

Der Layer kann über ein `for` Attribute mit der ID `nuxt-speedkit__speedkit-layer__close` geschlossen werden.

```html
<label for="nuxt-speedkit__speedkit-layer__close">
  Close Layer
</label>
```

---

## Example

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

