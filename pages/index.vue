<template>
  <div>
    <h2 class="text-2xl leading-7 font-semibold">
      Welcome to your Nuxt Application
    </h2>
    <h1
      class="text-3xl font-bold underline shadow-indigo-500/80 rounded-md bg-fuchsia-600 rounded-lg px-6 py-6 text-sm mr-8 mx-8 shadow-lg mt-[4rem] text-center bg-grey hover:bg-slate-600 cursor-pointer"
    >
      Hello world from tailwindcss!
    </h1>
    <!-- <pre>
        {{ posts }}
      </pre> -->
    <div class="card-container">
      <homepage-cards />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({ store }) {
    await store.dispatch('cards/fetchCards')
    return {}
  },
  head() {
    return {
      title: 'homepage',
    }
  },
  computed: {
    getData() {
      return this.$store.state.cards.cards
    },
  },
}
</script>
