/*
 * @Description: Description
 * @Author: ranli
 * @Date: 2020-10-14 10:56:06
 * @LastEditTime: 2020-12-18 14:39:56
 * @LastEditors: ranli
 */
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import rechargeAmount from "../views/recharge/index.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/Amount",
    component: rechargeAmount, 
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
