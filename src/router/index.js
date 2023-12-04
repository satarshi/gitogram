import { createRouter, createWebHashHistory } from 'vue-router'

import { feeds } from '../pages/feeds'
import { stories } from '../components/stories'

const routes = [
  {
    path: '/',
    component: feeds,
    name: 'feeds'
  },
  {
    path: '/stories',
    component: stories,
    name: 'stories'
  }
  // {
  //   path: '/:pathMath(.*)',
  //   component: NotFound,
  //   name: 'notFound'
  // }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
