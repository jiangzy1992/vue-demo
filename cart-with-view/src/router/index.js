import Vue from 'vue'
import Router from 'vue-router'
import product from '../components/Product'
import cart from '../components/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: product
    },
	{
	  path: '/cart',
	  component: cart
	}
  ]
})
