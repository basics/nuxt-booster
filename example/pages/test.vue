<template>
  <div>
    hello world wjhdhfjdhfj kdhfkfh dkfjdk
    <test0 class="test" />
    <test1 class="test" />
    <test2 class="test" />
    <test3 class="test" />
    <test4 class="test" />
    <test5 class="test" />
    <test6 class="test" />
    <test7 class="test" />
    <test8 class="test" />
    <test9 class="test" />
    <test10 class="test" />
    <test11 class="test" />
    <test12 class="test" />
  </div>
</template>

<script>
import { hydrateWhenVisible } from 'vue-lazy-hydration'

export default {
  components: {
    test0: hydrateWhenVisible(() => import(/* webpackMode: "lazy" */'@/components/atoms/HydrateTest'), { observerOptions: { rootMargin: '0px' } }),
    test1: hydrateWhenVisible(() => import(/* webpackMode: "lazy" */'@/components/atoms/HydrateTest1'), { observerOptions: { rootMargin: '0px' } }),
    test2: hydrateWhenVisible(() => import(/* webpackMode: "lazy" */'@/components/atoms/HydrateTest2'), { observerOptions: { rootMargin: '0px' } }),
    test3: hydrateWhenVisible(() => import(/* webpackMode: "lazy" */'@/components/atoms/HydrateTest3'), { observerOptions: { rootMargin: '0px' } }),
    test4: hydrateWhenVisible(() => import(/* webpackMode: "lazy" */'@/components/atoms/HydrateTest4'), { observerOptions: { rootMargin: '0px' } }),
    test5: hydrateWhenVisible(() => import(/* webpackMode: "lazy" */'@/components/atoms/HydrateTest5'), { observerOptions: { rootMargin: '0px' } }),
    test6: hydrateWhenVisible(() => import(/* webpackMode: "lazy" */'@/components/atoms/HydrateTest6'), { observerOptions: { rootMargin: '0px' } }),
    test7: hydrateWhenVisible(() => import(/* webpackMode: "lazy" */'@/components/atoms/HydrateTest7'), { observerOptions: { rootMargin: '0px' } }),
    test8: hydrateWhenVisible(() => import(/* webpackMode: "lazy" */'@/components/atoms/HydrateTest8'), { observerOptions: { rootMargin: '0px' } }),
    test9: hydrateWhenVisible(() => import(/* webpackMode: "lazy" */'@/components/atoms/HydrateTest9'), { observerOptions: { rootMargin: '0px' } }),
    test10: hydrateWhenVisible(() => import(/* webpackMode: "lazy" */'@/components/atoms/HydrateTest10'), { observerOptions: { rootMargin: '0px' } }),
    test11: hydrateWhenVisible(() => import(/* webpackMode: "lazy" */'@/components/atoms/HydrateTest11'), { observerOptions: { rootMargin: '0px' } }),
    test12: hydrateWhenVisible(() => import(/* webpackMode: "lazy" */'@/components/atoms/HydrateTest12'), { observerOptions: { rootMargin: '0px' } })
  },

  data () {
    return {

    }
  },

  created () {

  }
}
</script>

<style>
.test {
  position: relative;
  top: 200vh;
}
</style>
