import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import HomePage from '../components/HomePage'
import ProfilRoute from '../components/Profil/ProfilRouter'
import LoginRoute from '../components/Login/LogRouter'
import MessageRoute from '../components/Message/MessageRouter'

const baseRoutes = [
    {
        path: '/',
        name : 'homepage',
        component: HomePage
    },
    {
        path: '/catalogue',
        name : '',
        component: HomePage
    },
    {
        path: '/map',
        name : '',
        component: HomePage
    },
    {
        path: '/panier',
        name : '',
        component: HomePage
    }
]

const routes = baseRoutes.concat(ProfilRoute, LoginRoute, MessageRoute)

export default new Router({
    routes
})