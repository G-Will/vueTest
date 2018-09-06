const STORAGE_KEY = 'todos-vuejs'
export default {
  fetch () {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
  },
  save (items) {
    // JSON.stringify() 方法是将一个JavaScript值(对象或者数组)转换为一个 JSON字符串，
    // 如果指定了replacer是一个函数，则可以替换值，或者如果指定了replacer是一个数组
    // 可选的仅包括指定的属性。
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  },
  remove (key) {
    window.localStorage.removeItem(key)
  }
}
