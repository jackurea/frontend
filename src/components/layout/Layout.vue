<script setup>
    import { RouterView } from 'vue-router';
    import Header from './Header.vue';
    import Sidebar from './Sidebar.vue';

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
    }
</style>