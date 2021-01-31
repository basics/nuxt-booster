<template>
  <div class="page-speedkit-picture">
    <div v-for="({text}, index) in components" :key="index" v-html="text" />
  </div>
</template>

<script>
export default {
  asyncData () {
    return {
      components: getComponents(100)
    };
  }
};

function getComponents (count = 1) {
  const components = [];
  for (let i = 0; i < count; i++) {
    components.push({
      text: '<p>Habitasse nisi, porro? Repellendus, perspiciatis lobortis? Luctus velit ipsam cras excepturi expedita vivamus odit quo occaecati? Dis aspernatur pede culpa! Voluptate ullamcorper ipsum laoreet? Cupiditate error debitis minus tincidunt auctor, amet aute est convallis ultricies gravida facilisis quae laboriosam tincidunt torquent nostra nostrum nulla adipiscing, fames torquent orci sodales omnis.</p><p>Potenti ut unde doloribus optio quasi vitae veritatis dui, commodi dis sollicitudin porro sed. Congue? Non? Distinctio mattis? Velit, nihil cum, cupiditate euismod magnam, quod lectus, iusto curabitur urna dolore praesentium tempor! Hymenaeos eget doloribus quaerat molestias vel nonummy ridiculus accusamus eum quis magni. Dolore, doloribus nihil donec. Quisque lacus.</p>'
    });
  }
  return components;
}

</script>

<style lang="postcss" scoped>
.page-speedkit-picture {
  font-size: calc(20 / 16 * 1em);

  & > * {
    margin: 25px 0 !important;

    &:first-child {
      margin-top: 0 !important;
    }

    &:last-child {
      margin-bottom: 0 !important;
    }
  }
}

</style>
