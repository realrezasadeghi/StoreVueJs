import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocialSharing from 'vue-social-sharing'
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'swiper/css'

// instance
const app = createApp(App)
app.use(store)
app.use(router)
app.use(VueSocialSharing)
app.mount('#app')
