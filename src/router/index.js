import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import HomeRoute from '../components/Home/HomeRouter'
import ProfilRoute from '../components/Profil/ProfilRouter'
import LoginRoute from '../components/Login/LogRouter'
import MessageRoute from '../components/Message/MessageRouter'
import GmapsRoute from '../components/Gmaps/GmapsRouter'
import CatalogueRoute from '../components/Catalogue/CatalogueRouter'
import PanierRoute from '../components/Panier/PanierRouter'

const baseRoutes = []

const routes = baseRoutes.concat(HomeRoute, ProfilRoute, LoginRoute, MessageRoute, GmapsRoute, CatalogueRoute, PanierRoute)

export default new Router({
    routes
})