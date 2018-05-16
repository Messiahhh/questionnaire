import Vue from 'vue'
import router from './router'
import store from './store'
import Mint from 'mint-ui'
import VueCookie from 'vue-cookie'
import 'mint-ui/lib/style.css'
Vue.use(Mint)
Vue.use(VueCookie)
import App from './App.vue'

new Vue({
    store,
    router,
    render: h => h(App),
    components: {App}
}).$mount('#app')
