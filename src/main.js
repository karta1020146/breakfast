import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'animate.css';
import AOS from "aos";
import "aos/dist/aos.css";
import '@/assets/style/global.scss'
const app = createApp(App)
AOS.init({ })
app.use(createPinia())
app.use(router)

app.mount('#app')
