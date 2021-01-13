<template>
  <el-container class="app-body">
    <!--    <app-aside class="app-aside" :class="[collapse?'app-aside-hide':'app-aside-open']"/>-->
    <app-aside/>
    <el-container class="app-container">
      <app-nav/>
      <app-main/>
      <app-footer/>
    </el-container>
  </el-container>
</template>

<script>
import AppAside from '@/layout/components/AppAside'
import AppNav from '@/layout/components/AppNav'
import AppMain from '@/layout/components/AppMain'
import AppFooter from '@/layout/components/AppFooter'
import { isMobile, debounce } from '@/utils/util'

export default {
  name: 'Layout',
  components: {
    AppFooter,
    AppMain,
    AppNav,
    AppAside
  },
  computed: {
    collapse () {
      return this.$store.state.isCollapse
    }
  },
  created () {
    isMobile()
    window.onresize = () => {
      debounce(() => {
        isMobile()
      }, 300)
    }
  }
}
</script>

<style scoped lang="scss">
.app-body {

  //.app-aside {
  //  background-color: $aside-bg;
  //  color: #fff;
  //  width: 64px !important;
  //  transition: width .2s;
  //
  //  &.app-aside-open {
  //    width: 250px !important;
  //  }
  //}

  .app-container {
    flex-direction: column;
    background-color: #f0f2f5;
  }
}
</style>
