import { getStarredRepos } from '@/api/rest/starred'
import { getIssues } from '@/api/rest/issues'

export default {
  namespaced: true,
  state() {
    return {
      data: []
    }
  },
  getters: {
    getRepoById: (state) => (id) => {
      return state.data.find(item => item.id === id)
    }
  },
  mutations: {
    updateStarred(state, starred) {
      state.data = starred.map(item => {
        item.following = {
          status: true,
          loading: false,
          error: ''
        }
        return item
      })
    },
    setIssues(state, payload) {
      state.data = state.data.map(repo => {
        if (payload.id === repo.id) {
          repo.issues = payload.content
        }
        return repo
      })
    },
    setFollowing(state, payload) {
      state.data = state.data.map(repo => {
        if (payload.id === repo.id) {
          repo.following = {
            ...repo.following,
            ...payload.data
          }
        }
        return repo
      })
    }
  },
  actions: {
    async fetchStarred(state) {
      if (this.state.starred.data.length > 0) return
      this.loading = true
      try {
        const limit = 10
        const { data } = await getStarredRepos({ limit })
        state.commit('updateStarred', data)
      } catch (error) {
        console.log(error)
      } finally {
        this.loading = false
      }
    },
    async fetchIssues(state, { id, owner, repo }) {
      const curRepo = state.getters.getRepoById(id)
      if (curRepo.issues !== undefined) return
      try {
        const { data } = await getIssues({ owner, repo })
        state.commit('setIssues', { id, content: data })
      } catch (error) {
        console.log(error)
        throw error
      }
    }
  }
}
