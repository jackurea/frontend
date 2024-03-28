<script setup>
    import { inject, computed, watch } from 'vue';
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router';

    const store = useStore();
    const router = useRouter();

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