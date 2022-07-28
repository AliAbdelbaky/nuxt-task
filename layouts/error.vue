<template>
  <div>
    <h1>
      {{ message }}
    </h1>
    <h5 v-if="statusCode === 404">
      <nuxt-link :to="{ name: 'index' }"> return to homepage </nuxt-link>
    </h5>
  </div>
</template>
<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  head() {
    return {
      title: this.message,
    }
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message
    },
  },
}
</script>
