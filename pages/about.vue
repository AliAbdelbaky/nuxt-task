<template>
  <h2 class="text-2xl leading-7 font-semibold">Welcome to aboutpage</h2>
</template>

<script>
export default {
  name: 'about',
  head() {
    return {
      title: 'about',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'where we can do a description for about page ',
        },
      ],
    }
  },
}
</script>
