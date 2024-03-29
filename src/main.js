import { createApp, defineAsyncComponent } from 'vue'
import { createWebHistory, createRouter } from 'vue-router';
import { createStore, useStore } from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { VueAwesomePaginate } from 'vue-awesome-paginate';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';


const Login = defineAsyncComponent(() => import('./components/auth/Login.vue'));
const Dashboard = defineAsyncComponent(() => import('./components/main/Dashboard.vue'));
const Layout = defineAsyncComponent(() => import('./components/layout/Layout.vue'));
const Register = defineAsyncComponent(() => import('./components/auth/Register.vue'));
const Setting = defineAsyncComponent(() => import('./components/setting/Setting.vue'));
const UserView = defineAsyncComponent(() => import('./components/user/View.vue'));
const UserEdit = defineAsyncComponent(() => import('./components/user/Edit.vue'));
const ResetPassword = defineAsyncComponent(() => import('./components/auth/ResetPassword.vue'));
const ForgetPassword = defineAsyncComponent(() => import('./components/auth/ForgetPassword.vue'));
const Mail = defineAsyncComponent(() => import('./components/email/Email.vue'));

import './style.css';
import 'vue-awesome-paginate/dist/style.css';
import 'vuetify/dist/vuetify.min.css';
import App from './App.vue';

const store = createStore({
    state: {
        name: 'admin',
        email: '',
        fcm: '',
        role: '',
        accessToken: ''
    },
    mutations: {
        store (state, { name, email, fcm, role, accessToken }) {
            state.name = name;
            state.email = email;
            state.fcm = fcm;
            state.role = role;
            state.accessToken = accessToken;
        },
        resetToken (state, resetToken) {
            state.accessToken = resetToken;
        } 
    },
    actions: {
        store (context) {
            context.commit('store');
        },
        resetToken ({commit, state}, resetToken) {
            commit('resetToken', resetToken);
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
                    path: 'mail',
                    component: Mail
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
        { path: '/reset/:name/:token', component: ResetPassword, name: 'reset' }
    ]
});

/*
router.beforeEach(( to, from, next )=> {
    if(to.name !== 'login' && to.name !== 'register' && to.name !== 'forget' && to.name !== 'reset' && !localStore.state.accessToken) {
        next({
            path: 'login',
            replace: true
        });
    } else {
        next();
    }
});
*/
const Vuetify = createVuetify({
    components,
    directives
});

const app = createApp(App)
    .use(router).use(store);
app.use(Vuetify);
app.use(VueAwesomePaginate);
app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios);
app.mount('#app');