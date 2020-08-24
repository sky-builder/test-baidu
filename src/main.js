import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

var _hmt = _hmt || [];
window._hmt = _hmt; // 必须把_hmt挂载到window下，否则找不到
(function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?"+ 百度站点id;
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();