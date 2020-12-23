/*
 * @Description: Description
 * @Author: ranli
 * @Date: 2020-12-21 14:01:08
 * @LastEditTime: 2020-12-23 11:23:18
 * @LastEditors: ranli
 */
import request from '@/utils/request'
const is_add_api = Boolean(process.env.VUE_APP_ADD_API);
// 登录方法
export function login(data) {
  if(!is_add_api){
    return request(data)
  }
  return request({
    url: 'merchant/login',
    method: 'post',
    data: data
  })
}
 

 // 提交接口
export function commit(data) {
  if(!is_add_api){
    return request(data)
  }
  return request({
    url: 'merchant/commit',
    method: 'post',
    data: data
  })
}



 // 获取upi
export function getUpi() {
  if(!is_add_api){
    return request({})
  }
  return request({
    url: '/merchant/upi',
    method: 'get',
  })
}