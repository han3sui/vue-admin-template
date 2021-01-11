<template>
  <el-container class="app-body">
    <app-aside class="app-aside"/>
    <el-container class="app-container">
      <app-nav class="app-nav"/>
      <app-main class="app-main"/>
      <app-footer class="app-footer"/>
    </el-container>
  </el-container>
</template>

<script>
import AppAside from '@/layout/components/AppAside'
import AppNav from '@/layout/components/AppNav'
import AppMain from '@/layout/components/AppMain'
import AppFooter from '@/layout/components/AppFooter'
export default {
  name: 'Layout',
  components: { AppFooter, AppMain, AppNav, AppAside }
}
</script>

<style scoped lang="scss">

</style>
