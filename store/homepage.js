import CardService from "~/services/CardService";
export const state = () => ({
  cards: [],
  card: {},
  loading: true
})
export const mutations = {
  SET_LOADING(state, payload) {
    state.loading = payload
  },
  SET_CARDS(state, payload) {
    state.cards = payload
  },
  SET_CARD(state, payload) {
    state.card = CardService
  }
}
export const actions = {
  fetchCards({
    commit,
  }) {
    return CardService.getCards().then(({
      data
    }) => {
      commit('SET_CARDS', data)
      commit('SET_LOADING', false)
    })
  }
}
export const getters = {}
