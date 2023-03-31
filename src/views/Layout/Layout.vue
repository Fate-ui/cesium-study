<script lang="ts" setup>
import { computed } from 'vue'
import router from '@/router'

/**当前路由的同级路由*/
const routeList = computed(() => router.currentRoute.value.matched.at(0)?.children)
console.log(routeList.value)
</script>
<template>
  <div>
    <ul>
      <router-link v-for="route in routeList" :key="route.path" :to="route.path">{{ route.meta.title }}</router-link>
    </ul>
    <router-view />
  </div>
</template>

<style scoped lang="scss"></style>
