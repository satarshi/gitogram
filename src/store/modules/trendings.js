import { getPopular } from '@/api/rest/popular'

export default {
  namespaced: true,
  state() {
    return {
      data: [],
      loading: false,
      error: ''
    }
  },
  getters: {

  },
  mutations: {
    updateTrendings(state, trendings) {
      state.data = trendings
    }
  },
  actions: {
    async fetchTrendings(state) {
      this.loading = true
      try {
        const { data } = await getPopular()
        state.commit('updateTrendings', data.items)
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    }
  }
}
