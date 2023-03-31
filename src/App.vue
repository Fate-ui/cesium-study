<script setup lang="ts">
import { useCesiumStore } from '@/store/cesium'

const cesiumStore = useCesiumStore()
cesiumStore.init()
</script>

<template>
  <RouterView />
</template>

<style scoped lang="scss"></style>
