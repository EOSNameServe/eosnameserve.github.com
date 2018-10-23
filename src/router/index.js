import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Main from '@/components/Main'
import ScatterJS from 'scatterjs-core'
import ScatterEOS from 'scatterjs-plugin-eosjs'
// import Vuex from 'vuex'

ScatterJS.plugins( new ScatterEOS() )

Vue.use(Router)
Vue.use(VueResource)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }
  ]
})
