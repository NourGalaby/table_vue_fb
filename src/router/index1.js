import Vue from 'vue'
import Router from 'vue-router'
import DT from '@/components/DT'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DT',
      component: DT
    }
  ]
})
