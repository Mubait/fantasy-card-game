import './assets/main.css'

import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import App from './App.vue'

import Intro from './pages/Intro.vue'
import Auth from './pages/Auth.vue'
import RegNick from './pages/RegNick.vue'

import i18n  from "./i18n.js"

const routes = [
  { path: '/',   component: Intro },
  { path: '/auth',   component: Auth },
  { path: '/regnick',   component: RegNick },
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