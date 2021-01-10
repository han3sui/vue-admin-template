<template>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <app-aside-menu/>
  </el-aside>
</template>

<script>
import AppAsideMenu from '@/layout/components/AppAsideMenu'
export default {
  name: 'AppAside',
  components: { AppAsideMenu }
}
</script>

<style scoped>

</style>
