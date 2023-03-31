<script lang="ts" setup>
import { onMounted } from 'vue'
import * as Cesium from 'cesium'
import 'cesium/Source/Widgets/widgets.css'

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYWE1OWUxNy1mMWZiLTQzYjYtYTQ0OS1kMWFjYmFkNjc5YzciLCJpZCI6NTc3MzMsImlhdCI6MTYyNzg0NTE4Mn0.XcKpgANiY19MC4bdFUXMVEBToBmqS8kuYpUlxJHYZxk'

Cesium.Ion.defaultAccessToken = token

onMounted(() => {
  initCesium()
})
function initCesium() {
  const viewer = new Cesium.Viewer('cesiumContainer', {
    terrainProvider: Cesium.createWorldTerrain()
  })
  // const osmBuildings = viewer.scene.primitives.add(Cesium.createOsmBuildings())
}
</script>
<template>
  <div id="cesiumContainer" class="w-screen h-screen">Home</div>
</template>

<style scoped lang="scss"></style>
