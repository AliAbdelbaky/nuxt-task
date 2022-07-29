<template>
  <div>
    <div class="card-container">
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
            <v-btn style="display: block; margin: auto;">
              view more
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
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
