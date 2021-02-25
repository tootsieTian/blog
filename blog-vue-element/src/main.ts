import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css'
const app = createApp(App);
app.use(store);
// 挂载路由
app.use(router);
app.use(ElementPlus);
app.mount('#app');
