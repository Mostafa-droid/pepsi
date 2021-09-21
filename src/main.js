import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap-icons/font/bootstrap-icons.css';
import store from './store'




createApp(App).use(store).use(router).mount('#app')
