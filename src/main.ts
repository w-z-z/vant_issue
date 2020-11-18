/*
 * @Description: Description
 * @Author: ranli
 * @Date: 2020-10-14 10:56:06
 * @LastEditTime: 2020-11-17 18:16:03
 * @LastEditors: ranli
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './styles/index.scss';
import Message from 'vue-m-message'
import 'vue-m-message/dist/index.css'

Vue.use(Message) // will mount `Vue.prototype.$message`
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
