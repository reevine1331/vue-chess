import Vue from 'vue'
import VueRouter from 'vue-router'

import Top from './pages/Top.vue'
import Play from './pages/Play.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/top', component: Top },
  { path: '/play', component: Play },
]

const router = new VueRouter({
  mode:'history',
  routes
})

router.beforeEach((to, from, next) => {
  if(to.fullPath === "/") {
    next({
      path: '/top',
      query: { redirect: to.fullPath }
    })
  }
  next();
})

export default router
