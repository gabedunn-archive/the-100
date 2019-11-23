import Vue from 'vue'
import VuePlyr from 'vue-plyr'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(VuePlyr)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
