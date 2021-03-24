export { default as AppDrawer } from '../../components/app-drawer.vue'
export { default as AppNavbar } from '../../components/app-navbar.vue'

export const LazyAppDrawer = import('../../components/app-drawer.vue' /* webpackChunkName: "components/app-drawer" */).then(c => c.default || c)
export const LazyAppNavbar = import('../../components/app-navbar.vue' /* webpackChunkName: "components/app-navbar" */).then(c => c.default || c)
