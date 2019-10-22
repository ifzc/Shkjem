import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let kejianrouter = new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('./views/News.vue'),
    },
    {
      path: '/newsdetails/:id',
      name: 'newsdetails',
      component: () => import('./views/NewsDetails.vue'),
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('./views/Product.vue'),
    },
    {
      path: '/case',
      name: 'case',
      component: () => import('./views/Case.vue')
    },
    {
      path: '/casedetails/:id',
      name: 'casedetails',
      component: () => import('./views/CaseDetails.vue')
    },
    {
      path: '/goin',
      name: 'goin',
      component: () => import('./views/GoIn.vue')
    },
    {
      path: '/download',
      name: 'download',
      component: () => import('./views/Download.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      meta: {
        requireAuth: true
      },
      component: () => import('./views/Admin.vue'),
      children: [{
          path: '/admin/user',
          name: 'user',
          component: () => import('./views/Admin/User.vue')
        },
        {
          path: '/admin/news',
          name: 'new',
          component: () => import('./views/Admin/News.vue')
        },
        {
          path: '/admin/cases',
          name: 'cases',
          component: () => import('./views/Admin/Cases.vue')
        },
        {
          path: '/admin/team',
          name: 'team',
          component: () => import('./views/Admin/Team.vue')
        },
        {
          path: '/admin/course',
          name: 'course',
          component: () => import('./views/Admin/Course.vue')
        },
        {
          path: '/admin/enterprise',
          name: 'enterprise',
          component: () => import('./views/Admin/Enterprise.vue')
        },
        {
          path: '/admin/honor',
          name: 'honor',
          component: () => import('./views/Admin/Honor.vue')
        },
        {
          path: '/admin/dictionary',
          name: 'dictionary',
          component: () => import('./views/Admin/Dictionary.vue')
        },
        {
          path: '/admin/page',
          name: 'page',
          component: () => import('./views/Admin/Page.vue')
        }
      ]
    }
  ]
})

// 判断是否需要登录权限 以及是否登录
kejianrouter.beforeEach((to, from, next) => {
  // 判断是否需要登录权限
  if (to.matched.some(res => res.meta.requireAuth)) {
    // 判断是否登录
    if (sessionStorage.getItem('token')) {
      next()
    } else {
      // 没登录则跳转到登录界面
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})

export default kejianrouter