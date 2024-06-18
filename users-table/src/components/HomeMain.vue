<template>
    <Main>
        <ModalCard />
        <HomeMainHeader :title="title" :update="getUsers"/>
        <HomeMainTable :users="users" :loading="loading" :shownUsers="shownUsers" />
    </Main>
</template>


<script>
import Main from './Main.vue'
import ModalCard from './ModalCard.vue'
import HomeMainTable from './HomeMainTable.vue'
import HomeMainHeader from './HomeMainHeader.vue'

import { mapState, mapActions } from 'pinia'
import { useUsersStore } from '../stores/users-store'

export default {
    components: { Main, HomeMainHeader, HomeMainTable, ModalCard },
    data() {
        return {
            loading: true,
        }
    },
    methods: {
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
        shownUsers() {
            this.getUsers()
        }
    },
    mounted() {
        this.getUsers()
    },
}
</script>