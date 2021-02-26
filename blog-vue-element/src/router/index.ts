import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { ElMessage } from 'element-plus'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/admin/login/Index.vue'),
    meta: {
      title: '登录',
    }
  },
  {
    path: '/admin',
    name: "Admin",
    component: () => import('../views/admin/Index.vue'),
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('../views/admin/dashboard/Index.vue'),
        meta: {
          title: '仪表盘',
          requiresAuth: true,
        },
      },
      {
        path: '/article',
        name: 'Article',
        component: () => import('../views/admin/article/Index.vue'),
        meta: {
          title: '文章管理',
          requiresAuth: true,
        },
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, form, next) => {
//   if (to.matched.some(route => route.meta.requiresAuth)) {
//
//     localStorage.getItem("Authorization") ? next() : ()=>{ElMessage.error("请先登录！");next('/login')};
//   } else {
//     next();
//   }
// })

export default router
