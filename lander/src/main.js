import { createApp } from 'vue';
import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import HomePage from './components/HomePage.vue';
import InstallationPage from "@/components/InstallationPage.vue";
import OverviewPage from "@/components/OverviewPage.vue";
import '@fortawesome/fontawesome-free/css/all.css'
import en from './locales/en.json';
import ru from './locales/ru.json';

function getBrowserLocale() {
    const browserLang = navigator.language || navigator.userLanguage;
    const baseLang = browserLang.split('-')[0];
    return ['en', 'ru'].includes(baseLang) ? baseLang : 'en';
}

const savedLocale = localStorage.getItem('velquorin-locale');
const defaultLocale = savedLocale || getBrowserLocale();

const i18n = createI18n({
    legacy: false,
    locale: defaultLocale,
    fallbackLocale: 'en',
    messages: { en, ru }
});

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', name: 'home', component: HomePage },
        { path: '/installation', name: 'installation', component: InstallationPage },
        { path: '/overview', name: 'overview', component: OverviewPage },
    ]
});

createApp(App).use(router).use(i18n).mount('#app');
