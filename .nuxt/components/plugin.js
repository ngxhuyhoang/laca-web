import Vue from 'vue'

const components = {
  AppDrawer: () => import('../../components/app-drawer.vue' /* webpackChunkName: "components/app-drawer" */).then(c => c.default || c),
  AppNavbar: () => import('../../components/app-navbar.vue' /* webpackChunkName: "components/app-navbar" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
