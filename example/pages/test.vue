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
export default {
  speedkitComponents: {
    test0: () => import('@/components/atoms/HydrateTest'),
    test1: () => import('@/components/atoms/HydrateTest1'),
    test2: () => import('@/components/atoms/HydrateTest2'),
    test3: () => import('@/components/atoms/HydrateTest3'),
    test4: () => import('@/components/atoms/HydrateTest4'),
    test5: () => import('@/components/atoms/HydrateTest5'),
    test6: () => import('@/components/atoms/HydrateTest6'),
    test7: () => import('@/components/atoms/HydrateTest7'),
    test8: () => import('@/components/atoms/HydrateTest8'),
    test9: () => import('@/components/atoms/HydrateTest9'),
    test10: () => import('@/components/atoms/HydrateTest10'),
    test11: () => import('@/components/atoms/HydrateTest11'),
    test12: () => import('@/components/atoms/HydrateTest12')
  }
}
</script>

<style>
.test {
  position: relative;
  top: 200vh;
}
</style>
