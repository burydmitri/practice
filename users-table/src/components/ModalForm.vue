<template>
    <v-form>
        <template v-for="field in fields" :key="field.title">
            <p class="mb-3 text-body-2">{{ field.title }}</p>
            <v-text-field v-model="field.value" density="compact" clearable variant="solo" single-line
                required></v-text-field>
        </template>

    </v-form>
    <div class="d-flex justify-end">
        <v-btn @click="clear" class="mr-5 modal-button text-subtitle-2" variant="outlined">Очистить</v-btn>
        <v-btn v-if="isAdd" @click="add" class="modal-button text-subt  itle-2" color="primary">Применить</v-btn>
        <v-btn v-else-if="isEdit" @click="edit" class="modal-button text-subtitle-2" color="primary">Применить</v-btn>
        <v-btn v-else @click="filter" class="modal-button text-subtitle-2" color="primary">Отфильтровать</v-btn>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useModalStore } from '../stores/modal-store'

export default {
    props: {
        fields: Object,
        clear: Function,
        add: Function,
        edit: Function,
        filter: Function
    },
    computed: {
        isAdd() {
            return this.selectedAction == 'Добавить'
        },
        isEdit() {
            return this.selectedAction == 'Изменить'
        },
        ...mapState(useModalStore, ['selectedAction'])
    }
}
</script>