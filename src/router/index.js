import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import mongo from '@/components/mongo'
import show from '@/components/show'
import database from '@/components/database'
import BootstrapVue from 'bootstrap-vue'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/mongo',
      name: 'mongo',
      component: mongo
    },
    {
      path: '/show',
      name: 'show',
      component: show
    },
    {
      path: '/database',
      name: 'database',
      component: database
    }

  ]
})
