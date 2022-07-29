<template>
  <v-card
    class="mx-auto relative bg-white rounded-lg shadow-md shadow-slate-300"
  >
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
    ></v-img>
    <span class="absolute top-1 right-1  bg-slate-200/70 px-1 shadow-md rounded-full p-1 text-sm font-semibold">5:30PM</span>
    <v-card-title> {{ card.title }} </v-card-title>

    <v-card-subtitle>{{ card.desc }}</v-card-subtitle>

    <v-card-actions>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip><v-icon>mdi-heart</v-icon> 5:30PM</v-chip>

        <v-chip> <v-icon>mdi-heart</v-icon>7:30PM</v-chip>

        <v-chip><v-icon>mdi-heart</v-icon> 8:00PM</v-chip>

        <v-chip><v-icon>mdi-heart</v-icon> 9:00PM</v-chip>
      </v-chip-group>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
    cardIndex: {
      type: [String, Number],
      default: 1,
    },
    loading: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      selection: 1,
    }
  },
}
</script>
