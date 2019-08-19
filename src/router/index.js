import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Main from '../components/Main.vue'
import store from '../store/index'

Vue.use(VueRouter)


function requireAuth(to, from, next) {
    if (store.state.isAuthenticated) {
        next()
    } else {
        next({
            path: '/login'
        })
    }
}


const router = new VueRouter({
    routes: [
        {
            path: '/',
            //redirect: (to) => { return '/login' }
            redirect: '/login'
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/main',
            component: Main,
            beforeEnter: requireAuth
        }
    ]
})



export default router