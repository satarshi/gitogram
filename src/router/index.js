import { createRouter, createWebHashHistory } from 'vue-router'

import { feeds } from '../pages/feeds'
import { stories } from '../pages/stories'
import { auth } from '../pages/auth'
import { getUserData } from '@/api/rest/user'

const routes = [
  {
    path: '/',
    component: feeds,
    name: 'feeds'
  },
  {
    path: '/stories/:initialSlide?',
    component: stories,
    name: 'stories'
  },
  {
    path: '/auth',
    component: auth,
    name: 'auth'
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const authRoute = to.name === 'auth'

  try {
    await getUserData()
    next(authRoute ? { name: 'feeds' } : null)
  } catch (error) {
    if (error.response.status === 401) {
      next(authRoute ? null : { name: 'auth' })
    }
  }
})

export default router
