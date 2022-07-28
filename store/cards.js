import CardService from "~/services/CardService";
export const state = () => ({
  cards: [],
  card: {}
})
export const mutations = {
  SET_CARDS(state, payload) {
    state.cards = payload
  },
  SET_CARD(state, payload) {
    state.card = CardService
  }
}
export const actions = {}
export const getters = {}
