import './assets/main.css'

import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'

import App from './App.vue'
import Intro from './pages/Intro.vue'
import Auth from './pages/Auth.vue'

import { createI18n } from 'vue-i18n'
import i18n  from "./i18n.js"

const routes = [
  { path: '/',   component: Intro },
  { path: '/auth',   component: Auth },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App);

// const i18n = createI18n({
//   legacy: false,
//   locale: 'ru',
//   fallbackLocale: 'ru',
//   messages: {
//     en: {
//       title: "title"
//     },
//     ru: {
//       title: "тайтл"
//     }
//   }
// })


app
.use(router)
.use(i18n)



app.mount('#app')