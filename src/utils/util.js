import store from '../store'
/**
 * 判断是否移动端，根据userAgent和屏幕宽度判断
 * @returns {boolean|boolean}
 */
export function isMobile () {
  const flag = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  )
  const res = !!flag || window.matchMedia('(max-width: 750px)').matches
  store.commit('SET_ISMOBILE', res)
  return res
}

/**
 * 防抖
 * @param func
 * @param delay
 * @returns {function(...[*]=): void}
 */
export function debounce (func, delay) {
  let timer
  return function (...args) {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    })
  }
}

/**
 * 节流
 * @param func
 * @param delay
 * @returns {function(...[*]=): void}
 */
export function throttle (func, delay) {
  let prev
  return function (...args) {
    const now = new Date()
    if (!prev || now - prev >= delay) {
      func.apply(this, args)
      prev = new Date()
    }
  }
}
