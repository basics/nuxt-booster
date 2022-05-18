---
title: WeakHardwareOverlay
description: ''
position: 336
category: Components

---

Der `PerformanceIssueOverlay` findet seinen Einsatz in Komponenten die vom SpeedkitLayer Ereignis `Weak Hardware` beeinträchtigt werden. (*Beispiel: Komponente benötigt das ausführen von `mounted` für funktionialität.*)

> 

<alert>
Das <strong>Performance Issue Ereignis</strong> tritt ein wenn bei der Initialisierung ermittelt wurde, dass der Client mit der Ausführung überlastet ist und der Benutzer im SpeedkitLayer den Button <strong>#nuxt-speedkit-button-init-reduced-view</strong> bestätigt hat.

- [Mehr erfahren zu SpeedkitLayer Interaktionen)](/components/speedkit-layer#buttons)
</alert>


Grundsätzlich wird das Overlay verwendet um Inhalt sichtbar zu machen wenn das `Weak Hardware` eingetreten ist, tritt dieses nicht ein, ist das Overlay nicht sichtbar.

Es wird empfohlen ein Interaktions-Element im Overlay zu verbauen, das dem Benutzer die möglichkeit bietet in den normalen Zustand zu wechseln. Hierfür muss das Interaktions-Element die ID `nuxt-speedkit-button-init-app` bekommen und reagiert somit auf `click` mit dem initialisieren der App.

## Example

Beispiel für das definieren einer benutzerdefinierten `WeakHardwareOverlay` Komponente und deren einbau in einer Ziel Komponente die vom Ereignis `Weak Hardware` beeinträchtigt ist.

### Customize Overlay

````vue[@/components/WeakHardwareOverlay.vue]
<template>
  <speedkit-weak-hardware-overlay>
    To improve your experience, extensive features have been disabled.<br>
    <button id="nuxt-speedkit-button-init-app">
     Click here to enable them.
    </button>
  </speedkit-weak-hardware-overlay>
</template>

<script>

import SpeedkitWeakHardwareOverlay from 'nuxt-speedkit/components/WeakHardwareOverlay';
export default {
  components: { SpeedkitWeakHardwareOverlay }
};

</script>

<style lang="postcss" scoped>
.nuxt-speedkit-weak-hardware-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0 0 0 / 60%);
  backdrop-filter: blur(em(2px));
}
</style>
````



### Usage Overlay

````vue[@/components/Player.vue]
<template>
  <div>
    <div ref="player" />
    <weak-hardware-overlay />
  </div>
</template>

<script>

import WeakHardwareOverlay from '@/components/WeakHardwareOverlay';
export default {
  components: { WeakHardwareOverlay },

  mounted () {
    this.player = new Player(this.$refs.player)
  }
};

</script>

<style lang="postcss" scoped>
.nuxt-speedkit-performance-issue-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0 0 0 / 60%);
  backdrop-filter: blur(2px);
}
</style>
````


<br>


