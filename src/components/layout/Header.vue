<script setup>
    import dropDown from '@/util/dropDown';

</script>

<template>
    <div class="header-container">
        <div class="title">
            LaraVue Site
        </div>
        <div class="tool">
            <div class="icon">
                <img src='@/assets/alert.svg' width="30" height="30"/>
            </div>
            <div class="icon" id="user" @click="dropDown.showUserDropDown">
                <img src='@/assets/user.svg' width="30" height="30"/>
            </div>
            <div class="icon" id="more" @click="dropDown.showSettingDropDown">
                <img src='@/assets/more.svg' width="30" height="30"/>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .header-container {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 10px 20px 10px 20px;
        background: rgb(30,30,60);
        border-radius: 5px;
    }

    .title {
        font-size: 32px;
        font-style: italic;
        color: white;
    }

    .tool {
        position: relative;
        display: flex;
        gap: 15px;
        margin-right: 20px;
    }

    .tool::after{
        position: relative;
    }

    .icon:hover {
        background: rgba(100,100,250,1);
    }

    .icon {
        position: relative;
        padding: 10px;
        border-radius: 10px;
        border-width:5px;
        background: rgba(100,100,200,0.7);
    }

    .icon::after {
        position:absolute;
        content: "";
        top: 0;
        right: 0;
        
        width: 50px;
        height: 50px;
        background-color: rgba(100,100,255,0.2);
        filter:blur(5px);
    }
</style>