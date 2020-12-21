/*
 * @Description: Description
 * @Author: ranli
 * @Date: 2020-10-14 10:56:06
 * @LastEditTime: 2020-12-21 17:12:58
 * @LastEditors: ranli
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './styles/index.scss';
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
