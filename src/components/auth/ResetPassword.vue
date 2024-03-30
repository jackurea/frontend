<script setup>
    import { RouterLink, useRoute } from 'vue-router';
    import { ref, watch, inject, onMounted, reactive } from 'vue';
    import { useStore } from 'vuex';

    let status = ref(false);
    const confirm = ref('');
    const pwd = ref('');
    const axios = inject('axios');
    const route = useRoute();
    const store = useStore();

    function redirect() {
        window.location.href = '/login';
    }
    async function reset(event) {
        await axios.post("http://localhost:8000/reset", { name: route.params.name, password: pwd.value })
        .then(res => status.value = true );
    };

    onMounted(() => {
        let token = store.state.accessToken;
        if(token !== route.params.token)
            window.location.href = '/login';
    })

</script>

<template>
    <div class="container">
        <div class="title">
            Reset Password
        </div>
        <div class="box">
            <div class="form">
               <label style="color: white">Password:</label>
               <input type="password" v-model="pwd"/>
               <span class="error" v-if="!pwd">
                {{ !pwd && 'Password is required' }}
               </span>
            </div>
            <div class="form">
                <label style="color: white">Confirm:</label>
                <input type="password" v-model="confirm"/>
                <span class="error" v-if="confirm !== pwd">
                    {{ 'Password is not correct' }}
                </span>               
            </div>
            <div class="box">
                <div class="form">
                    <button class="login-button" @click="reset">
                        Reset Password 
                    </button>
                </div>
            </div>
            <div class="redirectlogin" v-show="status">
                Password has successfully changed! 
                <div @click="redirect">Please redirect to login</div>
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
    .redirectlogin {
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