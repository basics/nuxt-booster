<template>
  <div>
    <blockquote>Is Critical? {{ isCritical }}</blockquote>
    <h1 v-font="$getFont('Merriweather')">Headline</h1>
    <p v-font="$getFont('Quicksand')">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </p>
    <ul v-font="$getFont('Quicksand')">
      <li>List Item 1.</li>
      <li>List Item 2.</li>
      <li>List Item 3.</li>
    </ul>
    <h2 v-font="$getFont('Montserrat Alternates')">Sub-Headline</h2>
    <blockquote v-font="$getFont('Quicksand', 300)">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua.
    </blockquote>
    <div
      v-font="[
        $getFont('Merriweather'),
        $getFont('Merriweather', 700, 'normal', { selector: 'strong' }),
        $getFont('Merriweather', 400, 'italic', { selector: 'em' }),
        $getFont('Merriweather', 700, 'italic', {
          selector: 'em strong, strong em'
        })
      ]"
      class="external"
      v-html="externalContent" />
  </div>
</template>

<script setup>
import { useSpeedkit } from '#speedkit/composables/speedkit';
const { $getFont, isCritical } = useSpeedkit({ critical: true });
</script>

<script>
export default {
  data: function () {
    return {
      externalContent:
        '<p><strong>Lorem ipsum dolor sit amet</strong>, <br><em>consetetur sadipscing elitr</em>, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>'
    };
  }
};
</script>
