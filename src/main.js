import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

import IndexApp from './pages/IndexApp.vue'
import TomatoApp from './pages/TomatoApp.vue'
import TomatoOneApp from './pages/TomatoOneApp.vue'
import ContactApp from './pages/ContactApp.vue'

const routes = [
  { path: '/', component: IndexApp },
  { path: '/tomato', component: TomatoApp },
  { path: '/tomato-one', redirect: '/tomato' },
  { path: '/tomato-one/:id', component: TomatoOneApp },
  { path: '/contact', component: ContactApp }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

createApp(App).use(router).mount('#app')