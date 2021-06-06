import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProductForm from '../views/products/ProductForm'
// import ProductForm from '../views/products/ProductList'
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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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
