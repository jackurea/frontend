<script setup>
    import { defineProps, inject } from 'vue';

    const name = defineProps(['info']);

</script>
<template>
    <v-dialog style="width: 400px;">
        <template v-slot:activator="{ props: activatorProps }">
            <v-btn
            v-bind="activatorProps"
            text="View"
            class="view-button"
            ></v-btn>
        </template>

        <template v-slot:default="{ isActive }">
            <v-card 
                title="" 
                style=" width: 400px !important; background: rgba(0,0,50,0.3); color: white; box-shadow: 0 2px 24px 10px rgba(16, 84, 231, 0.2),0 4px 5px 0 rgba(60,60,60,.14),0 1px 10px 0 rgba(60,60,60,.12)">
                <v-card-text style="display: flex; flex-direction:column; align-items:center; gap: 20px; padding: 40px; border-radius: 20px; white-space: nowrap; color: rgb(250,250,250,0.7); font-size: 22px; font-style: italic;">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="100">
                            <path fill="rgba(120,120,120,0.7)" d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z">
                            </path>
                        </svg>        
                    </div>
                    <div style="display: flex; width: 100%; align-items:flex-start; gap: 60px; color:rgba(120,120,120,0.9)"> 
                        <div>Name:</div>
                        <div>{{ name.info.name }}</div>
                    </div>
                    <div style="display: flex; width: 100%; align-items:flex-start; gap: 60px; color:rgba(120,120,120,0.9)">
                            <div>Role:</div>
                            <div>{{ name.info.role }}</div>
                    </div>
                </v-card-text>
            </v-card>
        </template>
        </v-dialog>
</template>

<style scoped>
    .view-button {
        padding: 10px;
        background-color: rgba(0,128,0,0.4);
        color: white;
        outline: none;
        border-radius: 10px;
        cursor: pointer;
    }

    .view-button:hover {
        background-color: rgba(0,128,0,0.6);
    }

</style>