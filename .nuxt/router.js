import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _08ebea5b = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages/about/index" */))
const _e11b91e8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _18e744b2 = () => interopDefault(import('..\\pages\\auth\\login\\index.vue' /* webpackChunkName: "pages/auth/login/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _08ebea5b,
    name: "about___vi"
  }, {
    path: "/en",
    component: _e11b91e8,
    name: "index___en"
  }, {
    path: "/auth/login",
    component: _18e744b2,
    name: "auth-login___vi"
  }, {
    path: "/en/about",
    component: _08ebea5b,
    name: "about___en"
  }, {
    path: "/en/auth/login",
    component: _18e744b2,
    name: "auth-login___en"
  }, {
    path: "/",
    component: _e11b91e8,
    name: "index___vi"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
