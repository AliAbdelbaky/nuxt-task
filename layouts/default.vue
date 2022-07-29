<template>
  <v-app>
    <Navbar />
    <v-app app>
      <v-main>
        <Nuxt />
      </v-main>
    </v-app>
  </v-app>
</template>
<script>
export default {
  head() {
    return {
      titleTemplate: '%s - Nuxt Task',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'default description incase of forgettting desc at any page',
        },
      ],
    }
  },
}
</script>
