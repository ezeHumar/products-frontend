import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProductForm from '../views/products/ProductForm'
import ProductDetail from '../views/products/ProductDetail'
import ProductUpdate from '../views/products/ProductUpdate'
import NotFound from '../views/NotFound'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product/new',
    name: 'ProductForm',
    component: ProductForm
  },
  {
    path: '/product/detail/:id',
    name: 'ProductDetail',
    component: ProductDetail,
    props: true
  },
  {
    path: '/product/update/:id',
    name: 'ProductUpdate',
    component: ProductUpdate,
    props: true //This is to accept the url parameter as a prop
  },
  {//This route is the 404 page, used when the url doesn't exist
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
