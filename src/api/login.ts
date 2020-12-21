/*
 * @Description: Description
 * @Author: ranli
 * @Date: 2020-12-21 14:01:08
 * @LastEditTime: 2020-12-21 16:19:44
 * @LastEditors: ranli
 */
import request from '@/utils/request'

// 登录方法
export function login(data) {
  return request({
    url: 'merchant/login',
    method: 'post',
    data: data
  })
}
 

 // 提交接口
export function commit(data) {
  return request({
    url: 'merchant/commit',
    method: 'post',
    data: data
  })
}



 // 获取upi
export function getUpi() {
  return request({
    url: '/merchant/upi',
    method: 'get',
  })
}