<template>
  <div>
    <Navbar />
    <Nuxt />
  </div>
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
