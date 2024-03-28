<script setup>
    import { RouterLink, useRouter } from 'vue-router';
    import { ref, watch, inject, computed, onMounted } from 'vue';
    import { useStore } from 'vuex';
    import auth from '../../util/getToken';

    const name = ref('');
    const axios = inject('axios');
    let resetToken = ref('');
    const store = useStore();
    const forgetClick = ref(false);
    const router = useRouter();

    async function redirect() {
        router.push({ path: `/reset/${name.value}/${resetToken}` });
    }
    
    async function forget(event) {
        await axios.post("http://localhost:8000/forget", { name: name.value })
        .then(res => resetToken = res.data);

        forgetClick.value = true;

        await store.dispatch('resetToken', resetToken);

    };

    onMounted(() => {
        let token = auth.getToken();
        if(token !== '' && token !== null && token !== 'null')
            window.location.href = '/dashboard';
    });

</script>

<template>
    <div class="container">
        <div class="box">
            <div class="title">Forget Password</div>
            <div class="form">
               <label style="color: white">Name:</label>
               <input type="text" v-model="name"/>
               <span class="error" v-if="!name">
                {{ !name && 'Name is required' }}
               </span>
            </div>
            <div class="form">
                <button class="login-button" @click="forget">
                    Forget Password
                </button>
            </div>
            <div class="redirectpwd" v-if="forgetClick">
                Rrequest has successfully sent! 
                <div @click="redirect">Please redirect to rest password</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        background: linear-gradient(45deg, #000000, #000023);
    }
    .redirectpwd {
        cursor: pointer;
        color: green;
    }
    .error {
        color: rgba(150,0,0,0.8); 
    }
    .box {
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 30px;
    }
    .title {
        font-size: 24px;
        font-style:italic;
        color: rgba(200,200,200);
    }

    .form {
        display: flex;
        flex-direction: column;
        align-items:flex-start;
        width: 100%;
    }

    input {
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        background-color: rgba(200,200,200,0.1);
        color: white;
        border-color: rgba(255,255,255,0.2);
        outline: none;
    }

    .login-button {
        width: 100%;
        background-color: green;
        color: white;
    }
</style>