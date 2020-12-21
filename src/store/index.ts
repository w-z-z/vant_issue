/*
 * @Description: Description
 * @Author: ranli
 * @Date: 2020-10-15 14:22:53
 * @LastEditTime: 2020-12-21 16:25:25
 * @LastEditors: ranli
 */
import Vue from "vue";
import Vuex from "vuex";
import user from './modules/user'
import getters from './getters'
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
  },
  plugins: [vuexLocal.plugin],
  strict: process.env.NODE_ENV !== 'production',
  getters
})

