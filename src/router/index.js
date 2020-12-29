import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const Home = () => import('views/Home/Home')
const Category = () => import('views/Category/Category')
const ShopCart = () => import('views/ShopCart/ShopCart')
const Profile = () => import('views/Profile/Profile')

const routes = [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/shopcart',
      component: ShopCart
    },
    {
      path: '/profile',
      component: Profile
    },
  ]

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router