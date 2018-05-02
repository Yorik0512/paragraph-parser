import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import User from '@/views/User'
import Results from '@/views/Results'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    name: 'User',
    path: '/fb',
    component: User,
    props: (route) => ({ query: route.query.articleURL })
  },
  {
    name: 'Results',
    path: '/fb/results',
    component: Results
  }
]

export default new Router({
  base: __dirname,
  routes: routes
})
