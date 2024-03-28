<script setup>
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';

    import Dashboard from '../../assets/dashboard.svg';
    import Setting from '../../assets/setting.svg';
    import Email from '../../assets/email.svg';
    import User from '../../assets/user.svg';

</script>

<template>
    <div class="sidebar-container">
        <div class="menu">
            <div class="part1">
                <RouterLink to="/dashboard">
                    <div class="item">
                        <img src='@/assets/dashboard.svg' width="20" height="20"/>
                        Dashboard
                    </div>
                </RouterLink>
                <RouterLink to="/mail">
                    <div class="item">
                        <img src='@/assets/email.svg' width="20" height="20"/>
                        Email
                    </div>
                </RouterLink>
            </div>
            <div class="part2">
                <RouterLink to="/user/view">
                    <div class="item">
                        <img src='@/assets/user.svg' width="20" height="20"/>
                        User
                    </div>
                </RouterLink>
                <RouterLink to="/setting">
                    <div class="item">
                        <img src='@/assets/setting.svg' width="20" height="20"/>
                        Settings
                    </div>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style>
    .sidebar-container {
        display: flex;
        align-items: flex-start;
        width: 250px;
        padding: 10px;
        background: rgba(10,10,30,0.8)
    }

    .menu {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
    }

    .item {
        padding: 10px;
        border-radius: 10px;
        border-color:beige;
        color: white;
        font-style:italic;
        font-size: 16px;
    }
</style>