/*
 * @Description: Description
 * @Author: ranli
 * @Date: 2020-10-14 10:56:06
 * @LastEditTime: 2020-12-21 14:24:28
 * @LastEditors: ranli
 */
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import recharge  from "../views/recharge/index.vue";
import views from "../views/login.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: views, 
    meta:{
      title:"views"
    },
  },
  {
    path: "/recharge",
    name: "recharge",
    meta:{
      title:"recharge"
    },
    component: recharge
  },
  {
    path: "*",
    component: views, 
    meta:{
      title:"views"
    },
  },
];

const router = new VueRouter({
  routes
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
export default router;
