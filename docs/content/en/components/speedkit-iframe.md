---
title: SpeedkitIframe
description: ''
position: 35
category: Components

primaryList:
  - Ruckler (Kurzzeitig einfrieren der Seite)
  - Verzögertes laden von Resourcen (Bilder, Fonts)
  - Unnötig erzeugter Traffic
secondaryList:
  - Iframe laden ist reaktiv.
  - Es werden keine Resourcen beim laden blockiert.
  - Traffic wird erst erzeugt, wenn Iframe sichtbar.

---

`SpeedkitIframe`, Iframe & IntersectionObserver in one.

## Exkurs

Iframes neigen dazu, im speziellen Fall beim initialen PageLoad, durch das massive laden von Resourcen einer anderer Quelle, den Aufbau und Initialisierung der eigentlichen Seite zu stören. 

**Für den Benutzer ist dies ist inbesondere spürbar durch:**

<list :items="primaryList" type="warning"></list>

## Solution

Um diese Punkte zu lösen, sollte bei der Verwendung darauf geachtet werden, das die Initialisierung des Iframes nachgelagert geschieht.
Dies kann zum Beispiel über einen [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) realisiert werden. Dieser ist dafür zuständig die Source auf dem Iframe zu setzen, sobald dieser den Sichtbarenbereich erreicht.

**Somit können folgende Bedingungen erfüllt werden:**

<list :items="secondaryList" type="success"></list>


Die oben erwähnte Strategie bringt das `SpeedkitIframe` mit, arbeiten lässt es sich wie mit einem normalen [HTML Iframe](https://www.w3schools.com/tags/tag_iframe.asp).
Der enthaltene [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) wird über die Eigenachaft `intersectionObserver` konfiguriert. 

## Properties

```html
<speedkit-iframe src="…" :intersection-observer="…" />
```

Use native attributes from [HTML Iframe](https://www.w3schools.com/tags/tag_iframe.asp).

### `intersectionObserver`
- Type: `Object` [IntersectionObserver Properties](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver#properties)
  - Default: `{ trackVisibility: true, delay: 350 }`

Legt die Optionen vom enthaltenen [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver) fest.  

For advanced usage, [learn more](https://web.dev/intersectionobserver-v2/) about option `trackVisibility` from [IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver).

## Events

```html
<speedkit-iframe 
  @load="console.log('Loaded!')" 
  @enter="console.log('Viewport!')" 
/>
```

### `load`

Tritt ein wenn Iframe fertig geladen hat.

### `enter`

Tritt ein wenn Komponente den Viewport erreicht hat.

