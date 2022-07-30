<template>
  <div>
    <header class="relative h-[100vh]">
      <div class="h-[80vh] overflow-hidden mx-4 my-4 rounded-3xl">
        <v-img
          src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
          gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
        ></v-img>
      </div>
      <div
        class="options absolute top-[17.75rem] w-[90%] right-0 left-0 m-auto overflow-hidden"
      >
        <v-app-bar
          style="
            background-color: transparent;
            align-items: flex-end;
            padding: 0rem;
          "
          class="option_toolbar"
        >
          <template v-slot:extension>
            <v-tabs v-model="tab" align-with-title>
              <v-tabs-slider color="blue"></v-tabs-slider>

              <v-tab
                v-for="item in items"
                :key="item"
                class="bg-white mx-1 rounded-t-lg"
              >
                {{ item }}
              </v-tab>
            </v-tabs>
          </template>
        </v-app-bar>
        <v-sheet
          id="scrolling-techniques-7"
          class="overflow-y-auto mx-1 rounded mb-1"
          max-height="600"
          style="box-shadow: 0 3px 1px -2px #0003, 0 2px 2px #00000024, 0 1px 5px #0000001f;"
        >
          <v-tabs-items v-model="tab">
            <v-tab-item v-for="(item, $itemIdex) in items" :key="$itemIdex">
              <v-container fluid>
                <v-row>
                  <v-col cols="12">
                    <v-chip
                      v-for="(chip, i) in chips"
                      :key="i"
                      @click:close="removeChip(i)"
                      class="ma-2"
                      close
                    >
                      {{ chip.name }}
                    </v-chip>
                  </v-col>
                  <v-col col>
                    <v-form>
                      <v-container fluid>
                        <v-row>
                          <v-col cols="12" md="3">
                            <v-text-field
                              v-model="search"
                              label="Type your search"
                              required
                              outlined
                              filled
                            >
                              <v-icon slot="append" color="inherit">
                                mdi-magnify
                              </v-icon>
                            </v-text-field>
                          </v-col>

                          <v-col cols="12" md="3">
                            <v-text-field
                              v-model="location"
                              label="location"
                              required
                              outlined
                              filled
                            >
                              <v-icon slot="append">
                                mdi-map-marker-outline
                              </v-icon>
                            </v-text-field>
                          </v-col>

                          <v-col cols="12" md="4">
                            <v-text-field
                              v-model="range"
                              label="range"
                              required
                              outlined
                              filled
                            >
                              <v-icon slot="append" color="inherit">
                                mdi-cash
                              </v-icon>
                            </v-text-field>
                          </v-col>
                          <v-col cols="12" md="2">
                            <v-btn style="height: 56px" block larg>
                              search
                            </v-btn>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-form>
                  </v-col>
                </v-row>
              </v-container>
            </v-tab-item>
          </v-tabs-items>
        </v-sheet>
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
  data() {
    return {
      tab: null,
      items: ['buy', 'rent'],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      chips: [
        {
          name: 'one',
          visible: true,
        },
        {
          name: 'two',
          visible: true,
        },
        {
          name: 'two',
          visible: true,
        },
      ],
      search: '',
      location: '',
      range: '',
    }
  },
  computed: mapState({
    cards: (state) => state.homepage.cards,
    loading: (state) => state.homepage.loading,
  }),
  methods: {
    removeChip(i) {
      this.chips.splice(i, 1)
    },
  },
}
</script>
<style>
.option_toolbar .v-toolbar__content {
  padding: 0rem !important;
  align-items: flex-end;
}
</style>
