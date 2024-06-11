<template>
    <v-app-bar 
        elevation="0" 
        color="primary"
    >
        <template v-slot:prepend>
            <v-app-bar-nav-icon class="ml-7"></v-app-bar-nav-icon>
        </template>

        <template v-slot:append>
            <v-btn icon="mdi-magnify" size="small" variant="flat" color="white" class="mr-7">
                <v-icon color="primary" />
            </v-btn>
        </template>
    </v-app-bar>
</template>
