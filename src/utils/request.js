import Vue from 'vue'
import axios from 'axios'
import { VueAxios } from "./axios"
import message from 'ant-design-vue/es/message'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { objToStr } from './util'

axios.defaults.withCredentials = true

// 创建axios实例
const service = axios.create({
  baseURL: '',
  timeout: 6 * 1000
})

const err = (error) => {
  if (error.response) {
    const data = error.response.data
    if (error.response.status === 401) {
      message.error(data.message)
    }
  }
  return Promise.reject(error)
}

// 请求前的处理
service.interceptors.request.use(config => {
  if (config.method === 'get' && config.data) {
    config.url += '?' + objToStr(config.data || {})
  }
  const token = Vue.ls.get(ACCESS_TOKEN)
  if (token) {
    // 让每个请求携带自定义 token
    config.headers['User-Token'] = token
  }
  return config
}, err)

// 请求后的处理
service.interceptors.response.use((res) => {
  if (res.status === 200) {
    if (res.data.code === 200) {
      return Promise.resolve(res.data)
    }
    return Promise.reject(res.data)
  }
  return Promise.reject(res.data)
}, err)

const installer = {
  vm: {},
  install (Vue) {
    Vue.use(VueAxios, service)
  }
}

export {
  installer as VueAxios,
  service as axios
}
