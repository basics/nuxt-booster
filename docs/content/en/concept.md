---
title: Concept
description: ''
position: 3


reducedInitialDownload:
  - only the critical viewport resources will be loaded
  - all other resources will be loaded on demand, e.g. when scrolling.

reductionofTimingMetrics:
  - FCP
  - TTI
  - TBT

factors: 
  - no Javascript enabled
  - reduced bandwidth
  - weak hardware
  - unsupported browser

---


`nuxt-speedkit` is used to increase the initial loading performance of the website.  
For this purpose, various tools are provided that optimise the loading and initialisation of resources (`images`, `fonts`) and components automatically and on demand.

This has the following impact:

**1. Reduced initial download of the web page**
<list type="success" :items="reducedInitialDownload"></list>

**2. Reduction of timing metrics**
<list type="success" :items="reductionofTimingMetrics"></list>

The module recognises the critical resources (`images`, `fonts`, `javascript`) for the initial load and preloads them when the page is called up directly. However, if an impairment of the UX is detected during the initialisation phase due to the following factors:

<list type="info" :items="factors"></list>

the further initialisation process is paused and the user is given the decision whether to load the website completely (incl. Javascript) or to have only the static content (`HTML`, `CSS`, `images` and `fonts`) displayed. Through this loading behaviour, a correspondingly high performance score can be achieved even with a low bandwidth, as specified by the lighthouse test, for example. For the user, on the other hand, it becomes transparent why there may be delays in the display of complex components or static resources in the further course of the website visit.

For this reason, this module can only be used with NuxtJS, as this requires static HTML in order to continue to display the full content to the user despite uninitialised Javascript.

