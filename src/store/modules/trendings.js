import { getPopular } from '@/api/rest/popular'
import { getReadme } from '@/api/rest/readme'
import { starRepo, unStarRepo } from '@/api/rest/starred'

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
    updateTrendings(state, trendings) {
      state.data = trendings.map(item => {
        item.following = {
          status: false,
          loading: false,
          error: ''
        }
        return item
      })
    },
    setReadme(state, payload) {
      state.data = state.data.map(repo => {
        if (payload.id === repo.id) {
          repo.readme = payload.content
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
    },
    async starRepo(state, id) {
      const { name: repo, owner } = state.getters.getRepoById(id)

      state.commit('setFollowing', {
        id,
        data: {
          status: false,
          loading: true,
          error: ''
        }
      })

      try {
        await starRepo({ owner: owner.login, repo })
        state.commit('setFollowing', {
          id,
          data: {
            status: true
          }
        })
      } catch (error) {
        state.commit('setFollowing', {
          id,
          data: {
            status: false,
            error: 'Error has happend'
          }
        })
      } finally {
        state.commit('setFollowing', {
          id,
          data: {
            loading: false
          }
        })
      }
    },
    async unStarRepo(state, id) {
      const { name: repo, owner } = state.getters.getRepoById(id)

      state.commit('setFollowing', {
        id,
        data: {
          status: true,
          loading: true,
          error: ''
        }
      })

      try {
        await unStarRepo({ owner: owner.login, repo })
        state.commit('setFollowing', {
          id,
          data: {
            status: false
          }
        })
      } catch (error) {
        state.commit('setFollowing', {
          id,
          data: {
            status: true,
            error: 'Error has happend'
          }
        })
      } finally {
        state.commit('setFollowing', {
          id,
          data: {
            loading: false
          }
        })
      }
    }
  }
}
