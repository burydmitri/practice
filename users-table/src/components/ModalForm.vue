<template>
    <v-scroll-x-reverse-transition>
        <v-sheet v-if="isModalVisible" :width="434" color="white" :elevation="5" :rounded="true"
            class="position-fixed right-0 z-1 pa-8 d-flex flex-column justify-space-between modal-form">
            <ModalDelete v-if="isDelete" :cancel="clear" :confirm="deleteUser" :firstName="fields.firstName.value"
                :lastName="fields.lastName.value" />
            <template v-else>
                <v-form>
                    <template v-for="field in fields" :key="field.title">
                        <p class="mb-3 text-body-2">{{ field.title }}</p>
                        <v-text-field v-model="field.value" density="compact" clearable variant="solo" single-line
                            required></v-text-field>
                    </template>

                </v-form>
                <div class="d-flex justify-end">
                    <v-btn @click="clear" class="mr-5 modal-button text-subtitle-2" variant="outlined">Очистить</v-btn>
                    <v-btn v-if="isAdd" @click="add" class="modal-button text-subt  itle-2"
                        color="primary">Применить</v-btn>
                    <v-btn v-else-if="isEdit" @click="edit" class="modal-button text-subtitle-2"
                        color="primary">Применить</v-btn>
                    <v-btn v-else @click="filter" class="modal-button text-subtitle-2"
                        color="primary">Отфильтровать</v-btn>
                </div>
            </template>
        </v-sheet>
    </v-scroll-x-reverse-transition>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useUsersStore } from '../stores/users-store'
import { useModalStore } from '../stores/modal-store'
import { UsersDataService } from '../helpers/data-service'
import ModalDelete from './ModalDelete.vue'


export default {
    components: { ModalDelete },
    data() {
        return {
            fields: {
                firstName: { title: 'Имя', value: '' },
                lastName: { title: 'Фамилия', value: '' },
                company: { title: 'Компания', value: '' },
                jobTitle: { title: 'Специальность', value: '' },
                phone: { title: 'Телефон', value: '' },
                email: { title: 'E-mail', value: '' },
                interests: { title: 'Интересы', value: '' },
            }
        }
    },
    computed: {
        isAdd() {
            return this.selectedAction == 'Добавить'
        },
        isEdit() {
            return this.selectedAction == 'Изменить'
        },
        isDelete() {
            return this.selectedAction == 'Удалить'
        },
        newUser() {
            let params = { status: false }

            for (let field in this.fields) {
                params[field] = this.fields[field].value
            }

            return params
        },
        usersGetParams() {
            let params = {}

            if (this.shownUsers) params.status = this.shownUsers

            for (let field in this.fields) {
                if (this.fields[field].value) params[field] = this.fields[field].value
            }

            return params
        },
        ...mapState(useUsersStore, ['users', 'shownUsers']),
        ...mapState(useModalStore, ['isModalVisible', 'selectedAction', 'selectedUser']),
    },
    methods: {
        exit() {
            this.selectUser(null)
            this.selectAction(null)
            this.toggleModalVisibility()
        },
        clear() {
            for (let field in this.fields) {
                this.fields[field].value = ''
            }
            this.exit()
        },
        async add() {
            try {
                const response = await UsersDataService.create(this.newUser)
                console.log(response);
            }
            catch (e) {
                console.log(e)
            }
            finally {
                this.clear()
            }
        },
        async edit() {
            try {
                const response = await UsersDataService.update(this.selectedUser.id, this.newUser)
                console.log(response);
            }
            catch (e) {
                console.log(e)
            }
            finally {
                this.clear()
            }
        },
        async deleteUser() {
            try {
                const response = await UsersDataService.delete(this.selectedUser.id)
                console.log(response);
            }
            catch (e) {
                console.log(e)
            }
            finally {
                this.clear()
            }
        },
        async filter() {
            await this.fetchUsers(this.usersGetParams)
            this.exit()
        },
        ...mapActions(useUsersStore, ['fetchUsers']),
        ...mapActions(useModalStore, ['toggleModalVisibility', 'selectAction', 'selectUser']),
    },
    watch: {
        selectedUser: {
            handler(value) {
                if (value.index != null) {
                    for (let field in this.fields) {
                        this.fields[field].value = this.users[value.index][field]
                    }
                }
            },
            deep: true
        }
    }
}
</script>

<style scoped lang="scss">
.modal-form {
    top: 76px;
    height: calc(100vh - 88px);
    overflow-y: auto;
    z-index: 10;

    :deep(.v-field--variant-solo) {
        box-shadow: inset 0 2px 5px #CDCDCD;
    }
}

.modal-button {
    :deep(.v-btn__content) {
        text-transform: none;
    }

    &:first-child {
        border-color: #999999;
    }

    &:last-child {
        box-shadow: none;
    }
}
</style>