import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSocialSharing from 'vue-social-sharing'
import Toast from 'vue-toastification'
import globalComponents from './assets/configs/globalComponents'
import options from './assets/configs/toast'
import '@/assets/configs/style'
// instance
const app = createApp(App)
app.use(store)
app.use(router)
app.use(VueSocialSharing)
app.use(Toast, options)
// global componentes
globalComponents(app)
app.mount('#app')
