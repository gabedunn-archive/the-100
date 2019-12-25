import Vue from 'vue'
import VuePlyr from 'vue-plyr'
import App from './App.vue'
import router from './router'
import '@/assets/css/tailwind.css'
import VModal from 'vue-js-modal'

Vue.config.productionTip = false

Vue.use(VModal)
Vue.use(VuePlyr)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
