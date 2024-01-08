import { createStore } from 'vuex'
import trendings from './modules/trendings'
import starred from './modules/starred'

export default createStore({
  getters: {
    getUnstarredOnly(state) {
      return state.trendings.data.filter(trendingsRepo => {
        return !state.starred.data.some(starredrepo => {
          return trendingsRepo.id === starredrepo.id
        })
      })
    }
  },
  modules: {
    trendings: trendings,
    starred: starred
  }
})
