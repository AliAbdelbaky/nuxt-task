<template>
  <a-layout-header :style="{ position: 'sticky', zIndex: 1, width: '100%' }">
    <div class="logo" />
    <a-menu
      v-model="selectedKeys"
      theme="dark"
      mode="horizontal"
      :style="{ lineHeight: '64px' }"
    >
      <a-menu-item key="1"
        ><nuxt-link :to="{ name: 'index' }">homepage</nuxt-link></a-menu-item
      >
      <a-menu-item key="2"
        ><nuxt-link :to="{ name: 'about' }">about us</nuxt-link></a-menu-item
      >
    </a-menu>
  </a-layout-header>
</template>
<script>
export default {
  data() {
    return {
      selectedKeys: ['2'],
    }
  },
}
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
</style>
