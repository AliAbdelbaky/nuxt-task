<template>
  <div>
    <header class="relative h-[100vh]">
      <div class="h-[80vh] overflow-hidden mx-4 my-4 rounded-3xl">
        <v-img
          src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
          gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        ></v-img>
      </div>
      <div class="options absolute bottom-0 w-[90%] right-0 left-0 m-auto">
        <v-card
          class="overflow-hidden"
          style="background-color: transparent; border: none; box-shadow: none"
        >
          <v-app-bar
            style="
              background-color: transparent;
              align-items: flex-end;
              padding: 0rem;
            "
            class="option_toolbar"
          >
            <v-btn class="mx-1 shadow-none"> test1 </v-btn>
            <v-btn class="mx-1"> test2 </v-btn>
            <v-spacer></v-spacer>
          </v-app-bar>
          <v-sheet
            id="scrolling-techniques-7"
            class="overflow-y-auto"
            max-height="600"
          >
            <v-container style="height: 300px">
              <h2>option container</h2>
            </v-container>
          </v-sheet>
        </v-card>
      </div>
    </header>
    <section class="card-container">
      <v-container fluid>
        <h5 class="text-center font-bold opacity-60 capitalize my-3 mb-1">
          property
        </h5>
        <h2 class="text-center font-bold capitalize text-2xl mb-4">
          Featured Property
        </h2>
        <v-row>
          <v-col
            v-for="(card, $cardIndex) in cards"
            :key="$cardIndex"
            cols="12"
            md="3"
          >
            <template v-if="loading">
              <v-skeleton-loader
                class="mx-auto"
                max-width="300"
                type="card"
              ></v-skeleton-loader>
            </template>
            <template v-else>
              <homepage-cards :loading="loading" :card="card" />
            </template>
          </v-col>
          <v-col cols="12">
            <v-btn style="display: block; margin: auto"> view more </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'IndexPage',
  async fetch({ store, error }) {
    try {
      await store.dispatch('homepage/fetchCards')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unabled to fetch events at this time. Please try again.',
      })
    }
  },
  head() {
    return {
      title: 'homepage',
    }
  },
  inject: {
    theme: {
      default: { isDark: false },
    },
  },
  computed: mapState({
    cards: (state) => state.homepage.cards,
    loading: (state) => state.homepage.loading,
  }),
}
</script>
<style>
.option_toolbar .v-toolbar__content {
  padding: 0rem !important;
  align-items: flex-end;
}
</style>
