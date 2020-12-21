/*
 * @Description: Description
 * @Author: ranli
 * @Date: 2020-12-21 13:56:33
 * @LastEditTime: 2020-12-21 18:08:51
 * @LastEditors: ranli
 */
import axios from 'axios';
import store from "@/store/index";
import router from "@/router";
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
import { Dialog ,Notify } from 'vant';
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout:10000
})
service.interceptors.request.use(config => {
  if (store.getters.token) {
    config.headers['token'] =store.getters.token  
  }
  return config
}, error => {
    Promise.reject(error)
})
// 响应拦截器
service.interceptors.response.use(res => {
    // 未设置状态码则默认成功状态
    const code = res.data.code || 200;
    // 获取错误信息
    const msg =res.data.msg
    //登录失效
    if (code === 403) {
      Dialog.alert({
        message: 'Token timeout Please log in again.',
        confirmButtonColor: '#1970FA',
        className: 'custom-dialog',
        confirmButtonText: 'to Login',
      }).then(() => {
        store.dispatch('FedLogOut').then(()=>{
         //跳转去首页
         router.push("/")
        })
      });
      //提交等错误
    } else if (code === 500) {
      Notify(
        { type: 'warning', message: msg}
        )
      return Promise.reject(new Error(msg))
      //其他
    } else if (code !== 200) {
      Notify(
        { type: 'warning', message: msg}
        )
      return Promise.reject('error')
      //成功
    } else {
      return res.data
    }
  },
  error => {
    let { message } = error;
    if (message == "Network Error") {
      message = "Backend interface connection exception";
    }
    else if (message.includes("timeout")) {
      message = "System interface request timeout";
    }
    else if (message.includes("Request failed with status code")) {
      message = "System interface" + message.substr(message.length - 3) + "abnormal";
    }
    Notify(
      { type: 'warning', message: message}
      )
    return Promise.reject(error)
  }
)

export default service;
