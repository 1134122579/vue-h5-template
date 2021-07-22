/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views/index/index')
  },
  {
    path: '/about',
    component: () => import('@/views/layouts/index'),
    meta: {
      title: '关于我们',
      keepAlive: false
    },
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/about/index'),
        meta: {
          title: '关于我们',
          keepAlive: false
        }
      },
      {
        path: '/culture',
        name: 'Culture',
        component: () => import('@/views/culture/index'),
        meta: {
          title: '企业文化',
          keepAlive: false
        }
      },
      {
        path: '/demo',
        name: 'Demo',
        component: () => import('@/views/demo/index'),
        meta: {
          title: '案例展示',
          keepAlive: false
        }
      },
      {
        path: '/contact',
        name: 'Contact',
        component: () => import('@/views/contact/index'),
        meta: {
          title: '联系我们',
          keepAlive: false
        }
      },

    ]
  },
  {
    path: '/demohome',
    name: 'Demohome',
    component: () => import('@/views/demo/home')
  },
  {
    path: '/AboutContent',
    name: 'AboutContent',
    component: () => import('@/views/AboutContent/index')
  },
  {
    path: '/DemoContent',
    name: 'DemoContent',
    component: () => import('@/views/DemoContent/index')
  },
  {
    path: '*',
    redirect: '/',
    // hidden: true
  }
]
