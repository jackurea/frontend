<script setup>
    import { RouterLink, useRouter } from 'vue-router';
    import { ref, watch, inject } from 'vue';

    const name = ref('');
    const pwd = ref('');
    const confirm = ref('');
    const axios = inject('axios');
    const router = useRouter();

    async function login(event) {
        let status;
        await axios.post("http://localhost:8000/register", { name: name.value, password: pwd.value })
        .then(res => status = res.data)
        if(status == "OK")
            router.push({ path: '/login' });

    };

</script>

<template>
    <div class="container">
        <div class="box">
            <div class="title">Register</div>
            <div class="form">
               <label style="color: white">Name:</label>
               <input type="text" v-model="name"/>
               <span class="error" v-if="!name">
                {{ !pwd && 'Name is required' }}
               </span>
            </div>
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
            <div class="form">
                <button class="login-button" @click="login">
                    Register
                </button>
            </div>
            <div class="form">
                <RouterLink to="/login">Already have an account? Please login!</RouterLink>
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