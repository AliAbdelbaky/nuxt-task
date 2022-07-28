<template>
  <h2 class="text-2xl leading-7 font-semibold">
    Welcome to your Nuxt Application
    <ph-horse />
    <ph-heart :size="32" color="hotpink" weight="fill" />
    <ph-cube />
  </h2>
</template>

<script>
import { PhHorse, PhHeart, PhCube } from 'phosphor-vue'
export default {
  name: 'IndexPage',
  components: {
    PhHorse,
    PhHeart,
    PhCube,
  },
  provide: {
    color: 'limegreen',
    size: 32,
    weight: 'bold',
    mirrored: false,
  },
  head() {
    return {
      title: 'homepage',
    }
  },
}
</script>
