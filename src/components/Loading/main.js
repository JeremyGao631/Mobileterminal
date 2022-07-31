import Vue from 'vue'
import con from './index.vue'

const Constructor = Vue.extend(con)
let instance

// options 入参 ，选填
// resolve 成功回调 ，必填
// reject 关闭入参 ，选填
const main = options => {
  if (instance) return
  instance = new Constructor({
    el: document.createElement('div')
  })
  document.body.appendChild(instance.$el)
  // 如果没有options,默认第一个传成功回调，第二个传关闭回调
  if (options) {
    // 遍历传入属性
    for (const [k, v] of Object.entries(options)) {
      instance[k] = v
    }
  }

  instance.close = () => {
    instance.isPopupShow = false
    document.body.removeChild(instance.$el)
    instance = undefined
  }
  Vue.nextTick(() => {
    instance.isPopupShow = true
  })
}

// 向外暴露一个close方法
main.close = () => {
  if (!instance) return
  instance.close()
}

export default main
