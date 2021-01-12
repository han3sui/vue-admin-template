<template>
  <el-header class="app-nav">
    <div class="navbar-wrapper">
      <div class="navbar-left">
          <div class="left-icon-wrapper" @click="handleChangeCollapse">
            <transition name="fade">
            <i :class="[collapse?'el-icon-s-unfold':'el-icon-s-fold']"/>
            </transition>
          </div>
        <el-breadcrumb separator="/">
          <transition-group name="breadcrumb">
            <el-breadcrumb-item v-for="item in breadcrumbList" :key="item.path" :to="{ path: item.name==='Index'?'/':item.path }">{{ item.meta.title }}
            </el-breadcrumb-item>
          </transition-group>
        </el-breadcrumb>
      </div>
      <div class="navbar-right">
        <el-dropdown>
          <div class="right-menu-item">
            <img alt="" class="user-avatar" src='../../assets/img/user.png'>
            <span>超级管理员<i class="el-icon-arrow-down el-icon--right"/></span>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="changePassword">修改密码</el-dropdown-item>
            <el-dropdown-item @click.native="logout">注销登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <el-scrollbar class="tags-wrapper"></el-scrollbar>
  </el-header>
</template>

<script>
export default {
  name: 'AppNav',
  data () {
    return {
      breadcrumbList: []
    }
  },
  computed: {
    collapse () {
      return this.$store.state.isCollapse
    }
  },
  watch: {
    $route: {
      handler: function () {
        this.breadcrumbList = this.$route.matched.filter(item => item.name)
      },
      immediate: true
    }
  },
  methods: {
    changePassword () {

    },
    logout () {

    },
    handleChangeCollapse () {
      this.$store.commit('SET_COLLAPSE', !this.collapse)
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep .el-scrollbar__wrap {
  overflow-x: hidden;
}

.app-nav {
  .navbar-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;

    .navbar-left {
      flex: 1;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-left: 15px;
      height: 100%;

      & i {
        font-size: 20px;
      }
    }
    .navbar-right{
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      height: 100%;
      width: auto;
      padding-right: 15px;
      .right-menu-item{
        display: flex;
        align-items: center;
        & img{
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }
        & span{
          padding-left: 8px;
        }
      }
    }
  }
}
</style>
