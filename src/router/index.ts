/*
 * @Description: Description
 * @Author: ranli
 * @Date: 2020-10-14 10:56:06
 * @LastEditTime: 2020-11-03 10:40:00
 * @LastEditors: ranli
 */
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import rechargeAmount from "../views/recharge/recharge.vue";
import BlankInfo from "../views/recharge/BlankInfo.vue";
import recharge  from "../views/recharge/index.vue";
import withdraw from "../views/withdraw.vue";
import views from "../views/index.vue";

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
    component: recharge, 
    meta:{
      title:"Recharge"
    },
    redirect:"/recharge/Amount",
    children:[
      {
        path: "/recharge/Amount",
        name: "rechargeAmount",
        meta:{
          title:"Recharge"
        },
        component: rechargeAmount
      },
      {
        path: "/recharge/BlankInfo",
        name: "BlankInfo",
        meta:{
          title:"Recharge"
        },
        component: BlankInfo
      },
    ]
  },
  {
    path: "/withdraw",
    name: "withdraw",
    meta:{
      title:"Withdraw"
    },
    component: withdraw
  }
];

const router = new VueRouter({
  routes
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
export default router;
