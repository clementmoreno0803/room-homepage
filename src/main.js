import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSnap from 'vue-snap'
import 'vue-snap/dist/vue-snap.css'


createApp(App).use(store).use(router).use(VueSnap).mount('#app')