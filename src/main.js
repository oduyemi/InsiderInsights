import { createApp } from 'vue';
import App from './App.vue';
import "./index.css";
import "animate.css";
import HomePage from "./pages/Home.vue";
import LoginPage from "./pages/Login.vue";
import RegisterPage from "./pages/Register.vue";
import { createRouter, createWebHistory } from 'vue-router';




const routes = [
    {
        path: "/", 
        component: HomePage,
    },
    {
        path: "/login", 
        component: LoginPage,
    },
    {
        path: "/register", 
        component: RegisterPage,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,

});

const app = createApp(App);
app.use(router)
app.mount('#app')
