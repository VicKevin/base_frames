import Vue from 'vue'
import { ACCESS_TOKEN, USER_INFO } from '@/store/mutation-types'
import { login, getCode, register } from '@/api/login' // 登录 获取验证码 注册


const user = {
  state: {
    token: '',
    info: {}
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_INFO: (state, info) => {
      state.info = info
    }
  },

  actions: {
    // 登录
    Login ({ commit }, params) {
      return new Promise((resolve, reject) => {
        login(params).then(res => {
          const result = res.data
          Vue.ls.set(ACCESS_TOKEN, result.access_token, 7 * 24 * 60 * 60 * 1000)
          Vue.ls.set(USER_INFO, result.userinfo, 7 * 24 * 60 * 60 * 1000)
          commit('SET_TOKEN', result.access_token)
          commit('SET_INFO', result.userinfo)
          resolve(result)
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 获取验证码
    // eslint-disable-next-line no-unused-vars
    GetCode ({ commit }, params) {
      return new Promise((resolve, reject) => {
        getCode(params).then(res => {
          if (res.code === 200) {
            resolve(res.data)
          } else {
            reject(res)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },
    GetUser ({ commit }) {
      commit('SET_INFO', Vue.ls.get(USER_INFO))
    },
    // 注册
    Register ({ commit }, params) {
      return new Promise((resolve, reject) => {
        register(params).then(res => {
          const result = res.data
          Vue.ls.set(ACCESS_TOKEN, result.access_token, 7 * 24 * 60 * 60 * 1000)
          Vue.ls.set(USER_INFO, result.userinfo, 7 * 24 * 60 * 60 * 1000)
          commit('SET_TOKEN', result.access_token)
          commit('SET_INFO', result.userinfo)
          resolve(result)
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}

export default user
