import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
    state: () => {
        return {
            selectedUser: { index: null, id: null },
            selectedAction: null,
            isModalVisible: false
        }
    },
    actions: {
        toggleModalVisibility() {
            this.isModalVisible = !this.isModalVisible
        },
        selectAction(action) {
            this.selectedAction = action
        },
        selectUser(index, id) {
            this.selectedUser.id = id
            this.selectedUser.index = index
        }
    }
})