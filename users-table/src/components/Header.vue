<template>
    <v-app-bar 
        elevation="0" 
        color="primary"
    >
        <template v-slot:prepend>
            <v-app-bar-nav-icon class="ml-5"></v-app-bar-nav-icon>
        </template>

        <template v-slot:append>
            <v-btn icon="mdi-magnify" class="mr-5"></v-btn>
        </template>
    </v-app-bar>
</template>
