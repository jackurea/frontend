<script setup>
    import { defineProps, defineEmits, inject } from 'vue';

    const axios = inject('axios');
    const props = defineProps(['name']);
    const emit = defineEmits();

    async function deleteUser() {
        let status;
        await axios.delete(`http://localhost:8000/delete/${props.name}`)
              .then(res => status = res.data);
        emit("delete", props.name);
        console.log(`>>>>delete user ${props.name}`, status);
    }

</script>
<template>
    <v-dialog style="width: 400px;">

        <template v-slot:activator="{ props: activatorProps }">
            <v-btn
            v-bind="activatorProps"
            text="Delete"
            class="delete-button"
            ></v-btn>
        </template>

        <template v-slot:default="{ isActive }">
            <v-card 
                title="" 
                style=" width: max-content !important; border-radius:30px; padding: 10px; background:  linear-gradient(45deg, #000020, #000020); color: white; box-shadow: 0 2px 24px 10px rgba(16, 124, 150, 0.3),0 4px 10px 5px rgba(60,60,200,.14),0 1px 10px 0 rgba(60,60,60,.12)"
            >
                <v-card-text style="white-space: nowrap; color: rgb(250,250,250,0.7); font-size: 22px; font-style: italic;">
                    Are you sure to delete this user?
                </v-card-text>

                <v-card-actions style="display: flex; justify-content: center;">
                    <v-btn
                        text="Yes"
                        style="outline: none; font-style: italic; background: rgba(30,100,30, 0.7)"
                        @click="() => { deleteUser(); isActive.value = false; } "
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

    .delete-button:hover {
        background-color: rgb(128,0,0,0.6);
    }

    .delete-button {
        padding: 10px;
        background-color: rgb(128,0,0,0.4);
        color: white;
        outline: none;
        border-radius: 10px;
        cursor: pointer;
    }

</style>