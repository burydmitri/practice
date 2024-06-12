<template>
    <v-navigation-drawer 
        :width="300"
        elevation="4"
        class="px-7 py-8" 
    >
    <v-list>
        <slot></slot>
      </v-list>
    </v-navigation-drawer>
</template>