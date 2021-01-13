<template>
<!--  <el-aside width="auto">-->
<!--    <div class="logo">-->
<!--      <img alt="" src="../../../src/assets/img/logo.png">-->
<!--      <h2 v-if="!collapse">Vue-Admin-Temp</h2>-->
<!--    </div>-->
<!--    <app-aside-menu/>-->
<!--  </el-aside>-->
  <fragment>
    <el-drawer v-if="isMobile">
      <app-aside-menu/>
    </el-drawer>
    <el-aside width="auto" class="app-aside" :class="[collapse?'app-aside-hide':'app-aside-open']" v-else>
      <div class="logo">
        <img alt="" src="../../../src/assets/img/logo.png">
        <h2 v-if="!collapse">Vue-Admin-Temp</h2>
      </div>
      <app-aside-menu/>
    </el-aside>
  </fragment>
</template>

<script>
import AppAsideMenu from '@/layout/components/AppAsideMenu'
export default {
  name: 'AppAside',
  components: { AppAsideMenu },
  computed: {
    collapse () {
      return this.$store.state.isCollapse
    },
    isMobile () {
      return this.$store.state.isMobile
    }
  }
}
</script>

<style scoped lang="scss">
.app-aside {
  background-color: $aside-bg;
  color: #fff;
  width: 64px !important;
  transition: width .2s;

  &.app-aside-open {
    width: 250px !important;
  }
}
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  padding: 0 15px;

  & h2 {
    margin: 0;
    padding-left: 10px;
    white-space:nowrap;
    overflow: hidden;
  }

  & img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
}
</style>
