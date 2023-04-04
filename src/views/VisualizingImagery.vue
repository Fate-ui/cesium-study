<script lang="ts" setup>
import { onMounted } from 'vue'
import * as Cesium from 'cesium'

onMounted(() => {
  initCesium()
})
function initCesium() {
  const viewer = new Cesium.Viewer('cesiumContainer', {
    imageryProvider: Cesium.createWorldImagery({
      style: Cesium.IonWorldImageryStyle.AERIAL_WITH_LABELS
    }),
    baseLayerPicker: false
  })

  const layers = viewer.scene.imageryLayers
  const blackMarble = layers.addImageryProvider(new Cesium.IonImageryProvider({ assetId: 3812 }))

  blackMarble.alpha = 0.5 // 0.0 is transparent.  1.0 is opaque.

  blackMarble.brightness = 2.0 // > 1.0 increases brightness.  < 1.0 decreases.

  layers.addImageryProvider(
    new Cesium.SingleTileImageryProvider({
      url: '../images/Cesium_Logo_overlay.png',
      rectangle: Cesium.Rectangle.fromDegrees(-75.0, 28.0, -67.0, 29.75)
    })
  )
}
</script>
<template>
  <div id="cesiumContainer" />
</template>

<style scoped lang="scss"></style>
