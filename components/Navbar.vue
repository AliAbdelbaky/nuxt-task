<template>
  <v-app-bar class="uppercase" app color="white">
    <v-toolbar-title>Title</v-toolbar-title>

    <v-spacer></v-spacer>

    <nuxt-link class=" mr-4 font-bold text-black" :to="{ name: 'index' }">homepage</nuxt-link>

    <nuxt-link class="font-bold text-black" :to="{ name: 'about' }">about us</nuxt-link>
  </v-app-bar>
</template>
<script>
export default {}
</script>
<style>
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
a{
  color: #000 !important;
  border-bottom: 1px solid rgba(0, 0, 0, 0);
}
a.nuxt-link-active.nuxt-link-exact-active{
  border-bottom: 1px solid #000;
}
</style>
