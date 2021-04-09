import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import HomePage from '../components/HomePage'
import ProfilRoute from '../components/Profil/ProfilRouter'
import LoginRoute from '../components/Login/LogRouter'
import MessageRoute from '../components/Message/MessageRouter'
import GmapsRoute from '../components/Gmaps/GmapsRouter'

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
        path: '/panier',
        name : '',
        component: HomePage
    }
]

const routes = baseRoutes.concat(ProfilRoute, LoginRoute, MessageRoute, GmapsRoute)

export default new Router({
    routes
})