<template>
    <div class="d-flex justify-space-between align-center mb-6">
        <div class="d-flex align-center">
            <h1 class="text-h6 mr-4">
                {{ this.title }}
            </h1>
            <v-btn @click="this.getUsers" variant="flat" icon="mdi-reload" />
        </div>
        <v-btn class="font-weight-light text-subtitle-2 px-16" color="primary" variant="flat"
            append-icon="mdi-menu-down">
            Действия
            <v-menu activator="parent">
                <v-list v-model="this.action">
                    <v-list-item v-for="(item, index) in this.actions" :key="index" :value="index"
                        @click="selectAction(item)">
                        <v-list-item-title>{{ item }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-btn>
    </div>
</template>

<script>

export default {
    props: {
        title: String
    },
    data() {
        return {
            selectedAction: null,
            actions: ['Добавить', 'Изменить', 'Удалить'],
        }
    },
    methods: {
        selectAction(str) {
            this.selectedAction = str
        },
    }
}
</script>