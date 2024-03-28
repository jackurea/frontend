import { createApp, defineAsyncComponent } from 'vue'
import { createWebHistory, createRouter } from 'vue-router';
import { createStore } from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';

const Login = defineAsyncComponent(() => import('./components/auth/Login.vue'));
const Dashboard = defineAsyncComponent(() => import('./components/main/Dashboard.vue'));
const Layout = defineAsyncComponent(() => import('./components/layout/Layout.vue'));
const Register = defineAsyncComponent(() => import('./components/auth/Register.vue'));
const Setting = defineAsyncComponent(() => import('./components/setting/Setting.vue'));
const UserView = defineAsyncComponent(() => import('./components/user/View.vue'));
const UserEdit = defineAsyncComponent(() => import('./components/user/Edit.vue'));
const ResetPassword = defineAsyncComponent(() => import('./components/auth/ResetPassword.vue'));
const ForgetPassword = defineAsyncComponent(() => import('./components/auth/ForgetPassword.vue'));


import './style.css';
import App from './App.vue';

const store = createStore({
    state () {
        return {
            name: 'admin',
            email: '',
            fcm: '',
            role: '',
            accessToken: 'dafs21423'
        }
    },
    mutations: {
        store (state, { name, email, fcm, role, accessToken }) {
            state.name = name;
            state.email = email;
            state.fcm = fcm;
            state.role = role;
            state.accessToken = accessToken;
        }
    },
    actions: {
        store (context) {
            context.dispatch('store');
        }
    }
});

const router = createRouter({ 
    history: createWebHistory(),
    routes: [
        {
            path: '/', 
            component: Layout, 
            name: 'App',
            children: [
                {
                    path: 'dashboard',
                    component: Dashboard
                },
                {
                    path: 'setting',
                    component: Setting
                },
                {
                    path: 'user/view',
                    component: UserView
                },
                {
                    path: 'user/:id/edit',
                    component: UserEdit
                }
            ]
        },
        { path: '/login', component: Login, name: 'login'},
        { path: '/register', component: Register, name: 'register' },
        { path: '/forget', component: ForgetPassword, name: 'forget' },
        { path: '/reset/:token', component: ResetPassword, name: 'reset' }
    ]
});

router.beforeEach(( to, from, next )=> {
    if(to.name !== 'login' && to.name !== 'register' && to.name !== 'forgetpwd' && to.name !== 'resetpwd' && !store.state.accessToken) {
        next({
            path: 'login',
            replace: true
        });
    } else {
        next();
    }
});

const app = createApp(App)
    .use(store)
    .use(router);

app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios);
app.mount('#app');