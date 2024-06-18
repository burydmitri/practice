<template>
    <p class="mb-3 text-body-1">{{ `Вы точно хотите удалить пользователя ${firstName}
        ${lastName}?` }}
    </p>
    <div class="d-flex justify-end">
        <v-btn @click="cancel" class="mr-5 modal-button text-subtitle-2" variant="outlined">Нет</v-btn>
        <v-btn @click="confirm" class="modal-button text-subtitle-2" color="primary">Да</v-btn>
    </div>
</template>

<script>
export default {
    props: {
        cancel: Function,
        confirm: Function,
        firstName: String,
        lastName: String
    }
}
</script>