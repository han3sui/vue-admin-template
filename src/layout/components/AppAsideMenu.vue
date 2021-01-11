<template>
  <el-scrollbar :wrap-style="[scrollerWrap]">
    <el-menu :router="true" :unique-opened="true" :default-active="this.$route.path">
      <app-aside-menu-item v-for="item in routes" :key="item.path" :route="item"/>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import AppAsideMenuItem from '@/layout/components/AppAsideMenuItem'

export default {
  name: 'AppAsideMenu',
  components: { AppAsideMenuItem },
  computed: {
    routes () {
      return this.$store.state.permissionMenu
    },
    scrollerWrap () {
      return {
        height: 'calc(100vh - 80px)'
      }
    }
  },
  mounted () {
    console.log(this.$route)
  }
}
</script>

<style scoped lang="scss">

</style>
