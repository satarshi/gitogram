import { getPopular } from '@/api/rest/popular'
import { getReadme } from '@/api/rest/readme'

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
    getRepoById: (state) => (id) => {
      return state.data.find(item => item.id === id)
    }
  },
  mutations: {
    updateTrendings(state, trendings) {
      state.data = trendings
    },
    setReadme(state, payload) {
      state.data = state.data.map(repo => {
        if (payload.id === repo.id) {
          repo.readme = payload.content
        }
        return repo
      })
    }
  },
  actions: {
    async fetchTrendings(state) {
      if (this.state.trendings.data.length > 0) return
      this.loading = true
      try {
        const { data } = await getPopular()
        state.commit('updateTrendings', data.items)
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    },
    async fetchReadme(state, { id, owner, repo }) {
      const curRepo = state.getters.getRepoById(id)
      if (curRepo.readme !== undefined) return
      try {
        const { data } = await getReadme({ owner, repo })
        state.commit('setReadme', { id, content: data })
      } catch (error) {
        console.log(error)
        throw error
      }
    }
  }
}
