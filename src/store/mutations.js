const mutations = {
  // 清除vuex缓存
  CLEAR_VUEX (state) {
    if (state.initState && typeof state.initState === 'function') {
      const initState = state.initState()
      for (const key in initState) {
        if (Object.prototype.hasOwnProperty.call(initState, key)) {
          state[key] = initState[key]
        }
      }
    }
  },
  // 设置路由数组
  SET_ROUTES (state, res) {
    state.permissionMenu = res
  }
}
export default mutations
