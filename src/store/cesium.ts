import { acceptHMRUpdate, defineStore } from 'pinia'
import 'cesium/Build/Cesium/Widgets/widgets.css'
import * as Cesium from 'cesium'

export const useCesiumStore = defineStore({
  id: 'cesium',
  state: () => ({
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjZGI4MTRiYy00Y2FkLTRjZWUtOTRlMS1kNWE0ODA5MzRiYzciLCJpZCI6MTMxNTA1LCJpYXQiOjE2ODAyNDY2MjZ9.GULa-vbn315rgOjGZvJsDYQAcQBhW_RpWxZu1V1x3og'
  }),
  actions: {
    init() {
      Cesium.Ion.defaultAccessToken = this.token
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCesiumStore, import.meta.hot))
}
