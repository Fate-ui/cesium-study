import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/views/Layout/Layout.vue'
/**扩展vue-router类型*/
declare module 'vue-router' {
  interface RouteMeta {
    title?: string
  }
}
export type RouteRecordRawExt = RouteRecordRaw & { hidden?: boolean; children?: RouteRecordRawExt[] }

export const constantRoutes: Array<RouteRecordRawExt> = [
  {
    path: '/',
    redirect: '/home',
    hidden: true
  },
  {
    path: '/home',
    redirect: '/home/index',
    component: Layout,
    children: [
      {
        path: 'index',
        meta: { title: '飞机航线' },
        component: () => import('@/views/Home.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})
export const asyncRoutes: Array<RouteRecordRawExt> = []

export default router
