import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import flex from '@/pages/flex'
import flexChild from '@/pages/flexChild'
import flexShopDemo from '@/pages/flexShopdemo'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/flex',
      name: 'flex',
      component: flex
    },
    {
      path: '/flexChild',
      name: 'flexChild',
      component: flexChild
    },
    {
      path: '/flexShopDemo',
      name: 'flexShopDemo',
      component: flexShopDemo
    }
  ]
})
