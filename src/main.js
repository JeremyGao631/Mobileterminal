import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'
import 'lib-flexible/flexible'
import Vant from 'vant';
import 'vant/lib/index.css';
import "@/assets/css/test.css";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Vant)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
