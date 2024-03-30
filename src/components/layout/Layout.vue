<script setup>
    import { onMounted } from 'vue';
    import { RouterView, useRouter } from 'vue-router';
    import Header from './Header.vue';
    import Sidebar from './Sidebar.vue';

    import auth from '../../util/getToken';

    const router = useRouter();
        
    onMounted(() => {
        let token = auth.getToken();
        if(token === '' || token === null || token === 'null')
            router.push({ path: '/login' });
    });
    
</script>

<template>
    <div class="container">
        <Header />
        <div class="wrapper">
            <Sidebar />
            <RouterView></RouterView>
        </div>
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        background: linear-gradient(45deg, #000000, #000023);
    }

    .wrapper {
        display: flex;
        flex-direction: row;
        height: 100%;
    }
</style>