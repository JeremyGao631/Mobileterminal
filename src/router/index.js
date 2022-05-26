import Vue from 'vue'
import Router from 'vue-router'
import { deepClone } from '../utils/index.js'
const barOpt = ['none', 'nav', 'bot', 'custom']

Vue.use(Router)
const baseRoute = [
  {
    // home页
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home/homeView.vue'),
    meta: {
      keepAlive: false, // 是否缓存组件
      barSet: barOpt[1], // 0:没有bar  1顶部  2底部 默认1
      title: 'HOME',
    }
  },
  {
    // about
    path: '/about',
    name: 'AboutCar',
    component: () => import('@/views/home/aboutCar.vue'),
    meta: {
      keepAlive: false, // 是否缓存组件
      barSet: barOpt[1], // 0:没有bar  1顶部  2底部 默认1
      title: 'ABOUT',
    }
  },
  {
    // contact
    path: '/contact',
    name: 'ContactView',
    component: () => import('@/views/home/contactView.vue'),
    meta: {
      keepAlive: false,
      barSet: barOpt[1], // 0:没有bar  1顶部  2底部 默认1
      title: 'CONTACT',
    }
  },
  {
    // showRoom
    path: '/showRoom',
    name: 'ShowRoom',
    component: () => import('@/views/home/showRoom.vue'),
    meta: {
      keepAlive:false,
      barSet: barOpt[1], // 0:没有bar  1顶部  2底部 默认1
      title: 'ONLINE SHOWROOM',
    }
  },
  {
    // ell your car
    path: '/sell',
    name: 'sellCar',
    component: () => import('@/views/home/sellCar.vue'),
    meta: {
      keepAlive: false,
      barSet: barOpt[1], // 0:没有bar  1顶部  2底部 默认1
      title: 'SELL YOUR CAR',
    }
  },
  {
    // car detail
    path: '/carDetail',
    name: 'carDetail',
    component: () => import('@/views/home/carDetail.vue'),
    meta: {
      keepAlive: false,
      barSet: barOpt[1] // 0:没有bar  1顶部  2底部 默认1
    }
  },
  {
    path: '*', // 未匹配到路由时重定向
    redirect: '/home',
    meta: {
      // auth: false, // 是否需要登录
      keepAlive: true, // 是否缓存组件
      barSet: barOpt[1] // 0:没有bar  1顶部  2底部 默认1
    }
  }
]

const routes = deepClone([
  ...baseRoute,
])

const createRouter = () => new Router({
  routes: routes
})

const router = createRouter()

export function resetRouter() {
  // const newRouter = createRouter()
  // router.matcher = newRouter.matcher
}

export default router
