<template>
    <v-scroll-x-reverse-transition>
        <v-sheet v-if="this.isModalVisible":width="434" color="white" :elevation="5"
            :rounded="true"
            class="h-100 position-absolute right-0 top-0 z-1 pa-8 d-flex flex-column justify-space-between modal-form">
            <v-form>
                <p class="mb-3 text-body-2">Имя</p>
                <v-text-field density="compact" :counter="20" clearable variant="solo" single-line
                    required></v-text-field>
                <p class="mb-3 text-body-2">Фамилия</p>
                <v-text-field density="compact" :counter="20" clearable variant="solo" single-line
                    required></v-text-field>
                <p class="mb-3 text-body-2">Компания</p>
                <v-text-field density="compact" :counter="20" clearable variant="solo" single-line
                    required></v-text-field>
                <p class="mb-3 text-body-2">Специальность</p>
                <v-text-field density="compact" :counter="20" clearable variant="solo" single-line
                    required></v-text-field>
                <p class="mb-3 text-body-2">Телефон</p>
                <v-text-field density="compact" :counter="20" clearable variant="solo" single-line
                    required></v-text-field>
                <p class="mb-3 text-body-2">E-mail</p>
                <v-text-field density="compact" :counter="20" clearable variant="solo" single-line
                    required></v-text-field>
                <p class="mb-3 text-body-2">Интересы</p>
                <v-text-field density="compact" :counter="20" clearable variant="solo" single-line
                    required></v-text-field>
            </v-form>
            <div class="d-flex justify-end">
                <v-btn class="mr-5 modal-button text-subtitle-2" variant="outlined">Очистить</v-btn>
                <v-btn class="modal-button text-subtitle-2" color="primary">Применить</v-btn>
            </div>
        </v-sheet>
    </v-scroll-x-reverse-transition>
</template>

<script>
import { mapState } from 'pinia'
import { useModalStore } from '../stores/modal-store'
export default {
    computed: {
        ...mapState(useModalStore, ['isModalVisible']),
    },
    mounted() {
        console.log(this.isModalVisible)
    }
}
</script>

<style scoped lang="scss">
.modal-form {
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