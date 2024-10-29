import './assets/main.css'

import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'

import App from './App.vue'
import Intro from './pages/Intro.vue'
import Auth from './pages/Auth.vue'

const routes = [
  { path: '/',  component: Intro },
  { path: '/auth',  component: Auth },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App);

app.use(router)

app.mount('#app')