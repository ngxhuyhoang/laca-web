export { default as AppNavbar } from '../..\\components\\app-navbar.vue'
export { default as AppSidebar } from '../..\\components\\app-sidebar.vue'

export const LazyAppNavbar = import('../..\\components\\app-navbar.vue' /* webpackChunkName: "components/app-navbar" */).then(c => c.default || c)
export const LazyAppSidebar = import('../..\\components\\app-sidebar.vue' /* webpackChunkName: "components/app-sidebar" */).then(c => c.default || c)
