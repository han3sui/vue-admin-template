<template>
  <el-aside width="auto">
    <div class="logo">
      <img alt="" src="../../../src/assets/img/logo.png">
      <h2 v-if="!collapse">Vue-Admin-Temp</h2>
    </div>
    <app-aside-menu/>
  </el-aside>
</template>

<script>
import AppAsideMenu from '@/layout/components/AppAsideMenu'
export default {
  name: 'AppAside',
  components: { AppAsideMenu },
  computed: {
    collapse () {
      return this.$store.state.isCollapse
    }
  }
}
</script>

<style scoped lang="scss">

</style>
