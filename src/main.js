// import { createApp } from "vue";
import { createApp } from 'vue'
import router from './router'
import authConfig from '../auth_config.json'
import { setupAuth } from './auth'
import store from "./store";

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app
import App from "@/App.vue";

function callbackRedirect(appState) {
    router.push(
        appState && appState.targetUrl
        ? appState.targetUrl
        : '/admin/dashboard'
        );
    }
    
setupAuth(authConfig, callbackRedirect).then((auth) => {
    createApp(App)
        .use(auth)
        .use(router)
        .use(store)
        .mount("#app")
    // App.use(auth).mount('#app')
})
