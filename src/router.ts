import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Default from '@/layouts/Default.vue'
import store from "./store"

/** @type {import('vue-router').RouterOptions['routes']} */
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Default,
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('@/views/Home.vue')
            },
            {
                path: '/about',
                name: 'About',
                component: () => import('@/views/About.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeResolve( (to, from, next) => {
    store.UPDATE_MENU('close')
    next()
})

export default router
