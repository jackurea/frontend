<script setup>
    import Alert from '../../assets/alert.svg';
    import User from '../../assets/user.svg';
    import More from '../../assets/more.svg';

</script>

<template>
    <div class="container">
        <div class="title">
            LaraVue Site
        </div>
        <div class="tool">
            <div class="icon">
                <Alert />
            </div>
            <div class="icon">
                <User />
            </div>
            <div class="icon">
                <More />
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container {
        display: flex;
        justify-content: space-around;
        width: 100%;
        padding: 30px;
        background: rgb(100,100,200)
    }

    .title {
        font-size: 24px;
        font-style: italic;
        line-height: 28px;
        color: white;
    }

    .tool {
        display: flex;
        gap: 15px;
    }

    .icon {
        width: 50px;
        height: 50px;
        border-radius: 5px;
        border-color:beige;
        box-shadow: 1px 1px 1px blue;
        background: white;
    }
</style>