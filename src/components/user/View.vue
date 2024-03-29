<script setup>
    import { RouterLink, useRouter } from 'vue-router';
    import { reactive, ref, watch, inject, onMounted, computed, nextTick } from 'vue';
    import { VueAwesomePaginate } from 'vue-awesome-paginate';

    import UserDelete from '@/dialog/UserDelete.vue';
    import UserEdit from '@/dialog/UserEdit.vue';
    import UserView from '@/dialog/UserView.vue';

    import url from '@/util/getUrl';

    let user = reactive([]);
    let paginateRef = ref(1);
    const axios = inject('axios');

    async function fetchUser(event) {
        await axios.get(`${url.getStageUrl()}\list`)
        .then(res => {
            res.data.forEach(ite => user.push(ite))
        });
    };

    onMounted(() => {
        fetchUser();
    });
</script>

<template>
    <div class="userview-container">
        <div class="userview-box">
            <div class="userview-title">
                UserView
            </div>
            <div class="userview-table">
                <div class="userview-wrapper" v-for="(item, index) in user" :key="index + 1">
                    <div class="userview-item">
                        <div style="padding: 10px; background: rgba(80,80,80,0.2); border-radius: 10px;">
                            {{ index + 1}}
                        </div>
                        <div style="display: flex; align-items: center; justify-content: center; width: 100px; background: rgba(80,80,80,0.2); border-radius: 10px;">
                            {{ item.name }}
                        </div>
                        <div style="display: flex; align-items: center; justify-content: center; width: 80px; padding: 10px; background: rgba(80,80,80,0.2); border-radius: 10px;">
                            {{ item.role }}
                        </div>
                        <div style="display: flex; gap: 5px;">
                            <UserView :info="item">
                            </UserView>
                            <UserEdit :info="item">
                            </UserEdit>
                            <UserDelete :name="item.name">
                            </UserDelete>
                        </div>
                    </div>
                </div>
                <vue-awesome-paginate
                    :total-items="user.length"
                    :items-per-page="5"
                    :max-page-shown="5"
                    v-model="paginateRef"
                />
            </div>      
        </div>
    </div>
</template>

<style scoped>
    .userview-container {
        width: 100%;
        height: 100%;
        padding: 30px;
    }
    .userview-box {
        display: flex;
        flex-direction: column;
        height: 100%;
        border-radius: 10px;
        padding: 10px;
    }
    .userview-title {
        font-size: 24px;
        font-style: italic;
        color: rgba(150,150,150);
        margin-bottom: 30px;
    }
    .userview-table {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 20px;
        background: rgba(60,60,60,0.1);
        border-radius: 20px;
        box-shadow: 0 2px 24px 10px rgba(16, 84, 231, 0.2),0 4px 5px 0 rgba(60,60,60,.14),0 1px 10px 0 rgba(60,60,60,.12)
    };
    .userview-wrapper {
        display: flex;
        flex-direction: column;
        padding: 20px;
        gap: 10px;
    }
    .userview-item:hover {
        background: rgba(150,150,150,0.1)
    }

    .userview-item {
        display: flex;
        justify-content: space-between;
        border-radius: 15px;
        padding: 10px;
        color: rgba(200,200,200,0.5);
        font-style:italic;
        background: rgba(50,50,50,0.1);
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

  .pagination-container {
    display: flex;
    justify-content: flex-end !important;
    column-gap: 10px;
   }
   
  .paginate-buttons {
    height: 40px;
    width: 40px;
    border-radius: 30px !important;
    cursor: pointer;
    background-color: rgb(170, 127, 127);
    border: 1px solid rgb(134, 88, 88);
    color: black;
  }
  .paginate-buttons:hover {
    background-color: #d8d8d8;
  }
  .active-page {
    background-color: #3498db;
    border: 1px solid #3498db;
    color: white;
  }
  .active-page:hover {
    background-color: #2988c8;
  }
      
</style>