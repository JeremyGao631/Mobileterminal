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

// //平台、设备和操作系统（windows系统，苹果系统，Linux或者X11系统）  
// var system ={  
//   win : false,  
//   mac : false,  
//   xll : false  
//   };  
//   //检测平台  
//   var p = navigator.platform;  
//   system.win = p.indexOf("Win") == 0; //如果是windows系统就显示true，否则false。 
//   system.mac = p.indexOf("Mac") == 0;  //如果是Mac系统就显示true，否则false。 
//   system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);  //如果是Linux或者X11系统就显示true，否则false。 
//   //跳转语句，如果是windows系统，苹果系统，Linux或者X11系统就跳转到www.csjwang.com；如果是手机访问就自动跳转到m.csjwang.com页面。
//   if(system.win||system.mac||system.xll){  
//   window.location.href="http://pc.auto-home.com.au/"; 
//   }else{  
//   // window.location.href="http://mobile.auto-home.com.au/";  
//   }  
