<template>
    <Main>
        <div class="d-flex flex-column justify-space-between h-100">
            <div>
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

                <v-container class="table-grid-7 ">
                    <div class="mb-5">
                        <v-row class="mb-4">
                            <v-col v-if="!this.shownUsers" class="text-body-1 font-weight-bold">Стутас</v-col>
                            <v-col v-for="attribute of this.attributes" :key="attribute"
                                class="text-body-1 font-weight-bold">
                                {{ attribute }}
                            </v-col>
                        </v-row>
                        <v-divider />
                    </div>

                    <div v-for="user of this.users" :key="user.id" class="mb-5">
                        <v-row class="mb-6">
                            <v-col v-if="!this.shownUsers" class="text-body-2">
                                <v-icon v-if="user.status" icon="mdi-cloud-check-variant" color="primary" />
                                <v-icon v-else icon="mdi-cloud-alert" color="error" />
                            </v-col>
                            <v-col class="text-body-2">
                                {{ user.firstName }}
                            </v-col>
                            <v-col class="text-body-2">
                                {{ user.lastName }}
                            </v-col>
                            <v-col class="text-body-2">
                                {{ user.company }}
                            </v-col>
                            <v-col class="text-body-2">
                                {{ user.jobTitle }}
                            </v-col>
                            <v-col class="text-body-2">
                                {{ user.phone }}
                            </v-col>
                            <v-col class="text-body-2">
                                {{ user.email }}
                            </v-col>
                            <v-col class="text-body-2">
                                {{ user.interests }}
                            </v-col>
                        </v-row>
                        <v-divider />
                    </div>
                </v-container>
            </div>

            <div>
                <v-divider />
                <div class="d-flex align-center justify-end pt-8">
                    <span class="text-body-2 montserrat mr-7">Количество элементов на странице:</span>
                    <select v-model="this.limit" class="text-body-2 montserrat pr-3 my-select">
                        <option v-for="num in this.amountOfElements" :key="num" :value="num"
                            class="text-body-2 montserrat">{{ num }}</option>
                    </select>
                    <v-icon class="mr-7" color="#A0A0A0" icon="mdi-menu-down" />
                    <v-btn @click="prevPage" variant="text">
                        <v-icon color="#A0A0A0" icon="mdi-chevron-left" />
                    </v-btn>
                    <span class="text-body-2 montserrat">
                        {{ this.page }}
                    </span>
                    <v-btn @click="nextPage" variant="text">
                        <v-icon color="#A0A0A0" icon="mdi-chevron-right" />
                    </v-btn>
                </div>
            </div>
        </div>

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
            limit: 3,
            attributes: ['Имя', 'Фамилия', 'Компания', 'Специальность', 'Телефон', 'E-mail', 'Интересы'],
            amountOfElements: [10, 7, 5, 3],
            actions: ['Добавить', 'Изменить', 'Удалить'],
            selectedAction: 0
        }
    },
    methods: {
        nextPage() {
            this.page++
        },
        prevPage() {
            this.page--
        },
        selectAction(i) {
            this.selectedAction = i
        },
        ...mapActions(useUsersStore, ['fetchUsers']),
        getUsers() {
            this.fetchUsers(this.shownUsers, this.page, this.limit)
        }
    },
    computed: {
        ...mapState(useUsersStore, ['users', 'shownUsers']),
        title() {
            switch (this.shownUsers) {
                case '': return 'Все'
                case 'status=true': return 'Обработанные'
                case 'status=false': return 'Не обработанные'
            }
        }
    },
    watch: {
        page() {
            this.getUsers()
        },
        limit() {
            this.getUsers()
        },
        shownUsers() {
            this.getUsers()
        }
    },
    mounted() {
        this.getUsers()
    },
}
</script>