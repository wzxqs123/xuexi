import Vue from "vue";
import VueWechatTitle from "vue-wechat-title";
import App from "./App.vue";
import router from "./router";
import axios from "./axios/index";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(VueWechatTitle); // 页面标题插件启动

new Vue({
  router,
  store,
  axios,
  VueWechatTitle,
  render: h => h(App)
}).$mount("#app");
