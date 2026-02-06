import CartView from '@/views/CartView.vue'
import HomeView from '@/views/HomeView.vue'
import ProductDetailsView from '@/views/ProductDetailsView.vue'
import ProductView from '@/views/ProductView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path : '/',
    name : 'home',
    component : HomeView
  },
    {
    path : '/product',
    name : 'product-view',
    component : ProductView
  },
  ,
    {
    path : '/product/:id',
    name : 'product-details',
    component : ProductDetailsView
  },
    {
    path : '/cart',
    name : 'panier-view',
    component : CartView
  }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
