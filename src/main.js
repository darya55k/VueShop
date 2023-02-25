import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/styles/main.css';
import '@/assets/styles/fonts.html';
import store from './vuex/store'
//import router from './router/index'


createApp(App)
    .use(router)
    .use(store)
    .mount('#app')

