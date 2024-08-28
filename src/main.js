import './assets/style.css'
import './assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import PrimeVue from 'primevue/config';
import Lara from './presets/lara';      //import preset

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.use(PrimeVue, {
    unstyled: true,
    pt: Lara
})

app.mount('#app')
