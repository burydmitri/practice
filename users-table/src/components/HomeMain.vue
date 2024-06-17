<template>
    <Main>
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
                            @click="selectAction(index)">
                            <v-list-item-title>{{ item }}</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-btn>
        </div>

        <v-data-table v-model:items-per-page="itemsPerPage" :headers="this.attributes" :items="this.users"
            :loading="this.loading" itemsPerPageText="Количество элементов на странице:"
            class="d-flex flex-column justify-space-between home-table">
            <template v-slot:item.status="{ value }">
                <v-icon v-if="value" icon="mdi-cloud-check-variant" color="primary" />
                <v-icon v-else icon="mdi-cloud-alert" color="error" />
            </template>
        </v-data-table>
    </Main>
</template>


<script>
import Main from './Main.vue'

import { mapState, mapActions } from 'pinia'
import { useUsersStore } from '../stores/users-store'

export default {
    components: { Main },
    data() {
        return {
            page: 1,
            attributes: ['Имя', 'Фамилия', 'Компания', 'Специальность', 'Телефон', 'E-mail', 'Интересы'],
            itemsPerPage: 3,
            loading: true,
            attributes: [
                { title: 'Имя', align: 'start', key: 'firstName' },
                { title: 'Фамилия', align: 'start', key: 'lastName' },
                { title: 'Компания', align: 'start', key: 'company' },
                { title: 'Специальность', align: 'start', key: 'jobTitle' },
                { title: 'Телефон', align: 'start', key: 'phone' },
                { title: 'E-mail', align: 'start', key: 'email' },
                { title: 'Интересы', align: 'start', key: 'interests' },
            ],
            actions: ['Добавить', 'Изменить', 'Удалить'],
            selectedAction: 0,
            amountOfElements: [10, 7, 5, 3],
        }
    },
    methods: {
        selectAction(i) {
            this.selectedAction = i
        },
        ...mapActions(useUsersStore, ['fetchUsers']),
        async getUsers() {
            this.loading = true
            await this.fetchUsers(this.usersGetParams)
            this.loading = false
        }
    },
    computed: {
        ...mapState(useUsersStore, ['users', 'shownUsers']),
        title() {
            switch (this.shownUsers) {
                case '': return 'Все'
                case 'true': return 'Обработанные'
                case 'false': return 'Не обработанные'
            }
        },
        usersGetParams() {
            let params = {};

            if (this.shownUsers) {
                params["status"] = this.shownUsers;
            }

            return params;
        }
    },
    watch: {
        itemsPerPage() {
            this.getUsers()
        },
        shownUsers(value, oldValue) {
            if (!value) {
                this.attributes.unshift({ title: 'Статус', align: 'start', key: 'status' })
            }
            if (!oldValue) {
                this.attributes.shift()
            }

            this.getUsers()
        }
    },
    mounted() {
        this.getUsers()
    },
}
</script>

<style scoped>
.home-table {
    min-height: calc(100% - 48px);
}

.home-table :deep(.v-data-table-footer) {
    font-size: 14px;
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
}

.home-table :deep(.v-pagination__first),
.home-table :deep(.v-pagination__last) {
    display: none;
}
</style>