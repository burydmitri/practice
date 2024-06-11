<template>
    <Header />

    <Sidebar />

    <Main>
        <slot></slot>
    </Main>
</template>

<script setup>
import Main from '../components/Main.vue'
import Header from '../components/Header.vue'
import Sidebar from '../components/Sidebar.vue'
</script>