<template>
    <v-data-table :items-per-page="this.itemsPerPage" :headers="this.attributes" :items="this.users"
        :loading="this.loading" itemsPerPageText="Количество элементов на странице:"
        class="d-flex flex-column justify-space-between home-table"
        @="isUsersClickable ? { 'click:row': handleClick } : {}">
        <template v-slot:item.status="{ value }">
            <v-icon v-if="value" icon="mdi-cloud-check-variant" color="primary" />
            <v-icon v-else icon="mdi-cloud-alert" color="error" />
        </template>
    </v-data-table>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useModalStore } from '../stores/modal-store'
export default {
    props: {
        users: Array,
        loading: Boolean,
        shownUsers: String
    },
    data() {
        return {
            itemsPerPage: 3,
            attributes: [
                { title: 'Имя', align: 'start', key: 'firstName' },
                { title: 'Фамилия', align: 'start', key: 'lastName' },
                { title: 'Компания', align: 'start', key: 'company' },
                { title: 'Специальность', align: 'start', key: 'jobTitle' },
                { title: 'Телефон', align: 'start', key: 'phone' },
                { title: 'E-mail', align: 'start', key: 'email' },
                { title: 'Интересы', align: 'start', key: 'interests' },
            ],
        }
    },
    computed: {
        isUsersClickable() {
            if (this.selectedAction == 'Изменить' || this.selectedAction == 'Удалить' && !this.selectedUser.id) return true
            return false
        },
        ...mapState(useModalStore, ['selectedAction', 'selectedUser']),
    },
    methods: {
        ...mapActions(useModalStore, ['selectUser', 'selectAction', 'toggleModalVisibility']),
        handleClick(e, row) {
            this.selectUser(row.index, row.item.id)
            this.toggleModalVisibility()
        }
    },
    watch: {
        shownUsers(value, oldValue) {
            if (!value) {
                this.attributes.unshift({ title: 'Статус', align: 'start', key: 'status' })
            }
            if (!oldValue) {
                this.attributes.shift()
            }
        }
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