const defaultState = {
  // 用户菜单列表
  permissionMenu: [],
  // 左侧导航栏是否折叠
  isCollapse: false
}
const state = {
  ...defaultState,
  initState () {
    return defaultState
  }
}
export default state
