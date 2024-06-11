<template>
    <Header />

    <HomeSidebar />

    <Main>
        <slot></slot>
    </Main>
</template>

<script setup>
import Main from '../components/Main.vue'
import Header from '../components/Header.vue'
import HomeSidebar from '../components/HomeSidebar.vue'
</script>