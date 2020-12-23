/*
 * @Description: Description
 * @Author: ranli
 * @Date: 2020-12-21 13:52:52
 * @LastEditTime: 2020-12-23 11:31:51
 * @LastEditors: ranli
 */
/*
 * @Description: Description
 * @Author: ranli
 * @Date: 2020-10-15 14:24:04
 * @LastEditTime: 2020-10-19 16:21:05
 * @LastEditors: ranli
 */
import { login } from '@/api/login.ts'
const user = {
  state: {
    token:'',
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
  },
  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      const password = userInfo.password
      return new Promise((resolve, reject) => {
        login({username,password}).then((res:any) => {
          commit('SET_TOKEN', res.data)
          resolve(res.data)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        resolve('')
      })
    }
  }
}

export default user
