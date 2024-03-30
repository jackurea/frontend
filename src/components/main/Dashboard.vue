<script setup>
    import { inject, computed, watch, onMounted } from 'vue';
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router';

    const store = useStore();

</script>

<template>
    <div class="container">
        Welcome to Main Page
        {{ store.state.name }}
    </div>
</template>

<style scoped>
    .container {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>