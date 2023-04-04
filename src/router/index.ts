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
    redirect: '/cesium',
    hidden: true
  },
  {
    path: '/cesium',
    // redirect: '/home/index',
    component: Layout,
    children: [
      {
        path: '/cesium/index',
        meta: { title: '飞机航线' },
        component: () => import('@/views/FlightTracker.vue')
      },
      {
        path: '/cesium/building',
        meta: { title: '3D建筑' },
        component: () => import('@/views/VisualizeBuilding.vue')
      },
      {
        path: '/cesium/entity',
        meta: { title: 'entity学习' },
        component: () => import('@/views/EntityStudy.vue')
      },
      {
        path: '/cesium/imagery',
        meta: { title: '可视化影像' },
        component: () => import('@/views/VisualizingImagery.vue')
      },
      {
        path: '/cesium/terrain',
        meta: { title: '地形' },
        component: () => import('@/views/Terrain.vue')
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
