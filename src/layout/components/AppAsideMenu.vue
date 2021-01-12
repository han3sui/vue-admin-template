<template>
  <el-scrollbar :wrap-style="[scrollerWrap]">
    <el-menu
      mode="vertical"
      :router="true"
      :unique-opened="true"
      :default-active="this.$route.path"
      :collapse="collapse"
      :collapse-transition="false"
      :text-color="theme.asideTextColor"
      :active-text-color="theme.asideTextActiveColor">
      <app-aside-menu-item v-for="item in routes" :key="item.path" :route="item"/>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import AppAsideMenuItem from '@/layout/components/AppAsideMenuItem'
import theme from '../../assets/css/theme.scss'

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
    },
    collapse () {
      return this.$store.state.isCollapse
    },
    theme () {
      return theme
    }
  },
  mounted () {

  }
}
</script>

<style scoped lang="scss">

</style>
