<template>
    <Sidebar>
        <v-list-item>
            <span class="text-h6">Профили</span>    
        </v-list-item>
        <v-list-item>
            <div class="d-flex align-center cursor-pointer">
                <v-icon color="primary" icon="mdi-checkbox-marked-circle"></v-icon>
                <span class="font-weight-light text-subtitle-2 ml-5">Все</span>
            </div>
        </v-list-item>
        <v-list-item>
            <div class="d-flex align-center cursor-pointer">
                <v-icon color="primary" icon="mdi-checkbox-marked-circle"></v-icon>
                <span class="font-weight-light text-subtitle-2 ml-5">Обработанные</span>
            </div>
        </v-list-item>
        <v-list-item>
            <div class="d-flex align-center cursor-pointer">
                <v-icon color="primary" icon="mdi-alert-circle"></v-icon>
                <span class="font-weight-light text-subtitle-2 ml-5">Не обработанные</span>
            </div>
        </v-list-item>
    </Sidebar>
</template>

<script setup>
    import Sidebar from './Sidebar.vue'
</script>