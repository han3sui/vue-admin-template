<template>
  <div>
    <el-submenu v-if="hasChild" :index="route.path">
      <template slot="title">
        <i v-if="route.meta && route.meta.icon" :class="[route.meta.icon]"></i>
        <span>{{route.meta.title}}</span>
      </template>
      <app-aside-menu-item v-for="child in route.children" :key="child.path" :route="child"/>
    </el-submenu>
    <template v-else>
      <el-menu-item :index="route.path">
        <span>{{route.meta.title}}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  name: 'AppAsideMenuItem',
  props: {
    // 路由对象
    route: {
      type: Object,
      required: true
    }
  },
  computed: {
    hasChild () {
      return Object.hasOwnProperty.call(this.route, 'children')
    }
  }
}
</script>

<style scoped>

</style>
