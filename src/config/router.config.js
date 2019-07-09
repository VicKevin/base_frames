import { BasicLayout, BlankLayout } from '@/layouts'

export const constantRouterMap = [
  {
    path: '/',
    component: BasicLayout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/Home')
      },
      {
        path: '/me',
        name: 'me',
        meta: { title: '我的', keepAlive: true },
        component: () => import('@/views/me/Me')
      }
    ]
  },
  {
    path: '/user',
    component: BlankLayout,
    redirect: '/user/login',
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/user/Login')
      }
    ]
  },
  {
    path: '*',
    component: () => import('@/views/exception/404')
  }
]
