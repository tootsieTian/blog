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
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/admin/dashboard/Index.vue'),
    meta: {
      title: '仪表盘',
      requiresAuth: true,
    },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, form, next) => {
  if (to.matched.some(route => route.meta.requiresAuth)) {
    ElMessage.error("请先登录！");
    localStorage.getItem("Authorization") ? next() : next('/login');
  } else {
    next();
  }
})

export default router
