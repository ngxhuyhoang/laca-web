import Vue from 'vue'

const components = {
  AppNavbar: () => import('../..\\components\\app-navbar.vue' /* webpackChunkName: "components/app-navbar" */).then(c => c.default || c),
  AppSidebar: () => import('../..\\components\\app-sidebar.vue' /* webpackChunkName: "components/app-sidebar" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
