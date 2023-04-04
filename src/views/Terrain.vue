<script lang="ts" setup>
import { onMounted } from 'vue'
import * as Cesium from 'cesium'

onMounted(() => {
  initCesium()
})
function initCesium() {
  const viewer = new Cesium.Viewer('cesiumContainer', {
    terrainProvider: Cesium.createWorldTerrain({
      requestVertexNormals: true,
      requestWaterMask: true
    })
  })
  viewer.scene.globe.enableLighting = true
  //将视角移动到中国成都区域
  viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(104.0, 30.0, 10000000.0)
  })
}
</script>
<template>
  <div id="cesiumContainer" />
</template>

<style scoped lang="scss"></style>
