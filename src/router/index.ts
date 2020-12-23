/*
 * @Description: Description
 * @Author: ranli
 * @Date: 2020-10-14 10:56:06
 * @LastEditTime: 2020-12-22 16:00:56
 * @LastEditors: ranli
 */
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import recharge  from "@/views/recharge/index.vue";
import login from "@/views/login/index.vue";
import chooseDemo from "@/views/index.vue";
import withdraw from "@/views/withdraw/index.vue";
const is_add_api = Boolean(process.env.VUE_APP_ADD_API);
Vue.use(VueRouter);
const routes: Array<RouteConfig> = [

  {
    path: "/recharge",
    name: "recharge",
    meta:{
      title:"Recharge"
    },
    component: recharge
  },
  {
    path: "/",
    component: chooseDemo, 
    meta:{
      title:"chooseDemo"
    },
  },
  {
    path: "/withdraw",
    component: withdraw, 
    meta:{
      title:"withdraw"
    },
  },
];
if(is_add_api){
  routes.push(  {
    path: "/Login",
    component: login, 
    meta:{
      title:"Login"
    },
  },) 
}
const router = new VueRouter({
  routes
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
export default router;
