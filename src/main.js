// import { createApp } from "vue";
import { createApp } from 'vue'
import router from './router'


// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind.css";

// mouting point for the whole app

import App from "@/App.vue";

createApp(App).use(router).mount("#app");

