<template>
    <div class="d-flex justify-space-between align-center mb-6">
        <div class="d-flex align-center">
            <h1 class="text-h6 mr-4">
                {{ title }}
            </h1>
            <v-btn @click="update" variant="flat" icon="mdi-reload" />
        </div>
        <v-btn class="font-weight-light text-subtitle-2 px-16" color="primary" variant="flat"
            append-icon="mdi-menu-down">
            Действия
            <v-menu activator="parent">
                <v-list>
                    <v-list-item v-for="(item, index) in actions" :key="index" 
                        @click="handleClick(item)">
                        <v-list-item-title>{{ item }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-btn>
    </div>
</template>

<script>
import { mapActions } from 'pinia'
import { useModalStore } from '../stores/modal-store'

export default {
    props: {
        title: String,
        update: Function
    },
    data() {
        return {
            actions: ['Добавить', 'Изменить', 'Удалить'],
        }
    },
    methods: {
        ...mapActions(useModalStore, ['toggleModalVisibility', 'selectAction']),
        handleClick(action) {
            this.selectAction(action)

            if (action == 'Добавить') this.toggleModalVisibility()
        },
    }
}
</script>