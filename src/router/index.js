import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Product from '../views/Products.vue';
import productSlide from '../views/productSlide.vue';


const routes = [
  {
    path : '/',
    name : 'Home',
    component : Home
  },
  {
    path : '/product',
    name : 'Product',
    component : Product
  },
  {
    path :"/productSlide",
    name : "productSlide",
    component : productSlide
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
