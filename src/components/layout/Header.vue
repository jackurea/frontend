<script setup>
    import Alert from '../../assets/alert.svg';
    import User from '../../assets/user.svg';
    import More from '../../assets/more.svg';

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
            <div class="icon">
                <img src='@/assets/user.svg' width="30" height="30"/>
            </div>
            <div class="icon">
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
        background: rgb(30,30,60)
    }

    .title {
        font-size: 32px;
        font-style: italic;
        color: white;
    }

    .tool {
        display: flex;
        gap: 15px;
        margin-right: 20px;
    }

    .icon {
        padding: 10px;
        border-radius: 10px;
        border-color:beige;
        box-shadow: 1px 1px 1px blue;
        background: white;
    }
</style>