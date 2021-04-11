import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import * as VueGoogleMap from "vue2-google-maps"
import config from "../public/config.json"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(router);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(config)
Vue.use(VueGoogleMap, {
  load: {
    key: config.Google_map_api_key,
    libraries: 'places',
  },
  installComponents: true
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
