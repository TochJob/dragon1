import { createApp } from 'vue'
import App from './App.vue'
import PlusApp from '@/components/PlusApp.vue'
import '@/assets/css/style.scss'


createApp(App).component('plus-app', PlusApp)
createApp(App).mount('#app')
