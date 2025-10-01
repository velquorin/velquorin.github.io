import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import HomePage from './components/HomePage.vue';
import InstallationPage from "@/components/InstallationPage.vue";
import OverviewPage from "@/components/OverviewPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: HomePage },
        { path: '/installation', name: 'installation', component: InstallationPage },
        { path: '/overview', name: 'overview', component: OverviewPage },
    ]
});

createApp(App).use(router).mount('#app');
