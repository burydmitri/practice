import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
    state: () => {
        return {
            isModalVisible: false
        }
    },
    actions: {
        toggleModalVisibility() {
            this.isModalVisible = !this.isModalVisible
        },
    }
})