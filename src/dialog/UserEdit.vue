<script setup>
    import { defineProps, inject } from 'vue';

    const axios = inject('axios');
    const name = defineProps('item');

    async function deleteUser() {
        let status;
        await axios.delete(`http://localhost:8000/delete/${name}`)
              .then(res => status = res.data);

        console.log(`>>>>delete user ${name}`, status);
        isActive.value = false;
    }

</script>
<template>
    <v-dialog style="width: 400px;">
        <template v-slot:activator="{ props: activatorProps }">
            <v-btn
            v-bind="activatorProps"
            text="Edit"
            class="edit-button"
            ></v-btn>
        </template>

        <template v-slot:default="{ isActive }">
            <v-card 
                title="Edit" 
                style=" width: max-content !important; background: rgba(100,140,150,0.3); color: white; box-shadow: 0 2px 24px 10px rgba(16, 84, 231, 0.2),0 4px 5px 0 rgba(60,60,60,.14),0 1px 10px 0 rgba(60,60,60,.12)">
            <v-card-text style="white-space: nowrap; color: rgb(250,50,50,0.7); font-size: 22px; font-style: italic;">
            </v-card-text>

            <v-card-actions style="display: flex; justify-content: center;">
                <v-btn
                    text="Save"
                    style="outline: none; font-style: italic; background: rgba(30,100,30, 0.7)"
                    @click="() => { saveUser(); isActive.value = false; }"
                ></v-btn>

                <v-btn
                    text="No"
                    style="outline: none; font-style: italic; background: rgba(30,30,30, 0.7)"
                    @click="isActive.value = false"
                ></v-btn>
            </v-card-actions>
            </v-card>
        </template>
        </v-dialog>
</template>

<style scoped>
    .edit-button:hover {
        background-color: #3498db50;
    }

    .edit-button {
        padding: 10px;
        background-color:#3498db30;
        color: white;
        outline: none;
        border-radius: 10px;
        cursor: pointer;
    }
</style>