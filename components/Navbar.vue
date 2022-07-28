<template>
  <nav>
    <ul>
      <li>
        <nuxt-link :to="{ name: 'index' }">homepage</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{ name: 'about' }">about us</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style>
.nuxt-logo {
  height: 180px;
}
</style>
