import Vue from 'vue'
import router from './router'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { ACCESS_TOKEN } from '@/store/mutation-types'

NProgress.configure({ showSpinner: false })

const whiteList = [ 'login' ]

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (Vue.ls.get(ACCESS_TOKEN)) {
    if (to.path === '/user/login') {
      next({ path: '/home' })
      NProgress.done()
    } else {
      const redirect = decodeURIComponent(from.query.redirect || to.path)
      if (to.path === redirect) {
        next()
      } else {
        next({ path: redirect })
      }
    }
  } else {
    if (whiteList.includes(to.name)) {
      next()
    } else {
      next({ path: '/user/login', query: { redirect: to.fullPath } })
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
